import { Building2, Cog, BarChart3, Ship, Network, FileText, Scale, Shield, Leaf, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

const services = [
  { title: "Property Valuation", description: "Market, mortgage, and statutory valuations for all property types — residential, commercial, industrial, hospitality, and development land.", slug: "property-valuation", icon: Building2 },
  { title: "Plant & Machinery", description: "Expert appraisals of manufacturing plant, process equipment, construction machinery, and specialised technical assets for all purposes.", slug: "plant-machinery", icon: Cog },
  { title: "Business Valuation", description: "Independent enterprise and equity valuations for M&A, shareholder disputes, buy/sell agreements, restructuring, and financial reporting.", slug: "business-valuation", icon: BarChart3 },
  { title: "Marine Asset Valuation", description: "Vessel appraisals, offshore platform assessments, port facility valuations, and yacht appraisals across all marine categories.", slug: "marine-asset-valuation", icon: Ship },
  { title: "Infrastructure Valuation", description: "Regulatory asset base valuations, toll roads, utilities, power generation, and telecommunications infrastructure.", slug: "infrastructure-valuation", icon: Network },
  { title: "Financial Reporting", description: "IFRS 13, SFRS 116, and purchase price allocation valuations for audit and financial reporting compliance.", slug: "financial-reporting", icon: FileText },
  { title: "Litigation Support", description: "Expert witness services and independent valuation opinions for dispute resolution, arbitration, and court proceedings.", slug: "litigation-support", icon: Scale },
  { title: "Insurance Valuation", description: "Replacement cost and reinstatement valuations for property and assets to ensure adequate insurance coverage.", slug: "insurance-valuation", icon: Shield },
  { title: "ESG Asset Assessment", description: "Sustainability-adjusted valuations incorporating environmental risk, carbon exposure, and ESG factor analysis.", slug: "esg-asset-assessment", icon: Leaf },
  { title: "Feasibility Studies", description: "Highest and best use studies, development appraisals, and investment analysis for strategic asset decisions.", slug: "feasibility-studies", icon: TrendingUp },
];

const Services = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: "#0f2044" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>Our Services</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 max-w-2xl leading-tight">
            Comprehensive Valuation Across All Asset Classes
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "rgba(226,232,240,0.7)" }}>
            Our accredited team delivers rigorous, independent valuations for every purpose and asset type.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 70}>
              <ServiceCard {...service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#1a8f7a" }}>How It Works</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy">Our Valuation Process</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Consultation", desc: "We discuss your requirements, asset details, and purpose of valuation." },
            { step: "02", title: "Inspection", desc: "Our valuers conduct a thorough physical inspection of the asset." },
            { step: "03", title: "Analysis", desc: "Market research, comparable analysis, and financial modelling are completed." },
            { step: "04", title: "Report", desc: "A detailed, signed valuation report is delivered to the agreed standard." },
          ].map(({ step, title, desc }, i) => (
            <AnimatedSection key={step} delay={i * 100}>
              <div className="flex flex-col gap-4">
                <div className="text-3xl font-display font-bold" style={{ color: "#c9a84c" }}>{step}</div>
                <h4 className="font-semibold text-navy text-lg">{title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl text-navy mb-4">Request a Service</h2>
          </div>
        </AnimatedSection>
        <ContactForm />
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
