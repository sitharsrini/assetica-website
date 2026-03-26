import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-1 flex items-center justify-center bg-slate-50">
      <div className="text-center max-w-md mx-auto px-6 py-20">
        <div className="text-6xl font-display font-bold mb-4" style={{ color: "#c9a84c" }}>404</div>
        <h1 className="font-display font-bold text-2xl text-navy mb-4">Page Not Found</h1>
        <p className="text-slate-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-colors"
          style={{ backgroundColor: "#0f2044" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a8f7a")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0f2044")}
        >
          Return Home
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default NotFound;
