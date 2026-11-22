import mongoose from 'mongoose';
import dns from 'node:dns';

if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

export async function connectDB() {
  const uri = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/prosync_db';
  try {
    await mongoose.connect(uri);
    console.log(`[Database] Connected to MongoDB at ${uri.replace(/\/\/.*@/, '//<credentials>@')}`);
  } catch (err) {
    if (err.message && err.message.includes('querySrv')) {
      try {
        dns.setServers(['8.8.8.8', '1.1.1.1']);
        await mongoose.connect(uri);
        console.log(`[Database] Connected to MongoDB (DNS fallback) at ${uri.replace(/\/\/.*@/, '//<credentials>@')}`);
        return;
      } catch (retryErr) {
        console.error('[Database] MongoDB retry connection error:', retryErr.message);
        throw retryErr;
      }
    }
    console.error('[Database] MongoDB connection error:', err.message);
    throw err;
  }
}

