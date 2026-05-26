import React from "react";
import { PageHeader } from "./About";
import SEO from "../components/SEO";
import InquiryForm from "../components/InquiryForm";
import { SITE } from "../data/site";
import { Truck, Boxes, Building2, Utensils } from "lucide-react";

const Wholesale = () => (
  <>
      <SEO title="Wholesale Pulses Supply — MAMTA DALL MILL | Bulk Dal Manufacturer India" description="Wholesale pulses supplier in Delhi. 30kg bulk packs, competitive pricing, PAN-India logistics. For traders, distributors, HoReCa and institutional buyers." />
      <PageHeader breadcrumb overline="Wholesale" title="Your trusted wholesale partner for premium pulses." subtitle="Transparent pricing, consistent supply and reliable logistics — built for traders, distributors, HoReCa chains and institutional buyers." />

    <section className="section-pad bg-[#F8F5EE]">
      <div className="container-narrow grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-6">
          <div className="grid grid-cols-1 gap-5">
            {[
              { Icon: Building2, title: "Traders & Distributors", body: "Premium pulses with healthy trade margins, predictable lot sizes and consistent quality." },
              { Icon: Utensils, title: "HoReCa", body: "Hotels, restaurants and cloud kitchens — get standardized grain quality for repeatable recipes." },
              { Icon: Boxes, title: "Institutional Buyers", body: "Bulk supply for canteens, hostels, government and corporate procurement programs." },
              { Icon: Truck, title: "Logistics Support", body: "PAN-India dispatch with tracked logistics and on-time SLA commitment." },
            ].map((c) => (
              <div key={c.title} className="card-elevated p-6" data-testid={`wholesale-segment-${c.title.toLowerCase().split(" ")[0]}`}>
                <div className="h-11 w-11 rounded-2xl bg-[#1B5E20] text-[#D4AF37] flex items-center justify-center">
                  <c.Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#1B5E20] mt-4">{c.title}</h3>
                <p className="text-sm text-[#4A5D4E] mt-1">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="card-elevated p-8">
            <div className="overline">MOQ & Pricing</div>
            <h3 className="font-display text-2xl font-bold text-[#1B5E20] mt-2">Flexible terms for every business.</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#0A1F10]">
              <li>• Standard MOQ: 1 MT (mix-and-match across pulses)</li>
              <li>• Standard packaging: 30 kg PP-woven sacks</li>
              <li>• Volume-based pricing tiers — get a tailored quote</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <InquiryForm
            title="Request wholesale pricing"
            subtitle="Tell us your requirement — our sales team responds within 24 hours."
            showExtras
            testidPrefix="wholesale"
            googleForm={SITE.forms.wholesale}
          />
        </div>
      </div>
    </section>
  </>
);

export default Wholesale;
