import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { name: "Due Diligence", slug: "due-diligence" },
  { name: "Business Structuring", slug: "business-structuring" },
  { name: "Building Pitch Deck", slug: "building-pitch-deck" },
  { name: "Financial Modelling", slug: "financial-modelling" },
  { name: "Buyer & Seller Negotiation", slug: "buyer-seller-negotiation" },
  { name: "Tax Valuation", slug: "tax-valuation" },
  { name: "Strategic Value Advisory", slug: "strategic-value-advisory" },
  { name: "Business Planning", slug: "business-planning" },
];

const Footer = () => (
  <footer style={{ backgroundColor: "#012241", color: "#e2e8f0" }}>
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <div>
          <div className="flex items-center gap-2 mb-5">
            <img src={logo} alt="Assetica" className="h-10 w-auto brightness-0 invert" />
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.12em" }} className="text-2xl text-white">ASSETICA</span>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(226,232,240,0.65)" }}>
            Assetica is a leading independent valuation firm serving clients across the UAE, UK, and globally. We deliver precise, defensible valuations for businesses and assets.
          </p>
          <div className="flex items-center gap-3 mb-6">
            {[
              { href: "https://linkedin.com/company/assetica", icon: Linkedin, label: "LinkedIn" },
              { href: "https://twitter.com/assetica", icon: Twitter, label: "Twitter" },
              { href: "https://facebook.com/assetica", icon: Facebook, label: "Facebook" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ backgroundColor: "rgba(75,209,160,0.15)", color: "#4BD1A0" }}
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-sm" style={{ color: "rgba(226,232,240,0.65)" }}>
            <a href="tel:+971521551198" className="flex items-center gap-2 hover:text-[#4BD1A0] transition-colors">
              <Phone className="w-4 h-4 text-[#4BD1A0]" /> +971 52 155 1198
            </a>
            <a href="mailto:info@assetica.net" className="flex items-center gap-2 hover:text-[#4BD1A0] transition-colors">
              <Mail className="w-4 h-4 text-[#4BD1A0]" /> info@assetica.net
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#4BD1A0] shrink-0 mt-0.5" />
              <span>Dubai, UAE &amp; London, UK</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-[#4BD1A0]">Our Services</h4>
          <div className="grid grid-cols-1 gap-2.5">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="text-sm transition-colors hover:text-[#4BD1A0]"
                style={{ color: "rgba(226,232,240,0.65)" }}
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-[#4BD1A0]">Quick Links</h4>
          <div className="flex flex-col gap-2.5 mb-8">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Blog", path: "/blog" },
              { name: "Contact Us", path: "/contact" },
              { name: "Privacy Policy", path: "/privacy-policy" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm transition-colors hover:text-[#4BD1A0]"
                style={{ color: "rgba(226,232,240,0.65)" }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(75,209,160,0.1)", border: "1px solid rgba(75,209,160,0.2)" }}>
            <p className="text-sm font-semibold text-[#4BD1A0] mb-1">Free Consultation</p>
            <p className="text-xs mb-3" style={{ color: "rgba(226,232,240,0.6)" }}>
              Schedule a free consultation with our valuation experts today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#012241] text-xs font-bold px-4 py-2 rounded-full"
              style={{ backgroundColor: "#4BD1A0" }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>

      </div>

      <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(226,232,240,0.1)" }}>
        <p className="text-xs text-center md:text-left" style={{ color: "rgba(226,232,240,0.4)" }}>
          © {new Date().getFullYear()} Assetica. All rights reserved. Business Valuation Services in Dubai &amp; Global.
        </p>
        <div className="flex gap-6 text-xs" style={{ color: "rgba(226,232,240,0.4)" }}>
          <Link to="/privacy-policy" className="hover:text-[#4BD1A0] transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
