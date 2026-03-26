import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface FaqItem { q: string; a: string; }
interface FaqSectionProps { faqs: FaqItem[]; title?: string; subtitle?: string; }

const FaqSection = ({ faqs, title = "Frequently Asked Questions", subtitle }: FaqSectionProps) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
      <AnimatedSection className="text-center mb-10">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">FAQs</p>
        <h2 className="font-display font-bold text-2xl md:text-3xl mb-3" style={{ color: "#012241" }}>{title}</h2>
        {subtitle && <p className="text-slate-500 text-sm max-w-lg mx-auto">{subtitle}</p>}
      </AnimatedSection>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <AnimatedSection key={i} delay={i * 0.04}>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-semibold text-sm leading-snug" style={{ color: "#012241" }}>{faq.q}</span>
                <ChevronDown className="w-4 h-4 shrink-0 mt-0.5 transition-transform duration-300" style={{ color: "#4BD1A0", transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
