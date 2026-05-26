import React from "react";
import { PRODUCTS } from "../data/site";
import { PageHeader } from "./About";
import SEO from "../components/SEO";
import { Check, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => (
  <>
    <SEO title="Products — Premium Pulses & Dal | MAMTA DALL MILL & AGROVEDAS" description="Browse our range of premium pulses: Chana Dal, Toor Dal, Moong Dal, Urad Dal, Masoor Dal, Rajma, White Matar, Kabuli Chana, Chana Sabut and more. Available in 30kg bulk and 500g, 1kg retail zip pouches." />
    <PageHeader breadcrumb overline="Products" title="Premium pulses for every kitchen and every business." subtitle="Twelve carefully curated pulse categories — available in wholesale 30 kg bulk packs and AGROVEDAS consumer retail 500 g & 1 kg resealable zip pouches." />

    <section className="section-pad bg-[#F8F5EE]">
      <div className="container-narrow space-y-16">
        {PRODUCTS.map((p, i) => (
          <div id={p.slug} key={p.slug} className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`} data-testid={`product-detail-${p.slug}`}>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="card-elevated overflow-hidden">
                  <div className="aspect-square bg-white p-2 sm:p-3 flex items-center justify-center">
                    <img
                      src="https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/0zn5r1c9_60B76208-B0E7-4AED-89E2-D9F2A9AABA11.png"
                      alt={`MAMTA DALL MILL 30 kg bulk pack ${p.name}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="px-4 py-2.5 bg-[#1B5E20] text-[#D4AF37] text-[10px] font-display font-bold tracking-[0.18em] uppercase text-center">
                    Bulk · 30 kg
                  </div>
                </div>
                <div className="card-elevated overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/9ll0w984_A2B73CC9-49C8-4C09-A996-E8FC86FE6F09.png"
                      alt={`AgroVedas retail pack ${p.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-4 py-2.5 bg-[#D4AF37] text-[#0A1F10] text-[10px] font-display font-bold tracking-[0.18em] uppercase text-center">
                    Retail · 500 g · 1 kg
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-[#4A5D4E] italic mt-3 px-1" data-testid={`${p.slug}-disclaimer`}>
                * Photos are for reference purpose only. Actual packaging may vary.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="overline">{p.tag}</div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1B5E20] mt-2 tracking-tight">{p.name}</h2>
              <p className="text-[#4A5D4E] mt-4 leading-relaxed">{p.description}</p>
              <ul className="mt-5 space-y-2">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-[#0A1F10]">
                    <Check className="h-4 w-4 text-[#4CAF50]" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[#1B5E20]/10 p-4 bg-white">
                  <div className="overline">MAMTA Wholesale</div>
                  <div className="flex items-center gap-2 mt-1 font-display font-bold text-[#1B5E20]"><Package className="h-4 w-4" /> 30 kg bulk sacks</div>
                </div>
                <div className="rounded-2xl border-2 border-[#D4AF37]/40 p-4 bg-white">
                  <div className="overline">AGROVEDAS Retail</div>
                  <div className="flex items-center gap-2 mt-1 font-display font-bold text-[#1B5E20]"><Package className="h-4 w-4" /> 500 g · 1 kg zip pouches</div>
                </div>
              </div>
              <div className="mt-6 flex gap-3 flex-wrap">
                <Link to="/wholesale" className="btn-primary" data-testid={`${p.slug}-quote-btn`}>Request Wholesale Quote</Link>
                <Link to="/agrovedas" className="btn-outline" data-testid={`${p.slug}-retail-btn`}>Buy AGROVEDAS Retail</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Products;
