# Prosync — DPR Enquiry Engine & Advisory Platform

[![React](https://img.shields.io/badge/React-19.3-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-5.3-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_9-47A248?logo=mongodb&logoColor=white)](https://mongoosejs.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#)

A high-performance, lender-grade Detailed Project Report (DPR) enquiry engine and corporate advisory portal for **Prosync Consulting Advisory Private Limited**. Built as a full-stack platform featuring a bankable DPR lead funnel, direct WhatsApp syndication, local/cloud MongoDB persistence, an authenticated internal admin dashboard, and privacy compliance.

---

## ⚡ Quick Start

### 1. Prerequisites
- **Node.js**: `v20.0.0` or higher
- **MongoDB**: Local daemon running on `mongodb://127.0.0.1:27017` or a MongoDB Atlas URI

### 2. Installation
```bash
git clone <repository-url>
cd ProSync
npm install
```

### 3. Environment Setup
Copy the example environment template and configure your local settings:
```bash
cp .env.example .env
```
Ensure your `.env` contains:
```env
# Server Configuration
MONGODB_URI=mongodb://127.0.0.1:27017/prosync_db
PORT=5000
CLIENT_ORIGINS=http://localhost:5173,http://127.0.0.1:5173,https://prosyncindia.com,https://www.prosyncindia.com
ADMIN_USERNAME=prosyncadmin
ADMIN_PASSWORD=your_secure_password
ADMIN_SECRET=generate_a_long_random_hmac_secret_string

# Client Configuration
VITE_API_URL=http://localhost:5000
VITE_CONTACT_EMAIL=docs.1@prosyncindia.com
VITE_CONTACT_PHONE=+91 9951445544
VITE_WHATSAPP_NUMBER=919951445544
VITE_GTM_ID=
```

### 4. Run Development Environment
Boot both the Express backend and the Vite frontend concurrently with a single command:
```bash
npm run dev:all
```
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000/api/health](http://localhost:5000/api/health)
- **Admin Dashboard**: Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> anywhere on the site or navigate to [http://localhost:5173/admin](http://localhost:5173/admin)

---

## 🚀 Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev:all` | **Concurrent Dev:** Runs backend (port 5000) and frontend (port 5173) simultaneously via `scripts/dev.js` |
| `npm run dev` | **Frontend Dev:** Runs only the Vite client with Hot Module Replacement (HMR) |
| `npm run server` | **Backend API:** Runs only the Express server with MongoDB connection |
| `npm run build` | **Production Build:** Compiles the optimized production bundle into `dist/` |
| `npm run lint` | **Code Quality:** Runs ESLint across the codebase |
| `npm run preview` | **Preview:** Serves the production build locally for verification |

---

## 🏗️ Core Architecture & Tech Stack

```
ProSync/
├── server/                 # Express backend API & Database layer
│   ├── auth.js             # HMAC-SHA256 tokens & timing-safe password verification
│   ├── db.js               # Mongoose connection & lifecycle events
│   ├── index.js            # Express server entry point, routes, CORS, validation
│   └── models/Enquiry.js   # Mongoose Schema with strict validation & field aliases
├── scripts/
│   └── dev.js              # Node.js concurrent runner streaming color-coded logs
├── src/
│   ├── components/
│   │   ├── common/         # Reusable UI (AdminShortcut, SEO, FloatingWhatsApp, etc.)
│   │   ├── layout/         # Navigation & Footer with dynamic .env bindings
│   │   └── sections/       # Hero, DprSection, ContactSection (Enquiry Engine)
│   ├── data/               # Company data & constants
│   ├── pages/
│   │   ├── Home.jsx        # Landing page with structured DPR anchors
│   │   ├── Admin.jsx       # Authenticated Lead Management Dashboard
│   │   └── PrivacyPolicy.jsx # Statutory Privacy Policy (6 mandated sections)
│   ├── services/api.js     # Client API abstraction with graceful offline fallback
│   ├── styles/theme/       # Tailwind v4 @theme design tokens
│   └── utils/              # Tracking (dataLayer), WhatsApp generators, formatters
├── index.html              # Optimized SEO meta tags, OpenGraph, and Twitter Cards
├── package.json            # Dependencies & scripts
└── vite.config.js          # Vite 8 + Tailwind CSS v4 configuration
```

---

## 🔒 Key Platform Features

1. **Lender-Grade DPR Enquiry Engine**:
   - 11-step structured qualification form capturing project background, capex estimates, sector, location, funding requirement, and implementation stage.
   - Client-side validation, duplicate submission protection, and invisible anti-bot honeypot (`_gotcha`).
2. **Persistent Lead Storage**:
   - Backend persistence in MongoDB collection `enquiries` with status progression (`new` $\rightarrow$ `contacted` $\rightarrow$ `qualified` $\rightarrow$ `closed`).
3. **Secret Admin Portal (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd>)**:
   - Global keystroke listener opening `/admin` without intercepting standard Undo/Redo inside input fields.
   - Constant-time HMAC-SHA256 session authentication, status filter tabs, Indian currency formatting, and one-click direct Call / WhatsApp action buttons.
4. **DataLayer Event Tracking**:
   - Automated `window.dataLayer` event dispatching for `generate_lead` (fires strictly after verified DB persistence), `whatsapp_click`, and `phone_click`.
   - Conditional Google Tag Manager script injection (loads only when `VITE_GTM_ID` is present).
5. **Zero Hardcoded Secrets**:
   - 100% resolution of contact phones, WhatsApp numbers, email addresses, and API URLs from `.env`. Zero legacy numbers in codebase.

---

## 📖 In-Depth Documentation

For complete technical documentation, API endpoint schemas, security implementation details, and deployment walkthroughs, please consult:

👉 **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)**
