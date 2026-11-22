import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './db.js';
import { Enquiry, VALID_SECTORS, VALID_STAGES } from './models/Enquiry.js';
import { verifyPassword, signAdminToken, verifyAdminToken } from './auth.js';

// Resolve project root .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'prosync_admin_default_secret_key_change_me';
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'adminpassword123';

// 1. CORS security
const rawOrigins = process.env.CLIENT_ORIGINS || '*';
const allowedOrigins = rawOrigins
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow all origins when set to '*' or omitted (supports Vercel, Render, local dev)
      if (rawOrigins === '*' || allowedOrigins.includes('*') || !origin) {
        return callback(null, true);
      }
      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Blocked by CORS policy'));
    },
    credentials: true,
  })
);

// 2. Request body limit (50 KB)
app.use(express.json({ limit: '50kb' }));

// 3. Health check
app.get(['/api/health', '/health'], (req, res) => {
  res.json({ ok: true });
});

// Helper for cleaning mobile number: digits only, remove leading 91 or 0
function sanitizeMobile(input) {
  let clean = String(input || '').replace(/\D/g, '');
  if (clean.length === 12 && clean.startsWith('91')) {
    clean = clean.slice(2);
  } else if (clean.length === 11 && clean.startsWith('0')) {
    clean = clean.slice(1);
  }
  return clean;
}

// 4. Public POST /api/enquiries
app.post(['/api/enquiries', '/enquiries'], async (req, res) => {
  try {
    const {
      _gotcha,
      name,
      mobile,
      projectName,
      project_name,
      sector,
      location,
      estimatedCost,
      estimated_cost,
      fundingRequirement,
      funding_requirement,
      projectStage,
      project_stage,
      expectedStartDate,
      expected_start_date,
      briefDetails,
      brief_details,
      consent,
      pageSource,
      page_source,
    } = req.body;

    // Honeypot check: silently accept without saving
    if (_gotcha && String(_gotcha).trim().length > 0) {
      return res.status(200).json({ ok: true, message: 'Enquiry received successfully.' });
    }

    const trimmedName = String(name || '').trim();
    const finalProjectName = String(projectName || project_name || '').trim();
    const trimmedLocation = String(location || '').trim();
    const trimmedDetails = String(briefDetails || brief_details || '').trim();
    const cleanMobile = sanitizeMobile(mobile);
    const finalSector = String(sector || '').trim();
    const finalStage = String(projectStage || project_stage || '').trim();
    const finalStartDate = expectedStartDate || expected_start_date || null;
    const finalPageSource = String(pageSource || page_source || '/').trim();

    // Validation
    if (!trimmedName) {
      return res.status(400).json({ ok: false, error: 'Name is required.' });
    }
    if (trimmedName.length > 100) {
      return res.status(400).json({ ok: false, error: 'Name must be 100 characters or less.' });
    }

    if (!cleanMobile || !/^[6-9]\d{9}$/.test(cleanMobile)) {
      return res.status(400).json({
        ok: false,
        error: 'Please enter a valid 10-digit Indian mobile number starting with 6-9.',
      });
    }

    if (!finalProjectName) {
      return res.status(400).json({ ok: false, error: 'Business or project name is required.' });
    }
    if (finalProjectName.length > 150) {
      return res.status(400).json({ ok: false, error: 'Project name must be 150 characters or less.' });
    }

    if (!finalSector || !VALID_SECTORS.includes(finalSector)) {
      return res.status(400).json({ ok: false, error: 'Please select a valid project sector.' });
    }

    if (!trimmedLocation) {
      return res.status(400).json({ ok: false, error: 'Project location is required.' });
    }
    if (trimmedLocation.length > 150) {
      return res.status(400).json({ ok: false, error: 'Location must be 150 characters or less.' });
    }

    const rawCost = estimatedCost !== undefined ? estimatedCost : estimated_cost;
    const costNum = Number(rawCost);
    if (isNaN(costNum) || costNum <= 0) {
      return res.status(400).json({
        ok: false,
        error: 'Estimated project cost must be a number greater than zero.',
      });
    }

    let fundingNum = null;
    const rawFunding = fundingRequirement !== undefined ? fundingRequirement : funding_requirement;
    if (rawFunding !== undefined && rawFunding !== null && String(rawFunding).trim() !== '') {
      fundingNum = Number(rawFunding);
      if (isNaN(fundingNum) || fundingNum < 0) {
        return res.status(400).json({
          ok: false,
          error: 'Funding requirement must be zero or more.',
        });
      }
    }

    if (!finalStage || !VALID_STAGES.includes(finalStage)) {
      return res.status(400).json({ ok: false, error: 'Please select a valid project stage.' });
    }

    if (trimmedDetails.length > 2000) {
      return res.status(400).json({
        ok: false,
        error: 'Brief project details must be 2000 characters or less.',
      });
    }

    if (consent !== true && consent !== 'true') {
      return res.status(400).json({
        ok: false,
        error: 'You must agree to be contacted by Prosync Consulting about this enquiry.',
      });
    }

    const enquiry = new Enquiry({
      name: trimmedName,
      mobile: cleanMobile,
      projectName: finalProjectName,
      sector: finalSector,
      location: trimmedLocation,
      estimatedCost: costNum,
      fundingRequirement: fundingNum,
      projectStage: finalStage,
      expectedStartDate: finalStartDate ? String(finalStartDate).slice(0, 50) : null,
      briefDetails: trimmedDetails,
      consent: true,
      pageSource: finalPageSource,
      status: 'new',
    });

    const saved = await enquiry.save();

    return res.status(201).json({
      ok: true,
      message: `Thank you, ${trimmedName}. We have received your enquiry and will contact you after reviewing your project details.`,
      id: saved._id,
    });
  } catch (err) {
    console.error('[API Error /api/enquiries]:', err);
    return res.status(500).json({
      ok: false,
      error: 'Could not reach our enquiry server. Please try WhatsApp or call us.',
    });
  }
});

// 5. Admin Authentication Middleware
function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ ok: false, error: 'Unauthorized: Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];
  const verified = verifyAdminToken(token, ADMIN_SECRET);
  if (!verified) {
    return res.status(401).json({ ok: false, error: 'Unauthorized: Invalid or expired token' });
  }

  req.admin = verified;
  next();
}

// 6. Admin Login
app.post(['/api/admin/login', '/admin/login'], (req, res) => {
  try {
    const { username, password } = req.body || {};
    const validUser = verifyPassword(String(username || ''), ADMIN_USERNAME);
    const validPass = verifyPassword(String(password || ''), ADMIN_PASSWORD);

    if (!validUser || !validPass) {
      return res.status(401).json({ ok: false, error: 'Invalid username or password.' });
    }

    const token = signAdminToken(username, ADMIN_SECRET);
    return res.json({ ok: true, token });
  } catch (err) {
    console.error('[API Error /api/admin/login]:', err);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});

// 7. Admin: GET latest 500 enquiries
app.get(['/api/admin/enquiries', '/admin/enquiries'], requireAdmin, async (req, res) => {
  try {
    const enquiries = await Enquiry.find({})
      .sort({ createdAt: -1 })
      .limit(500)
      .lean();
    return res.json({ ok: true, enquiries });
  } catch (err) {
    console.error('[API Error /api/admin/enquiries]:', err);
    return res.status(500).json({ ok: false, error: 'Failed to retrieve enquiries' });
  }
});

// 8. Admin: PATCH status update
app.patch(['/api/admin/enquiries/:id', '/admin/enquiries/:id'], requireAdmin, async (req, res) => {
  try {
    const { status } = req.body || {};
    const validStatuses = ['new', 'contacted', 'qualified', 'closed'];

    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({
        ok: false,
        error: `Status must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const updated = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { returnDocument: 'after' }
    );

    if (!updated) {
      return res.status(404).json({ ok: false, error: 'Enquiry not found' });
    }

    return res.json({ ok: true, enquiry: updated });
  } catch (err) {
    console.error('[API Error PATCH /api/admin/enquiries/:id]:', err);
    return res.status(500).json({ ok: false, error: 'Failed to update enquiry status' });
  }
});

// Start server
let serverInstance;
export async function startServer() {
  await connectDB();
  return new Promise((resolve) => {
    serverInstance = app.listen(PORT, () => {
      console.log(`[Server] Prosync API server running on port ${PORT}`);
      resolve(serverInstance);
    });
  });
}

// Auto-run if executed directly
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  startServer().catch((err) => {
    console.error('[Server] Fatal startup error:', err);
    process.exit(1);
  });
}

export default app;
