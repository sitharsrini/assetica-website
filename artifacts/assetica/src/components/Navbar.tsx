import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center">
            <span className="text-white font-display font-bold text-base">A</span>
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-navy text-lg tracking-tight block">
              Assetica
            </span>
            <span className="text-[10px] text-[#1a8f7a] font-semibold tracking-widest block -mt-0.5 uppercase">
              Valuation
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-[#1a8f7a]"
                  : "text-slate-600 hover:text-navy"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+6597745695"
            className="text-sm text-slate-500 hover:text-[#1a8f7a] transition-colors font-medium"
          >
            Get a Quote
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 bg-navy text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-navy-light transition-colors"
          >
            Request Valuation <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-navy p-1"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-1 ${
                  location.pathname === link.path
                    ? "text-[#1a8f7a]"
                    : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 bg-navy text-white px-5 py-3 rounded-full text-sm font-semibold mt-2"
            >
              Request Valuation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
