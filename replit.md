# Assetica — Business Valuation Website

## Overview
Professional website for Assetica (assetica.net) — a business valuation firm headquartered in Dubai, UAE with offices in London, UK. Built with React + Vite + TypeScript + Tailwind CSS.

## Architecture
- **Monorepo**: pnpm workspace
- **Frontend**: `artifacts/assetica` — React + Vite + TypeScript + Tailwind CSS v4
- **API**: `artifacts/api-server` — Express.js API server
- **Design system**: Based on marine-visions design patterns with Assetica branding

## Branding
- **Navy**: `#012241`
- **Mint/Accent**: `#4BD1A0`
- **Background**: `#f4f6f9`
- **Headings font**: Montserrat (Google Fonts)
- **Body font**: Inter (Google Fonts)
- **Logo**: `/src/assets/logo.png`
- **Favicon**: `/src/assets/favicon.png`

## Pages
- `/` — Homepage with hero, bento grid, stats, why choose us, services preview
- `/about` — About page with story, mission, team, why choose us
- `/services` — All 9 services in card grid
- `/services/:slug` — Individual service detail pages with FAQs and contact forms
- `/blog` — Blog listing with 6 real posts from assetica.net
- `/blog/:slug` — Individual blog post pages
- `/contact` — Contact page with form and office info
- `/privacy-policy` — Privacy policy

## Services (9 total)
- Due Diligence (`/services/due-diligence`)
- Business Structuring (`/services/business-structuring`)
- Building Pitch Deck (`/services/building-pitch-deck`)
- Financial Modelling (`/services/financial-modelling`)
- Buyer & Seller Negotiation (`/services/buyer-seller-negotiation`)
- Tax Valuation (`/services/tax-valuation`)
- Machinery & Equipment Valuation (`/services/machinery-equipment-valuation`)
- Strategic Value Advisory (`/services/strategic-value-advisory`)
- Business Planning (`/services/business-planning`)

## Key Components
- `Navbar` — Fixed with logo, nav links, phone number, CTA button
- `Footer` — All 9 services, quick links, contact info, social links
- `ContactForm` — firstName, lastName, email, phone, service dropdown, message
- `FaqSection` — Accordion FAQ with mint green accents
- `AnimatedSection` — framer-motion whileInView animations
- `CounterStat` — Animated number counter

## Contact Info
- Phone: +971 52 155 1198
- Email: info@assetica.net
- Locations: Dubai, UAE & London, UK

## SEO
- Full meta tags in `index.html`: title, description, keywords, OG, Twitter
- Geo-targeted: Dubai, UAE, UK
- FAQ sections on every page (structured for AI/search)
- Keyword-rich headings throughout all pages

## Running
- Frontend: `pnpm --filter @workspace/assetica run dev`
- API: `pnpm --filter @workspace/api-server run dev`
