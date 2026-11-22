# Prosync Consulting — Links & SEO Verification Guide

This document lists all active routes, section anchors, communication endpoints, and SEO metadata implemented for both the **Original Corporate Website** and the **Dedicated Standalone DPR Services Landing Page**.

---

## 1. Page Routes & URLs

| Route | Full URL | Description |
|---|---|---|
| `/` | `https://www.prosyncindia.com/` | **Original Prosync Website** (Capital. Strategy. Growth. corporate advisory) |
| `/dpr-services` | `https://www.prosyncindia.com/dpr-services` | **Dedicated Standalone DPR Landing Page** (Google Ads campaign destination) |
| `/privacy-policy` | `https://www.prosyncindia.com/privacy-policy` | **Statutory Privacy Policy** (6 mandated sections) |
| `/admin` | `https://www.prosyncindia.com/admin` | **Authenticated Lead Management Dashboard** (`noindex, nofollow`) |

> **Admin Shortcut:** Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> (or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd>) anywhere on the site to open `/admin`.

---

## 2. Google Ads Sitelink Anchors on `/dpr-services`

All 6 campaign sitelink anchors plus Hero and Contact form scroll smoothly to their exact locations on `/dpr-services`:

| Anchor | Target URL | Section Description |
|---|---|---|
| `#dpr` | `https://www.prosyncindia.com/dpr-services#dpr` | **Hero Section**: Detailed Project Report Preparation for New Projects & Business Expansion |
| `#dpr-services` | `https://www.prosyncindia.com/dpr-services#dpr-services` | **DPR Preparation**: Structured reports for bank financing, appraisal & evaluation |
| `#feasibility` | `https://www.prosyncindia.com/dpr-services#feasibility` | **Project Feasibility**: TEV studies, commercial viability & compliance notice |
| `#financial-projections` | `https://www.prosyncindia.com/dpr-services#financial-projections` | **Financial Projections**: P&L, Cashflow, DSCR & operating assumptions |
| `#cma` | `https://www.prosyncindia.com/dpr-services#cma` | **CMA Data**: Term loans, working capital limits & bank compliance |
| `#project-finance` | `https://www.prosyncindia.com/dpr-services#project-finance` | **Project Finance Advisory**: Capital structuring & lender coordination |
| `#industries` | `https://www.prosyncindia.com/dpr-services#industries` | **Industries Served**: 7 core sectors including Commercial & Industrial Projects |
| `#why-prosync` | `https://www.prosyncindia.com/dpr-services#why-prosync` | **Why Prosync**: Track record since 2015, bank appraisal expertise & modeling |
| `#process` | `https://www.prosyncindia.com/dpr-services#process` | **Our Process**: 4 transparent steps from briefing to DPR delivery |
| `#contact` | `https://www.prosyncindia.com/dpr-services#contact` | **Enquiry Form**: DPR enquiry engine + WhatsApp instant chat |

---

## 3. Direct Contact & Communication Links

| Action | Protocol / Link | Target / Parameter |
|---|---|---|
| **WhatsApp Chat** | `https://wa.me/{VITE_WHATSAPP_NUMBER}` | Pre-filled with project details: Name, Project, Location, Estimated Cost, Funding, Sector, Stage |
| **Phone Call** | `tel:{VITE_CONTACT_PHONE}` | Triggers telephone dialer & pushes `phone_click` to `dataLayer` |
| **Email** | `mailto:{VITE_CONTACT_EMAIL}` | Opens email client with Prosync advisory address |

---

## 4. Backend API Endpoints (Port 5000)

| Endpoint | Method | Auth | Function |
|---|---|---|---|
| `/api/health` | `GET` | Public | Health monitoring check (returns `{ ok: true }`) |
| `/api/enquiries` | `POST` | Public | Submits & validates 11 enquiry fields + honeypot `_gotcha` |
| `/api/admin/login` | `POST` | Public | Authenticates admin using `crypto.timingSafeEqual` & returns 8h HMAC token |
| `/api/admin/enquiries` | `GET` | Bearer Token | Retrieves latest 500 stored enquiries |
| `/api/admin/enquiries/:id` | `PATCH` | Bearer Token | Updates enquiry status (`new`, `contacted`, `qualified`, `closed`) |

---

## 5. SEO & Metadata Breakdown

### A. Dedicated DPR Landing Page (`/dpr-services`)
| Metadata Field | Configured Value |
|---|---|
| **Page Title** | `DPR Preparation Services \| Prosync Consulting` |
| **Meta Description** | `Professional DPR preparation, project feasibility, financial projections, DSCR and CMA data support for new and expansion projects in Hyderabad and Vijayawada.` |
| **Canonical URL** | `https://prosyncindia.com/dpr-services` |
| **Robots** | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |

### B. Original Homepage (`/`)
| Metadata Field | Configured Value |
|---|---|
| **Page Title** | `Prosync Consulting \| Corporate Finance & Debt Syndication Advisory` |
| **Meta Description** | `Independent financial advisory firm providing debt syndication, structured finance, transaction advisory and strategic financial solutions since 2015.` |
| **Canonical URL** | `https://prosyncindia.com/` |
| **Robots** | `index, follow` |

### C. Admin Portal (`/admin`)
| Metadata Field | Configured Value |
|---|---|
| **Robots** | `noindex, nofollow` |

---

## 6. Client-Side Tracking (`window.dataLayer`)

| Event Name | When Fired | Parameters |
|---|---|---|
| `generate_lead` | **Only** after API returns HTTP 201 save confirmation | `form_name: "dpr_enquiry"`, `project_sector`, `project_stage` |
| `whatsapp_click` | On WhatsApp CTA button click | `location`: `'hero'`, `'contact'`, `'floating'`, or `'contact_submit'` |
| `phone_click` | On telephone link click | `location`: `'header'` or `'contact'` |
