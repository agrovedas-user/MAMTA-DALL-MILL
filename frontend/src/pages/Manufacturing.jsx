import React from "react";
import { PageHeader } from "./About";
import SEO from "../components/SEO";
import { PROCESS_STEPS } from "../data/site";
import { Sprout, Wind, Filter, Sparkles, Package, ShieldCheck, Truck } from "lucide-react";

const iconMap = { Sprout, Wind, Filter, Sparkles, Package, ShieldCheck, Truck };

const Manufacturing = () => (
  <>
    <SEO title="Manufacturing — Dal Mill Process | MAMTA DALL MILL Delhi" description="Inside our FSSAI-licensed dal mill in Delhi since 1996: procurement, cleaning, grading, packaging, QC and dispatch. Modern machinery, hygienic processing." />
    <PageHeader breadcrumb overline="Manufacturing" title="A modern dal mill, engineered for purity." subtitle="Inside our facility — from grain intake to final pack, every step is designed to preserve nutrition, ensure hygiene and deliver consistency at scale." />

    <section className="section-pad bg-[#F8F5EE]">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Plant Infrastructure", body: "Modern multi-floor processing plant with cleaning towers, gravity separators and integrated material handling — engineered for hygienic, large-scale pulse milling.", img: "https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/vu7njyxs_D25BAF5A-7988-49C1-8C53-485864824C9E.png" },
            { title: "Quality Control", body: "In-house QC lab tests every lot for moisture, brokens, foreign matter and microbial parameters with calibrated precision instruments.", img: "https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/wkez1y13_AC426545-E5F4-4DB2-932E-4A182D027A1D.jpeg" },
            { title: "Warehouse", body: "Climate-aware storage with FIFO discipline and palletised MAMTA DALL MILL stock — ensuring freshness and traceability for every dispatch.", img: "https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/8pug4ruy_AC426545-E5F4-4DB2-932E-4A182D027A1D.jpeg" },
          ].map((c) => (
            <div key={c.title} className="card-elevated overflow-hidden" data-testid={`mfg-${c.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <img src={c.img} alt={c.title} className="aspect-[16/9] w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-[#1B5E20]">{c.title}</h3>
                <p className="text-[#4A5D4E] mt-2 text-sm">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="overline">Process Flow</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B5E20] mt-3 tracking-tight">From farm to finished pack.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((s, i) => {
            const Icon = iconMap[s.icon] || Sprout;
            return (
              <div key={s.title} className="card-elevated p-6" data-testid={`mfg-step-${i}`}>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-[#1B5E20] text-[#D4AF37] flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display font-black text-3xl text-[#D4AF37]/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="font-display font-bold text-[#1B5E20] mt-4">{s.title}</div>
                <p className="text-sm text-[#4A5D4E] mt-1">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default Manufacturing;
