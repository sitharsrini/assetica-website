import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, Cog, BarChart3, Ship, Network, FileText, Scale, Shield, Leaf, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CounterStat from "@/components/CounterStat";
import ServiceCard from "@/components/ServiceCard";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Property Valuation",
    description: "Independent market valuations for residential, commercial, industrial, and mixed-use properties across Southeast Asia.",
    slug: "property-valuation",
    icon: Building2,
  },
  {
    title: "Plant & Machinery",
    description: "Comprehensive valuations of manufacturing equipment, industrial machinery, and specialised technical assets.",
    slug: "plant-machinery",
    icon: Cog,
  },
  {
    title: "Business Valuation",
    description: "Enterprise and equity valuations for mergers, acquisitions, restructuring, and financial reporting purposes.",
    slug: "business-valuation",
    icon: BarChart3,
  },
  {
    title: "Marine Asset Valuation",
    description: "Expert appraisals of vessels, offshore platforms, port facilities, and all categories of marine and offshore assets.",
    slug: "marine-asset-valuation",
    icon: Ship,
  },
  {
    title: "Infrastructure Valuation",
    description: "Valuations for energy, utilities, transport, and public infrastructure assets for government and private clients.",
    slug: "infrastructure-valuation",
    icon: Network,
  },
  {
    title: "Financial Reporting",
    description: "IFRS and SFRS-compliant valuations for purchase price allocation, impairment testing, and fair value disclosures.",
    slug: "financial-reporting",
    icon: FileText,
  },
];

const faqs = [
  {
    question: "What qualifications do your valuers hold?",
    answer: "All Assetica valuers are accredited members of recognised professional bodies including the Royal Institution of Chartered Surveyors (RICS), the Singapore Institute of Surveyors and Valuers (SISV), and the American Society of Appraisers (ASA). Our team has deep sector expertise across property, plant & machinery, marine, and business assets.",
  },
  {
    question: "How long does a valuation take?",
    answer: "Turnaround times vary by asset type and complexity. Simple property valuations typically take 3–5 business days. Business valuations and complex plant & machinery assessments may require 2–4 weeks. We can accommodate urgent timelines — please discuss your requirements with our team.",
  },
  {
    question: "What is your valuation used for?",
    answer: "Our reports are commonly used for financial reporting (IFRS/SFRS), mergers and acquisitions, bank financing and loan security, insurance placement, tax compliance, litigation support, estate planning, and investment decision-making.",
  },
  {
    question: "Do you work outside Singapore?",
    answer: "Yes. Assetica has a regional network covering Singapore, Malaysia, Indonesia, Thailand, Vietnam, and the Philippines. We also coordinate international valuations through our global affiliate network for clients with cross-border assets.",
  },
  {
    question: "How much does a valuation cost?",
    answer: "Fees depend on the asset type, volume, complexity, and required turnaround. We provide competitive, transparent fee proposals after an initial consultation at no charge. Contact us to discuss your requirements.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden" style={{ backgroundColor: "#0f2044" }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 60% 40%, #1a8f7a 0%, transparent 60%), radial-gradient(circle at 20% 80%, #c9a84c 0%, transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest border" style={{ borderColor: "rgba(201,168,76,0.4)", color: "#c9a84c", backgroundColor: "rgba(201,168,76,0.08)" }}>
                Accredited · Independent · Trusted
              </div>
              <h1 className="font-display font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
                Independent Asset<br />
                <span style={{ color: "#c9a84c" }}>Valuation</span> You Can<br />
                Rely On
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: "rgba(226,232,240,0.75)" }}>
                Assetica delivers credible, defensible valuations for property, plant & machinery, marine assets, businesses, and infrastructure — trusted by banks, corporates, and legal professionals across Southeast Asia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg"
                  style={{ backgroundColor: "#c9a84c", color: "#0f2044" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e8c96e")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a84c")}
                >
                  Request a Free Consultation <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-all"
                  style={{ borderColor: "rgba(226,232,240,0.3)", color: "white" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.6)"; (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(226,232,240,0.3)"; (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
                >
                  Our Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <CounterStat value={20} suffix="+" label="Years of Experience" />
            <CounterStat value={5000} suffix="+" label="Assets Valued" />
            <CounterStat value={12} suffix="+" label="Countries Served" />
            <CounterStat value={98} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#1a8f7a" }}>What We Do</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-4">
                End-to-End Valuation Services
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                From a single asset to a complex portfolio, Assetica has the expertise and methodology to deliver credible valuations that stand up to scrutiny.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 80}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: "#1a8f7a" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0f2044")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1a8f7a")}
              >
                View All Services <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Assetica */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#1a8f7a" }}>Why Choose Us</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-6 leading-tight">
                Credibility. Rigour. Independence.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                In valuation, the quality of the opinion is everything. Assetica combines deep sector expertise with robust methodology and absolute independence — giving clients and their stakeholders confidence in every report we issue.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { icon: Shield, title: "Fully Accredited", desc: "RICS, SISV, and ASA-credentialed valuers across all asset classes." },
                  { icon: Scale, title: "Legally Defensible", desc: "Reports accepted by courts, regulators, auditors, and financial institutions." },
                  { icon: TrendingUp, title: "Market Intelligence", desc: "Deep regional market data and sector benchmarks for rigorous, current opinions." },
                  { icon: Leaf, title: "ESG-Aware", desc: "Sustainability considerations integrated into valuations where material." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(26,143,122,0.1)" }}>
                      <Icon className="w-5 h-5" style={{ color: "#1a8f7a" }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">{title}</h4>
                      <p className="text-sm text-slate-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#0f2044", padding: "2px" }}>
                <div className="rounded-2xl p-10" style={{ background: "linear-gradient(135deg, #0f2044 0%, #1a3060 100%)" }}>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "RICS Registered", value: "Firm" },
                      { label: "SISV Corporate", value: "Member" },
                      { label: "ISO 9001", value: "Certified" },
                      { label: "MAS Approved", value: "Valuer" },
                    ].map(({ label, value }) => (
                      <div key={label} className="text-center p-5 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                        <div className="font-display font-bold text-2xl mb-1" style={{ color: "#c9a84c" }}>{value}</div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider">{label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-5 rounded-xl" style={{ backgroundColor: "rgba(26,143,122,0.15)", borderLeft: "3px solid #1a8f7a" }}>
                    <p className="text-sm text-slate-300 leading-relaxed italic">
                      "Assetica provided a thorough and defensible valuation that was accepted without challenge by our auditors and lenders. Their team's technical expertise is exceptional."
                    </p>
                    <p className="text-xs mt-3 font-semibold" style={{ color: "#1a8f7a" }}>— CFO, Singapore-listed REIT</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#1a8f7a" }}>Industries</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy">Who We Serve</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Banking & Finance",
              "Real Estate",
              "Shipping & Marine",
              "Manufacturing",
              "Legal & Insolvency",
              "Government & Public",
            ].map((industry, i) => (
              <AnimatedSection key={industry} delay={i * 60}>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-100 hover:border-[#1a8f7a]/30 hover:shadow-md transition-all">
                  <p className="text-sm font-semibold text-navy">{industry}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} />

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#1a8f7a" }}>Contact Us</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-4">Start Your Valuation Today</h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Tell us about your asset and we'll provide a tailored proposal — with no obligation.
              </p>
            </div>
          </AnimatedSection>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
