import { useState } from "react";
import { ArrowUpRight, CheckCircle, Phone, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface ContactFormProps {
  serviceContext?: string;
}

const ContactForm = ({ serviceContext }: ContactFormProps) => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    assetType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const context = serviceContext ? `Service Interest: ${serviceContext}\n` : "";
    const asset = form.assetType ? `Asset Type: ${form.assetType}\n` : "";
    const body = encodeURIComponent(
      `Subject: Valuation Enquiry from ${form.name}\n\n${context}${asset}Name: ${form.name}\nCompany: ${form.company || "N/A"}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:info@assetica.net?body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-14">
      <AnimatedSection>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#1a8f7a" }}>Get In Touch</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4 leading-tight">
                Request a Free Consultation
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Our accredited valuers will review your requirements and respond within one business day with a tailored proposal.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:info@assetica.net"
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-navy hover:text-[#1a8f7a] transition-colors"
                >
                  <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(26,143,122,0.1)" }}>
                    <Mail className="w-4 h-4" style={{ color: "#1a8f7a" }} />
                  </span>
                  info@assetica.net
                </a>
                <a
                  href="tel:+6561234567"
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-navy hover:text-[#1a8f7a] transition-colors"
                >
                  <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(26,143,122,0.1)" }}>
                    <Phone className="w-4 h-4" style={{ color: "#1a8f7a" }} />
                  </span>
                  +65 6123 4567
                </a>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(26,143,122,0.1)" }}>
                    <CheckCircle className="w-7 h-7" style={{ color: "#1a8f7a" }} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy">Enquiry Sent!</h3>
                  <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                    Your enquiry has been submitted. Our team will be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-semibold hover:underline mt-2"
                    style={{ color: "#1a8f7a" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5" htmlFor="name">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-[#1a8f7a] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5" htmlFor="company">
                        Company
                      </label>
                      <input
                        id="company" name="company" type="text"
                        value={form.company} onChange={handleChange}
                        placeholder="ABC Holdings Pte. Ltd."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-[#1a8f7a] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5" htmlFor="phone">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone" name="phone" type="tel" required
                        value={form.phone} onChange={handleChange}
                        placeholder="+65 9XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-[#1a8f7a] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5" htmlFor="email">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-[#1a8f7a] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5" htmlFor="assetType">
                      Asset Type
                    </label>
                    <select
                      id="assetType" name="assetType"
                      value={form.assetType} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy focus:outline-none focus:border-[#1a8f7a] focus:bg-white transition-colors"
                    >
                      <option value="">Select asset type...</option>
                      <option value="Property">Property</option>
                      <option value="Plant & Machinery">Plant & Machinery</option>
                      <option value="Business / Equity">Business / Equity</option>
                      <option value="Marine Assets">Marine Assets</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5" htmlFor="message">
                      How can we help? <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message" name="message" required rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder={serviceContext ? `I'd like to know more about ${serviceContext}...` : "Describe the assets you need valued and any specific requirements..."}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-[#1a8f7a] focus:bg-white transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-colors shadow-md w-full sm:w-auto"
                    style={{ backgroundColor: "#0f2044" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a8f7a")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0f2044")}
                  >
                    Submit Enquiry <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    All enquiries are handled confidentially. Free initial consultation for all new clients.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactForm;
