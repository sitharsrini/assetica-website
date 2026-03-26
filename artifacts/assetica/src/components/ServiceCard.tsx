import { Link } from "react-router-dom";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard = ({ title, description, slug, icon: Icon, delay = 0 }: ServiceCardProps) => (
  <Link
    to={`/services/${slug}`}
    className="group flex flex-col gap-4 p-7 rounded-2xl border border-slate-100 bg-white hover:border-[#1a8f7a]/30 hover:shadow-lg transition-all duration-300"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(26,143,122,0.1)" }}>
      <Icon className="w-6 h-6" style={{ color: "#1a8f7a" }} />
    </div>
    <div>
      <h3 className="font-display font-semibold text-navy text-lg mb-2 group-hover:text-[#1a8f7a] transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
    <div className="mt-auto flex items-center gap-1 text-sm font-semibold" style={{ color: "#1a8f7a" }}>
      Learn More <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </div>
  </Link>
);

export default ServiceCard;
