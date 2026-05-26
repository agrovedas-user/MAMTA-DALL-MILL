import React from "react";
import { SITE } from "../data/site";

export const WhatsAppFloat = () => {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsapp_default_msg)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float-btn"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition hover:scale-110">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
          <path d="M16.003 3C9.378 3 4 8.376 4 14.997c0 2.385.722 4.694 2.094 6.661L4 29l7.484-1.957a12.054 12.054 0 004.519.882h.001c6.624 0 12.003-5.376 12.003-11.997C28.007 8.376 22.628 3 16.003 3zm0 21.916h-.004a10.026 10.026 0 01-5.106-1.394l-.366-.217-4.443 1.16 1.184-4.328-.238-.378a9.94 9.94 0 01-1.527-5.293c0-5.508 4.487-9.992 9.998-9.992 2.671 0 5.181 1.04 7.07 2.93a9.93 9.93 0 012.929 7.07c-.002 5.51-4.488 9.992-10 9.992zm5.486-7.486c-.301-.151-1.782-.879-2.058-.98-.276-.1-.477-.151-.677.151-.2.302-.776.98-.951 1.18-.176.2-.351.226-.652.075-.301-.151-1.273-.469-2.425-1.498-.896-.8-1.5-1.787-1.676-2.088-.176-.302-.019-.464.132-.614.135-.135.301-.351.452-.527.151-.176.2-.302.301-.502.1-.2.05-.376-.025-.527-.075-.151-.677-1.633-.927-2.236-.245-.585-.493-.506-.677-.515l-.577-.01a1.11 1.11 0 00-.802.376c-.276.302-1.053 1.029-1.053 2.512s1.078 2.913 1.228 3.114c.151.2 2.121 3.24 5.139 4.546.718.31 1.279.495 1.717.633.721.229 1.378.197 1.896.12.578-.086 1.782-.728 2.034-1.432.251-.703.251-1.305.176-1.432-.075-.126-.276-.201-.577-.352z" />
        </svg>
      </span>
    </a>
  );
};

export default WhatsAppFloat;
