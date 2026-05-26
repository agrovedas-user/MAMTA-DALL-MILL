import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Package, ShieldCheck, Truck, Award, BadgePercent, Repeat, Sprout, Wind, Filter, Sparkles, Quote, MessageCircle, ChevronRight, BadgeCheck, FileBadge, ScrollText, Building2 } from "lucide-react";
import SEO from "../components/SEO";
import { PRODUCTS, PROCESS_STEPS, WHY_US, TESTIMONIALS, SITE, CERTIFICATIONS } from "../data/site";

const iconMap = { Sprout, Wind, Filter, Sparkles, Package, ShieldCheck, Truck, Award, BadgePercent, Repeat };

const certIconMap = {
  FSSAI: ShieldCheck,
  GST: FileBadge,
  ISO: BadgeCheck,
  TM: ScrollText,
  MSME: Building2,
};

// Composite bowl image — each product maps to a cell within the source sprite.
// Source is a 3-col × 3-row grid (last row only 2 bowls) with small text labels under each bowl.
// We use a 320% × 420% zoom to crop tightly to each bowl and hide adjacent labels.
const BOWL_SHEET = "https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/d0sj8m5y_ECFB8FA8-2F04-477E-85BB-0FB524A0E1E5.png";
const BOWL_POSITIONS = {
  "chana-dal":    { x: 5,   y: 5   },
  "kabuli-chana": { x: 50,  y: 5   },
  "masoor-dal":   { x: 95,  y: 5   },
  "rajma":        { x: 5,   y: 50  },
  "toor-dal":     { x: 50,  y: 50  },
  "moong-dal":    { x: 95,  y: 50  },
  "white-matar":  { x: 5,   y: 92  },
  "urad-dal":     { x: 50,  y: 92  },
};

// Sabut composite — 3 bowls on top row (Chana, Moong, Urad Sabut) + 1 bowl bottom-left (Masoor Sabut).
const SABUT_SHEET = "https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/qc7ci6n7_461F9A90-2A8F-4E39-8F2B-0DB8F172A60B.png";
const SABUT_POSITIONS = {
  "chana-sabut":  { x: 5,  y: 5  },
  "moong-sabut":  { x: 50, y: 5  },
  "urad-sabut":   { x: 95, y: 5  },
  "masoor-sabut": { x: 30, y: 75 },
};

const Home = () => {
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsapp_default_msg)}`;

  return (
    <>
      <SEO
        title="MAMTA DALL MILL & AgroVedas — Premium Pulses Manufacturer | Delhi, India"
        description="Premium pulses manufacturer in Naya Bazar, Delhi since 1996. Wholesale 30kg bulk supply. AgroVedas retail brand (500g, 1kg zip pouches) for modern kitchens."
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden grain-overlay" data-testid="hero-section">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1673200674067-1923f239194d?crop=entropy&cs=srgb&fm=jpg&w=2000&q=85"
            alt="Golden harvest field"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F10]/90 via-[#1B5E20]/70 to-[#1B5E20]/20" />
        </div>

        <div className="container-narrow py-24 md:py-36 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/40 backdrop-blur-md mb-6 reveal-in">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#D4AF37]">Trusted Since 1996</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl leading-[0.95] tracking-tight reveal-in reveal-delay-1">
              From Farm to Family —
              <span className="block text-[#D4AF37] italic font-serif font-light">Premium Pulses</span>
              <span className="block">You Can Trust.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-relaxed reveal-in reveal-delay-2">
              <strong className="text-white">MAMTA DALL MILL</strong> delivers high-quality pulses in bulk for businesses and through <strong className="text-[#D4AF37]">AGROVEDAS</strong> in convenient consumer zip pouches.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 reveal-in reveal-delay-3">
              <Link to="/products" className="btn-primary !bg-white !text-[#1B5E20] hover:!bg-[#D4AF37] hover:!text-white" data-testid="hero-explore-btn">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/wholesale" className="btn-outline !text-white !border-[#D4AF37]" data-testid="hero-wholesale-btn">
                Wholesale Inquiry
              </Link>
              <a href={waHref} target="_blank" rel="noreferrer" className="btn-whatsapp" data-testid="hero-whatsapp-btn">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg reveal-in reveal-delay-4">
              {[
                { v: "30+", l: "Years of trust" },
                { v: "10+", l: "Pulse varieties" },
                { v: "PAN", l: "India delivery" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl font-black text-[#D4AF37]">{s.v}</div>
                  <div className="text-xs text-white/80 tracking-wider uppercase mt-1 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative reveal-in reveal-delay-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/30">
              <img src="https://images.unsplash.com/photo-1646587231643-80af77f0e75d?crop=entropy&cs=srgb&fm=jpg&w=900&q=85" alt="Premium pulses" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl flex items-center gap-3 max-w-[260px]">
              <div className="h-12 w-12 rounded-full bg-[#1B5E20] flex items-center justify-center shrink-0">
                <ShieldCheck className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <div>
                <div className="font-display font-bold text-sm text-[#1B5E20]">FSSAI Certified</div>
                <div className="text-xs text-[#4A5D4E]">Hygienic, lab-tested batches</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[#1B5E20] py-4 overflow-hidden border-y border-[#D4AF37]/30" data-testid="marquee">
        <div className="flex marquee whitespace-nowrap gap-12 text-[#D4AF37] font-display font-bold tracking-[0.3em] uppercase text-sm">
          {Array(2).fill(0).flatMap((_, i) =>
            ["Premium Pulses", "Bulk 30 kg", "Retail 500 g · 1 kg", "FSSAI Licensed", "PAN-India Dispatch", "Trusted Since 1996"].map((t, j) => (
              <span key={`${i}-${j}`} className="flex items-center gap-12">
                {t} <Leaf className="h-4 w-4 text-[#F8F5EE]" />
              </span>
            ))
          )}
        </div>
      </div>

      {/* PRODUCT SHOWCASE — real photography */}
      <section className="section-pad bg-white" data-testid="product-showcase">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="overline">Our Range</div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B5E20] mt-3 tracking-tight leading-tight">
                One mill. <br />
                <span className="italic text-[#D4AF37] font-serif font-light">Two beloved brands.</span>
              </h2>
              <p className="text-[#4A5D4E] mt-6 leading-relaxed">
                Premium <strong className="text-[#1B5E20]">MAMTA DALL MILL</strong> 30 kg bulk sacks for traders and institutions, alongside <strong className="text-[#1B5E20]">AgroVedas</strong> 500 g & 1 kg consumer zip pouches for modern kitchens — milled, packed and dispatched from the same trusted facility in Naya Bazar, Delhi.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Chana Sabut", "Masoor Sabut", "Malka Dal", "White Matar", "Rajma", "AgroVedas Retail"].map((t) => (
                  <span key={t} className="px-3.5 py-1.5 rounded-full bg-[#F8F5EE] border border-[#1B5E20]/10 text-xs font-display font-semibold text-[#1B5E20]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/products" className="btn-primary" data-testid="showcase-products-btn">
                  See All Products <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/wholesale" className="btn-outline" data-testid="showcase-wholesale-btn">
                  Wholesale Inquiry
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(27,94,32,0.25)] border border-[rgba(27,94,32,0.08)]">
                <img
                  src="https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/e5p33ja0_EDA4C89C-095E-4997-9A4F-988C58E5698B.png"
                  alt="MAMTA DALL MILL 30kg bulk sacks and AgroVedas retail pouches"
                  className="w-full h-full object-cover"
                  data-testid="showcase-image"
                />
                <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-white/95 backdrop-blur px-4 py-2.5 rounded-full shadow-md">
                  <span className="h-2 w-2 rounded-full bg-[#4CAF50] animate-pulse" />
                  <span className="text-xs font-display font-bold text-[#1B5E20] tracking-wide uppercase">Pure by Nature · Trusted for Generations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="section-pad bg-[#F8F5EE]" data-testid="about-snapshot">
        <div className="container-narrow grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl aspect-[3/4] bg-white shadow-lg flex items-center justify-center overflow-hidden">
                <img src="https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/c0h0egti_60B76208-B0E7-4AED-89E2-D9F2A9AABA11.png" className="h-full w-full object-contain p-4" alt="MAMTA DALL MILL 30 kg bulk pack" />
              </div>
              <img src="https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/9ll0w984_A2B73CC9-49C8-4C09-A996-E8FC86FE6F09.png" className="rounded-3xl aspect-[3/4] object-cover mt-10" alt="AgroVedas retail pouch on a supermarket shelf" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="overline">About Us</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B5E20] mt-3 leading-tight">
              Two divisions. One commitment to <span className="italic text-[#D4AF37]">purity</span>.
            </h2>
            <p className="mt-6 text-[#4A5D4E] leading-relaxed">
              MAMTA DALL MILL is a Delhi-based manufacturer and wholesale supplier of premium pulses serving distributors, traders, HoReCa and institutional buyers across India. Our consumer brand <strong className="text-[#1B5E20]">AGROVEDAS</strong> brings the same mill-fresh quality to modern households in beautifully packaged 500 g and 1 kg resealable zip pouches.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Link to="/about" className="card-elevated p-5 flex items-center justify-between group" data-testid="about-mamta-card">
                <div>
                  <div className="font-display font-bold text-[#1B5E20]">MAMTA DALL MILL</div>
                  <div className="text-xs text-[#4A5D4E] mt-1">B2B · Wholesale · 30 kg packs</div>
                </div>
                <ChevronRight className="h-5 w-5 text-[#D4AF37] group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/agrovedas" className="card-elevated p-5 flex items-center justify-between group" data-testid="about-agroveda-card">
                <div>
                  <div className="font-display font-bold text-[#1B5E20]">AGROVEDAS</div>
                  <div className="text-xs text-[#4A5D4E] mt-1">B2C · Retail · 500 g & 1 kg zip pouches</div>
                </div>
                <ChevronRight className="h-5 w-5 text-[#D4AF37] group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="section-pad bg-white" data-testid="products-section">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="overline">Our Pulses</div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B5E20] mt-3 tracking-tight">
                A curated range of <br className="hidden md:block" /> India's finest pulses.
              </h2>
            </div>
            <Link to="/products" className="btn-outline self-start md:self-end" data-testid="view-all-products">
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((p) => {
              const bowl = BOWL_POSITIONS[p.slug];
              const sabut = SABUT_POSITIONS[p.slug];
              const sheet = bowl ? BOWL_SHEET : sabut ? SABUT_SHEET : null;
              const pos = bowl || sabut;
              const sheetSize = bowl ? "320% 420%" : "320% 300%";
              return (
                <Link
                  to={`/products#${p.slug}`}
                  key={p.slug}
                  className="card-elevated overflow-hidden group"
                  data-testid={`product-card-${p.slug}`}
                >
                  <div className="aspect-square overflow-hidden bg-white">
                    {sheet ? (
                      <div
                        className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${sheet})`,
                          backgroundSize: sheetSize,
                          backgroundPosition: `${pos.x}% ${pos.y}%`,
                          backgroundRepeat: "no-repeat",
                        }}
                        role="img"
                        aria-label={p.name}
                      />
                    ) : (
                      <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                    )}
                  </div>
                  <div className="p-5">
                    <div className="font-display font-bold text-[#1B5E20]">{p.name}</div>
                    <div className="text-xs text-[#D4AF37] tracking-wider uppercase mt-1 font-semibold">{p.tag}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TWO DIVISIONS */}
      <section className="section-pad bg-[#F8F5EE]" data-testid="divisions-section">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="overline">Business Divisions</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B5E20] mt-3 tracking-tight">
              Built for businesses. <br /> Loved by families.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="card-elevated p-0 relative overflow-hidden flex flex-col" data-testid="division-mamta">
              <div className="aspect-[16/9] w-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/0zn5r1c9_60B76208-B0E7-4AED-89E2-D9F2A9AABA11.png"
                  alt="MAMTA DALL MILL 30 kg bulk pack"
                  className="h-full w-full object-contain p-4 transition duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10 relative">
                <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-[#1B5E20]/5" />
                <div className="overline">MAMTA DALL MILL</div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-[#1B5E20] mt-3">Wholesale & Bulk Supply</h3>
                <p className="text-[#4A5D4E] mt-4">For traders, distributors, HoReCa and institutional buyers across India.</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {["30 kg bulk PP-woven sacks", "Volume-based pricing tiers", "PAN-India dispatch", "PAN-India logistics"].map((x) => (
                    <li key={x} className="flex items-center gap-3 text-[#0A1F10]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" /> {x}
                    </li>
                  ))}
                </ul>
                <Link to="/wholesale" className="btn-primary mt-8" data-testid="division-mamta-cta">
                  Request Wholesale Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="card-elevated p-8 md:p-10 relative overflow-hidden border-2 border-[#D4AF37]/30" data-testid="division-agroveda">
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-[#D4AF37]/10" />
              <div className="overline">AGROVEDAS</div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[#1B5E20] mt-3">Retail Consumer Brand</h3>
              <p className="text-[#4A5D4E] mt-4">Premium pulses packed for modern kitchens — clean, convenient and consistent.</p>
              <ul className="mt-6 space-y-3 text-sm">
                {["500 g & 1 kg laminate packs", "Quick-commerce ready", "Modern kitchen-friendly design", "Available across retailers"].map((x) => (
                  <li key={x} className="flex items-center gap-3 text-[#0A1F10]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" /> {x}
                  </li>
                ))}
              </ul>
              <Link to="/agrovedas" className="btn-secondary mt-8" data-testid="division-agroveda-cta">
                Explore AGROVEDAS <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING PROCESS */}
      <section className="section-pad bg-white" data-testid="process-section">
        <div className="container-narrow">
          <div className="max-w-2xl mb-14">
            <div className="overline">Manufacturing Process</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B5E20] mt-3 tracking-tight">
              Six steps from <br /> field to finished pack.
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/60 to-transparent -translate-x-1/2" />
            <div className="space-y-6">
              {PROCESS_STEPS.map((s, i) => {
                const Icon = iconMap[s.icon] || Leaf;
                const left = i % 2 === 0;
                return (
                  <div key={s.title} className={`md:grid md:grid-cols-2 md:gap-12 items-center ${left ? "" : "md:[&>*:first-child]:order-2"}`}>
                    <div className={`card-elevated p-6 md:p-8 ${left ? "md:text-right" : ""}`} data-testid={`process-step-${i}`}>
                      <div className={`flex items-center gap-3 ${left ? "md:justify-end" : ""}`}>
                        <div className="h-12 w-12 rounded-2xl bg-[#1B5E20] text-[#D4AF37] flex items-center justify-center">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="overline">Step {i + 1}</div>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-[#1B5E20] mt-3">{s.title}</h3>
                      <p className="text-[#4A5D4E] mt-2 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                    <div className="hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS STRIP */}
      <section className="section-pad bg-[#F8F5EE]" data-testid="certifications-strip">
        <div className="container-narrow">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="overline">Certifications</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B5E20] mt-3 tracking-tight">
              Compliance built into every batch.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {CERTIFICATIONS.map((c) => {
              const Icon = certIconMap[c.code] || ShieldCheck;
              return (
                <div key={c.code} className="card-elevated p-6 text-center group" data-testid={`cert-${c.code.toLowerCase()}`}>
                  <div className="h-16 w-16 mx-auto rounded-full bg-[#1B5E20] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#1B5E20] transition">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <div className="font-display font-bold text-[#1B5E20] mt-4 text-sm">{c.name}</div>
                  <div className="text-xs text-[#4A5D4E] mt-1">{c.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad bg-white" data-testid="why-us-section">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="overline">Why Choose Us</div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B5E20] mt-3 tracking-tight">
                Six reasons businesses choose MAMTA.
              </h2>
              <p className="text-[#4A5D4E] mt-6 text-sm leading-relaxed">
                A quarter century of milling experience, transparent QC, and a packaging line that scales from a single sack to a full container.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {WHY_US.map((w) => {
                const Icon = iconMap[w.icon] || Leaf;
                return (
                  <div key={w.title} className="card-elevated p-6 flex gap-4" data-testid={`why-${w.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="h-12 w-12 rounded-2xl bg-[#F8F5EE] text-[#1B5E20] flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-[#1B5E20]">{w.title}</div>
                      <div className="text-sm text-[#4A5D4E] mt-1">{w.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-[#F8F5EE]" data-testid="testimonials-section">
        <div className="container-narrow">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="overline">Testimonials</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B5E20] mt-3 tracking-tight">
              Trusted by partners across India.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card-elevated p-8" data-testid={`testimonial-${i}`}>
                <Quote className="h-8 w-8 text-[#D4AF37]" />
                <p className="text-[#0A1F10] mt-4 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-[#1B5E20]/10">
                  <div className="font-display font-bold text-[#1B5E20]">{t.name}</div>
                  <div className="text-xs text-[#4A5D4E] mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden" data-testid="home-cta">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1595444042058-f038c7e0e778?crop=entropy&cs=srgb&fm=jpg&w=2000&q=85" className="h-full w-full object-cover" alt="Farm" />
          <div className="absolute inset-0 bg-[#0A1F10]/85" />
        </div>
        <div className="container-narrow py-24 md:py-32 text-center">
          <div className="overline !text-[#D4AF37]">Let's Talk Business</div>
          <h2 className="font-display text-3xl md:text-6xl font-black text-white mt-4 tracking-tight max-w-3xl mx-auto leading-tight">
            Looking for a reliable <span className="italic text-[#D4AF37]">pulses manufacturer?</span>
          </h2>
          <p className="text-white/80 mt-6 max-w-xl mx-auto">
            Talk to our wholesale team for competitive pricing, custom packaging and PAN-India delivery.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/wholesale" className="btn-primary !bg-[#D4AF37] !text-[#0A1F10] hover:!bg-white" data-testid="cta-quote-btn">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-outline !text-white !border-white hover:!bg-white hover:!text-[#1B5E20]" data-testid="cta-contact-btn">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
;

