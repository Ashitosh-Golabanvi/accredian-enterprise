# Accredian Enterprise Page (Partial Clone) 🚀

This is a premium, high-performance, and fully responsive clone of the [Accredian Enterprise Website](https://enterprise.accredian.com/) built using **Next.js (App Router)** and **Vanilla CSS Modules**.

It features modern UI/UX design (glassmorphic navbars, gradient effects, hovering micro-animations, process charts), interactive sections (accordions, sliding carousels, tab selectors), and a fully functional lead capture form connected to a backend Next.js API route.

---

## 🔗 Live Links & Submission Details
* **Live Deployed Link (Vercel):** `[INSERT YOUR VERCEL DEPLOYMENT LINK HERE]` *(e.g. https://accredian-enterprise-clone.vercel.app)*
* **GitHub Repository:** `[INSERT YOUR GITHUB REPOSITORY LINK HERE]` *(e.g. https://github.com/yourusername/accredian-enterprise)*

---

## 🛠️ Tech Stack & Architecture
1. **Core:** Next.js (App Router, JavaScript)
2. **Styling:** Vanilla CSS (CSS Modules) for zero bundle bloat and complete modular control.
3. **Typography:** Plus Jakarta Sans & Outfit (Google Fonts) loaded asynchronously.
4. **State Management:** Functional components using React Hooks (`useState`, `useEffect`, `useRef`).
5. **Backend Database:** Local JSON file database storing enquiries under `data/enquiries.json`.
6. **Icons:** Lightweight, inline responsive SVG elements.

---

## 📦 Getting Started & Installation

Follow these instructions to run the application locally on your machine.

### Prerequisites
Make sure you have **Node.js (v18.0.0 or higher)** and **npm** installed.

### 1. Clone & Navigate
```bash
git clone <repository-url>
cd Accredian
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the live page.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🤖 AI Usage Log

As requested in the assignment instructions, here is a transparent log of where AI was utilized and what was refined/crafted manually:

### Where AI Helped
* **Page Analysis:** The AI browser agent visited the reference website (https://enterprise.accredian.com/) to catalog the exact layout sections, FAQ items, copy details, color schemes (`#1b74e4` primary blue), and tab selections.
* **Boilerplate Generation:** Helped build standard structure skeletons for CSS Modules and React layout components.
* **Validation Patterns:** Generated email and telephone regex matching expressions for validation checks.

### What Was Refined/Improved Manually
* **Premium CSS Graphics:** Refined the right-column abstract hero graphics to use native CSS animations and node networks rather than heavy images, improving performance and layout speeds.
* **Local JSON File Database:** Crafted the backend Next.js API POST endpoint (`/api/enquire`) to dynamically read, parse, append, and rewrite inquiries into `data/enquiries.json` (acting as a light server database).
* **Double-Layer Work Email Warning:** Custom-coded the validation rule inside the modal form so that if a user submits a personal email (gmail.com, yahoo.com, etc.), it flags a warning suggesting they input a corporate work email, matching high-end enterprise B2B sales pipelines.
* **Responsive Layout Toggles:** Hand-tuned the mobile drawer navigation transitions to prevent layout shifts.

---

## 🚀 Improvements to Make with More Time

If given more time, the following features would be implemented to elevate the application to production-grade:

1. **Production Database Integration:**
   * Transition the JSON file store to a managed SQL database (PostgreSQL via Prisma or Supabase) for robust transaction handling, query indexing, and security.

2. **Real-time Advising Email Alerts:**
   * Integrate **Resend** or **Nodemailer** on the `/api/enquire` route to instantly dispatch confirmation emails to the user and notify L&D admins when new leads are registered.

3. **Advanced L&D Admin Dashboard:**
   * Build a secure `/admin` page showing a paginated list of all leads, status indicators (e.g. New, Contacted, Converted), and export capability (CSV download).

4. **Sanitization & Security:**
   * Implement library packages like **DOMPurify** or **zod** for advanced server-side body validation and SQL/NoSQL injection prevention.

5. **Internationalization (i18n):**
   * Support multi-language toggles (English, Spanish, German) using `next-intl` to target global enterprises.
