# Prosync Consulting — Links & SEO Verification Guide

This document lists all active routes, section anchors, communication endpoints, and SEO metadata implemented for the DPR Google Ads campaign.

---

## 1. Page Routes & URLs

| Route | Full URL | Description |
|---|---|---|
| `/` | `https://www.prosyncindia.com/` | Main website with DPR focus |
| `/dpr-services` | `https://www.prosyncindia.com/dpr-services` | Dedicated Google Ads campaign landing page route |
| `/privacy-policy` | `https://www.prosyncindia.com/privacy-policy` | Statutory Privacy Policy (6 mandated sections) |
| `/admin` | `https://www.prosyncindia.com/admin` | Authenticated Lead Management Dashboard (`noindex, nofollow`) |

> **Shortcut:** Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> (or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd>) anywhere on the site to open `/admin`.

---

## 2. Google Ads Sitelink Anchors

All 6 campaign sitelink anchors plus Hero and Contact form scroll smoothly to their exact locations:

| Anchor | Target URL | Section Description |
|---|---|---|
| `#dpr` | `https://www.prosyncindia.com/#dpr` | **Hero Section**: Headline & dual CTAs |
| `#dpr-services` | `https://www.prosyncindia.com/#dpr-services` | **DPR Preparation**: Lender-grade documentation |
| `#feasibility` | `https://www.prosyncindia.com/#feasibility` | **Project Feasibility**: TEV studies & viability |
| `#financial-projections` | `https://www.prosyncindia.com/#financial-projections` | **Financial Projections**: P&L, Cashflow, DSCR |
| `#cma` | `https://www.prosyncindia.com/#cma` | **CMA Data**: Working capital & bank finance |
| `#project-finance` | `https://www.prosyncindia.com/#project-finance` | **Project Finance Advisory**: Capital syndication |
| `#industries` | `https://www.prosyncindia.com/#industries` | **Industries Served**: 6 core sectors covered |
| `#contact` | `https://www.prosyncindia.com/#contact` | **Enquiry Form**: 11-step DPR enquiry engine |

---

## 3. Direct Contact & Communication Links

| Action | Protocol / Link | Target / Parameter |
|---|---|---|
| **WhatsApp Chat** | `https://wa.me/{VITE_WHATSAPP_NUMBER}` | Opens pre-filled message: `Hello Prosync Consulting, I am interested in DPR preparation. Name: ____. Project: ____. Location: ____. Estimated project cost: ____. Funding required: ____.` |
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

## 5. SEO & Metadata Verification

| Metadata Field | Configured Value |
|---|---|
| **Page Title** | `DPR Preparation Services \| Prosync Consulting` |
| **Meta Description** | `Professional DPR preparation, project feasibility, financial projections, DSCR and CMA data support for new and expansion projects in Hyderabad and Vijayawada.` |
| **Canonical URL** | `https://prosyncindia.com/` |
| **Robots (Public Pages)** | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| **Robots (`/admin`)** | `noindex, nofollow` |
| **OpenGraph Title** | `DPR Preparation Services \| Prosync Consulting` |
| **OpenGraph Description** | `Professional DPR preparation, project feasibility, financial projections, DSCR and CMA data support for new and expansion projects in Hyderabad and Vijayawada.` |
| **OpenGraph Image** | `https://res.cloudinary.com/dfr0zghtc/image/upload/v1793258172/Navy_and_Orange_CP_Monogram_Logo_xkgmso.jpg` |
| **OpenGraph URL** | `https://prosyncindia.com/` |
| **Twitter Card** | `summary_large_image` |

---

## 6. Client-Side Tracking (`window.dataLayer`)

| Event Name | When Fired | Parameters |
|---|---|---|
| `generate_lead` | **Only** after API returns HTTP 201 save confirmation | `form_name: "dpr_enquiry"`, `project_sector`, `project_stage` |
| `whatsapp_click` | On WhatsApp CTA button click | `location`: `'hero'`, `'contact'`, or `'floating'` |
| `phone_click` | On telephone link click | `location`: `'header'` or `'contact'` |
