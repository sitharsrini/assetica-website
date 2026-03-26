import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";

const heroImg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80";

const services = [
  {
    slug: "due-diligence",
    title: "Due Diligence",
    desc: "Our thorough research and analysis reveal your business's strengths, weaknesses, and growth potential. We provide comprehensive due diligence reports that minimize risk and maximize investment confidence.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    badge: "Risk Management",
  },
  {
    slug: "business-structuring",
    title: "Business Structuring",
    desc: "We establish a strong valuation foundation by assessing legal, financial, and operational aspects of your business. Our experts help structure your business for optimal valuation outcomes.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    badge: "Foundation Building",
  },
  {
    slug: "building-pitch-deck",
    title: "Building Pitch Deck",
    desc: "We craft compelling presentations that highlight your company's value proposition, financials, and growth prospects. Designed to captivate investors and stakeholders.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80",
    badge: "Investor Ready",
  },
  {
    slug: "financial-modelling",
    title: "Financial Modelling",
    desc: "Our precise valuation uses financial metrics, market trends, and industry benchmarks to determine your company's worth. Advanced models that project future performance and guide strategy.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=900&q=80",
    badge: "Data-Driven",
  },
  {
    slug: "buyer-seller-negotiation",
    title: "Buyer & Seller Negotiation",
    desc: "We facilitate successful negotiations during mergers, acquisitions, or sales, ensuring favorable outcomes for all parties. Expert intermediaries protecting your interests.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872952f?auto=format&fit=crop&w=900&q=80",
    badge: "M&A Advisory",
  },
  {
    slug: "tax-valuation",
    title: "Tax Valuation",
    desc: "We assess tax impacts and develop optimized strategies to enhance your company's financial health. Compliant, transparent tax valuations for UAE, UK and international markets.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    badge: "Regulatory Compliant",
  },
  {
    slug: "strategic-value-advisory",
    title: "Strategic Value Advisory",
    desc: "We offer insights to enhance your company's overall value and ensure long-term growth. Strategic guidance aligned with your business objectives and market opportunities.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=900&q=80",
    badge: "Growth Strategy",
  },
  {
    slug: "business-planning",
    title: "Business Planning",
    desc: "Our advanced financial models project future performance and guide strategic decision-making. Comprehensive business plans that attract investment and drive sustainable growth.",
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=900&q=80",
    badge: "Future-Focused",
  },
];

const servicesFaqs = [
  {
    q: "What is included in Assetica's due diligence service?",
    a: "Our due diligence service includes thorough research and analysis of your business covering financial health, operational efficiency, legal compliance, market positioning, and growth potential. We provide a comprehensive report that supports informed investment decisions and minimizes risk.",
  },
  {
    q: "How does Assetica's financial modelling work?",
    a: "Our financial modelling service uses advanced analytical tools to build precise valuation models. We analyze your financial statements, benchmark against industry peers, integrate market trends, and project future performance to determine your company's true worth.",
  },
  {
    q: "What is a pitch deck and why do I need one?",
    a: "A pitch deck is a professional presentation that highlights your company's value proposition, business model, financial performance, and growth prospects. It is essential for raising capital, attracting investors, or presenting to strategic partners. Assetica creates pitch decks that captivate and communicate your value clearly.",
  },
  {
    q: "Do you provide machinery valuation for all industries?",
    a: "Yes. Assetica's machinery and equipment valuation service covers all industries including manufacturing, construction, oil and gas, healthcare, agriculture, and technology. Our certified appraisers have experience with all major asset types.",
  },
  {
    q: "How does Assetica support buyer and seller negotiations?",
    a: "Our team acts as experienced intermediaries, providing independent valuation opinions and negotiation support to both buyers and sellers. We help structure deals that are fair, transparent, and favorable, ensuring successful outcomes for all parties in mergers, acquisitions, and business sales.",
  },
];

const Services = () => (
  <div className="min-h-screen" style={{ backgroundColor: "#f4f6f9" }}>
    <Navbar />

    <div className="pt-[72px] px-4 md:px-8">
      <div className="relative rounded-3xl overflow-hidden" style={{ height: "clamp(280px, 45vh, 420px)" }}>
        <img src={heroImg} alt="Business Valuation Services in Dubai" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#012241]/50 via-[#012241]/60 to-[#012241]/80" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4BD1A0" }}>Our Services</p>
          <h1 className="font-display font-bold text-white text-3xl md:text-5xl max-w-3xl leading-tight">
            Professional Business Valuation Services in Dubai
          </h1>
          <p className="text-white/70 mt-4 text-sm md:text-base max-w-2xl leading-relaxed">
            Explore Assetica's specialized business valuation services designed to empower your financial decisions across the UAE, UK and globally.
          </p>
        </div>
      </div>
    </div>

    {/* Services Grid */}
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <AnimatedSection className="mb-12">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">What We Do</p>
            <div className="w-8 h-0.5 bg-[#4BD1A0]" />
          </div>
          <div>
            <p className="text-slate-800 text-xl md:text-2xl leading-relaxed font-medium max-w-3xl">
              Discover <span style={{ color: "#4BD1A0" }} className="font-semibold">Assetica's business valuation services</span> around the world — offering independent valuations for businesses and assets to ensure compliance and confident decisions.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((svc, i) => (
          <AnimatedSection key={svc.slug} delay={i * 0.06}>
            <Link to={`/services/${svc.slug}`} className="group block">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#4BD1A0]/30 transition-all duration-300 h-full">
                <div className="relative h-44 overflow-hidden">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012241]/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{svc.badge}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: "#012241" }}>{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#4BD1A0" }}>
                    Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>

    <FaqSection
      faqs={servicesFaqs}
      title="Service-Related FAQs"
      subtitle="Common questions about our business valuation services in Dubai."
    />

    {/* Contact Form */}
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-20">
      <AnimatedSection>
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-2" style={{ color: "#012241" }}>Request a Valuation</h2>
            <p className="text-slate-500 text-sm">Tell us about your business and we'll match you with the right valuation service.</p>
          </div>
          <ContactForm />
        </div>
      </AnimatedSection>
    </div>

    <Footer />
  </div>
);

export default Services;
