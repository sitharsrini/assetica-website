import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => (
  <div className="min-h-screen" style={{ backgroundColor: "#f4f6f9" }}>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <p className="font-display font-bold text-8xl mb-4" style={{ color: "#4BD1A0" }}>404</p>
      <h1 className="font-display font-bold text-2xl mb-3" style={{ color: "#012241" }}>Page Not Found</h1>
      <p className="text-slate-500 text-sm mb-8 max-w-sm">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-full font-semibold text-sm" style={{ backgroundColor: "#012241" }}>
        Back to Home
      </Link>
    </div>
    <Footer />
  </div>
);

export default NotFound;
