import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/site";

export const Logo = ({ compact = false }) => {
  return (
    <Link to="/" className="flex items-center gap-3 group" data-testid="logo-link">
      <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden bg-white ring-1 ring-[#1B5E20]/15 p-0.5">
        <img
          src={SITE.logo_mamta}
          alt="MAMTA DALL MILL logo"
          className="h-full w-full object-cover rounded-full"
          loading="eager"
        />
      </div>
      {!compact && (
        <div className="leading-none whitespace-nowrap">
          <div className="font-display font-black text-[15px] sm:text-[16px] tracking-tight text-[#1B5E20]">
            MAMTA DALL MILL
          </div>
          <div className="text-[10px] sm:text-[11px] tracking-[0.18em] text-[#4A5D4E] font-semibold uppercase mt-1">
            A Unit of Mamta Agro Veda Mart
          </div>
        </div>
      )}
    </Link>
  );
};

export default Logo;
