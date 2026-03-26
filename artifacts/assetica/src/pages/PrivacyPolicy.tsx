import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <section className="pt-32 pb-10" style={{ backgroundColor: "#0f2044" }}>
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display font-bold text-4xl text-white">Privacy Policy</h1>
      </div>
    </section>
    <section className="py-16 bg-white flex-1">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="prose prose-slate max-w-none">
            <p>Last updated: 1 January 2026</p>
            <h2>1. Information We Collect</h2>
            <p>Assetica Valuation Pte. Ltd. ("Assetica", "we", "us") collects personal data you provide when requesting valuations or contacting us, including name, company, email, and phone number.</p>
            <h2>2. How We Use Your Information</h2>
            <p>We use your data to provide valuation services, respond to enquiries, and send relevant service updates. We do not sell your personal data.</p>
            <h2>3. Data Retention</h2>
            <p>Client data is retained for seven years in accordance with professional and regulatory obligations, then securely destroyed.</p>
            <h2>4. Your Rights (PDPA)</h2>
            <p>Under Singapore's Personal Data Protection Act, you have the right to access, correct, or withdraw consent for use of your personal data. Contact us at info@assetica.net.</p>
            <h2>5. Contact</h2>
            <p>Data Protection Officer: dpo@assetica.net</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
    <Footer />
  </div>
);

export default PrivacyPolicy;
