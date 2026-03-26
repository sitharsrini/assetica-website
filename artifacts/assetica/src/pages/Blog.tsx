import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const posts = [
  {
    slug: "rics-red-book-vs-ivs-which-standard",
    title: "RICS Red Book vs. IVS: Which Valuation Standard Applies?",
    excerpt: "A clear overview of the two dominant international valuation standards, when each applies, and what they mean for clients and lenders in Southeast Asia.",
    date: "12 March 2026",
    readTime: "6 min read",
    category: "Standards",
  },
  {
    slug: "marine-asset-valuation-methods",
    title: "How Are Marine Assets Valued? A Guide for Shipowners and Financiers",
    excerpt: "Vessels, offshore platforms, and port facilities each require distinct methodologies. We explain the key approaches and what drives value in marine assets.",
    date: "28 February 2026",
    readTime: "8 min read",
    category: "Marine",
  },
  {
    slug: "ifrs-fair-value-reporting-singapore",
    title: "IFRS Fair Value Reporting for Singapore Entities: What You Need to Know",
    excerpt: "Financial reporting valuations under IFRS 13 and SFRS require careful methodology selection. Here's what boards and auditors should expect.",
    date: "14 February 2026",
    readTime: "5 min read",
    category: "Financial Reporting",
  },
  {
    slug: "esg-and-property-values",
    title: "How ESG Factors Are Reshaping Property Valuations in Asia",
    excerpt: "Green building certifications, energy efficiency, and climate risk are increasingly influencing asset values. What this means for investors and valuers.",
    date: "30 January 2026",
    readTime: "7 min read",
    category: "ESG",
  },
  {
    slug: "plant-machinery-depreciation",
    title: "Understanding Depreciation in Plant & Machinery Valuations",
    excerpt: "Physical, functional, and economic obsolescence each affect machinery value differently. We break down the depreciation analysis behind every P&M report.",
    date: "15 January 2026",
    readTime: "6 min read",
    category: "Plant & Machinery",
  },
  {
    slug: "expert-witness-valuation-singapore-courts",
    title: "Preparing an Expert Witness Valuation Report for Singapore Courts",
    excerpt: "What legal teams and courts expect from a valuation expert witness — methodology, disclosure obligations, and how to select the right valuer.",
    date: "3 January 2026",
    readTime: "9 min read",
    category: "Litigation",
  },
];

const Blog = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: "#0f2044" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>Insights</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Valuation Insights</h1>
          <p className="text-lg max-w-xl" style={{ color: "rgba(226,232,240,0.7)" }}>
            Expert commentary on valuation standards, methodologies, markets, and sector trends from the Assetica team.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 80}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-slate-100 hover:border-[#1a8f7a]/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
              >
                <div className="p-7 flex flex-col gap-3 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full w-fit" style={{ backgroundColor: "rgba(26,143,122,0.1)", color: "#1a8f7a" }}>
                    {post.category}
                  </span>
                  <h3 className="font-display font-bold text-navy text-lg leading-snug group-hover:text-[#1a8f7a] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mt-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                </div>
                <div className="px-7 pb-5 flex items-center gap-1 text-sm font-semibold" style={{ color: "#1a8f7a" }}>
                  Read Article <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Blog;
