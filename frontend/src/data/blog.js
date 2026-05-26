// Blog posts. Ported from the former FastAPI backend (BLOG_POSTS) so the blog is
// fully frontend-driven — no API call. `body` paragraphs are separated by "\n\n".
export const BLOG_POSTS = [
  {
    slug: "health-benefits-of-pulses",
    title: "10 Powerful Health Benefits of Pulses You Should Know",
    excerpt:
      "Pulses are nutritional powerhouses — rich in plant protein, fiber, and essential minerals. Here's why they belong on every Indian plate.",
    category: "Nutrition",
    read_time: "6 min",
    date: "2025-11-12",
    cover:
      "https://images.unsplash.com/photo-1593536672824-f136b5a40f71?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    body:
      "Pulses—chana, toor, moong, urad, masoor—are the cornerstone of Indian nutrition. They deliver 20–25g of plant protein per 100g, are exceptionally rich in dietary fiber, and provide iron, folate, magnesium and potassium. Daily consumption supports heart health by lowering LDL cholesterol, helps stabilize blood sugar thanks to a low glycemic index, and promotes gut health through prebiotic fibers. Pulses are also climate-friendly: they fix nitrogen in soil and require a fraction of the water needed for animal protein.\n\nAt MAMTA DALL MILL, we mill pulses to retain maximum nutrition by using gentle, controlled polishing — never harsh chemical treatments. The result is dal that cooks faster, tastes better, and keeps every gram of goodness intact.",
  },
  {
    slug: "how-to-choose-quality-dal",
    title: "How to Choose Quality Dal: A Buyer's Checklist",
    excerpt:
      "From color uniformity to moisture content — a practical guide for households and wholesalers to identify truly premium pulses.",
    category: "Buyer's Guide",
    read_time: "5 min",
    date: "2025-10-28",
    cover:
      "https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    body:
      "Premium dal has tell-tale signs. Look for uniform color (no patchiness), clean appearance (no dust, husk fragments or stones), a fresh earthy aroma, and grains that snap cleanly between fingers. Moisture content should sit between 10–12% — too dry and the dal cracks, too moist and it spoils. Avoid pulses with an artificial sheen: that's often a sign of chemical polishing.\n\nFor wholesale buyers, ask suppliers for lot-level QC reports including foreign-matter percentage, broken grain percentage, and moisture readings. MAMTA DALL MILL provides QC certificates with every 30 kg consignment.",
  },
  {
    slug: "polished-vs-unpolished-pulses",
    title: "Polished vs Unpolished Pulses: What's the Real Difference?",
    excerpt:
      "Understanding the science behind dal polishing — and why the right technique matters for both taste and nutrition.",
    category: "Manufacturing",
    read_time: "7 min",
    date: "2025-10-10",
    cover:
      "https://images.unsplash.com/photo-1646587231643-80af77f0e75d?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    body:
      "Polishing dal serves two purposes: it removes the outer husk to make grains shine, and it improves shelf life. The problem? Many small mills use water, oil, leather, or even soapstone polishing — methods that can leave residues or strip nutrition.\n\nMAMTA DALL MILL uses a dry polishing process with food-grade brushes. Our pulses look naturally lustrous, retain B-vitamins and fiber, and cook beautifully. AGROVEDA retail packs follow the same standard so consumers get factory-fresh quality at home.",
  },
  {
    slug: "protein-rich-indian-foods",
    title: "Protein-Rich Indian Foods Built Around Pulses",
    excerpt:
      "Forget expensive imported protein powders — Indian kitchens have always been protein-dense. Here's how to maximize it.",
    category: "Nutrition",
    read_time: "5 min",
    date: "2025-09-22",
    cover:
      "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    body:
      "A bowl of toor dal (30g dry) packs ~7g protein. Pair it with rice and you create a complete amino acid profile. Sprouted moong, besan-based chila, kala chana salad, and rajma-chawal are all efficient, affordable protein meals. For active adults, two dal servings a day combined with curd or paneer easily hits the 60–80g protein target — without supplements.\n\nAGROVEDA's 500 g and 1 kg consumer packs are sized exactly for modern urban households planning weekly menus.",
  },
  {
    slug: "private-label-pulses-india",
    title: "Private Label Pulses in India: A Growth Opportunity",
    excerpt:
      "Why retail brands, D2C startups, and HoReCa chains are turning to specialist dal mills for private-label manufacturing.",
    category: "B2B Insights",
    read_time: "8 min",
    date: "2025-09-05",
    cover:
      "https://images.unsplash.com/photo-1651525670054-279c154bc3b6?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
    body:
      "India's packaged pulses category is growing at 12% CAGR, driven by hygiene awareness and quick commerce. Private label is the fastest entry route — you bring the brand and consumer relationship, the mill handles sourcing, processing, QC, and packaging.\n\nMAMTA DALL MILL offers end-to-end private-label services: lot selection from trusted mandis, custom pack sizes (200g, 500g, 1kg, 5kg), printed laminate or stand-up pouches, FSSAI compliance, and PAN-India dispatch. MOQs start from 500 kg per SKU.",
  },
];

// Listing payload (omits the heavy `body`), mirroring the old GET /api/blog response.
export const BLOG_LIST = BLOG_POSTS.map(({ body, ...rest }) => rest);

export const getPostBySlug = (slug) => BLOG_POSTS.find((p) => p.slug === slug) || null;
