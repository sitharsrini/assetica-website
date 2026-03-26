import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, Anchor, Landmark, Factory, Scale, TreePine } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

const industries = [
  {
    icon: Landmark,
    title: "Banking & Finance",
    description: "Mortgage valuations, loan security appraisals, IFRS fair value reporting, and impairment testing for banks, insurers, and investment managers.",
    services: ["Mortgage Valuations", "Loan Security", "Fair Value Reporting", "Impairment Testing"],
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Market valuations, acquisition due diligence, portfolio assessments, and REIT valuations for developers, investors, and fund managers.",
    services: ["Market Valuations", "Portfolio Assessments", "REIT Compliance", "Development Appraisals"],
  },
  {
    icon: Anchor,
    title: "Shipping & Marine",
    description: "Vessel appraisals, offshore asset valuations, port infrastructure assessments, and ship financing support for shipowners and maritime banks.",
    services: ["Vessel Appraisals", "Offshore Platforms", "Port Facilities", "Yacht Valuations"],
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    description: "Plant, machinery, and equipment valuations for insurance, financing, mergers, and financial reporting across all industrial sectors.",
    services: ["Plant Valuation", "Equipment Appraisals", "Insurance Schedules", "M&A Support"],
  },
  {
    icon: Scale,
    title: "Legal & Insolvency",
    description: "Independent expert witness reports, court-accepted valuations, and asset appraisals for litigation, arbitration, and insolvency proceedings.",
    services: ["Expert Witness", "Court Valuations", "Insolvency Assets", "Arbitration Support"],
  },
  {
    icon: TreePine,
    title: "Government & Public Sector",
    description: "Statutory valuations, compulsory acquisition appraisals, PPP asset assessments, and government portfolio valuations.",
    services: ["Statutory Valuations", "Compulsory Acquisition", "PPP Assets", "Public Portfolio"],
  },
];

const Industries = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: "#0f2044" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>Industries</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 max-w-2xl leading-tight">
            Sector-Specific Valuation Expertise
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "rgba(226,232,240,0.7)" }}>
            We serve clients across a wide range of industries, bringing deep sector knowledge to every engagement.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(26,143,122,0.1)" }}>
                  <industry.icon className="w-6 h-6" style={{ color: "#1a8f7a" }} />
                </div>
                <h3 className="font-display font-bold text-navy text-xl mb-3">{industry.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.services.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: "rgba(15,32,68,0.07)", color: "#0f2044" }}>
                      {s}
                    </span>
                  ))}
                </div>
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
            <h2 className="font-display font-bold text-3xl text-navy mb-4">Discuss Your Industry</h2>
          </div>
        </AnimatedSection>
        <ContactForm />
      </div>
    </section>

    <Footer />
  </div>
);

export default Industries;
