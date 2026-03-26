# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the Assetica Valuation website — a professional asset valuation company website for assetica.net.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5 (api-server)
- **Frontend**: React + Vite (artifacts/assetica)
- **Routing**: react-router-dom (BrowserRouter)
- **Styling**: Tailwind CSS v4 + inline styles for brand colors
- **UI Components**: Radix UI primitives
- **Animations**: Intersection Observer (AnimatedSection), CounterStat

## Assetica Branding

- **Primary color**: Navy `#0f2044`
- **Accent color (gold)**: `#c9a84c`
- **Secondary accent (teal)**: `#1a8f7a`
- **Fonts**: Georgia (headings), Inter (body)

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── assetica/              # Assetica Valuation website (React+Vite, previewPath: /)
│   │   └── src/
│   │       ├── App.tsx         # BrowserRouter routes
│   │       ├── index.css       # Tailwind + brand CSS variables
│   │       ├── components/     # Navbar, Footer, AnimatedSection, CounterStat, ServiceCard, ContactForm, FaqSection
│   │       └── pages/          # Index, About, Services, ServiceDetail, Industries, Contact, Blog, BlogPost, PrivacyPolicy, NotFound
│   └── api-server/            # Express API server
├── lib/                       # Shared libraries (api-spec, api-client-react, api-zod, db)
└── scripts/                   # Utility scripts
```

## Pages

- `/` — Home (hero, stats, services grid, why choose us, industries, FAQ, contact form)
- `/about` — About page (mission, team profiles)
- `/services` — Services overview (10 service cards + process steps)
- `/services/:slug` — Individual service detail pages (10 services with key points + methodology)
- `/industries` — Industries served (Banking, Real Estate, Marine, Manufacturing, Legal, Government)
- `/contact` — Contact page with email form
- `/blog` — Blog/insights listing (6 articles)
- `/blog/:slug` — Individual blog post
- `/privacy-policy` — Privacy policy

## Services

Property Valuation, Plant & Machinery, Business Valuation, Marine Asset Valuation, Infrastructure Valuation, Financial Reporting, Litigation Support, Insurance Valuation, ESG Asset Assessment, Feasibility Studies
