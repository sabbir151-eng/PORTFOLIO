# SK ABDUL SABBIR — Developer Portfolio

Personal developer portfolio website of **SK ABDUL SABBIR**, Computer Science undergraduate at Koneru Lakshmaiah Education Foundation (KLU), Hyderabad. Built for Software Developer, Full-Stack, and Frontend roles with a focus on speed, accessibility, and clean architecture.

---

## ⚡ Tech Stack

- **Framework:** React 18 + Vite 5 (Ultra-fast build & HMR)
- **Styling:** Tailwind CSS 3 (Custom CSS variable tokens for Dark & Light modes)
- **Typography:** Self-hosted `@fontsource/inter` (Zero external font CDNs)
- **Icons:** Inline SVGs & Lucide React
- **Architecture:** 100% Data-Driven (all content decoupled into `/src/data/`)
- **Bundle Footprint:** ~61 kB gzipped JS, zero heavy runtime dependencies

---

## 🚀 Quick Start

### Option 1: One-Click Launch (Windows)
Double-click `start_portfolio.bat` in the root directory. It will install dependencies if needed, start the dev server, and open your browser automatically at `http://localhost:3000`.

### Option 2: Terminal Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
PORTFOLIO/
├── public/
│   ├── certs/                      # AWS certificate PDFs and high-res vector previews
│   ├── favicon.svg                 # SAS monogram icon
│   ├── og-image.png                # Social share banner
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/                 # Navbar, Footer, SkipLink, ThemeToggle
│   │   ├── ui/                     # Button, Card, Badge, Tag, Pill, Modal
│   ├── data/
│   │   ├── profile.js              # Bio, contacts, headline, location
│   │   ├── skills.js               # Resume-verified technical skills
│   │   ├── projects.js             # Featured project metadata and GitHub links
│   │   ├── certifications.js       # AWS certs (with validation IDs) & course specializations
│   │   └── academics.js            # B.Tech, Class XII, Class X timeline & achievements
│   ├── hooks/
│   │   ├── useTheme.js             # Zero-flash dark/light persistence
│   │   └── useScrollSpy.js         # Active section tracker for navigation
│   ├── styles/
│   │   └── index.css               # WCAG 2.2 AA CSS design tokens & animations
│   ├── App.jsx
│   └── main.jsx
├── start_portfolio.bat             # One-click Windows runner
├── PLACEHOLDERS.md                 # Content checklist for pending items
├── tailwind.config.js
└── vite.config.js
```

---

## ✏️ How to Edit Content

All text and links are decoupled from layout components. You can edit content without touching JSX code:

| What to Update | File to Edit | Description |
| :--- | :--- | :--- |
| Personal Info & Socials | `/src/data/profile.js` | Name, title, email, phone, LinkedIn, GitHub, LeetCode |
| Skills List | `/src/data/skills.js` | Grouped skill categories (Languages, Web Dev, Core CS, etc.) |
| Projects & Repos | `/src/data/projects.js` | Add or update project cards, descriptions, tags, and repo links |
| Certifications | `/src/data/certifications.js` | AWS validation IDs, issue dates, and LinkedIn links |
| Academics & Timeline | `/src/data/academics.js` | B.Tech status, school grades, coursework chips, achievements |

---

## 🎨 Design System & Theming

The site implements a dual-theme system (Dark/Light) powered by CSS variables defined in `/src/styles/index.css`:

```css
:root {
  --bg: #fafaf9;
  --surface: #ffffff;
  --text: #111827;
  --sub: #4b5563;
  --accent: #4f46e5; /* Primary accent */
}

[data-theme="dark"] {
  --bg: #0b0f19;
  --surface: #111827;
  --text: #e5e7eb;
  --sub: #9ca3af;
  --accent: #818cf8; /* Light accent for dark background */
}
```

---

## 🌐 Deploying to Vercel / Netlify / GitHub Pages

### Deploying to Vercel (Recommended):
1. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Import this GitHub repository: `sabbir151-eng/PORTFOLIO`.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy** — your portfolio is live in under 60 seconds!

---

## 📄 License & Attribution

Designed and built for **SK ABDUL SABBIR**.  
© 2026 SK ABDUL SABBIR · Hyderabad, India. All rights reserved.
