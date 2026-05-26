import React from "react";
import { PageHeader } from "./About";
import SEO from "../components/SEO";
import { CERTIFICATIONS } from "../data/site";
import { ShieldCheck } from "lucide-react";

const Certifications = () => (
  <>
    <SEO title="Certifications — FSSAI, ISO 22000 | MAMTA DALL MILL" description="MAMTA DALL MILL certifications: FSSAI Food Safety License, GST registration, ISO 22000, trademarks and MSME Udyam." />
    <PageHeader breadcrumb overline="Certifications" title="Compliance you can verify." subtitle="Every certification we hold underpins one promise — every pack of MAMTA DALL MILL and AGROVEDAS pulses is safe, traceable and consistent." />

    <section className="section-pad bg-[#F8F5EE]">
      <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((c) => (
          <div key={c.code} className="card-elevated p-8 text-center" data-testid={`cert-detail-${c.code.toLowerCase()}`}>
            <div className="h-20 w-20 mx-auto rounded-full bg-[#1B5E20] text-[#D4AF37] flex items-center justify-center font-display font-black text-lg">
              {c.code}
            </div>
            <h3 className="font-display text-xl font-bold text-[#1B5E20] mt-5">{c.name}</h3>
            <p className="text-sm text-[#4A5D4E] mt-2">{c.desc}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs text-[#4CAF50] font-semibold">
              <ShieldCheck className="h-4 w-4" /> Verified & Active
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Certifications;
