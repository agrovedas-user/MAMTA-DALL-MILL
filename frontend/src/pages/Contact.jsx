import React from "react";
import { PageHeader } from "./About";
import SEO from "../components/SEO";
import InquiryForm from "../components/InquiryForm";
import { SITE } from "../data/site";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.map_query)}&output=embed`;
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsapp_default_msg)}`;

  return (
    <>
      <SEO title="Contact MAMTA DALL MILL — Premium Pulses Manufacturer Delhi" description="Get in touch with MAMTA DALL MILL for wholesale pulses or AgroVedas retail inquiries." />
      <PageHeader breadcrumb overline="Contact" title="Let's start a conversation." subtitle="Wholesale or AgroVedas retail — write to us, call us, or message us on WhatsApp." />

      <section className="section-pad bg-[#F8F5EE]">
        <div className="container-narrow grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            {[
              { Icon: Phone, label: "Call us", value: SITE.phone, href: `tel:${SITE.phone_link}`, testid: "contact-phone" },
              { Icon: Mail, label: "Email us", value: SITE.email, href: `mailto:${SITE.email}`, testid: "contact-email" },
              { Icon: MessageCircle, label: "WhatsApp", value: "Chat with sales", href: waHref, testid: "contact-whatsapp" },
              { Icon: MapPin, label: "Visit us", value: SITE.address, href: `https://maps.google.com?q=${encodeURIComponent(SITE.map_query)}`, testid: "contact-address" },
            ].map((c) => (
              <a key={c.testid} href={c.href} target="_blank" rel="noreferrer" className="card-elevated p-6 flex items-start gap-4 group" data-testid={c.testid}>
                <div className="h-12 w-12 rounded-2xl bg-[#1B5E20] text-[#D4AF37] flex items-center justify-center shrink-0">
                  <c.Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="overline">{c.label}</div>
                  <div className="font-display font-bold text-[#1B5E20] mt-1">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="card-elevated overflow-hidden">
              <iframe
                title="Google Map"
                src={mapSrc}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="google-map"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm title="Send us a message" subtitle="Our team replies within one business day." testidPrefix="contact" googleForm={SITE.forms.contact} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
