export const SITE = {
  brand: "MAMTA DALL MILL",
  retail_brand: "AgroVedas",
  phone: "+91 98719 99890",
  phone_link: "+919871999890",
  whatsapp: "919871999890",
  email: "agrovedas.feedback@gmail.com",
  address: "3992-3994, 2nd Floor, Naya Bazar, Delhi-110006, India",
  map_query: "3992-3994 Naya Bazar Delhi 110006",
  whatsapp_default_msg: "Hi MAMTA DALL MILL, I'd like to enquire about your pulses.",
  forms: {
    // Wholesale "Request WholeSale Pricing" Google Form (https://forms.gle/kcLcpk4BPi2PyVEY8).
    // The site renders a custom native UI (InquiryForm) that POSTs straight to this form's
    // formResponse endpoint — no backend. `embedUrl` is kept only as an iframe fallback.
    wholesale: {
      formId: "1FAIpQLSfZJw1ev9J3PTiNrcH2sMFO0GGOWdnumJhBJG425MM-pd7D-A",
      embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfZJw1ev9J3PTiNrcH2sMFO0GGOWdnumJhBJG425MM-pd7D-A/viewform?embedded=true",
      // Field keys the Google Form marks as required (enforced client-side).
      required: ["name", "phone", "email", "product_interest"],
      // Map InquiryForm field keys -> Google Form `entry.*` field IDs.
      fields: {
        name: "entry.412256766",
        company: "entry.202086367",
        phone: "entry.1880548109",
        email: "entry.578631955",
        product_interest: "entry.413819585",
        quantity_required: "entry.2072945530",
        business_type: "entry.1316732269",
        message: "entry.597747383",
      },
    },
    // Contact "Untitled form" Google Form (https://forms.gle/etV2MKY2Z3Suyrym8).
    contact: {
      formId: "1FAIpQLSc16tA8zxTOCQC7KCW2iHsRGH4wI9uipNG8d1VCzFhXYK6MIA",
      embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc16tA8zxTOCQC7KCW2iHsRGH4wI9uipNG8d1VCzFhXYK6MIA/viewform?embedded=true",
      required: ["name", "phone", "email"],
      fields: {
        name: "entry.1086084392",
        company: "entry.1152028705",
        phone: "entry.2136246564",
        email: "entry.439493705",
        product_interest: "entry.1453220984",
        message: "entry.584857989",
      },
    },
  },
  logo_mamta: "https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/nyx88ebv_IMG_3945.png",
  logo_agrovedas: "https://customer-assets.emergentagent.com/job_agroveda-premium/artifacts/898f14x1_Final%20Logo-01.jpeg",
};

export const PRODUCTS = [
  {
    slug: "chana-dal",
    name: "Chana Dal",
    tag: "Split Bengal Gram",
    description: "Premium polished split chickpeas. Rich in protein and dietary fiber, cooks evenly and holds shape beautifully.",
    benefits: ["High plant protein (~22g/100g)", "Low glycemic index", "Rich in folate"],
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    slug: "toor-dal",
    name: "Toor Dal",
    tag: "Arhar / Split Pigeon Pea",
    description: "Golden-yellow split toor with a mild, nutty taste — the heart of South & North Indian kitchens.",
    benefits: ["Excellent source of protein", "Iron & potassium rich", "Easy to digest"],
    image: "https://images.unsplash.com/photo-1646587231643-80af77f0e75d?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    slug: "moong-dal",
    name: "Moong Dal",
    tag: "Split Yellow Mung",
    description: "Light, soothing and quick-cooking. Husked split moong dal for khichdi, soups and tadka preparations.",
    benefits: ["Highly digestible protein", "Antioxidant-rich", "Aids weight management"],
    image: "https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    slug: "urad-dal",
    name: "Urad Dal",
    tag: "Split Black Gram",
    description: "Creamy, protein-packed black gram split — essential for dal makhani, idli, dosa and vada batters.",
    benefits: ["Highest protein among pulses", "Rich in iron & calcium", "Good for bone health"],
    image: "https://images.unsplash.com/photo-1593536672824-f136b5a40f71?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    slug: "masoor-dal",
    name: "Masoor Dal",
    tag: "Red Lentils",
    description: "Vibrant orange-red lentils that cook in under 20 minutes. Mild, earthy flavour with a silky texture.",
    benefits: ["High in fiber & B-vitamins", "Cooks fastest among dals", "Heart-friendly"],
    image: "https://images.unsplash.com/photo-1614961234274-f204d01a23eb?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    slug: "rajma",
    name: "Rajma",
    tag: "Red Kidney Beans",
    description: "Premium-grade rajma — plump, uniform-sized kidney beans hand-graded for North Indian rajma-chawal.",
    benefits: ["High fiber for satiety", "Sustained energy release", "Iron & magnesium rich"],
    image: "https://images.unsplash.com/photo-1632709807889-f78c3c95faeb?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    slug: "white-matar",
    name: "White Matar",
    tag: "Dried White Peas",
    description: "Sweet, starchy white peas — perfect for chaats, ragda pattice and traditional Indian street food.",
    benefits: ["Plant protein & fiber", "Low in fat", "Versatile cooking"],
    image: "https://images.unsplash.com/photo-1599391567338-1a2b39394022?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    slug: "kabuli-chana",
    name: "Kabuli Chana",
    tag: "White Chickpeas",
    description: "Plump, cream-coloured chickpeas with smooth skin — ideal for chole, hummus and salads.",
    benefits: ["Excellent protein source", "Rich in manganese & folate", "Helps blood sugar control"],
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    slug: "chana-sabut",
    name: "Chana Sabut",
    tag: "Whole Bengal Gram (Kala Chana)",
    description: "Whole brown chickpeas with a robust, earthy flavour — perfect for kala chana curry, sundal and protein-rich salads.",
    benefits: ["High plant protein & fiber", "Iron rich", "Low glycemic index"],
    image: "https://images.unsplash.com/photo-1599391567338-1a2b39394022?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    slug: "moong-sabut",
    name: "Moong Sabut",
    tag: "Whole Green Mung",
    description: "Whole green gram with intact skin — ideal for sprouting, dal makhani-style preparations and protein bowls.",
    benefits: ["Easily sprouted", "Rich in protein & antioxidants", "Cooling for the body"],
    image: "https://images.unsplash.com/photo-1632709807889-f78c3c95faeb?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    slug: "urad-sabut",
    name: "Urad Sabut",
    tag: "Whole Black Gram",
    description: "Premium whole black gram — the soul of Punjabi dal makhani, slow-cooked for a creamy, rich finish.",
    benefits: ["Highest protein among pulses", "Rich in iron", "Great for bone health"],
    image: "https://images.unsplash.com/photo-1593536672824-f136b5a40f71?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    slug: "masoor-sabut",
    name: "Masoor Sabut",
    tag: "Whole Brown Lentils",
    description: "Whole brown masoor with intact husk — earthy, hearty and ideal for dal tadka and soups.",
    benefits: ["High in fiber & folate", "Plant-based iron", "Heart-friendly"],
    image: "https://images.unsplash.com/photo-1614961234274-f204d01a23eb?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
];

export const PROCESS_STEPS = [
  { title: "Procurement", desc: "Direct sourcing from trusted mandis & farmer collectives across India.", icon: "Sprout" },
  { title: "Cleaning", desc: "Multi-stage destoner, magnet & aspirator cleaning to remove all foreign matter.", icon: "Wind" },
  { title: "Grading", desc: "Size & quality grading via precision sieves and optical sorters.", icon: "Filter" },
  { title: "Packaging", desc: "Hygienic 30 kg bulk sacks and 500 g / 1 kg retail laminate zip pouches.", icon: "Package" },
  { title: "Quality Check", desc: "Lot-level QC reports: moisture, brokens, foreign matter & microbial.", icon: "ShieldCheck" },
  { title: "Dispatch", desc: "Pan-India dispatch with tracked logistics and on-time SLA commitment.", icon: "Truck" },
];

export const WHY_US = [
  { title: "Premium Quality", desc: "Hand-picked lots and lab-tested grain integrity.", icon: "Award" },
  { title: "Hygienic Processing", desc: "FSSAI-licensed facility with food-grade machinery.", icon: "ShieldCheck" },
  { title: "Competitive Pricing", desc: "Direct sourcing means transparent, wholesale-friendly rates.", icon: "BadgePercent" },
  { title: "Reliable Supply", desc: "Year-round stock continuity for institutional buyers.", icon: "Repeat" },
  { title: "Modern Packaging", desc: "From bulk sacks to retail pouches — branded or generic.", icon: "Package" },
  { title: "On-Time Delivery", desc: "PAN-India logistics with tracked dispatches.", icon: "Truck" },
];

export const TESTIMONIALS = [
  {
    quote: "MAMTA DALL MILL has been our wholesale partner for three years. Consistent quality, transparent pricing, never a missed dispatch.",
    name: "Rajesh Sharma",
    role: "Distributor, North India",
  },
  {
    quote: "We've sourced wholesale pulses from MAMTA for years. The packaging team is meticulous, FSSAI compliance is handled cleanly, and PAN-India logistics never let us down.",
    name: "Priya Mehta",
    role: "Founder, D2C Food Brand",
  },
  {
    quote: "AGROVEDAS' 1 kg toor dal is now a staple in my kitchen. The grain is clean, cooks evenly and the resealable zip pouch is genuinely useful.",
    name: "Anita Kapoor",
    role: "Home Chef, Delhi",
  },
];

export const CERTIFICATIONS = [
  { name: "FSSAI", desc: "Food Safety License", code: "FSSAI" },
  { name: "GST", desc: "GST Registered Manufacturer", code: "GST" },
  { name: "ISO 22000", desc: "Food Safety Management", code: "ISO" },
  { name: "Trademark", desc: "Registered Trademarks", code: "TM" },
  { name: "MSME", desc: "MSME Udyam Registered", code: "MSME" },
];
