import React from "react";

// Embeds a Google Form via iframe. Google Forms iframes do not auto-resize,
// so `height` is fixed — tune it per form to avoid an inner scrollbar.
const GoogleFormEmbed = ({ src, title = "Inquiry form", height = 1400, testid = "google-form" }) => (
  <div className="card-elevated overflow-hidden">
    <iframe
      title={title}
      src={src}
      width="100%"
      height={height}
      style={{ border: 0 }}
      loading="lazy"
      data-testid={testid}
    >
      Loading…
    </iframe>
  </div>
);

export default GoogleFormEmbed;
