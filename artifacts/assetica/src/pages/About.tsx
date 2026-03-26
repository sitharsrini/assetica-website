import { Link } from "react-router-dom";
import { ArrowUpRight, Award, Globe, Users, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

const team = [
  {
    name: "David Chen",
    title: "Managing Director & Lead Valuer",
    credentials: "FRICS, FSISV, ASA",
    bio: "Over 25 years of experience in real estate and infrastructure valuation across Asia-Pacific. Former Head of Valuation at a leading Singapore bank.",
  },
  {
    name: "Sarah Lim",
    title: "Head of Plant & Machinery",
    credentials: "MRICS, Certified Machinery Appraiser",
    bio: "Specialist in industrial plant, manufacturing equipment, and offshore technical assets. Extensive experience in energy and petrochemical sectors.",
  },
  {
    name: "Raj Nair",
    title: "Director, Marine & Offshore",
    credentials: "RINA, FAISV",
    bio: "Former marine surveyor with 18 years of experience valuing vessels, offshore platforms, port infrastructure, and yacht assets across ASEAN waters.",
  },
  {
    name: "Michelle Tan",
    title: "Director, Business Valuation",
    credentials: "CFA, CPA, ASA-BV",
    bio: "Specialist in enterprise and equity valuations for M&A, restructuring, financial reporting, and litigation support across Singapore and the region.",
  },
];

const About = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 md:pt-40 md:pb-24" style={{ backgroundColor: "#0f2044" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>About Us</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight max-w-2xl">
            Asia's Trusted Independent Valuer
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(226,232,240,0.75)" }}>
            Founded with a commitment to independence and rigour, Assetica has grown into one of Southeast Asia's most respected valuation firms — serving financial institutions, corporates, legal professionals, and government bodies.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#1a8f7a" }}>Our Mission</p>
            <h2 className="font-display font-bold text-3xl text-navy mb-6">
              Delivering Valuations That Withstand Scrutiny
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              Every valuation we produce reflects our commitment to technical excellence, market awareness, and professional independence. We work to the highest international standards — RICS Red Book, IVS, and SFRS — ensuring our reports are reliable, defensible, and accepted by banks, auditors, and courts.
            </p>
            <p className="text-slate-500 leading-relaxed">
              We serve clients at critical junctures — financing, M&A, restructuring, litigation — when the accuracy and credibility of the valuation truly matters. That responsibility drives everything we do.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Award, title: "Accredited", desc: "RICS, SISV, and ASA memberships assure the highest standards." },
                { icon: Globe, title: "Regional", desc: "On-the-ground expertise across 12 Asian markets." },
                { icon: Users, title: "Expert Team", desc: "Specialists across property, machinery, marine, and business." },
                { icon: Target, title: "Independent", desc: "Absolute objectivity — no conflicts of interest, ever." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(26,143,122,0.1)" }}>
                    <Icon className="w-5 h-5" style={{ color: "#1a8f7a" }} />
                  </div>
                  <h4 className="font-semibold text-navy mb-1">{title}</h4>
                  <p className="text-sm text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#1a8f7a" }}>Our Team</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy">Meet Our Senior Valuers</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 100}>
              <div className="bg-white rounded-xl p-7 border border-slate-100">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-xl font-display font-bold text-white" style={{ backgroundColor: "#0f2044" }}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-display font-bold text-navy text-lg">{member.name}</h3>
                <p className="text-sm font-medium mb-1" style={{ color: "#1a8f7a" }}>{member.title}</p>
                <p className="text-xs text-slate-400 mb-3 font-mono">{member.credentials}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl text-navy mb-4">Work With Us</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Reach out to discuss your valuation needs. Our team is ready to help.
            </p>
          </div>
        </AnimatedSection>
        <ContactForm />
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
