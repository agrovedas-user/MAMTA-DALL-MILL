import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "./Logo";
import { SITE } from "../data/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/agrovedas", label: "AGROVEDAS" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/certifications", label: "Certifications" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F5EE]/85 backdrop-blur-xl border-b border-[rgba(27,94,32,0.08)]"
          : "bg-[#F8F5EE]/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between py-4">
        {/* Logo — far left */}
        <Logo />

        {/* Desktop nav — centered in the space between the logo and the button */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5" data-testid="primary-nav">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `relative px-2 py-2 text-sm font-semibold font-display transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[#1B5E20]"
                    : "text-[#4A5D4E] hover:text-[#1B5E20]"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA button — far right */}
        <div className="hidden lg:flex pl-6">
          <Link to="/wholesale" className="btn-primary !py-2.5 !px-5 text-sm whitespace-nowrap" data-testid="header-cta">
            Wholesale Inquiry <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden p-2 rounded-full hover:bg-white/60 transition"
        >
          {open ? <X className="h-6 w-6 text-[#1B5E20]" /> : <Menu className="h-6 w-6 text-[#1B5E20]" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#F8F5EE] border-t border-[rgba(27,94,32,0.08)]" data-testid="mobile-nav">
          <nav className="container-narrow py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-2xl font-display font-semibold text-sm ${
                    isActive
                      ? "bg-white text-[#1B5E20] shadow-sm"
                      : "text-[#0A1F10] hover:bg-white/60"
                  }`
                }
              >
                {item.label}
                <ChevronRight className="h-4 w-4 opacity-60" />
              </NavLink>
            ))}
            <Link
              to="/wholesale"
              className="btn-primary justify-center mt-3"
              data-testid="mobile-header-cta"
            >
              Wholesale Inquiry <ChevronRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
