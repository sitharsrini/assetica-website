import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

const serviceData: Record<string, { title: string; description: string; keyPoints: string[]; methodology: string[] }> = {
  "property-valuation": {
    title: "Property Valuation",
    description: "Assetica provides independent, RICS Red Book-compliant property valuations for all purposes — financing, acquisition, disposal, financial reporting, insurance, and statutory requirements. Our team has deep expertise across Singapore, Malaysia, Indonesia, and the wider ASEAN region.",
    keyPoints: [
      "Residential, commercial, industrial, hospitality, and development land",
      "RICS and SISV accredited valuers",
      "Mortgage and loan security valuations",
      "IFRS fair value and SFRS financial reporting",
      "Compulsory acquisition and statutory valuations",
      "Portfolio valuations for REITs and institutional investors",
    ],
    methodology: ["Sales Comparison Approach", "Income Approach (DCF / Direct Capitalisation)", "Cost Approach", "Residual / Development Appraisal"],
  },
  "plant-machinery": {
    title: "Plant & Machinery Valuation",
    description: "Our plant and machinery valuers provide rigorous appraisals of manufacturing equipment, industrial plant, construction machinery, and specialised technical assets for insurance, financing, M&A, and financial reporting purposes.",
    keyPoints: [
      "Manufacturing plant and process equipment",
      "Construction and earthmoving machinery",
      "Oil & gas and petrochemical equipment",
      "Food & beverage processing lines",
      "Printing and packaging machinery",
      "Aerospace and defence assets",
    ],
    methodology: ["Market Approach (Comparable Sales)", "Cost Approach (Depreciated Replacement Cost)", "Income Approach", "In-situ vs. Forced Liquidation Valuations"],
  },
  "business-valuation": {
    title: "Business Valuation",
    description: "Assetica's business valuation team delivers independent enterprise and equity valuations for M&A, shareholder disputes, financial reporting, restructuring, and litigation support.",
    keyPoints: [
      "Enterprise and equity value opinions",
      "Purchase price allocation (PPA)",
      "Goodwill and intangible asset valuation",
      "Minority and control interest valuations",
      "Fair value for IFRS 3 and SFRS 103",
      "Expert witness and dispute support",
    ],
    methodology: ["Discounted Cash Flow (DCF)", "Market Multiples / Comparable Transactions", "Net Asset Value (NAV)", "Earnings-Based Approaches"],
  },
  "marine-asset-valuation": {
    title: "Marine Asset Valuation",
    description: "Our marine valuation specialists have extensive experience across all categories of maritime and offshore assets — from cargo vessels to drilling rigs, and from port facilities to superyachts.",
    keyPoints: [
      "Bulk carriers, tankers, container ships, and specialised vessels",
      "Offshore drilling rigs and production platforms",
      "OSVs, tugs, barges, and workboats",
      "Port facilities and terminals",
      "Yacht and leisure vessel appraisals",
      "Salvage and wreck assessments",
    ],
    methodology: ["Market Comparable Sales", "Income Approach (Earnings / Time-Charter)", "Cost Approach (Newbuilding Less Depreciation)", "Forced Sale / Insurance Value"],
  },
  "infrastructure-valuation": {
    title: "Infrastructure Valuation",
    description: "We value energy, utilities, transport, and public infrastructure assets for regulatory purposes, M&A, project finance, and government clients across Asia-Pacific.",
    keyPoints: [
      "Power generation and renewable energy assets",
      "Water and wastewater utilities",
      "Toll roads, bridges, and transport infrastructure",
      "Telecommunications networks",
      "Ports and logistics facilities",
      "PPP and concession assets",
    ],
    methodology: ["Regulatory Asset Base (RAB) Approach", "Discounted Cash Flow (DCF)", "Infrastructure Market Comparables", "Cost Approach"],
  },
  "financial-reporting": {
    title: "Financial Reporting Valuation",
    description: "We support preparers and auditors with IFRS and SFRS-compliant valuations for purchase price allocation, impairment testing, and fair value disclosures.",
    keyPoints: [
      "IFRS 3 / SFRS 103 purchase price allocation",
      "IAS 36 / SFRS 136 impairment testing",
      "IFRS 13 / SFRS 113 fair value measurement",
      "IFRS 16 lease right-of-use asset valuations",
      "Auditor-ready reports with full methodology disclosure",
      "Collaboration with Big 4 and mid-tier audit firms",
    ],
    methodology: ["Income Approach (DCF)", "Market Approach", "Cost Approach (DRC)", "Multi-Period Excess Earnings Method (MPEEM)"],
  },
  "litigation-support": {
    title: "Litigation Support",
    description: "Assetica's valuers provide independent expert witness reports and testimony for courts, arbitral tribunals, and regulatory proceedings in Singapore and across Asia.",
    keyPoints: [
      "Expert witness reports to SICC and High Court standards",
      "International arbitration (SIAC, ICC, LCIA)",
      "Minority shareholder disputes",
      "Matrimonial and estate valuations",
      "Compulsory acquisition compensation",
      "Insurance loss quantification",
    ],
    methodology: ["Independent Assessment", "Cross-examination Ready Reports", "Joint Expert Procedures", "Hot-Tubbing Support"],
  },
  "insurance-valuation": {
    title: "Insurance Valuation",
    description: "We prepare reinstatement cost assessments and replacement value appraisals to ensure your assets are adequately covered.",
    keyPoints: [
      "Reinstatement Cost Assessments (RCA) for property",
      "Replacement value for plant and equipment",
      "Marine hull and cargo insurance values",
      "Scheduled asset reinstatement programmes",
      "Loss adjusting support",
    ],
    methodology: ["Reinstatement Cost Assessment (RCA)", "Replacement Cost Approach", "Agreed Value / Market Value"],
  },
  "esg-asset-assessment": {
    title: "ESG Asset Assessment",
    description: "We integrate environmental, social, and governance factors into asset valuations where material, helping investors and lenders understand sustainability-related risks and value drivers.",
    keyPoints: [
      "Green building and sustainability premium analysis",
      "Carbon risk and stranded asset assessment",
      "Climate risk scenario analysis",
      "Alignment with TCFD recommendations",
      "Green loan and sustainability-linked financing support",
    ],
    methodology: ["Adjusted Market Value", "Scenario-Based DCF", "Stranded Asset Risk Weighting", "ESG Factor Overlay"],
  },
  "feasibility-studies": {
    title: "Feasibility Studies",
    description: "We conduct highest and best use studies, development appraisals, and investment analyses to support strategic asset decisions.",
    keyPoints: [
      "Highest and best use analysis",
      "Development feasibility and appraisal",
      "Market demand and supply studies",
      "Investment analysis and returns modelling",
      "Site selection and due diligence",
    ],
    methodology: ["Residual Land Value Approach", "DCF Sensitivity Analysis", "Market Comparable Analysis", "Risk-Adjusted Returns Modelling"],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : undefined;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display font-bold text-2xl text-navy mb-4">Service Not Found</h1>
            <Link to="/services" className="text-sm font-semibold" style={{ color: "#1a8f7a" }}>
              ← Back to Services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: "#0f2044" }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm mb-6 transition-colors" style={{ color: "rgba(226,232,240,0.6)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#22b09a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.6)")}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight max-w-2xl">
              {service.title}
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(226,232,240,0.75)" }}>
              {service.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="font-display font-bold text-2xl text-navy mb-6">What We Cover</h2>
              <div className="flex flex-col gap-3">
                {service.keyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#1a8f7a" }} />
                    <span className="text-slate-600 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <h2 className="font-display font-bold text-2xl text-navy mb-6">Methodology</h2>
              <div className="flex flex-col gap-3">
                {service.methodology.map((method, i) => (
                  <div key={method} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-display font-bold text-sm" style={{ color: "#c9a84c" }}>0{i + 1}</span>
                    <span className="text-slate-600 text-sm font-medium">{method}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="font-display font-bold text-3xl text-navy mb-4">Request This Service</h2>
            </div>
          </AnimatedSection>
          <ContactForm serviceContext={service.title} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
