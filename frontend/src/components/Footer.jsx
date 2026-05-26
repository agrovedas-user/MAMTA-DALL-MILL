import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { SITE } from "../data/site";

const linkGroup = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/manufacturing", label: "Manufacturing" },
      { to: "/certifications", label: "Certifications" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Wholesale",
    links: [
      { to: "/wholesale", label: "Wholesale Inquiry" },
      { to: "/products", label: "All Products" },
      { to: "/contact", label: "Contact Sales" },
    ],
  },
  {
    title: "AGROVEDAS",
    links: [
      { to: "/agrovedas", label: "Brand Story" },
      { to: "/agrovedas#products", label: "Retail Packs" },
      { to: "/agrovedas#availability", label: "Where to Buy" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0A1F10] text-[#F8F5EE] mt-0" data-testid="site-footer">
      <div className="container-narrow py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-white ring-1 ring-[#D4AF37]/30 p-0.5">
              <img src="https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/nyx88ebv_IMG_3945.png" alt="MAMTA DALL MILL" className="h-full w-full object-cover rounded-full" />
            </div>
            <div>
              <div className="font-display font-black text-base">MAMTA DALL MILL</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#D4AF37] font-semibold mt-1">
                A Unit of Mamta Agro Veda Mart
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-[#cfd6cf] leading-relaxed max-w-sm">
            Trusted manufacturer of premium pulses since 1996 — B2B wholesale and the home of <strong className="text-[#D4AF37]">AgroVedas</strong>, our consumer retail brand.
          </p>

          <div className="mt-6 space-y-3 text-sm text-[#cfd6cf]">
            <a href={`tel:${SITE.phone_link}`} className="flex items-center gap-3 hover:text-[#D4AF37] transition" data-testid="footer-phone">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-[#D4AF37] transition" data-testid="footer-email">
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 shrink-0" /> <span>{SITE.address}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {linkGroup.map((g) => (
            <div key={g.title}>
              <div className="font-display font-bold text-[#D4AF37] text-sm tracking-wider uppercase">
                {g.title}
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {g.links.map((l) => (
                  <li key={l.to + l.label}>
                    <Link
                      to={l.to}
                      className="text-[#cfd6cf] hover:text-white transition"
                      data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2">
          <div className="font-display font-bold text-[#D4AF37] text-sm tracking-wider uppercase">Follow</div>
          <div className="mt-4 flex gap-3">
            {[
              { Icon: Facebook, href: "#", id: "facebook" },
              { Icon: Instagram, href: "#", id: "instagram" },
              { Icon: Linkedin, href: "#", id: "linkedin" },
              { Icon: Twitter, href: "#", id: "twitter" },
            ].map(({ Icon, href, id }) => (
              <a
                key={id}
                href={href}
                aria-label={id}
                data-testid={`footer-social-${id}`}
                className="h-10 w-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1F10] transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#9aab9c]">
          <div>© {new Date().getFullYear()} MAMTA DALL MILL. All rights reserved. AgroVedas™ is a registered trademark.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#D4AF37]" data-testid="footer-privacy">Privacy</a>
            <a href="#" className="hover:text-[#D4AF37]" data-testid="footer-terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
