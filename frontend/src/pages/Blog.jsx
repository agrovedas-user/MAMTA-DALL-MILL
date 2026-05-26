import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "./About";
import SEO from "../components/SEO";
import { BLOG_LIST } from "../data/blog";
import { Clock, ArrowRight } from "lucide-react";

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

const Blog = () => (
  <>
    <SEO
      title="Blog — Pulses Nutrition, Buying Guides & Industry Insights | MAMTA DALL MILL"
      description="Expert articles on pulses nutrition, choosing quality dal, milling and private-label manufacturing from MAMTA DALL MILL, Delhi's premium pulses manufacturer."
    />
    <PageHeader
      breadcrumb
      overline="Blog"
      title="Insights on pulses, nutrition & the dal business."
      subtitle="Practical guides for households, traders and brand owners — written by the team that mills the grain."
    />

    <section className="section-pad bg-[#F8F5EE]">
      <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {BLOG_LIST.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="card-elevated overflow-hidden group flex flex-col"
            data-testid={`blog-card-${post.slug}`}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={post.cover}
                alt={post.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 text-xs">
                <span className="overline !mt-0">{post.category}</span>
                <span className="text-[#4A5D4E] flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.read_time}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#1B5E20] mt-3 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-[#4A5D4E] mt-2 line-clamp-3 flex-1">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-[#4A5D4E]">{formatDate(post.date)}</span>
                <span className="inline-flex items-center gap-1 text-sm font-display font-semibold text-[#1B5E20] group-hover:text-[#D4AF37] transition">
                  Read <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </>
);

export default Blog;
