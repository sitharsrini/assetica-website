import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
}

const FaqSection = ({ faqs }: FaqSectionProps) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#1a8f7a" }}>FAQ</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy">Frequently Asked Questions</h2>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-navy hover:text-[#1a8f7a] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                    style={{ color: "#1a8f7a" }}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
