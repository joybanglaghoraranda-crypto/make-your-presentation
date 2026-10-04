# Make Your Presentation (MYP) — Global Presentation Ordering Platform

> **Core Tagline:** Your Topic. Our Presentation.  
> **Secondary Tagline:** Create Better Presentations. Teach Better. Present Better.  
> **Official WhatsApp / Phone:** [01410967505](tel:01410967505)  
> **Official Email:** [makeyourpresentation.bd@gmail.com](mailto:makeyourpresentation.bd@gmail.com)  
> **Official Facebook:** [https://www.facebook.com/share/19D66dis4H/](https://www.facebook.com/share/19D66dis4H/)  

---

## 1. Platform Overview

**Make Your Presentation (MYP)** is a production-grade, highly scalable Educational and Professional Presentation Ordering Platform. It bridges subject-specific curriculum research with professional slide design, serving school teachers, school and college students, university researchers, madrasa instructors, corporate trainers, and enterprise founders.

### Key Capabilities
- **Database-Driven Educational Curricula:**
  - **General Education (NCTB):** Pre-Primary, Primary School (Classes 1–5), Secondary School (Classes 6–10 with Science, Humanities, and Business streams), Higher Secondary College (Classes 11–12).
  - **Madrasa Education:** Separate first-class tracks for **Alia Madrasa** (Ibtedayi, Dakhil, Alim, Fazil, Kamil) and **Qawmi Madrasa** (Noorani, Ibtidaiyah, Mutawassitah, Sanawiyah, Fazilat, Taqmil/Dawra-e-Hadith, and Takhassus in Ifta).
  - **University & Higher Education:** Hierarchy structured by Faculty → Department → Program → Semester Course → Topic / Thesis Defense.
- **Business & Startup Presentations:** Investor Pitch Decks, Business Plans, Digital Marketing Strategies, Sales Pitches, and Corporate Reports.
- **Professional & Research Presentations:** Thesis/Dissertation Defense, Academic Conferences, Corporate Workshops, and Non-profit Proposals.
- **Two Main Order Paths:**
  - **PATH A (Browse Catalogue):** Curriculum → Level → Class → Subject → Topic → Order.
  - **PATH B (Tell Us What You Need):** Completely freeform custom request for any unlisted topic or unique requirement.
- **Multilingual & RTL Engine:** Native translations and orthography for Bengali (বাংলা default), English, Arabic (العربية with full RTL layout), Russian (Русский), Japanese (日本語), and Chinese (中文).
- **12-Stage Order Production Lifecycle:** Real-time timeline tracking from `Request Received` to `Quality Check`, `Preview Ready`, `Revisions`, and `Final Delivery`.
- **Dynamic WhatsApp Automation:** Automatically generates pre-filled order detail messages with Order IDs ready to send to `01410967505`.
- **Customer & Admin Dashboards:** Self-serve customer order tracking, PPTX/PDF downloads, revision request submission, staff assignment, and interactive curriculum tree management.

---

## 2. Technology Stack

- **Framework:** Next.js (App Router, Turbopack, Server & Client Components)
- **Language:** TypeScript 5 (Strict Mode, 100% type-safe)
- **Styling:** Tailwind CSS (Modern responsive design system, custom typography, dark admin console)
- **Icons:** Lucide Icons & Custom Vector Brand Icons
- **Database & Auth:** PostgreSQL & Supabase (RLS security, audit logging, file metadata)
- **Offline / Standalone Fallback:** In-memory & local repository ensuring 100% operational functionality before external credentials are configured
- **Deployment:** Vercel + Supabase

---

## 3. Production Route Structure

```
/                            → Homepage (Hero, Global Search, Category Cards, Audiences, FAQ, Final CTA)
/order                       → Multi-Step Presentation Builder (Path A & Path B)
/custom-presentation         → "Tell Us What You Need" Freeform Request
/education                   → Educational Curricula Directory
/education/primary           → Primary School (Class 1–5, Science chapters, Human Body topics)
/education/secondary         → Secondary School (Class 6–10, Science, Humanities, Business)
/education/college           → Higher Secondary / College (HSC 11–12)
/education/university        → University (Engineering/CSE, Business, Law, Medical, Thesis)
/education/madrasa           → Madrasa (Alia Board & Qawmi Dars-e-Nizami / Takhassus Ifta)
/business                    → Business (Pitch Decks, Business Plans, Marketing, Sales, Corporate)
/professional                → Professional & Research (Thesis Defense, Conferences, Training, NGOs)
/how-it-works                → 5-Step Visual Production Guide
/pricing                     → Transparent Pricing Calculator & Custom Quote Breakdown
/about                       → Brand Mission, Values, and Academic Integrity Disclosures
/contact                     → Official Helpline, WhatsApp, Email, Facebook & Inquiry Form
/faq                         → Comprehensive Searchable FAQ
/privacy                     → Privacy & Confidential Data Protection Policy
/terms                       → Terms & Conditions
/refund-policy               → Refund & Revision-First Policy
/dashboard                   → Customer Dashboard Overview & Active Orders
/dashboard/orders/[id]       → Order Detail, Lifecycle Timeline, PPTX/PDF Downloads, Revisions & Chat
/dashboard/messages          → Customer ↔ Team Communication Threads
/dashboard/payments          → Payment History & Manual TrxID Verification
/dashboard/profile           → User Profile & Language Switcher
/admin                       → Admin Dashboard, Metrics, and Category Distribution
/admin/orders                → Order Queue Management, Status Filters, & Search
/admin/orders/[id]           → Admin Order Controls (Stage changes, Staff assignment, Custom quotes)
/admin/curriculum            → Interactive Expandable Curriculum Tree (General & Madrasa)
/admin/pricing               → Dynamic Pricing Rules & Urgency Multipliers
/admin/payments              → Payment Audit & Verification Center
/admin/settings              → Centralized Brand & Contact Configuration
```

---

## 4. Database Setup & Supabase Migration

The full schema and relational seed data are located in the `supabase/` directory:

1. **`supabase/schema.sql`**: Full DDL defining:
   - `profiles` with role-based access control (`customer`, `staff`, `editor`, `designer`, `manager`, `admin`, `super_admin`)
   - `countries`, `education_systems`, `curriculums`, `education_levels`, `classes`, `academic_groups`
   - `subjects`, `chapters`, `topics`
   - `university_faculties`, `university_departments`, `university_courses`
   - `business_categories`, `business_services`, `professional_categories`, `professional_services`
   - `orders` (with human-readable format `MYP-YYYY-XXXXXX`), `order_revisions`, `order_messages`, `order_payments`, `audit_logs`
   - Row Level Security (RLS) policies
2. **`supabase/seed.sql`**: Comprehensive baseline data for Bangladesh General Education, Alia Madrasa, Qawmi Madrasa, University Faculties, and Business services.

To apply directly to your Supabase project:
```bash
# In the Supabase SQL Editor, run:
1. supabase/schema.sql
2. supabase/seed.sql
```

---

## 5. Local Development & Verification

### Install Dependencies
```bash
npm install
```

### Run Automated Flow Tests (Tests 1 through 8)
```bash
npx tsx scripts/test-flows.ts
```
Expected output:
```
=================================================
MAKE YOUR PRESENTATION (MYP) — AUTOMATED FLOW TESTS
=================================================
...
=================================================
TEST SUMMARY: 35 PASSED, 0 FAILED
=================================================
```

### Run Next.js Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production Deployment
```bash
npm run build
```

---

## 6. Official Contact & Support

- **Phone / WhatsApp:** 01410967505
- **Email:** [makeyourpresentation.bd@gmail.com](mailto:makeyourpresentation.bd@gmail.com)
- **Official Facebook Page:** [https://www.facebook.com/share/19D66dis4H/](https://www.facebook.com/share/19D66dis4H/)
- **Primary Market:** Bangladesh (Global International Architecture Ready)
