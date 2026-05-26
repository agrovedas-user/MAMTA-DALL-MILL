import React from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { getPostBySlug, BLOG_LIST } from "../data/blog";
import { Clock, ChevronLeft, ArrowRight } from "lucide-react";

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

const NotFound = () => (
  <section className="section-pad bg-[#F8F5EE]">
    <div className="container-narrow text-center" data-testid="blog-not-found">
      <div className="overline">404</div>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1B5E20] mt-3">
        Article not found
      </h1>
      <p className="text-[#4A5D4E] mt-3">The post you're looking for doesn't exist or was moved.</p>
      <Link to="/blog" className="btn-primary mt-6 inline-flex" data-testid="blog-back-to-list">
        Back to Blog
      </Link>
    </div>
  </section>
);

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <NotFound />;

  const paragraphs = post.body.split("\n\n");
  const related = BLOG_LIST.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO title={`${post.title} | MAMTA DALL MILL Blog`} description={post.excerpt} />

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 bg-[#1B5E20] overflow-hidden grain-overlay">
        <div className="absolute inset-0 opacity-25">
          <img src={post.cover} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F10] via-[#1B5E20]/60 to-transparent" />
        <div className="container-narrow relative">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-xs text-[#D4AF37] tracking-[0.18em] uppercase font-semibold hover:text-white transition"
            data-testid="blogpost-breadcrumb"
          >
            <ChevronLeft className="h-3 w-3" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 text-xs mt-4">
            <span className="overline !text-[#D4AF37] !mt-0">{post.category}</span>
            <span className="text-white/80 flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.read_time}
            </span>
            <span className="text-white/80">{formatDate(post.date)}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-white mt-3 tracking-tight leading-[1.0] max-w-3xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad bg-[#F8F5EE]">
        <div className="container-narrow max-w-3xl">
          <p className="text-lg text-[#1B5E20] font-medium leading-relaxed">{post.excerpt}</p>
          <div className="mt-6 space-y-5 text-[#4A5D4E] leading-relaxed text-[17px]">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10 card-elevated p-8 bg-white">
            <div className="overline">Talk to us</div>
            <h3 className="font-display text-2xl font-bold text-[#1B5E20] mt-2">
              Need premium pulses for your business?
            </h3>
            <p className="text-sm text-[#4A5D4E] mt-2">
              Get a tailored wholesale quote or explore private-label manufacturing.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/wholesale" className="btn-primary" data-testid="blogpost-cta-wholesale">
                Request a quote
              </Link>
              <Link to="/contact" className="btn-outline" data-testid="blogpost-cta-contact">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-narrow">
            <div className="overline">More reading</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1B5E20] mt-2 mb-8">
              Related articles
            </h2>
            <div className="grid sm:grid-cols-3 gap-7">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="card-elevated overflow-hidden group flex flex-col"
                  data-testid={`blog-related-${p.slug}`}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="overline !mt-0">{p.category}</span>
                    <h3 className="font-display text-base font-bold text-[#1B5E20] mt-2 leading-snug flex-1">
                      {p.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-display font-semibold text-[#1B5E20] group-hover:text-[#D4AF37] transition">
                      Read <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPost;
