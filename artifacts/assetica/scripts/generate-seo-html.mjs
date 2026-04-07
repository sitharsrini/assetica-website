/**
 * Post-build SSG script — generates per-route index.html files with:
 *   • Correct title, description, canonical, OG/Twitter meta tags
 *   • JSON-LD structured data baked into static HTML (visible to crawlers
 *     and audit tools without JavaScript execution)
 *
 * Usage: node scripts/generate-seo-html.mjs
 * Called automatically via `npm run build:ssg`
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const BASE_URL = 'https://assetica.net';
const DEFAULT_OG_IMAGE = `${BASE_URL}/opengraph.jpg`;

// ─── Helpers ────────────────────────────────────────────────────────────────

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function truncateDesc(text, maxLen = 155) {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).replace(/\s\S+$/, '') + '\u2026';
}

// ─── Sitewide schemas (injected on every page) ──────────────────────────────

const sitewideSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Assetica',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      'Independent business valuation firm in Dubai, UAE & UK offering M&A advisory, due diligence, financial modelling and strategic advisory services.',
    telephone: '+971521551198',
    email: 'info@assetica.net',
    address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
    sameAs: ['https://www.linkedin.com/company/assetica'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Assetica',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/services?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
];

// ─── Per-page schema builders ────────────────────────────────────────────────

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, item }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item,
    })),
  };
}

function serviceSchema(name, description, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@type': 'Organization', name: 'Assetica', url: BASE_URL },
    areaServed: ['AE', 'GB', 'SA', 'EU'],
    url,
  };
}

function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

function howToSchema(name, description, steps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map(({ name: stepName, text }, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: stepName,
      text,
    })),
  };
}

function itemListSchema(name, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map(({ name: itemName, url: itemUrl }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: itemName,
      url: itemUrl,
    })),
  };
}

function blogPostingSchema({ title, excerpt, slug, datePublished }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    url: `${BASE_URL}/blog/${slug}`,
    datePublished,
    dateModified: datePublished,
    author: { '@type': 'Organization', name: 'Assetica', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Assetica',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${slug}` },
  };
}

// ─── Build HTML block ────────────────────────────────────────────────────────

function buildSeoBlock({ title, description, canonical, noIndex = false, schemas = [] }) {
  const fullTitle = title.includes('Assetica') ? title : `${title} | Assetica`;
  const canonicalUrl = canonical === '/' ? `${BASE_URL}/` : `${BASE_URL}${canonical}`;
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow';
  const safeTitle = escapeHtml(fullTitle);
  const safeDesc = escapeHtml(description);

  // Merge sitewide + per-page schemas (skip sitewide on noIndex pages)
  const allSchemas = noIndex ? schemas : [...sitewideSchemas, ...schemas];
  const schemaScripts = allSchemas
    .map((s) => `    <script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n');

  return `<!-- SEO_START -->
    <title>${safeTitle}</title>
    <meta name="description" content="${safeDesc}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDesc}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="Assetica" />
    <meta property="og:image" content="${DEFAULT_OG_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDesc}" />
    <meta name="twitter:image" content="${DEFAULT_OG_IMAGE}" />
${schemaScripts}
    <!-- SEO_END -->`;
}

const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

function generateHtml(page) {
  const seoBlock = buildSeoBlock(page);
  return baseHtml.replace(/<!-- SEO_START -->[\s\S]*?<!-- SEO_END -->/m, seoBlock);
}

function writeRoute(routePath, page) {
  const html = generateHtml(page);
  const outputDir =
    routePath === '/' ? distDir : join(distDir, routePath.replace(/^\//, ''));
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'index.html'), html, 'utf-8');
  console.log(`  ✓  ${routePath}`);
}

// ─── Route Definitions ───────────────────────────────────────────────────────

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Assetica',
  url: BASE_URL,
  telephone: '+971521551198',
  email: 'info@assetica.net',
  priceRange: '£££',
  description:
    'Assetica provides independent business valuation, due diligence, financial modelling and M&A advisory services in Dubai, UAE, UK and Europe.',
  address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
  areaServed: ['AE', 'GB', 'SA', 'KW', 'BH', 'QA', 'OM', 'EU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Business Valuation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Valuation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Due Diligence' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Financial Modelling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax Valuation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strategic Advisory' } },
    ],
  },
};

const staticRoutes = [
  {
    path: '/',
    title: 'Business Valuation Services in Dubai, UAE & UK | Assetica',
    description:
      'Assetica, independent business valuation firm in Dubai & UK. Expert valuations for M&A, due diligence, tax, financial modelling and strategic advisory across UAE, GCC & Europe.',
    canonical: '/',
    schemas: [
      localBusinessSchema,
      breadcrumb([{ name: 'Home', item: `${BASE_URL}/` }]),
    ],
  },
  {
    path: '/about',
    title: 'About Assetica | 30+ Years of Business Valuation Expertise in Dubai',
    description:
      'Assetica brings 30+ years of valuation expertise across Dubai, GCC, UK & Europe. Trusted by 500+ businesses for M&A, due diligence and strategic advisory.',
    canonical: '/about',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Assetica',
        url: `${BASE_URL}/about`,
        description:
          'Assetica brings 30+ years of valuation expertise across Dubai, GCC, UK & Europe.',
        about: { '@type': 'Organization', name: 'Assetica', url: BASE_URL },
      },
      breadcrumb([
        { name: 'Home', item: `${BASE_URL}/` },
        { name: 'About', item: `${BASE_URL}/about` },
      ]),
    ],
  },
  {
    path: '/services',
    title: 'Business Valuation Services in Dubai & UAE | Assetica',
    description:
      'Expert business valuation, due diligence, financial modelling, tax valuation and strategic advisory in Dubai, UAE, GCC, UK & Europe. Free consultation.',
    canonical: '/services',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Assetica Business Valuation Services',
        url: `${BASE_URL}/services`,
        itemListElement: [
          'Business Valuation',
          'Due Diligence',
          'Business Structuring',
          'Pitch Deck',
          'Financial Modelling',
          'Buyer & Seller Negotiation',
          'Tax Valuation',
          'Strategic Value Advisory',
          'Business Planning',
        ].map((name, i) => ({ '@type': 'ListItem', position: i + 1, name })),
      },
      breadcrumb([
        { name: 'Home', item: `${BASE_URL}/` },
        { name: 'Services', item: `${BASE_URL}/services` },
      ]),
    ],
  },
  {
    path: '/industries',
    title: 'Industries We Serve | Business Valuation Across Dubai & UAE | Assetica',
    description:
      'Assetica provides expert business valuation across Banking, Real Estate, Manufacturing, Shipping, Legal and Government sectors in Dubai, UAE, GCC & UK.',
    canonical: '/industries',
    schemas: [
      itemListSchema('Industries We Serve', [
        { name: 'Banking & Financial Services Valuation', url: `${BASE_URL}/industries` },
        { name: 'Real Estate & Property Valuation', url: `${BASE_URL}/industries` },
        { name: 'Manufacturing & Industrial Valuation', url: `${BASE_URL}/industries` },
        { name: 'Shipping & Logistics Valuation', url: `${BASE_URL}/industries` },
        { name: 'Legal & Professional Services Valuation', url: `${BASE_URL}/industries` },
        { name: 'Government & Public Sector Valuation', url: `${BASE_URL}/industries` },
        { name: 'Technology & SaaS Valuation', url: `${BASE_URL}/industries` },
        { name: 'Healthcare & Pharma Valuation', url: `${BASE_URL}/industries` },
      ]),
      breadcrumb([
        { name: 'Home', item: `${BASE_URL}/` },
        { name: 'Industries', item: `${BASE_URL}/industries` },
      ]),
    ],
  },
  {
    path: '/contact',
    title: 'Contact Assetica | Business Valuation Enquiries, Dubai & UK',
    description:
      "Get in touch with Assetica's valuation experts in Dubai & London. Free initial consultation for business valuation, M&A advisory and due diligence.",
    canonical: '/contact',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Assetica',
        url: `${BASE_URL}/contact`,
        description:
          "Get in touch with Assetica's valuation experts in Dubai & London.",
        mainEntity: {
          '@type': 'ProfessionalService',
          name: 'Assetica',
          telephone: '+971521551198',
          email: 'info@assetica.net',
          address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
        },
      },
      breadcrumb([
        { name: 'Home', item: `${BASE_URL}/` },
        { name: 'Contact', item: `${BASE_URL}/contact` },
      ]),
    ],
  },
  {
    path: '/blog',
    title: 'Business Valuation Blog | Expert Insights from Assetica Dubai',
    description:
      "Expert insights on business valuation, M&A, due diligence and financial advisory from Assetica's team in Dubai, UAE & UK.",
    canonical: '/blog',
    schemas: [
      breadcrumb([
        { name: 'Home', item: `${BASE_URL}/` },
        { name: 'Blog', item: `${BASE_URL}/blog` },
      ]),
    ],
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Assetica',
    description:
      "Assetica's privacy policy detailing how we collect, use and protect your personal data across our business valuation services.",
    canonical: '/privacy-policy',
    noIndex: true,
    schemas: [],
  },
  {
    path: '/golden-visa-valuation',
    title: 'Golden Visa Business Valuation UAE | GDRFA-Compliant | Assetica',
    description:
      'Certified business valuation for UAE Golden Visa applications. GDRFA-accepted reports in 5–7 days for business owners and investors. AED 2M+ threshold confirmed. Free consultation.',
    canonical: '/golden-visa-valuation',
    schemas: [
      serviceSchema(
        'Golden Visa Business Valuation UAE',
        'Certified business valuation for UAE Golden Visa applications. GDRFA-accepted independent reports in 5–7 days for business owners and investors.',
        `${BASE_URL}/golden-visa-valuation`
      ),
      faqSchema([
        { q: 'What is the minimum business valuation for UAE Golden Visa?', a: 'The UAE Golden Visa for business owners requires a minimum business valuation of AED 2 million (approximately USD 545,000). Assetica provides GDRFA-accepted certified valuation reports confirming this threshold.' },
        { q: 'How long does a Golden Visa valuation report take?', a: 'Assetica typically delivers certified Golden Visa valuation reports within 5–7 business days, depending on the complexity of the business and availability of financial records.' },
        { q: 'Which authority accepts the business valuation for UAE Golden Visa?', a: 'The General Directorate of Residency and Foreigners Affairs (GDRFA) in Dubai, and the Federal Authority for Identity and Citizenship (ICA) for other emirates, accept certified business valuation reports for Golden Visa applications.' },
        { q: 'What documents are needed for a Golden Visa business valuation?', a: 'Typically required: 3 years of audited financial statements, trade license, MOA/AOA, shareholder registry, asset register, and any existing valuations. Assetica will guide you through the full document checklist.' },
        { q: 'Can a startup qualify for UAE Golden Visa through business valuation?', a: 'Yes, early-stage businesses can qualify if their independently certified valuation meets or exceeds AED 2 million. Assetica uses internationally recognised methodologies including DCF and market comparables appropriate for startups.' },
        { q: "Does Assetica's valuation report satisfy GDRFA requirements?", a: "Yes. Assetica is an independent certified valuation firm. Our reports follow IFRS and RICS-aligned standards and are structured to satisfy GDRFA and ICA documentation requirements for Golden Visa applications." },
        { q: 'What valuation methods does Assetica use for Golden Visa reports?', a: 'We use Income Approach (DCF), Market Approach (comparable transactions), and Asset-Based Approach depending on the business type. The most appropriate method — or combination — is selected to maximise defensibility before authorities.' },
        { q: 'Can I get a Golden Visa valuation for a holding company or investment vehicle?', a: 'Yes. Assetica provides valuations for holding companies, SPVs, investment vehicles, and family-owned businesses for Golden Visa purposes. Each structure is assessed on its specific assets, investments, and income profile.' },
      ]),
      howToSchema(
        'How to Get a Business Valuation for UAE Golden Visa',
        'Step-by-step process to obtain a certified business valuation for UAE Golden Visa application through Assetica.',
        [
          { name: 'Initial Consultation', text: 'Contact Assetica for a free consultation. Discuss your business type, ownership structure, and Golden Visa timeline to confirm eligibility and scope.' },
          { name: 'Document Submission', text: 'Provide financial statements, trade license, MOA, asset register and shareholder information. Assetica will supply a detailed document checklist.' },
          { name: 'Valuation Analysis', text: 'Our analysts apply DCF, market, and asset-based approaches to determine the independent certified value of your business against the AED 2M threshold.' },
          { name: 'Certified Report Delivery', text: 'Receive a GDRFA-compliant certified valuation report within 5–7 business days, ready for submission with your Golden Visa application.' },
        ]
      ),
      breadcrumb([
        { name: 'Home', item: `${BASE_URL}/` },
        { name: 'Golden Visa Business Valuation', item: `${BASE_URL}/golden-visa-valuation` },
      ]),
    ],
  },
  {
    path: '/family-office-valuation',
    title: 'Family Office Valuation Services | DIFC & ADGM | Assetica',
    description:
      'Independent valuation services for family offices across DIFC, ADGM and the GCC. Portfolio valuation, succession planning, real estate, private equity and estate valuations for HNI and UHNWI families.',
    canonical: '/family-office-valuation',
    schemas: [
      serviceSchema(
        'Family Office Valuation Services UAE',
        'Independent valuation services for family offices across DIFC, ADGM and GCC. Portfolio, succession, real estate and private equity valuations for HNI and UHNWI families.',
        `${BASE_URL}/family-office-valuation`
      ),
      faqSchema([
        { q: 'What is a family office valuation?', a: 'A family office valuation is an independent, comprehensive assessment of all assets held by a family office — including private equity stakes, real estate, business interests, investment portfolios and intangible assets. It provides a single net worth picture essential for wealth governance, succession planning and regulatory compliance.' },
        { q: 'Why do family offices in DIFC and ADGM need independent valuations?', a: 'DIFC and ADGM regulations require family offices to maintain accurate records of asset values for governance, reporting and compliance purposes. Independent valuations also support investment committee decisions, beneficiary distributions and inter-generational wealth transfers.' },
        { q: 'How often should a family office update its valuations?', a: 'Best practice is annual valuation updates for governance and reporting, with interim updates triggered by major transactions, market dislocations, succession events or regulatory reviews. Assetica offers retainer-based relationships for ongoing valuation support.' },
        { q: 'Can Assetica value both listed and unlisted assets for a family office?', a: 'Yes. Assetica provides valuations for unlisted private companies, private equity funds, real estate portfolios, operating businesses and illiquid assets alongside guidance on publicly traded holdings. We cover the full spectrum of family office asset classes.' },
        { q: 'What is the difference between a family office valuation and a business valuation?', a: 'A business valuation focuses on a single operating company. A family office valuation is broader — it consolidates multiple asset classes including businesses, real estate, private equity, bonds and alternative investments into a unified net asset value framework for wealth governance.' },
        { q: 'Does Assetica handle cross-border family office mandates?', a: 'Yes. Assetica has experience with family offices holding assets across UAE, UK, Saudi Arabia, India, Singapore and Europe. We coordinate multi-jurisdiction valuations and apply locally accepted standards (RICS, IFRS, IVS) in each market.' },
        { q: 'How does Assetica support succession planning for family offices?', a: 'We provide asset valuations that form the foundation of succession plans — helping families understand current wealth distribution, plan equitable beneficiary allocations, structure trusts and holding companies, and satisfy DIFC Wills Service requirements.' },
        { q: 'How long does a family office valuation engagement take?', a: 'Scope varies by complexity. A focused mandate (single business or asset class) typically takes 2–4 weeks. A comprehensive multi-asset family office valuation may take 4–10 weeks, including document collection, analysis and report issuance.' },
      ]),
      breadcrumb([
        { name: 'Home', item: `${BASE_URL}/` },
        { name: 'Family Office Valuation', item: `${BASE_URL}/family-office-valuation` },
      ]),
    ],
  },
];

// Service detail routes with per-service schemas
const serviceRoutes = [
  {
    slug: 'business-valuation',
    title: 'Business Valuation Services in Dubai & UAE | Assetica',
    intro:
      'Assetica delivers independent, credible business valuations for companies across the UAE, UK, GCC, and internationally. Whether you are raising capital, planning an exit, resolving a shareholder dispute, or meeting a regulatory requirement, our valuations provide the rigour and defensibility your situation demands.',
  },
  {
    slug: 'due-diligence',
    title: 'Due Diligence Services in Dubai & UAE | Assetica',
    intro:
      "Our thorough research and analysis reveal your business's strengths, weaknesses, and growth potential. Assetica's due diligence service minimizes risk and maximizes investment confidence in every transaction.",
  },
  {
    slug: 'business-structuring',
    title: 'Business Structuring Services in Dubai & UAE | Assetica',
    intro:
      'We establish a strong valuation foundation by assessing the legal, financial, and operational aspects of your business. Our business structuring service ensures your corporate structure is optimized for valuation, investment, and growth.',
  },
  {
    slug: 'building-pitch-deck',
    title: 'Pitch Deck Services in Dubai & UAE | Assetica',
    intro:
      "We craft compelling presentations that highlight your company's value proposition, financials, and growth prospects. Our pitch decks are designed to captivate investors and stakeholders from the first slide.",
  },
  {
    slug: 'financial-modelling',
    title: 'Financial Modelling Services in Dubai & UAE | Assetica',
    intro:
      "Our precise valuation uses financial metrics, market trends, and industry benchmarks to determine your company's worth. Advanced financial models that project future performance and guide strategic decision-making.",
  },
  {
    slug: 'buyer-seller-negotiation',
    title: 'Buyer & Seller Negotiation Advisory in Dubai & UAE | Assetica',
    intro:
      'We facilitate successful negotiations during mergers, acquisitions, or sales, ensuring favorable outcomes for all parties. Our experienced team acts as skilled intermediaries protecting your interests throughout the deal process.',
  },
  {
    slug: 'tax-valuation',
    title: 'Tax Valuation Services in Dubai & UAE | Assetica',
    intro:
      "We assess tax impacts and develop optimized strategies to enhance your company's financial health. Our tax valuations are fully compliant with UAE, UK, and international tax regulations.",
  },
  {
    slug: 'strategic-value-advisory',
    title: 'Strategic Value Advisory in Dubai & UAE | Assetica',
    intro:
      "We offer insights to enhance your company's overall value and ensure long-term growth. Our strategic value advisory service goes beyond valuation to provide a roadmap for sustainable value creation.",
  },
  {
    slug: 'business-planning',
    title: 'Business Planning Services in Dubai & UAE | Assetica',
    intro:
      'Our advanced financial models project future performance and guide strategic decision-making. Comprehensive business plans that attract investment and drive sustainable growth in competitive markets.',
  },
];

// Blog post routes with BlogPosting schema
const blogRoutes = [
  {
    slug: 'navigating-business-valuation-buying-running-business',
    title: 'Navigating the World of Business Valuation: A Step-by-Step Guide to Buying a Running Business',
    excerpt:
      'Acquiring a running business can be a strategic move to enhance your investment portfolio, diversify income streams, or venture into a new sector.',
    datePublished: '2024-10-04',
  },
  {
    slug: 'navigating-business-risks-strategic-value-advisory',
    title: 'Navigating Business Risks: Effective Risk Management through Strategic Value Advisory',
    excerpt:
      "In today's rapidly evolving business landscape, navigating risks effectively is crucial for maintaining a competitive edge and achieving sustainable growth.",
    datePublished: '2024-09-27',
  },
  {
    slug: 'selling-a-business-optimal-timing',
    title: "Selling a Business? Here's How to Determine the Optimal Timing",
    excerpt:
      'Selling a business at the right time is essential for maximizing success and profitability. Entrepreneurs must consider market conditions, financial performance, and sale preparation strategies.',
    datePublished: '2024-09-20',
  },
  {
    slug: 'mitigating-risks-business-valuation',
    title: 'Safeguard Your Company: Mitigating Risks in Business Valuation',
    excerpt:
      "Protect your business from valuation-related risks with Assetica's expertise. Understanding common pitfalls can save you significant time and money.",
    datePublished: '2024-08-08',
  },
  {
    slug: 'how-to-create-a-pitch-deck',
    title: 'How to Create a Pitch Deck: A Step-by-Step Guide',
    excerpt:
      'Assetica crafts pitch decks that captivate and highlight your value, financials, and growth prospects for maximum investor appeal.',
    datePublished: '2024-07-31',
  },
  {
    slug: 'maximize-business-potential-financial-valuations',
    title: 'Maximize Your Business Potential with Precise Financial Valuations',
    excerpt:
      "In the competitive business world, understanding your company's true value is crucial, whether you're seeking investment, planning a merger, or making strategic decisions.",
    datePublished: '2024-07-17',
  },
];

// ─── Generate ────────────────────────────────────────────────────────────────

console.log('\n🔧  Generating per-route SEO HTML with JSON-LD schemas…\n');

for (const route of staticRoutes) {
  writeRoute(route.path, route);
}

for (const svc of serviceRoutes) {
  writeRoute(`/services/${svc.slug}`, {
    title: svc.title,
    description: truncateDesc(svc.intro),
    canonical: `/services/${svc.slug}`,
    schemas: [
      serviceSchema(svc.title.replace(' | Assetica', ''), truncateDesc(svc.intro), `${BASE_URL}/services/${svc.slug}`),
      breadcrumb([
        { name: 'Home', item: `${BASE_URL}/` },
        { name: 'Services', item: `${BASE_URL}/services` },
        { name: svc.title.replace(' Services in Dubai & UAE | Assetica', '').replace(' in Dubai & UAE | Assetica', '').replace(' | Assetica', ''), item: `${BASE_URL}/services/${svc.slug}` },
      ]),
    ],
  });
}

for (const post of blogRoutes) {
  writeRoute(`/blog/${post.slug}`, {
    title: `${post.title} | Assetica`,
    description: truncateDesc(post.excerpt),
    canonical: `/blog/${post.slug}`,
    schemas: [
      blogPostingSchema(post),
      breadcrumb([
        { name: 'Home', item: `${BASE_URL}/` },
        { name: 'Blog', item: `${BASE_URL}/blog` },
        { name: post.title, item: `${BASE_URL}/blog/${post.slug}` },
      ]),
    ],
  });
}

const total = staticRoutes.length + serviceRoutes.length + blogRoutes.length;
console.log(`\n✅  SEO HTML generation complete — ${total} routes processed.\n`);
