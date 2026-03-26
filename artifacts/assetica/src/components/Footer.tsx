import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";

const servicesCol1 = [
  { name: "Property Valuation", slug: "property-valuation" },
  { name: "Plant & Machinery", slug: "plant-machinery" },
  { name: "Business Valuation", slug: "business-valuation" },
  { name: "Marine Asset Valuation", slug: "marine-asset-valuation" },
  { name: "Infrastructure Valuation", slug: "infrastructure-valuation" },
];

const servicesCol2 = [
  { name: "Financial Reporting", slug: "financial-reporting" },
  { name: "Litigation Support", slug: "litigation-support" },
  { name: "Insurance Valuation", slug: "insurance-valuation" },
  { name: "ESG Asset Assessment", slug: "esg-asset-assessment" },
  { name: "Feasibility Studies", slug: "feasibility-studies" },
];

const Footer = () => (
  <footer style={{ backgroundColor: "#0f2044", color: "#e2e8f0" }}>
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#c9a84c" }}>
                <span className="text-white font-display font-bold text-lg">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg leading-tight text-white">Assetica</span>
                <span className="block text-xs -mt-0.5" style={{ color: "#22b09a" }}>Valuation Pte. Ltd.</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(226,232,240,0.6)" }}>
              Independent, accredited asset valuation services for businesses, financial institutions, and legal professionals across Southeast Asia.
            </p>
            <div className="flex items-center gap-3 mb-6">
              {[
                { href: "https://linkedin.com/company/assetica", label: "LinkedIn", icon: Linkedin },
                { href: "https://twitter.com/assetica", label: "Twitter", icon: Twitter },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "rgba(226,232,240,0.5)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(34,176,154,0.2)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#22b09a";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(226,232,240,0.5)";
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm transition-colors" style={{ color: "rgba(226,232,240,0.6)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#22b09a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.6)")}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5" style={{ color: "#22b09a" }}>Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm" style={{ color: "rgba(226,232,240,0.6)" }}>
              <a href="mailto:info@assetica.net" className="flex items-start gap-2 transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.color = "#22b09a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.6)")}
              >
                <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#1a8f7a" }} />
                <span>info@assetica.net</span>
              </a>
              <a href="tel:+6561234567" className="flex items-start gap-2 transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.color = "#22b09a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.6)")}
              >
                <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#1a8f7a" }} />
                <span>+65 6123 4567</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#1a8f7a" }} />
                <span>1 Raffles Place, #20-01, One Raffles Place, Singapore 048616</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5" style={{ color: "#22b09a" }}>Our Services</h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {[...servicesCol1, ...servicesCol2].map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="text-sm leading-snug transition-colors"
                style={{ color: "rgba(226,232,240,0.6)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#22b09a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.6)")}
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(226,232,240,0.1)" }}>
        <p className="text-xs" style={{ color: "rgba(226,232,240,0.4)" }}>
          © {new Date().getFullYear()} Assetica Valuation Pte. Ltd. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs" style={{ color: "rgba(226,232,240,0.4)" }}>
          <Link to="/privacy-policy" className="transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#22b09a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.4)")}
          >Privacy Policy</Link>
          <Link to="/terms" className="transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#22b09a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.4)")}
          >Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
