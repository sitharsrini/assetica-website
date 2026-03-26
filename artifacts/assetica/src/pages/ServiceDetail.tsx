import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";

const services: Record<string, {
  title: string; subtitle: string; image: string; intro: string;
  points: string[]; process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  "due-diligence": {
    title: "Due Diligence", subtitle: "Risk Management & Business Analysis",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80",
    intro: "Our thorough research and analysis reveal your business's strengths, weaknesses, and growth potential. Assetica's due diligence service minimizes risk and maximizes investment confidence in every transaction.",
    points: ["Comprehensive financial statement analysis","Legal and regulatory compliance review","Operational efficiency assessment","Market positioning evaluation","Risk identification and quantification","Growth potential analysis","Management and team evaluation","Technology and IP assessment"],
    process: [
      { step: "01", title: "Initial Scoping", desc: "We define the scope of due diligence based on your specific transaction type and risk areas." },
      { step: "02", title: "Document Review", desc: "Comprehensive review of financial, legal, and operational documents." },
      { step: "03", title: "Analysis & Findings", desc: "In-depth analysis of all findings with risk quantification and recommendations." },
      { step: "04", title: "Report Delivery", desc: "Clear, actionable due diligence report delivered to your timeline." },
    ],
    faqs: [
      { q: "What does due diligence involve?", a: "Due diligence involves a comprehensive review of a target business's financial, legal, operational, and commercial aspects to identify risks and validate the basis for a transaction." },
      { q: "How long does due diligence take?", a: "Typically 2–4 weeks depending on the complexity of the business. We offer expedited timelines for time-sensitive transactions." },
    ],
  },
  "business-structuring": {
    title: "Business Structuring", subtitle: "Company Formation & Corporate Structure",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=80",
    intro: "We establish a strong valuation foundation by assessing the legal, financial, and operational aspects of your business. Our business structuring service ensures your corporate structure is optimized for valuation, investment, and growth.",
    points: ["Legal entity structure optimization","Shareholder agreement review","Corporate governance assessment","Financial structure analysis","Tax-efficient structuring advice","Investment readiness preparation","Regulatory compliance review","Exit strategy alignment"],
    process: [
      { step: "01", title: "Current State Assessment", desc: "Review of existing corporate structure, governance, and financial arrangements." },
      { step: "02", title: "Gap Analysis", desc: "Identification of structural gaps that could affect valuation or investment readiness." },
      { step: "03", title: "Recommendations", desc: "Tailored recommendations for structural optimization aligned with your objectives." },
      { step: "04", title: "Implementation Support", desc: "Guidance through the implementation of recommended structural changes." },
    ],
    faqs: [
      { q: "Why does business structure affect valuation?", a: "Corporate structure directly impacts tax efficiency, investor attractiveness, risk allocation, and ease of investment or exit. An optimal structure can significantly enhance your business's value." },
    ],
  },
  "building-pitch-deck": {
    title: "Building Pitch Deck", subtitle: "Investor-Ready Presentations",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
    intro: "We craft compelling presentations that highlight your company's value proposition, financials, and growth prospects. Our pitch decks are designed to captivate investors and stakeholders from the first slide.",
    points: ["Executive summary and company overview","Problem and solution narrative","Market opportunity sizing","Business model articulation","Financial performance and projections","Competitive landscape analysis","Team and credentials showcase","Funding requirements and use of funds"],
    process: [
      { step: "01", title: "Discovery Session", desc: "Deep-dive into your business, objectives, and target investor audience." },
      { step: "02", title: "Content Development", desc: "Building the narrative, financial slides, and supporting data." },
      { step: "03", title: "Design & Refinement", desc: "Professional design with iterative refinement based on your feedback." },
      { step: "04", title: "Final Delivery", desc: "Investment-ready pitch deck in your preferred format." },
    ],
    faqs: [
      { q: "How many slides should a pitch deck have?", a: "Typically 12–15 slides covering the key investor questions. We tailor the length and depth based on your specific fundraising stage and audience." },
    ],
  },
  "financial-modelling": {
    title: "Financial Modelling", subtitle: "Business Financial Valuation",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1800&q=80",
    intro: "Our precise valuation uses financial metrics, market trends, and industry benchmarks to determine your company's worth. Advanced financial models that project future performance and guide strategic decision-making.",
    points: ["Discounted cash flow (DCF) analysis","Comparable company analysis","Precedent transactions analysis","Revenue projection modelling","EBITDA normalisation","Working capital analysis","Sensitivity and scenario analysis","Financial statement modelling"],
    process: [
      { step: "01", title: "Data Collection", desc: "Gathering financial statements, management accounts, and operational data." },
      { step: "02", title: "Model Building", desc: "Construction of a tailored financial model using industry-appropriate methodology." },
      { step: "03", title: "Scenario Analysis", desc: "Testing multiple scenarios to understand value range and key drivers." },
      { step: "04", title: "Valuation Report", desc: "Comprehensive report with clear valuation conclusion and supporting analysis." },
    ],
    faqs: [
      { q: "Which valuation method does Assetica use?", a: "We apply the most appropriate methodology based on your industry and purpose — typically a combination of DCF, market comparables, and precedent transactions for cross-validation." },
    ],
  },
  "buyer-seller-negotiation": {
    title: "Buyer & Seller Negotiation", subtitle: "M&A Advisory & Deal Facilitation",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=80",
    intro: "We facilitate successful negotiations during mergers, acquisitions, or sales, ensuring favorable outcomes for all parties. Our experienced team acts as skilled intermediaries protecting your interests throughout the deal process.",
    points: ["Independent valuation as negotiation anchor","Deal structuring advice","Term sheet review and negotiation","Price gap bridging strategies","Letter of intent (LOI) guidance","SPA negotiation support","Completion mechanics advice","Post-completion adjustment mechanisms"],
    process: [
      { step: "01", title: "Valuation Establishment", desc: "Independent valuation to establish a credible, defensible value anchor." },
      { step: "02", title: "Negotiation Strategy", desc: "Development of negotiation strategy aligned with your objectives and priorities." },
      { step: "03", title: "Active Negotiation Support", desc: "Participation in negotiation meetings and real-time advisory support." },
      { step: "04", title: "Deal Closing", desc: "Support through to signing and completion to ensure all terms are met." },
    ],
    faqs: [
      { q: "Does Assetica represent buyers or sellers?", a: "We can represent either buyers or sellers, or provide a neutral independent opinion. Our role is always clearly defined upfront to ensure transparency." },
    ],
  },
  "tax-valuation": {
    title: "Tax Valuation", subtitle: "Tax-Compliant Business Valuations",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80",
    intro: "We assess tax impacts and develop optimized strategies to enhance your company's financial health. Our tax valuations are fully compliant with UAE, UK, and international tax regulations.",
    points: ["Transfer pricing valuations","Share-based compensation valuations","Estate and gift tax valuations","Intangible asset valuations for tax","Thin capitalization analysis","Business reorganization valuations","Intra-group transaction valuations","VAT and corporate tax compliance"],
    process: [
      { step: "01", title: "Tax Position Review", desc: "Understanding of your current tax position and valuation requirements." },
      { step: "02", title: "Regulatory Analysis", desc: "Assessment of applicable UAE, UK, and international tax regulations." },
      { step: "03", title: "Valuation & Documentation", desc: "Defensible valuation with comprehensive documentation for tax authorities." },
      { step: "04", title: "Report & Advisory", desc: "Tax valuation report with strategic recommendations for tax optimization." },
    ],
    faqs: [
      { q: "Is a tax valuation different from a standard business valuation?", a: "Yes. Tax valuations must meet specific regulatory standards set by tax authorities. They require additional documentation, specific methodologies, and defensibility against tax authority challenge." },
    ],
  },
  "machinery-equipment-valuation": {
    title: "Machinery & Equipment Valuation", subtitle: "Asset Appraisal for All Industries",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=80",
    intro: "Assetica offers experience, reliability and transparency in the valuation of machinery and equipment for virtually every industry. Our certified appraisers deliver comprehensive asset valuations you can trust.",
    points: ["Manufacturing equipment valuation","Construction and heavy machinery","Medical and laboratory equipment","Oil and gas plant and equipment","Agricultural machinery","IT and technology assets","Fleet and transportation assets","Industrial process equipment"],
    process: [
      { step: "01", title: "Asset Register Review", desc: "Review of your asset register and identification of assets requiring valuation." },
      { step: "02", title: "Physical Inspection", desc: "On-site inspection of machinery and equipment by certified appraisers." },
      { step: "03", title: "Market Research", desc: "Research of comparable market transactions and replacement cost data." },
      { step: "04", title: "Valuation Report", desc: "Comprehensive report with individual and portfolio valuations." },
    ],
    faqs: [
      { q: "What valuation basis is used for machinery?", a: "We can value on multiple bases depending on purpose: market value, fair value, depreciated replacement cost, or orderly liquidation value. The most appropriate basis depends on the intended use of the valuation." },
    ],
  },
  "strategic-value-advisory": {
    title: "Strategic Value Advisory", subtitle: "Value Enhancement Consulting",
    image: "https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=1800&q=80",
    intro: "We offer insights to enhance your company's overall value and ensure long-term growth. Our strategic value advisory service goes beyond valuation to provide a roadmap for sustainable value creation.",
    points: ["Value gap analysis","Value driver identification","Strategic growth planning","Operational efficiency optimization","Revenue enhancement strategies","Cost reduction opportunities","M&A target identification","Exit readiness assessment"],
    process: [
      { step: "01", title: "Value Baseline", desc: "Establishing your current business value and key value drivers." },
      { step: "02", title: "Gap & Opportunity Analysis", desc: "Identifying gaps between current and potential value." },
      { step: "03", title: "Strategic Roadmap", desc: "Development of a prioritized roadmap for value enhancement." },
      { step: "04", title: "Implementation & Review", desc: "Support through implementation with regular progress reviews." },
    ],
    faqs: [
      { q: "How does strategic value advisory differ from standard consulting?", a: "Our strategic value advisory is specifically focused on measurable value creation, grounded in rigorous financial analysis and valuation methodology — not just strategic recommendations." },
    ],
  },
  "business-planning": {
    title: "Business Planning", subtitle: "Advanced Financial Business Plans",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
    intro: "Our advanced financial models project future performance and guide strategic decision-making. Comprehensive business plans that attract investment and drive sustainable growth in competitive markets.",
    points: ["Executive summary and business overview","Market analysis and competitive positioning","Revenue model and financial projections","Operational plan and resource requirements","Marketing and sales strategy","Risk assessment and mitigation plan","Funding requirements and use of funds","Exit strategy and investor returns"],
    process: [
      { step: "01", title: "Business Understanding", desc: "Deep understanding of your business model, market, and strategic objectives." },
      { step: "02", title: "Financial Modelling", desc: "Construction of detailed financial projections using rigorous assumptions." },
      { step: "03", title: "Plan Development", desc: "Development of a comprehensive, investor-grade business plan document." },
      { step: "04", title: "Review & Finalisation", desc: "Iterative review with management to ensure accuracy and completeness." },
    ],
    faqs: [
      { q: "What is included in Assetica's business plan service?", a: "Our business planning service includes a comprehensive written plan, detailed financial model with 3–5 year projections, market analysis, competitive landscape assessment, and a management presentation." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const svc = slug ? services[slug] : null;

  if (!svc) return (
    <div className="min-h-screen" style={{ backgroundColor: "#f4f6f9" }}>
      <Navbar />
      <div className="pt-32 text-center">
        <h1 className="font-display font-bold text-2xl" style={{ color: "#012241" }}>Service not found</h1>
        <Link to="/services" className="text-[#4BD1A0] mt-4 inline-block">← Back to Services</Link>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f4f6f9" }}>
      <Navbar />
      <div className="pt-[72px] px-4 md:px-8">
        <div className="relative rounded-3xl overflow-hidden" style={{ height: "clamp(280px, 45vh, 420px)" }}>
          <img src={svc.image} alt={`${svc.title} — Assetica Dubai`} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#012241]/50 via-[#012241]/60 to-[#012241]/80" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4BD1A0" }}>{svc.subtitle}</p>
            <h1 className="font-display font-bold text-white text-3xl md:text-5xl max-w-3xl leading-tight">{svc.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#4BD1A0] transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> All Services
        </Link>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          <div>
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-6">
                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Overview</p>
                    <div className="w-8 h-0.5 bg-[#4BD1A0]" />
                  </div>
                  <div>
                    <p className="text-slate-800 text-lg md:text-xl leading-relaxed font-medium">{svc.intro}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-6">
                <h2 className="font-display font-bold text-xl mb-6" style={{ color: "#012241" }}>What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {svc.points.map(p => (
                    <div key={p} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#4BD1A0" }} />
                      <span className="text-slate-600 text-sm leading-relaxed">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-6">
                <h2 className="font-display font-bold text-xl mb-6" style={{ color: "#012241" }}>Our Process</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {svc.process.map(s => (
                    <div key={s.step} className="flex gap-4">
                      <div className="text-2xl font-display font-bold shrink-0" style={{ color: "#4BD1A0" }}>{s.step}</div>
                      <div>
                        <h3 className="font-display font-semibold text-sm mb-1" style={{ color: "#012241" }}>{s.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <FaqSection faqs={svc.faqs} title={`${svc.title} FAQs`} subtitle="Common questions about this service." />
          </div>

          <div className="lg:sticky lg:top-28">
            <AnimatedSection direction="right">
              <div className="rounded-2xl p-6 mb-4 text-white" style={{ backgroundColor: "#012241" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4BD1A0" }}>Get Started</p>
                <h3 className="font-display font-bold text-lg mb-2">Request a Free Consultation</h3>
                <p className="text-white/60 text-sm mb-5">Speak to our experts about your specific valuation needs.</p>
                <Link to="/contact" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full font-bold text-sm" style={{ backgroundColor: "#4BD1A0", color: "#012241" }}>
                  Get in Touch <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a href="tel:+971521551198" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full font-semibold text-sm mt-2 border border-white/20 text-white">
                  +971 52 155 1198
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-display font-bold text-sm mb-3" style={{ color: "#012241" }}>Other Services</h3>
                <div className="flex flex-col gap-2">
                  {["Due Diligence","Business Structuring","Building Pitch Deck","Financial Modelling","Buyer & Seller Negotiation","Tax Valuation","Machinery & Equipment Valuation","Strategic Value Advisory","Business Planning"]
                    .filter(n => n.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-') !== slug)
                    .slice(0, 6)
                    .map(n => (
                    <Link key={n} to={`/services/${n.toLowerCase().replace(/[&\s]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`} className="text-sm text-slate-500 hover:text-[#4BD1A0] transition-colors py-1 border-b border-slate-100 last:border-0">{n}</Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-20">
        <AnimatedSection>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100">
            <div className="text-center mb-6">
              <h2 className="font-display font-bold text-xl mb-1" style={{ color: "#012241" }}>Enquire About {svc.title}</h2>
              <p className="text-slate-500 text-sm">Fill in the form and our specialists will be in touch within 1 business day.</p>
            </div>
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
