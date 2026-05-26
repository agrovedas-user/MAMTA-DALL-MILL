import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Sparkles } from "lucide-react";
import SEO from "../components/SEO";

export const PageHeader = ({ overline, title, subtitle, breadcrumb }) => (
  <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-[#1B5E20] overflow-hidden grain-overlay" data-testid="page-header">
    <div className="absolute inset-0 opacity-20">
      <img src="https://images.unsplash.com/photo-1595444042058-f038c7e0e778?w=2000&q=70" className="h-full w-full object-cover" alt="" />
    </div>
    <div className="container-narrow relative">
      {breadcrumb && (
        <Link to="/" className="inline-flex items-center gap-1 text-xs text-[#D4AF37] tracking-[0.18em] uppercase font-semibold hover:text-white transition" data-testid="page-breadcrumb">
          <ChevronLeft className="h-3 w-3" /> Back to Home
        </Link>
      )}
      <div className="overline !text-[#D4AF37] mt-2">{overline}</div>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white mt-3 tracking-tighter leading-[0.95] max-w-3xl">
        {title}
      </h1>
      {subtitle && <p className="mt-5 text-white/80 max-w-2xl text-lg">{subtitle}</p>}
    </div>
  </section>
);

const About = () => (
  <>
    <SEO title="About Us — MAMTA DALL MILL | Premium Pulses Manufacturer Delhi" description="Learn about MAMTA DALL MILL — Delhi-based premium pulses manufacturer since 1996, our mission, infrastructure, quality standards and the team behind AGROVEDAS." />
    <PageHeader breadcrumb overline="About Us" title="Milling premium pulses since 1996." subtitle="A family-owned dall mill that grew into one of Delhi's most trusted wholesale pulses manufacturers — and now the home of the AGROVEDAS retail brand." />

    <section className="section-pad bg-[#F8F5EE]">
      <div className="container-narrow grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="overline">Our Story</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B5E20] mt-3 tracking-tight">A quarter century of milling craft.</h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-[#4A5D4E] leading-relaxed">
          <p>Founded in 1996 in Delhi, MAMTA DALL MILL began as a small processing unit serving local traders. Today we operate a modern, FSSAI-licensed facility supplying premium pulses to distributors, HoReCa chains and retail networks across India.</p>
          <p>In 2021 we launched <strong className="text-[#1B5E20]">AGROVEDAS</strong> — our consumer retail brand — bringing mill-fresh quality to modern households through 500 g and 1 kg resealable zip pouches available on quick-commerce and e-commerce platforms.</p>
          <p>Our pulses are sourced directly from trusted mandis and farmer collectives, cleaned across multiple stages, graded by precision sieves and packed in food-safe materials.</p>
        </div>
      </div>
    </section>

    <section className="section-pad bg-white">
      <div className="container-narrow grid md:grid-cols-2 gap-6">
        {[
          { title: "Mission", body: "Make premium-quality pulses accessible to every Indian — from the largest wholesaler to the smallest household." },
          { title: "Vision", body: "Be India's most trusted dall mill, known for purity, transparency and consistent supply." },
          { title: "Infrastructure", body: "Modern processing lines with destoners, gravity separators, optical sorters and automated weighing." },
          { title: "Quality Standards", body: "FSSAI-licensed; ISO 22000-aligned processes; lot-level QC reports with moisture, brokens and microbial data." },
        ].map((c) => (
          <div key={c.title} className="card-elevated p-8" data-testid={`about-card-${c.title.toLowerCase()}`}>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37]">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#1B5E20] mt-4">{c.title}</h3>
            <p className="text-[#4A5D4E] mt-2">{c.body}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section-pad bg-[#F8F5EE]">
      <div className="container-narrow text-center max-w-2xl mx-auto">
        <div className="overline">Our Team</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B5E20] mt-3 tracking-tight">A team obsessed with grain quality.</h2>
        <p className="text-[#4A5D4E] mt-5">From the procurement specialists who hand-select every lot, to the QC chemists who test each batch, to the logistics team coordinating PAN-India dispatch — every role is built around one outcome: pulses you can trust.</p>
      </div>
    </section>
  </>
);

export default About;
