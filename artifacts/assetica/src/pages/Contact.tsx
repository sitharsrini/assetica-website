import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

const Contact = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: "#0f2044" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>Contact</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Get In Touch</h1>
          <p className="text-lg max-w-xl" style={{ color: "rgba(226,232,240,0.7)" }}>
            We respond to all enquiries within one business day. Free initial consultation for all clients.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {[
            { icon: Mail, title: "Email", value: "info@assetica.net", href: "mailto:info@assetica.net" },
            { icon: Phone, title: "Phone", value: "+65 6123 4567", href: "tel:+6561234567" },
            { icon: MapPin, title: "Office", value: "1 Raffles Place, #20-01, Singapore 048616", href: "#" },
          ].map(({ icon: Icon, title, value, href }) => (
            <AnimatedSection key={title}>
              <a href={href} className="block p-8 bg-white rounded-xl border border-slate-100 hover:border-[#1a8f7a]/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(26,143,122,0.1)" }}>
                  <Icon className="w-6 h-6" style={{ color: "#1a8f7a" }} />
                </div>
                <h4 className="font-semibold text-navy mb-1">{title}</h4>
                <p className="text-slate-500 text-sm">{value}</p>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4 p-5 bg-white rounded-xl border border-slate-100 max-w-md">
            <Clock className="w-5 h-5 shrink-0" style={{ color: "#1a8f7a" }} />
            <div>
              <p className="text-sm font-semibold text-navy">Office Hours</p>
              <p className="text-xs text-slate-500">Mon – Fri: 9:00 AM – 6:00 PM SGT</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl text-navy mb-4">Send Us an Enquiry</h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Describe your valuation requirements and we'll prepare a tailored proposal.
            </p>
          </div>
        </AnimatedSection>
        <ContactForm />
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;
