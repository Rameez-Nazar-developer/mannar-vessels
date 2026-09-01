# Mannar Vessels & Gifts — Website (Draft 1)

Premium single-page frontend for Mannar Vessels & Gifts, built with
React + Vite + Tailwind CSS + Framer Motion.

## Run it locally

```
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```
npm run build
```

Output goes to `dist/`, ready to deploy to any static host (Netlify,
Vercel, Cloudflare Pages, GitHub Pages, etc.) or point a custom domain
at it for the QR codes.

## Before launch — replace these

Everything below lives in ONE place so the business owner (or a future
developer) never has to hunt through components:

- **`src/config/business.js`** — WhatsApp number, phone, address,
  opening hours, Google Maps link. Anything still marked
  `REQUIRES_OWNER_CONFIRMATION` or `REPLACE_WITH_VERIFIED_NUMBER` is
  **not shown as confirmed to visitors** (the Visit Us section and
  WhatsApp button fall back gracefully) — but it should still be
  filled in before this goes live.
- **`src/data/products.js`** — every product shown in "The
  collection" section. Add, remove, or reorder freely; the grid and
  cards adapt automatically. Replace placeholder `image` paths with
  real photos once available (drop files in `public/images/` and
  point `image` at `/images/your-file.jpg`).
- **Photography** — every visual block on the site is currently a
  generated placeholder swatch (`src/components/PlaceholderImage.jsx`),
  not a stock photo. Swap it for a real `<img>` per component, or
  extend `PlaceholderImage` to accept a real `src` — no layout changes
  needed either way.
- **Instagram grid** (`src/sections/InstagramSection.jsx`) — currently
  6 placeholder tiles linking out to the profile; swap in real recent
  posts once you have API access or are comfortable hardcoding a few.

## What's intentionally NOT built (by design, per brief)

No cart, checkout, payment, login, or admin dashboard — this is a
product-showcase + WhatsApp-enquiry site, not e-commerce. The project
structure (`src/config`, `src/data`) is set up so those can be added
in a Version 2 without a rewrite.

## Structure

```
src/
  components/   Navbar, Footer, ProductCard, WhatsAppButton, etc.
  sections/     Hero, BrandStatement, FeaturedCollection, Categories,
                EditorialFeature, TrustSection, InstagramSection, VisitStore
  data/         products.js — the product catalogue
  config/       business.js — contact/address/hours single source of truth
```
