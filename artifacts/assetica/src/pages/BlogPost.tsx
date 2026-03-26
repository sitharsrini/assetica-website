import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const posts: Record<string, { title: string; date: string; readTime: string; category: string; content: string }> = {
  "rics-red-book-vs-ivs-which-standard": {
    title: "RICS Red Book vs. IVS: Which Valuation Standard Applies?",
    date: "12 March 2026",
    readTime: "6 min read",
    category: "Standards",
    content: `
      <p>When commissioning an asset valuation, clients and their advisers often encounter two major international frameworks: the RICS Red Book (formally, the RICS Valuation – Global Standards) and the International Valuation Standards (IVS) published by the International Valuation Standards Council (IVSC).</p>
      <h2>What is the RICS Red Book?</h2>
      <p>The RICS Red Book is mandatory for RICS-registered valuers worldwide. It sets out professional standards, ethical requirements, and procedural rules for valuation engagements. It incorporates the IVS by reference but adds additional regulatory requirements around conflicts of interest, terms of engagement, and report content.</p>
      <h2>What is the IVS?</h2>
      <p>The IVS is a global benchmark developed by the IVSC and is increasingly adopted by regulators, auditors, and financial institutions worldwide. It sets out definitions, bases of value (Market Value, Fair Value, etc.), and general principles — but does not carry the same mandatory enforcement mechanism as the Red Book for RICS members.</p>
      <h2>Which applies in Singapore?</h2>
      <p>In Singapore, both frameworks are relevant. Lenders typically require RICS Red Book-compliant valuations. Auditors applying IFRS may reference IVS. SISV members follow their own standards, which are broadly aligned with IVS. Assetica's valuers are accredited under both RICS and SISV and produce reports that satisfy both sets of requirements.</p>
      <p>If you are unsure which standard your valuation needs to comply with, we recommend discussing your specific purpose and audience with our team before the engagement begins.</p>
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display font-bold text-2xl text-navy mb-4">Article Not Found</h1>
            <Link to="/blog" className="text-sm font-semibold" style={{ color: "#1a8f7a" }}>
              ← Back to Insights
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: "#0f2044" }}>
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm mb-6 transition-colors" style={{ color: "rgba(226,232,240,0.6)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#22b09a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.6)")}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full block w-fit mb-4" style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>
              {post.category}
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm" style={{ color: "rgba(226,232,240,0.5)" }}>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div
              className="prose prose-slate prose-lg max-w-none"
              style={{ color: "#475569" }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
