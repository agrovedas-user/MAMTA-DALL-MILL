import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { PRODUCTS, SITE } from "../data/site";
import { ShoppingBag, Sparkles, Package, Truck } from "lucide-react";

const Agrovedas = () => (
  <>
    <SEO title="AgroVedas — Pure Pulses for Modern Kitchens | Retail Brand" description="AgroVedas, the retail brand from MAMTA DALL MILL, launched in 2021. Premium pulses in 500g and 1kg resealable zip pouches available on quick-commerce and e-commerce." />

    {/* Hero (different aesthetic to differentiate the consumer brand) */}
    <section className="relative overflow-hidden bg-[#F8F5EE]" data-testid="agroveda-hero">
      <div className="container-narrow grid lg:grid-cols-12 gap-12 items-center py-20 md:py-32">
        <div className="lg:col-span-6">
          <img
            src={SITE.logo_agrovedas}
            alt="AgroVedas brand logo"
            className="h-20 md:h-28 w-auto object-contain mb-6 mix-blend-multiply"
            style={{ filter: "drop-shadow(0 4px 8px rgba(27,94,32,0.15))" }}
            data-testid="agrovedas-brand-logo"
          />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#1B5E20]">Consumer Retail Brand · Est. 2021</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-[#1B5E20] tracking-tighter leading-[0.95]">
            <span className="italic text-[#D4AF37] font-serif font-light">Pure pulses</span> for modern kitchens.
          </h1>
          <p className="mt-6 text-[#4A5D4E] text-lg max-w-lg">
            From the makers of MAMTA DALL MILL. Mill-fresh quality, beautifully packed in 500 g and 1 kg <strong className="text-[#1B5E20]">resealable zip pouches</strong> — designed for everyday Indian cooking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="#products" className="btn-primary" data-testid="agroveda-shop-btn">
              Browse Retail Range <ShoppingBag className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-8 bg-[#D4AF37]/10 rounded-[3rem] -z-10 blur-2xl" />
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?w=700&q=85" className="rounded-3xl aspect-[3/4] object-cover" alt="Pulses" />
            <img src="https://images.unsplash.com/photo-1646587231643-80af77f0e75d?w=700&q=85" className="rounded-3xl aspect-[3/4] object-cover mt-12" alt="Lentils" />
          </div>
        </div>
      </div>
    </section>

    {/* Brand pillars */}
    <section className="section-pad bg-white">
      <div className="container-narrow grid md:grid-cols-3 gap-5">
        {[
          { Icon: Sparkles, title: "Pure & Hygienic", body: "Mill-fresh pulses, hygienically processed and packed in food-grade laminate." },
          { Icon: Package, title: "Resealable Zip Pouches", body: "500 g and 1 kg pouches with airtight zip closure — keeps pulses fresh for longer and perfect for weekly meal planning." },
          { Icon: Truck, title: "Quick-Commerce Ready", body: "Available on Blinkit, Zepto, Instamart and leading retail stores across India." },
        ].map(({ Icon, title, body }) => (
          <div key={title} className="card-elevated p-8" data-testid={`agroveda-pillar-${title.toLowerCase().split(" ")[0]}`}>
            <div className="h-12 w-12 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#1B5E20] mt-4">{title}</h3>
            <p className="text-[#4A5D4E] mt-2 text-sm">{body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Retail range */}
    <section id="products" className="section-pad bg-[#F8F5EE]">
      <div className="container-narrow">
        <div className="max-w-xl mb-12">
          <div className="overline">Retail Range</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B5E20] mt-3 tracking-tight">Beautifully packed. Always pure.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p) => (
            <div key={p.slug} className="card-elevated overflow-hidden group" data-testid={`agroveda-retail-${p.slug}`}>
              <div className="aspect-square overflow-hidden bg-[#F8F5EE]">
                <img src="https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/9ll0w984_A2B73CC9-49C8-4C09-A996-E8FC86FE6F09.png" alt={`AgroVedas ${p.name} retail pouch`} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-5">
                <div className="font-display font-bold text-[#1B5E20]">{p.name}</div>
                <div className="flex gap-2 mt-3 text-xs">
                  <span className="px-2 py-1 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] font-semibold">500 g</span>
                  <span className="px-2 py-1 rounded-full bg-[#D4AF37]/15 text-[#1B5E20] font-semibold">1 kg</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Availability */}
    <section id="availability" className="section-pad bg-white">
      <div className="container-narrow text-center max-w-3xl mx-auto">
        <div className="overline">Where to Buy</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B5E20] mt-3 tracking-tight">Available everywhere modern India shops.</h2>
        <p className="text-[#4A5D4E] mt-6">Find AGROVEDAS on leading quick-commerce platforms, e-commerce marketplaces and retail stores across India.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {["Blinkit", "Zepto", "Instamart", "BigBasket", "Amazon", "Flipkart Grocery"].map((s) => (
            <span key={s} className="px-5 py-2.5 rounded-full bg-[#F8F5EE] border border-[#1B5E20]/10 font-display font-semibold text-[#1B5E20] text-sm" data-testid={`channel-${s.toLowerCase().replace(/\s+/g, "-")}`}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Agrovedas;
