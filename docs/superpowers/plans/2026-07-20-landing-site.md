# Private Auto Brokerage Landing (boris2) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a React + Vite editorial landing site for Private Auto Brokerage, applying the Drive Capital design system (DESIGN.md) with navy/gold colors from boris1, reusing all content (services, videos, contacts) from boris1.

**Architecture:** Single-page React app with seven section components wired in App.jsx. All styles in one `src/index.css` using CSS custom properties. Framer Motion handles fade-in and stagger animations. Videos are copied from boris1 to the project root and served via `vite-plugin-static-copy`.

**Tech Stack:** React 18, Vite 5, Framer Motion 11, Google Fonts (Playfair Display, Inter, Dancing Script), vite-plugin-static-copy

## Global Constraints

- Background always cream `#fff8f1` — no dark-background sections
- Accent color gold `#C9A84C` replaces Voltage Blue everywhere
- Navy `#111856` for all display headlines
- All buttons: 60px border-radius outlined pills, never filled
- Cards: 0px border-radius, hairline `#e2e8f0` borders, flat
- No drop shadows, no gradients, no elevation
- Inter weight 300 for all non-display headings/labels
- Playfair Display for display headlines only
- 144px horizontal page padding (reduces on mobile)
- 150px section vertical padding
- Company name: Private Auto Brokerage
- Phone: +7 965 371 2748
- Telegram: https://t.me/Private_auto_brokerage
- WhatsApp: https://wa.me/79653712748
- Videos: video1.mov (Toyota), video2.mov (Changan Q05), video3.mov (Changan A06)

---

## File Map

| File | Responsibility |
|------|---------------|
| `package.json` | Dependencies: react, react-dom, framer-motion, vite, @vitejs/plugin-react, vite-plugin-static-copy |
| `vite.config.js` | React plugin + static copy of video files |
| `index.html` | HTML shell, Google Fonts link, lang="ru" |
| `vercel.json` | Vercel SPA routing config |
| `.gitignore` | Ignore node_modules, dist, .vercel |
| `video1.mov / video2.mov / video3.mov` | Video files (copied from boris1) |
| `src/main.jsx` | React root mount |
| `src/App.jsx` | Assembles all section components |
| `src/index.css` | All CSS: design tokens, reset, every component's styles, responsive |
| `src/components/FadeIn.jsx` | `FadeIn`, `StaggerGrid`, `itemVariant` — reusable animation wrappers |
| `src/components/Navbar.jsx` | Fixed nav rule bar, mobile burger menu |
| `src/components/Hero.jsx` | Display headline, eyebrow, CTA pills, stats grid |
| `src/components/About.jsx` | Centered serif opener, body copy, animated stat counters |
| `src/components/Services.jsx` | 2×4 grid of flat service cards |
| `src/components/Works.jsx` | 3 car deal cards + 3 inline video players |
| `src/components/Contacts.jsx` | Two-column contact info + Telegram/WhatsApp pills |
| `src/components/Footer.jsx` | Hairline top, logo + copyright + phone row |

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `vercel.json`
- Create: `.gitignore`
- Create: `src/main.jsx`
- Create: `src/App.jsx`

**Interfaces:**
- Produces: runnable `npm run dev` skeleton that renders "boris2" in the browser

- [ ] **Step 1: Create package.json**

```json
{
  "name": "private-auto-brokerage-v2",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.3.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.0",
    "vite-plugin-static-copy": "^1.0.6"
  }
}
```

- [ ] **Step 2: Create vite.config.js**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'video1.mov', dest: '.' },
        { src: 'video2.mov', dest: '.' },
        { src: 'video3.mov', dest: '.' },
      ],
    }),
  ],
})
```

- [ ] **Step 3: Create index.html**

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Private Auto Brokerage — Страхование автомобилей</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Inter:wght@300;400;500&family=Dancing+Script:wght@600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Create vercel.json**

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

- [ ] **Step 5: Create .gitignore**

```
node_modules
dist
.vercel
*.local
```

- [ ] **Step 6: Create src/main.jsx**

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

- [ ] **Step 7: Create src/App.jsx (stub)**

```jsx
export default function App() {
  return <div style={{ padding: '2rem', fontFamily: 'Inter, sans-serif' }}>boris2 scaffold ✓</div>
}
```

- [ ] **Step 8: Create empty src/index.css**

```css
/* styles go here in Task 2 */
```

- [ ] **Step 9: Install dependencies and verify dev server starts**

```bash
npm install
npm run dev
```

Expected: Dev server starts at http://localhost:5173, browser shows "boris2 scaffold ✓" without console errors.

- [ ] **Step 10: Commit**

```bash
git init
git add package.json vite.config.js index.html vercel.json .gitignore src/main.jsx src/App.jsx src/index.css
git commit -m "feat: scaffold React+Vite project for boris2"
```

---

## Task 2: CSS Design Tokens & Global Styles

**Files:**
- Modify: `src/index.css` — complete replacement with all tokens, reset, and every component's styles

**Interfaces:**
- Produces: CSS custom properties usable by all components, `.container`, `.section`, `.sec-title`, `.sec-sub`, `.btn-pill`, `.btn-pill-ash`

- [ ] **Step 1: Replace src/index.css with the complete stylesheet**

```css
/* ============================
   RESET & CUSTOM PROPERTIES
============================ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  /* Colors */
  --color-cream:   #fff8f1;
  --color-ash:     #e2e8f0;
  --color-navy:    #111856;
  --color-gold:    #C9A84C;
  --color-text:    #1A1F4E;
  --color-muted:   #5B6497;

  /* Fonts */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-script:  'Dancing Script', cursive;
  --font-body:    'Inter', system-ui, sans-serif;

  /* Type scale */
  --text-display:      120px;
  --text-heading-lg:    77px;
  --text-heading:       62px;
  --text-heading-sm:    38px;
  --text-subheading:    28px;
  --text-body-lg:       21px;
  --text-body:          18px;
  --text-body-sm:       16px;

  /* Spacing */
  --sp-7:   7px;
  --sp-11:  11px;
  --sp-14:  14px;
  --sp-20:  20px;
  --sp-29:  29px;
  --sp-30:  30px;
  --sp-35:  35px;
  --sp-43:  43px;
  --sp-144: 144px;
  --sp-150: 150px;

  /* Layout */
  --max-w: 1200px;
  --nav-h: 68px;

  /* Radius */
  --r-pill: 60px;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--nav-h);
}

body {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: 1.5;
  color: var(--color-text);
  background: var(--color-cream);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }

/* ============================
   LAYOUT UTILITIES
============================ */
.container {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--sp-144);
}

.section {
  padding: var(--sp-150) 0;
  border-bottom: 1.5px solid var(--color-ash);
}

.sec-title {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: var(--text-heading-lg);
  line-height: 0.95;
  letter-spacing: -1.54px;
  color: var(--color-navy);
  text-align: center;
}

.sec-sub {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: var(--text-body-lg);
  letter-spacing: -0.42px;
  color: var(--color-muted);
  margin-top: var(--sp-20);
  text-align: center;
}

/* ============================
   BUTTONS
============================ */
.btn-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px var(--sp-43);
  border-radius: var(--r-pill);
  border: 1.5px solid var(--color-gold);
  background: transparent;
  font-family: var(--font-body);
  font-weight: 300;
  font-size: var(--text-body-sm);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-gold);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.btn-pill:hover {
  background: var(--color-gold);
  color: var(--color-cream);
}
.btn-pill-ash {
  border-color: var(--color-ash);
  color: var(--color-navy);
}
.btn-pill-ash:hover {
  background: var(--color-ash);
  color: var(--color-navy);
}

/* ============================
   NAVBAR
============================ */
#navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-h);
  background: var(--color-cream);
  z-index: 1000;
  transition: border-bottom 0.2s, box-shadow 0.2s;
}
#navbar.scrolled {
  border-bottom: 1.5px solid var(--color-ash);
}

.nav-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--sp-144);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.nav-logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 3px;
  text-decoration: none;
}
.nav-logo .script {
  font-family: var(--font-script);
  font-size: 22px;
  color: var(--color-navy);
  letter-spacing: -0.01em;
}
.nav-logo .stamp {
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}
.nav-links a {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: var(--text-body-sm);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-navy);
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--color-gold); }
.nav-links .nav-btn {
  padding: 9px 24px;
  border-radius: var(--r-pill);
  border: 1.5px solid var(--color-gold);
  color: var(--color-gold);
  transition: background 0.2s, color 0.2s;
}
.nav-links .nav-btn:hover {
  background: var(--color-gold);
  color: var(--color-cream);
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.burger span {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--color-navy);
  transition: transform 0.3s, opacity 0.3s;
}
.burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

.mobile-nav {
  position: fixed;
  top: var(--nav-h);
  left: 0; right: 0;
  background: var(--color-cream);
  border-bottom: 1.5px solid var(--color-ash);
  z-index: 999;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.mobile-nav a {
  padding: 16px var(--sp-144);
  font-family: var(--font-body);
  font-weight: 300;
  font-size: var(--text-body-sm);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-navy);
  border-bottom: 1px solid var(--color-ash);
  transition: color 0.2s;
}
.mobile-nav a:hover { color: var(--color-gold); }

/* ============================
   HERO
============================ */
#home {
  padding-top: calc(var(--nav-h) + var(--sp-150));
  padding-bottom: var(--sp-150);
  border-bottom: 1.5px solid var(--color-ash);
}

.hero-wrap {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--sp-144);
  text-align: center;
}

.hero-eyebrow {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: var(--text-body-lg);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--sp-29);
}

.hero-title {
  margin-bottom: var(--sp-35);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.hero-title-script {
  font-family: var(--font-script);
  font-size: 80px;
  color: var(--color-navy);
  line-height: 1;
}
.hero-title-serif {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: var(--text-heading-lg);
  line-height: 0.95;
  letter-spacing: -1.54px;
  color: var(--color-navy);
}

.hero-ctas {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-20);
  margin-bottom: var(--sp-150);
  flex-wrap: wrap;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1.5px solid var(--color-ash);
  border-left: 1.5px solid var(--color-ash);
}
.hero-stat {
  padding: var(--sp-43) var(--sp-30);
  border-right: 1.5px solid var(--color-ash);
  border-bottom: 1.5px solid var(--color-ash);
  text-align: center;
}
.stat-num {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: var(--text-heading-sm);
  letter-spacing: -0.76px;
  color: var(--color-navy);
  line-height: 1.1;
}
.stat-label {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: var(--text-body-sm);
  letter-spacing: -0.32px;
  color: var(--color-muted);
  margin-top: var(--sp-7);
}

/* ============================
   ABOUT
============================ */
.about-body {
  max-width: 600px;
  margin: var(--sp-43) auto 0;
  font-weight: 400;
  font-size: var(--text-body);
  line-height: 1.5;
  letter-spacing: -0.36px;
  color: var(--color-text);
  text-align: left;
}
.about-body p + p { margin-top: var(--sp-29); }

.about-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1.5px solid var(--color-ash);
  border-left: 1.5px solid var(--color-ash);
  margin-top: var(--sp-150);
}
.a-stat {
  padding: var(--sp-43) var(--sp-30);
  border-right: 1.5px solid var(--color-ash);
  border-bottom: 1.5px solid var(--color-ash);
  text-align: center;
}
.a-stat-num {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: var(--text-heading);
  line-height: 1;
  letter-spacing: -1.24px;
  color: var(--color-gold);
}
.a-stat-label {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: var(--text-body-sm);
  letter-spacing: -0.32px;
  color: var(--color-muted);
  margin-top: var(--sp-11);
}

/* ============================
   SERVICES
============================ */
.services-header {
  text-align: center;
  margin-bottom: var(--sp-43);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1.5px solid var(--color-ash);
  border-left: 1.5px solid var(--color-ash);
}
.srv-card {
  padding: var(--sp-29);
  border-right: 1.5px solid var(--color-ash);
  border-bottom: 1.5px solid var(--color-ash);
  display: flex;
  flex-direction: column;
  gap: var(--sp-14);
}
.srv-icon { color: var(--color-gold); }
.srv-name {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: var(--text-subheading);
  letter-spacing: -0.56px;
  color: var(--color-navy);
  line-height: 1.2;
}
.srv-desc {
  font-size: var(--text-body-sm);
  font-weight: 400;
  letter-spacing: -0.32px;
  color: var(--color-text);
  line-height: 1.5;
  flex: 1;
}
.srv-tag {
  display: inline-block;
  padding: 4px 14px;
  border: 1.5px solid var(--color-ash);
  border-radius: var(--r-pill);
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
  align-self: flex-start;
}

/* ============================
   WORKS
============================ */
.works-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1.5px solid var(--color-ash);
  border-left: 1.5px solid var(--color-ash);
  margin-bottom: var(--sp-43);
}
.work-card {
  border-right: 1.5px solid var(--color-ash);
  border-bottom: 1.5px solid var(--color-ash);
  display: flex;
  flex-direction: column;
}
.wc-head {
  padding: var(--sp-29);
  border-bottom: 1.5px solid var(--color-ash);
}
.wc-badge {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--sp-11);
}
.wc-model {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: var(--text-heading-sm);
  letter-spacing: -0.76px;
  color: var(--color-navy);
  line-height: 1.1;
  margin-bottom: var(--sp-7);
}
.wc-year {
  font-size: var(--text-body-sm);
  font-weight: 300;
  color: var(--color-muted);
  letter-spacing: -0.32px;
  margin-bottom: var(--sp-14);
}
.wc-price {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: var(--text-heading);
  letter-spacing: -1.24px;
  color: var(--color-navy);
  line-height: 1;
}
.wc-price small {
  display: block;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 300;
  letter-spacing: -0.26px;
  color: var(--color-muted);
  margin-top: var(--sp-7);
}
.wc-body {
  padding: var(--sp-29);
  flex: 1;
}
.wc-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.wc-features li {
  font-size: var(--text-body-sm);
  font-weight: 400;
  letter-spacing: -0.32px;
  color: var(--color-text);
  padding-left: 16px;
  position: relative;
}
.wc-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-gold);
}
.wc-foot {
  padding: var(--sp-14) var(--sp-29);
  border-top: 1.5px solid var(--color-ash);
  font-size: 13px;
  font-weight: 300;
  letter-spacing: -0.26px;
  color: var(--color-muted);
}

.works-videos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-20);
}
.vid-wrap { border: 1.5px solid var(--color-ash); }
.vid-wrap video { width: 100%; display: block; }
.vid-caption {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: var(--sp-14);
  font-size: 13px;
  font-weight: 300;
  letter-spacing: -0.26px;
  color: var(--color-muted);
  border-top: 1.5px solid var(--color-ash);
}

/* ============================
   CONTACTS
============================ */
.contacts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-43);
  align-items: start;
}
.contact-eyebrow {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: var(--text-body-sm);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-gold);
}
.contact-sec-title {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: var(--text-heading);
  line-height: 1;
  letter-spacing: -1.24px;
  color: var(--color-navy);
  margin-top: 12px;
  margin-bottom: var(--sp-14);
}
.contact-sub {
  font-size: var(--text-body);
  font-weight: 300;
  letter-spacing: -0.36px;
  color: var(--color-muted);
  line-height: 1.5;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: var(--sp-29);
  margin-top: var(--sp-43);
}
.c-item {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-20);
}
.c-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--color-ash);
  border-radius: var(--r-pill);
  color: var(--color-gold);
  flex-shrink: 0;
}
a.c-icon { transition: border-color 0.2s; }
a.c-icon:hover { border-color: var(--color-gold); }

.c-label {
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin-bottom: 4px;
}
.c-val {
  font-size: var(--text-body);
  font-weight: 300;
  letter-spacing: -0.36px;
  color: var(--color-navy);
}
.c-val a { transition: color 0.2s; }
.c-val a:hover { color: var(--color-gold); }

.contact-right {
  display: flex;
  flex-direction: column;
  gap: var(--sp-29);
  padding-top: var(--sp-20);
}
.contact-intro {
  font-size: var(--text-body);
  font-weight: 400;
  letter-spacing: -0.36px;
  color: var(--color-text);
  line-height: 1.5;
}
.msg-btns {
  display: flex;
  flex-direction: column;
  gap: var(--sp-14);
}
.msg-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px var(--sp-43);
  border-radius: var(--r-pill);
  border: 1.5px solid var(--color-gold);
  background: transparent;
  font-family: var(--font-body);
  font-weight: 300;
  font-size: var(--text-body-sm);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-gold);
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
}
.msg-btn:hover { background: var(--color-gold); color: var(--color-cream); }
.msg-btn svg { flex-shrink: 0; }

/* ============================
   FOOTER
============================ */
footer {
  padding: var(--sp-43) 0;
  border-top: 1.5px solid var(--color-ash);
}
.footer-in {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--sp-144);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-29);
  flex-wrap: wrap;
}
.f-logo { display: flex; flex-direction: column; gap: 3px; }
.f-logo .script {
  font-family: var(--font-script);
  font-size: 20px;
  color: var(--color-navy);
}
.f-logo .stamp {
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-gold);
}
.f-copy {
  font-size: 13px;
  font-weight: 300;
  letter-spacing: -0.26px;
  color: var(--color-muted);
}
.f-copy a { transition: color 0.2s; }
.f-copy a:hover { color: var(--color-gold); }

/* ============================
   RESPONSIVE
============================ */
@media (max-width: 1024px) {
  :root { --sp-144: 60px; }
  .about-stats { grid-template-columns: repeat(2, 1fr); }
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  :root { --sp-144: 24px; --sp-150: 80px; }
  .nav-links { display: none; }
  .burger { display: flex; }
  .mobile-nav a { padding: 16px 24px; }

  .hero-title-script { font-size: 56px; }
  .hero-title-serif { font-size: 48px; }
  .hero-stats { grid-template-columns: 1fr; }

  .sec-title { font-size: 48px; }
  .about-stats { grid-template-columns: repeat(2, 1fr); }
  .a-stat-num { font-size: 44px; }
  .services-grid { grid-template-columns: 1fr; }
  .works-cards { grid-template-columns: 1fr; }
  .works-videos { grid-template-columns: 1fr; }
  .contacts-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  :root { --sp-144: 16px; }
  .hero-title-script { font-size: 44px; }
  .hero-title-serif { font-size: 36px; }
  .footer-in { flex-direction: column; align-items: flex-start; }
}
```

- [ ] **Step 2: Verify the build still compiles**

```bash
npm run dev
```

Expected: Dev server runs, page renders as plain cream background (no layout yet — App.jsx is still the stub).

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add complete CSS design system — tokens, reset, all component styles"
```

---

## Task 3: FadeIn Animation Utilities

**Files:**
- Create: `src/components/FadeIn.jsx`

**Interfaces:**
- Produces: `FadeIn` (scroll-triggered fade), `StaggerGrid` (staggered container), `itemVariant` (motion variant for stagger children)
- Consumed by: `About.jsx`, `Services.jsx`, `Works.jsx`, `Contacts.jsx`, `Footer.jsx`

- [ ] **Step 1: Create src/components/FadeIn.jsx**

```jsx
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export function FadeIn({ children, delay = 0, y = 24, x = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function StaggerGrid({ children, className, stagger = 0.08 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/FadeIn.jsx
git commit -m "feat: add FadeIn, StaggerGrid, itemVariant animation utilities"
```

---

## Task 4: Navbar

**Files:**
- Create: `src/components/Navbar.jsx`
- Modify: `src/App.jsx` — import and render Navbar

**Interfaces:**
- Consumes: nothing (self-contained)
- Produces: fixed `<nav id="navbar">` that adds class `scrolled` after 40px scroll; mobile drawer via AnimatePresence

- [ ] **Step 1: Create src/components/Navbar.jsx**

```jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#home',     label: 'Главная' },
  { href: '#about',    label: 'О компании' },
  { href: '#services', label: 'Услуги' },
  { href: '#works',    label: 'Наши работы' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav
        id="navbar"
        className={scrolled ? 'scrolled' : ''}
        role="navigation"
        aria-label="Основная навигация"
      >
        <div className="nav-inner">
          <a href="#home" className="nav-logo" aria-label="Private Auto Brokerage — Главная" onClick={close}>
            <span className="script">Private</span>
            <span className="stamp">insured by</span>
          </a>

          <ul className="nav-links" role="list">
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
            <li><a href="#contacts" className="nav-btn">Контакты</a></li>
          </ul>

          <button
            className={`burger${open ? ' open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Мобильная навигация"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
            ))}
            <a href="#contacts" onClick={close}>Контакты</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
```

- [ ] **Step 2: Update src/App.jsx to render Navbar**

```jsx
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* sections added in subsequent tasks */}
      </main>
    </>
  )
}
```

- [ ] **Step 3: Visual verify**

Run `npm run dev`. Check:
- Cream nav bar appears at top
- Logo shows "Private" in script + "insured by" stamp in gold
- Nav links visible (uppercase, navy)
- "Контакты" appears as gold pill
- Scroll down past 40px → hairline ash border appears below nav
- On mobile (≤768px) → nav links hidden, burger icon appears
- Tap burger → mobile drawer slides in with links

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.jsx src/App.jsx
git commit -m "feat: add Navbar with cream background, gold pill, mobile drawer"
```

---

## Task 5: Hero Section

**Files:**
- Create: `src/components/Hero.jsx`
- Modify: `src/App.jsx` — add Hero inside `<main>`

**Interfaces:**
- Consumes: nothing
- Produces: `<section id="home">` with eyebrow, display headline, two CTA pills, stats grid

- [ ] **Step 1: Create src/components/Hero.jsx**

```jsx
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="home" aria-label="Главная">
      <div className="hero-wrap">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          Автострахование и брокерские услуги
        </motion.div>

        <motion.div
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
        >
          <span className="hero-title-script">Private</span>
          <span className="hero-title-serif">Auto Brokerage</span>
        </motion.div>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
        >
          <a href="#contacts" className="btn-pill">Получить консультацию</a>
          <a href="#services" className="btn-pill btn-pill-ash">Наши услуги</a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease }}
        >
          <div className="hero-stat">
            <div className="stat-num">500+</div>
            <div className="stat-label">клиентов застраховано</div>
          </div>
          <div className="hero-stat">
            <div className="stat-num">15+</div>
            <div className="stat-label">страховых партнёров</div>
          </div>
          <div className="hero-stat">
            <div className="stat-num">98%</div>
            <div className="stat-label">клиентов рекомендуют нас</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Hero to App.jsx**

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Visual verify**

Check:
- "Автострахование и брокерские услуги" appears in gold uppercase above the headline
- "Private" in Dancing Script ~80px navy
- "Auto Brokerage" in Playfair Display 77px navy below
- Two pill buttons: gold outlined "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ" + ash outlined "НАШИ УСЛУГИ"
- Stats grid: 3 columns with hairline borders, Playfair numbers in navy, Inter labels in muted
- Entrance animations fire on load

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.jsx src/App.jsx
git commit -m "feat: add Hero with display headline, CTA pills, stats grid"
```

---

## Task 6: About Section

**Files:**
- Create: `src/components/About.jsx`
- Modify: `src/App.jsx` — add About after Hero

**Interfaces:**
- Consumes: `FadeIn`, `StaggerGrid`, `itemVariant` from `./FadeIn`
- Produces: `<section id="about">` with centered Playfair headline, body text, animated counters grid

- [ ] **Step 1: Create src/components/About.jsx**

```jsx
import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import { FadeIn, StaggerGrid, itemVariant } from './FadeIn'

function useCounter(end, duration = 1800) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime = null
    function animate(ts) {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(end)
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return { ref, count }
}

function StatCard({ num, suffix = '', label }) {
  const { ref, count } = useCounter(num)
  return (
    <motion.div className="a-stat" ref={ref} variants={itemVariant}>
      <div className="a-stat-num">{count}{suffix}</div>
      <div className="a-stat-label">{label}</div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section" aria-label="О компании">
      <div className="container">
        <FadeIn>
          <h2 className="sec-title">Страхуем с умом,<br />подбираем с душой</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="about-body">
            <p>
              Private Auto Brokerage начала свой путь с простой идеи: страхование автомобиля не должно быть
              головной болью. С первых дней работы мы поставили клиента в центр всего — не страховой полис
              ради галочки, а реальная защита, подобранная под вашу жизненную ситуацию.
            </p>
            <p>
              За годы работы мы выстроили глубокие партнёрские отношения с 15&nbsp;+ ведущими страховыми
              компаниями России. Это позволяет нам сравнивать десятки предложений в режиме реального времени
              и выбирать то, что действительно выгодно именно вам — без переплат и скрытых условий.
            </p>
            <p>
              Мы специализируемся на КАСКО и ОСАГО, но наша экспертиза охватывает все виды страхования:
              здоровье, путешествия, имущество и бизнес. Каждый клиент получает персонального менеджера,
              который остаётся на связи 24/7 и сопровождает при страховом случае.
            </p>
          </div>
        </FadeIn>

        <StaggerGrid className="about-stats" stagger={0.1}>
          <StatCard num={500} suffix="+" label="клиентов застраховано за всё время работы" />
          <StatCard num={15}  suffix="+" label="страховых компаний-партнёров" />
          <StatCard num={98}  suffix="%" label="клиентов рекомендуют нас близким" />
          <motion.div className="a-stat" variants={itemVariant}>
            <div className="a-stat-num">24 ч</div>
            <div className="a-stat-label">среднее время оформления полиса</div>
          </motion.div>
        </StaggerGrid>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add About to App.jsx**

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Visual verify**

Scroll to About section. Check:
- "Страхуем с умом, подбираем с душой" in Playfair 77px navy, centered
- Body text block ≤600px wide, centered, left-aligned paragraphs
- 4 stat cells in a row with hairline borders; numbers in gold Playfair, labels in muted Inter
- Numbers animate up from 0 when scrolled into view

- [ ] **Step 4: Commit**

```bash
git add src/components/About.jsx src/App.jsx
git commit -m "feat: add About section with editorial headline, body copy, animated counters"
```

---

## Task 7: Services Section

**Files:**
- Create: `src/components/Services.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `FadeIn`, `StaggerGrid`, `itemVariant` from `./FadeIn`
- Produces: `<section id="services">` with 4-column, 2-row grid of 8 flat service cards

- [ ] **Step 1: Create src/components/Services.jsx**

```jsx
import { motion } from 'framer-motion'
import { FadeIn, StaggerGrid, itemVariant } from './FadeIn'

const services = [
  {
    name: 'ОСАГО',
    tag: 'Обязательное',
    desc: 'Обязательное страхование автогражданской ответственности. Анализируем ваш профиль водителя и находим наиболее выгодный тариф среди 15+ партнёров. Без очередей — оформление онлайн за 24 часа.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 11.5h14M5 11.5L7 7h10l2 4.5M5 11.5v5h14v-5M7.5 16.5v1.5M16.5 16.5v1.5M3 11.5h2M19 11.5h2"/>
        <circle cx="8" cy="17" r="1"/><circle cx="16" cy="17" r="1"/>
      </svg>
    ),
  },
  {
    name: 'КАСКО',
    tag: 'Рекомендуемое',
    desc: 'Комплексная защита автомобиля от угона, ДТП, стихийных бедствий и вандализма. Подбираем пакет под реальные риски: франшиза, телематика, GAP — только то, что нужно именно вам.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3.5V12c0 5-8 9-8 9s-8-4-8-9V6.5L12 3z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    name: 'Страхование жизни и здоровья',
    tag: 'Личное',
    desc: 'Накопительное, рисковое и инвестиционное страхование жизни. Разрабатываем стратегию с учётом вашего возраста, семейного положения и финансовых целей.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
  },
  {
    name: 'ДМС',
    tag: 'Медицинское',
    desc: 'Добровольное медицинское страхование для физических лиц и корпоративных клиентов. Программа под ваш бюджет: амбулатория, стационар, стоматология, скорая помощь.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    ),
  },
  {
    name: 'Страхование имущества',
    tag: 'Имущество',
    desc: 'Защита квартиры, дома, дачи и ценного имущества от пожара, затопления и кражи. Покрытие под реальную стоимость объекта — без навязанных опций.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
  },
  {
    name: 'Страхование путешествий',
    tag: 'Туристическое',
    desc: 'Страховки для выезда за рубеж: медицинская помощь, отмена поездки, потеря багажа. Учитываем маршрут и активности — экстремальный спорт, горнолыжный отдых, круиз.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 3L3 10.5l7.5 3 3 7.5L21 3z"/>
        <path d="M10.5 13.5l4-4"/>
      </svg>
    ),
  },
  {
    name: 'Ипотечное страхование',
    tag: 'Ипотека',
    desc: 'Комплексное страхование при ипотеке: имущество, жизнь и титул. Подбираем аккредитованные компании с минимальными тарифами и экономим вам тысячи рублей ежегодно.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="18" height="13" rx="1"/>
        <path d="M8 9V5a1 1 0 011-1h6a1 1 0 011 1v4M12 14v2"/>
        <path d="M9 14h6"/>
      </svg>
    ),
  },
  {
    name: 'Страхование бизнеса',
    tag: 'Корпоративное',
    desc: 'Комплексная защита компании: имущество, ответственность перед третьими лицами, страхование сотрудников. Корпоративные программы под специфику вашей отрасли.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v3M10 13.5h4"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="section" aria-label="Услуги">
      <div className="container">
        <FadeIn>
          <div className="services-header">
            <h2 className="sec-title">Все виды страхования<br />в одном окне</h2>
            <p className="sec-sub">Индивидуальный подход к каждому — без шаблонных решений и навязанных пакетов</p>
          </div>
        </FadeIn>

        <StaggerGrid className="services-grid" stagger={0.07}>
          {services.map(s => (
            <motion.div className="srv-card" key={s.name} variants={itemVariant}>
              <div className="srv-icon">{s.icon}</div>
              <div className="srv-name">{s.name}</div>
              <div className="srv-desc">{s.desc}</div>
              <span className="srv-tag">{s.tag}</span>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Services to App.jsx**

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Visual verify**

Scroll to Services. Check:
- "Все виды страхования в одном окне" Playfair 77px navy centered
- 4-column grid of flat cards with hairline ash borders
- Each card: gold SVG icon, navy service name, body text, ash pill tag
- Cards stagger into view as you scroll

- [ ] **Step 4: Commit**

```bash
git add src/components/Services.jsx src/App.jsx
git commit -m "feat: add Services section with 8 flat hairline cards in 4-column grid"
```

---

## Task 8: Works Section + Copy Videos

**Files:**
- Create: `src/components/Works.jsx`
- Copy: `video1.mov`, `video2.mov`, `video3.mov` from boris1 root into boris2 root
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `FadeIn`, `StaggerGrid`, `itemVariant` from `./FadeIn`; video files at root
- Produces: `<section id="works">` with 3 work cards + 3 inline video players

- [ ] **Step 1: Copy video files from boris1**

```bash
cp "../boris1/video1.mov" "./video1.mov"
cp "../boris1/video2.mov" "./video2.mov"
cp "../boris1/video3.mov" "./video3.mov"
```

- [ ] **Step 2: Create src/components/Works.jsx**

```jsx
import { motion } from 'framer-motion'
import { FadeIn, StaggerGrid, itemVariant } from './FadeIn'

const cars = [
  {
    badge: 'Электромобиль',
    model: 'Changan Qiyuan Q05 Air',
    year: '2026 год',
    price: '1 794 860 ₽',
    priceSub: 'под ключ до вашего города (±15 000 ₽)',
    features: [
      'До 405 км на электротяге',
      '540° круговой обзор с прозрачным шасси',
      'Экран 14,6″ + цифровая панель 10,17″',
      'Поддержка CarPlay / HiCar',
      'Подогрев и вентиляция передних сидений',
      'Покупка, таможня, доставка, страховка включены',
    ],
    foot: 'Зарядная станция и коврики в подарок · Русификация +2000 ¥',
  },
  {
    badge: 'Гибрид / Электро',
    model: 'Changan Qiyuan A06 240 Laser Ultra+',
    year: '2026 год',
    price: '2 690 000 ₽',
    priceSub: 'под ключ до вашего города (±20 000 ₽)',
    features: [
      'Общий запас хода более 2120 км',
      'Лидар и интеллектуальный автопилот City NOA',
      'Проекционный дисплей HUD + экран 15,6″',
      'Подогрев, вентиляция и массаж всех сидений',
      'Панорамная крыша · Беспроводная зарядка 50 Вт',
      'Покупка, таможня, доставка, страховка включены',
    ],
    foot: 'Зарядная станция и коврики в подарок · Русификация +2000 ¥',
  },
  {
    badge: 'Премиум',
    model: 'Audi',
    year: 'Реализованный проект',
    price: 'Под ключ',
    priceSub: 'полное сопровождение сделки',
    features: [
      'Подбор и проверка автомобиля под запрос клиента',
      'Юридическое сопровождение сделки',
      'Страхование КАСКО и ОСАГО в подарок',
      'Оплата поэтапно по инвойсу через ВТБ',
      'Фото и видеоотчёты на каждом этапе',
      'Покупка, таможня, доставка, страховка включены',
    ],
    foot: 'Страховка включена · Полное сопровождение сделки',
  },
]

const videos = [
  { src: 'video2.mov', caption: 'Видеообзор — Changan Qiyuan Q05 Air', label: 'Видеообзор Changan Q05' },
  { src: 'video3.mov', caption: 'Видеообзор — Changan Qiyuan A06',     label: 'Видеообзор Changan A06' },
  { src: 'video1.mov', caption: 'Видеообзор — Toyota',                  label: 'Видеообзор Toyota' },
]

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  )
}

export default function Works() {
  return (
    <section id="works" className="section" aria-label="Наши работы">
      <div className="container">
        <FadeIn>
          <h2 className="sec-title">Реализованные проекты</h2>
          <p className="sec-sub">
            Автомобили, которые мы помогли клиентам приобрести и застраховать — под ключ до вашего города
          </p>
        </FadeIn>

        <StaggerGrid className="works-cards" stagger={0.1}>
          {cars.map(car => (
            <motion.article className="work-card" key={car.model} variants={itemVariant}>
              <div className="wc-head">
                <div className="wc-badge">{car.badge}</div>
                <div className="wc-model">{car.model}</div>
                <div className="wc-year">{car.year}</div>
                <div className="wc-price">
                  {car.price}
                  <small>{car.priceSub}</small>
                </div>
              </div>
              <div className="wc-body">
                <ul className="wc-features">
                  {car.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
              <div className="wc-foot">{car.foot}</div>
            </motion.article>
          ))}
        </StaggerGrid>

        <StaggerGrid className="works-videos" stagger={0.12}>
          {videos.map(v => (
            <motion.div className="vid-wrap" key={v.src} variants={itemVariant}>
              <video controls preload="metadata" aria-label={v.label}>
                <source src={v.src} type="video/mp4" />
                <source src={v.src} type="video/quicktime" />
              </video>
              <div className="vid-caption">
                <PlayIcon />
                {v.caption}
              </div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Add Works to App.jsx**

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Works from './components/Works'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
      </main>
    </>
  )
}
```

- [ ] **Step 4: Visual verify**

Scroll to Works. Check:
- "Реализованные проекты" Playfair 77px navy centered
- 3 flat work cards in a row: gold badge, Playfair model name, large Playfair price, gold-bullet features list
- 3 video players below in a row with hairline ash borders; each has caption with play icon
- Videos load and play when clicked

- [ ] **Step 5: Commit**

```bash
git add src/components/Works.jsx src/App.jsx video1.mov video2.mov video3.mov
git commit -m "feat: add Works section with car cards and video players"
```

---

## Task 9: Contacts + Footer

**Files:**
- Create: `src/components/Contacts.jsx`
- Create: `src/components/Footer.jsx`
- Modify: `src/App.jsx` — add both components

**Interfaces:**
- Consumes: `FadeIn` from `./FadeIn`
- Produces: `<section id="contacts">` two-column layout + `<footer>` with logo and copyright

- [ ] **Step 1: Create src/components/Contacts.jsx**

```jsx
import { FadeIn } from './FadeIn'

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 010.07 2.18C.07 1.02 1 0 2.16 0h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 14.9v2z"/>
    </svg>
  )
}

function TelegramSmIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.02c-.12.56-.46.7-.93.44l-2.57-1.9-1.24 1.2c-.14.13-.26.24-.53.24l.19-2.66 4.85-4.38c.21-.19-.05-.29-.32-.1L7.74 14.6l-2.52-.79c-.55-.17-.56-.55.12-.81l9.85-3.8c.46-.17.86.11.45.6z"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  )
}

function TelegramBigIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.02c-.12.56-.46.7-.93.44l-2.57-1.9-1.24 1.2c-.14.13-.26.24-.53.24l.19-2.66 4.85-4.38c.21-.19-.05-.29-.32-.1L7.74 14.6l-2.52-.79c-.55-.17-.56-.55.12-.81l9.85-3.8c.46-.17.86.11.45.6z"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.786.47 3.458 1.29 4.908L2 22l5.236-1.276A9.952 9.952 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.952 7.952 0 01-4.098-1.132l-.294-.174-3.107.757.782-3.02-.192-.31A7.952 7.952 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
    </svg>
  )
}

export default function Contacts() {
  return (
    <section id="contacts" className="section" aria-label="Контакты">
      <div className="container">
        <div className="contacts-grid">

          <FadeIn x={-30} y={0} delay={0.05}>
            <div>
              <div className="contact-eyebrow">Контакты</div>
              <h2 className="contact-sec-title">Свяжитесь<br />с нами</h2>
              <p className="contact-sub">
                Ответим на любые вопросы по страхованию и подберём лучшие условия для вашего автомобиля
              </p>
              <div className="contact-items">
                <div className="c-item">
                  <a href="tel:+79653712748" className="c-icon" aria-label="Позвонить">
                    <PhoneIcon />
                  </a>
                  <div>
                    <div className="c-label">Телефон</div>
                    <div className="c-val"><a href="tel:+79653712748">+7 965 371 2748</a></div>
                  </div>
                </div>
                <div className="c-item">
                  <a href="https://t.me/Private_auto_brokerage" target="_blank" rel="noopener" className="c-icon" aria-label="Telegram">
                    <TelegramSmIcon />
                  </a>
                  <div>
                    <div className="c-label">Telegram</div>
                    <div className="c-val">
                      <a href="https://t.me/Private_auto_brokerage" target="_blank" rel="noopener">@Private_auto_brokerage</a>
                    </div>
                  </div>
                </div>
                <div className="c-item">
                  <div className="c-icon"><ClockIcon /></div>
                  <div>
                    <div className="c-label">Время работы</div>
                    <div className="c-val">Ежедневно с 9:00 до 21:00</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn x={30} y={0} delay={0.15}>
            <div className="contact-right">
              <p className="contact-intro">
                Нажмите на кнопку ниже — и вы окажетесь в чате с нашим менеджером.
                Расскажите о своём автомобиле, и мы подберём оптимальную страховку
                в течение нескольких минут. Работаем по всей России.
              </p>
              <div className="msg-btns">
                <a
                  href="https://t.me/Private_auto_brokerage"
                  target="_blank"
                  rel="noopener"
                  className="msg-btn"
                  aria-label="Написать в Telegram"
                >
                  <TelegramBigIcon />
                  Написать в Telegram
                </a>
                <a
                  href="https://wa.me/79653712748"
                  target="_blank"
                  rel="noopener"
                  className="msg-btn"
                  aria-label="Написать в WhatsApp"
                >
                  <WhatsAppIcon />
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create src/components/Footer.jsx**

```jsx
import { FadeIn } from './FadeIn'

export default function Footer() {
  return (
    <FadeIn y={16}>
      <footer>
        <div className="footer-in">
          <div className="f-logo">
            <div className="script">Private</div>
            <div className="stamp">insured by</div>
          </div>
          <div className="f-copy">© 2024 Private Auto Brokerage. Все права защищены.</div>
          <div className="f-copy">
            <a href="tel:+79653712748">+7 965 371 2748</a>
          </div>
        </div>
      </footer>
    </FadeIn>
  )
}
```

- [ ] **Step 3: Wire everything in App.jsx**

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Works from './components/Works'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 4: Visual verify — full page walkthrough**

Check each section in order:
- Navbar: cream bg → scrolled adds ash bottom border
- Hero: "Private" script + "Auto Brokerage" serif + gold eyebrow + two pill CTAs + 3-column stats
- About: Playfair headline centered + 600px body column + 4 animated gold counter stats
- Services: subtitle + 4-col 2-row card grid with gold icons and ash pill tags
- Works: 3 flat car cards + 3 video players with captions
- Contacts: left column contact info with pill icons, right column two gold outlined pills for Telegram/WhatsApp
- Footer: ash top border, "Private" script logo, copyright, phone link

Click "Получить консультацию" → scrolls to #contacts  
Click "Наши услуги" → scrolls to #services  
Click Telegram button → opens Telegram in new tab  
Click WhatsApp button → opens WhatsApp in new tab  
Test mobile (resize to 375px): burger menu works, single-column layout correct

- [ ] **Step 5: Commit**

```bash
git add src/components/Contacts.jsx src/components/Footer.jsx src/App.jsx
git commit -m "feat: add Contacts and Footer, complete full page assembly"
```

---

## Task 10: Production Build Verification

**Files:**
- No new files

**Interfaces:**
- Consumes: all tasks above
- Produces: `dist/` folder with all assets including video files

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: `dist/` folder created. No build errors. Output includes `dist/index.html`, `dist/assets/`, `dist/video1.mov`, `dist/video2.mov`, `dist/video3.mov`.

- [ ] **Step 2: Preview the production build**

```bash
npm run preview
```

Open browser at http://localhost:4173. Verify:
- Full page renders correctly from production bundle
- Videos play (confirm `vite-plugin-static-copy` copied them to dist/)
- No 404s in the network tab

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: verify production build — all sections, videos, fonts working"
```

---

## Self-Review Checklist

- [x] **Spec coverage:** Navbar ✓ · Hero ✓ · About ✓ · Services (all 8) ✓ · Works (3 cars + 3 videos) ✓ · Contacts (phone, telegram, whatsapp, hours) ✓ · Footer ✓
- [x] **Placeholders:** None — every step has concrete code or commands
- [x] **Type consistency:** `FadeIn`, `StaggerGrid`, `itemVariant` defined in Task 3, used consistently by name in Tasks 6–9
- [x] **Token consistency:** `--color-gold`, `--color-navy`, `--color-cream`, `--color-ash`, `--color-text`, `--color-muted` defined once in Task 2, used by class names in CSS which are referenced by all components
- [x] **Video files:** Copied in Task 8 Step 1, referenced in Works.jsx as `video2.mov`, `video3.mov`, `video1.mov` (matching boris1 order), served via `vite-plugin-static-copy` configured in Task 1
- [x] **Mobile:** Responsive breakpoints at 1024px, 768px, 480px cover all grid collapses
