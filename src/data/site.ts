export const SITE = {
  name: "Al Hamza",
  brand: "Al Hamza Properties",
  tagline: "Prime Karachi Residential Property Specialist",
  email: "hamza@alhamzaproperties.com",
  phone: "+92 335 2713961",
  phoneHref: "tel:+923352713961",
  whatsappHref: "https://wa.me/923352713961",
  address: "Scheme 33, Superhighway, Karachi",
  ombudsman: "Al Hamza Properties. Registered in Pakistan.",
  copyright: "© 2026 Al Hamza Properties",
} as const;

export type NavLink = {
  label: string;
  to: "/" | "/listings";
  hash?: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Listings", to: "/listings" },
  { label: "About", to: "/", hash: "about" },
  { label: "Process", to: "/", hash: "process" },
  { label: "Contact", to: "/", hash: "contact" },
];

export const AREAS = [
  "Gulshan-e-Usman",
  "Gulshan-e-Maymar",
  "Saadi Town",
  "Capital Society",
  "Police Society",
  "Rabia Enclave",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Hamza didn't just find us a house — he found us a home. His knowledge of Gulshan-e-Maymar is unmatched.",
    name: "The Khan Family",
    area: "Gulshan-e-Maymar · 2025",
  },
  {
    quote:
      "We had looked at a dozen 120-yard houses in Saadi Town. Hamza cut through the noise, negotiated firmly, and we moved in within six weeks.",
    name: "Ayesha & Imran Malik",
    area: "Saadi Town · 2025",
  },
  {
    quote:
      "Honest about the papers, honest about the price. The Police Society house was exactly as he described — no surprises on viewing day.",
    name: "Sana Qureshi",
    area: "Police Society, Scheme 33 · 2026",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    body: "A short conversation about how you live, your budget in PKR, and which Scheme 33 society actually fits — Saadi Town, Capital, Police, Usman, or Maymar.",
  },
  {
    number: "02",
    title: "Market Appraisal",
    body: "Current asking prices, recent closes, and a plain-English view of what your money buys across Scheme 33.",
  },
  {
    number: "03",
    title: "Curated Shortlist",
    body: "Three to five homes, not fifty. Each one visited, photographed, and checked for papers before it reaches you.",
  },
  {
    number: "04",
    title: "Keys in Hand",
    body: "From token through transfer. Hamza stays on the file until the keys are in your hand and the KE meter is in your name.",
  },
] as const;
