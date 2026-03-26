import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

const heroImg = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=80";

export const blogPosts = [
  {
    slug: "navigating-business-valuation-buying-running-business",
    title: "Navigating the World of Business Valuation: A Step-by-Step Guide to Buying a Running Business",
    excerpt: "Acquiring a running business can be a strategic move to enhance your investment portfolio, diversify income streams, or venture into a new sector.",
    date: "Oct 4, 2024", readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    category: "Business Valuation",
    content: `<h2>Why Valuation Matters When Buying a Business</h2><p>Acquiring a running business can be a strategic move to enhance your investment portfolio, diversify income streams, or venture into a new industry sector. A precise valuation ensures you pay a fair price, understand the true risks, and identify growth opportunities. At Assetica, we guide buyers through every stage of this complex process.</p><h2>Step 1: Understand the Valuation Methods</h2><p>There are three primary approaches to business valuation: the income approach (DCF), the market approach (comparables), and the asset-based approach. Each offers different insights depending on the nature of the business.</p><h2>Step 2: Due Diligence is Non-Negotiable</h2><p>Thorough due diligence involves analyzing financial statements, contracts, customer relationships, intellectual property, and contingent liabilities that could affect future performance.</p><h2>Step 3: Engage Independent Valuation Experts</h2><p>An independent valuation from Assetica provides an unbiased opinion of value that protects your interests and provides a credible foundation for negotiations.</p>`,
  },
  {
    slug: "navigating-business-risks-strategic-value-advisory",
    title: "Navigating Business Risks: Effective Risk Management through Strategic Value Advisory",
    excerpt: "In today's rapidly evolving business landscape, navigating risks effectively is crucial for maintaining a competitive edge and achieving sustainable growth.",
    date: "Sep 27, 2024", readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=900&q=80",
    category: "Strategic Advisory",
    content: `<h2>The Intersection of Risk and Value</h2><p>In today's rapidly evolving business landscape, navigating risks effectively is crucial for maintaining a competitive edge. Strategic Value Advisory from Assetica helps businesses identify, quantify, and manage risks that could impact their overall value.</p><h2>Types of Business Risks We Address</h2><p>Market risk, operational risk, financial risk, regulatory risk, and reputational risk all significantly impact your company's valuation.</p><h2>How Strategic Value Advisory Helps</h2><p>Our advisory service provides actionable insights to enhance your company's overall value while mitigating risks that could erode it.</p>`,
  },
  {
    slug: "selling-a-business-optimal-timing",
    title: "Selling a Business? Here's How to Determine the Optimal Timing",
    excerpt: "Selling a business at the right time is essential for maximizing success and profitability. Entrepreneurs must consider market conditions, financial performance, and sale preparation strategies.",
    date: "Sep 20, 2024", readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872952f?auto=format&fit=crop&w=900&q=80",
    category: "Business Sale",
    content: `<h2>Why Timing is Everything in Business Sales</h2><p>Selling a business at the right time is essential for maximizing success and profitability. Consider market conditions, financial performance, and comprehensive sale preparation strategies.</p><h2>Key Indicators That It's the Right Time to Sell</h2><p>Strong financial performance, favorable market conditions, personal readiness, and strategic interest from potential buyers are all positive signals.</p><h2>The Role of Professional Valuation</h2><p>Assetica's business valuation and negotiation advisory services ensure you enter sale negotiations from a position of strength, armed with a credible, independent opinion of value.</p>`,
  },
  {
    slug: "mitigating-risks-business-valuation",
    title: "Safeguard Your Company: Mitigating Risks in Business Valuation",
    excerpt: "Protect your business from valuation-related risks with Assetica's expertise. Understanding common pitfalls can save you significant time and money.",
    date: "Aug 8, 2024", readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    category: "Risk Management",
    content: `<h2>Common Risks in Business Valuation</h2><p>Business valuations carry inherent risks if not conducted with rigor and independence. Overstated asset values, understated liabilities, and aggressive revenue projections are common pitfalls that can expose companies to significant financial and legal risks.</p><h2>How to Mitigate Valuation Risks</h2><p>Engaging an independent, accredited valuation firm like Assetica is the most effective way to mitigate valuation risks. Our transparent methodology and defensible assumptions protect our clients from challenge.</p>`,
  },
  {
    slug: "how-to-create-a-pitch-deck",
    title: "How to Create a Pitch Deck: A Step-by-Step Guide",
    excerpt: "Assetica crafts pitch decks that captivate and highlight your value, financials, and growth prospects for maximum investor appeal.",
    date: "Jul 31, 2024", readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    category: "Pitch Deck",
    content: `<h2>What Makes a Great Pitch Deck?</h2><p>A compelling pitch deck communicates your company's story, value proposition, financial performance, and growth prospects in a clear, visually engaging format that captivates investors.</p><h2>Key Sections Every Pitch Deck Needs</h2><p>Executive summary, problem and solution, market opportunity, business model, financials and projections, competitive landscape, team, and funding requirements.</p><h2>The Assetica Approach</h2><p>Our building pitch deck service combines financial analysis, valuation expertise, and strategic storytelling to create presentations that drive successful fundraising outcomes.</p>`,
  },
  {
    slug: "maximize-business-potential-financial-valuations",
    title: "Maximize Your Business Potential with Precise Financial Valuations",
    excerpt: "In the competitive business world, understanding your company's true value is crucial — whether you're seeking investment, planning a merger, or making strategic decisions.",
    date: "Jul 17, 2024", readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
    category: "Financial Valuation",
    content: `<h2>The Importance of Knowing Your Business's True Value</h2><p>Whether you're seeking investment, planning a merger, preparing for a sale, or making strategic growth decisions — a precise financial valuation is your foundation for confident decision-making.</p><h2>Assetica's Approach to Financial Modelling</h2><p>Our financial modelling service uses advanced analytical tools, real-time market data, and deep industry knowledge to produce valuations that are both precise and defensible. We help you understand what the numbers mean for your strategy.</p>`,
  },
];

const blogFaqs = [
  { q: "Does Assetica publish regular insights on business valuation?", a: "Yes. Assetica's blog covers business valuation, financial modelling, risk management, and strategic advisory. We publish practical insights to help business owners, investors, and professionals make better-informed decisions." },
  { q: "Where can I learn more about business valuation methods?", a: "Our blog contains comprehensive guides on valuation methodologies including the income approach, market approach, and asset-based approach. Contact our team directly for a free consultation on the best approach for your business." },
];

const Blog = () => (
  <>
    <SEOHead
      title="Business Valuation Blog | Expert Insights from Assetica Dubai"
      description="Expert insights on business valuation, M&A, due diligence and financial advisory from Assetica's team in Dubai, UAE & UK."
      canonical="/blog"
    />
    <div className="min-h-screen" style={{ backgroundColor: "#f4f6f9" }}>
    <Navbar />
    <div className="pt-[72px] px-4 md:px-8">
      <div className="relative rounded-3xl overflow-hidden" style={{ height: "clamp(250px, 40vh, 360px)" }}>
        <img src={heroImg} alt="Assetica Blog — Business Valuation Insights Dubai" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#012241]/50 via-[#012241]/60 to-[#012241]/80" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4BD1A0" }}>Blogs</p>
          <h1 className="font-display font-bold text-white text-3xl md:text-5xl max-w-3xl leading-tight">Business Valuation Insights &amp; Expert Guides</h1>
          <p className="text-white/70 mt-4 text-sm max-w-lg leading-relaxed">Practical insights on business valuation, financial modelling, M&amp;A advisory, and strategic planning from Assetica's experts in Dubai.</p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => (
          <AnimatedSection key={post.slug} delay={i * 0.06}>
            <Link to={`/blog/${post.slug}`} className="group block h-full">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#4BD1A0]/30 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3"><span className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-sm leading-snug mb-3 group-hover:text-[#4BD1A0] transition-colors flex-1" style={{ color: "#012241" }}>{post.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#4BD1A0" }}>Read More <ArrowUpRight className="w-3.5 h-3.5" /></span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
    <FaqSection faqs={blogFaqs} title="Blog FAQs" subtitle="Frequently asked questions about our business valuation insights." />
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-20">
      <AnimatedSection>
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-2" style={{ color: "#012241" }}>Have a Valuation Question?</h2>
            <p className="text-slate-500 text-sm">Our experts are happy to help with your specific valuation needs.</p>
          </div>
          <ContactForm />
        </div>
      </AnimatedSection>
    </div>
    <Footer />
  </div>
  </>
);

export default Blog;
