export const HOME_INTRO = {
  eyebrow: "Web studio · Tirana, Albania · CET timezone",
  headline:
    "Websites and web apps that help hospitality, rental and retail get more customers.",
  lead:
    "DevByLand designs and builds clear, fast sites and booking systems for European businesses. Fixed-price quotes within 24 hours.",
} as const;

export const SERVICES_SECTION = {
  label: "Services",
  title: "What we build for your business",
  text: "One partner for design, development and technical SEO — from first brief to launch.",
} as const;

export const PROJECTS_SECTION = {
  label: "Case studies",
  title: "Work that solves a real business problem",
  text: "Three products for e-commerce, hospitality and car rental — each built around a clear goal.",
} as const;

export type CaseStudy = {
  slug: string;
  className: string;
  img: string;
  alt: string;
  client: string;
  industry: string;
  tag: string;
  title: string;
  problem: string;
  built: string;
  results: string[];
  meta: string[];
  delay: string;
  liveUrl: string | null;
};

export const PROJECTS: CaseStudy[] = [
  {
    slug: "stitch-bear",
    className: "project-card--featured project-card--stitch",
    img: "/img/projects/stitch-bear.png",
    alt: "Stitch Bear e-commerce storefront",
    client: "Stitch Bear",
    industry: "Retail / handmade gifts",
    tag: "E-commerce",
    title: "Stitch Bear — online store for a handmade brand",
    problem:
      "Sales lived only on social media. There was no clear catalogue or checkout path.",
    built:
      "A visual online store with catalogue, simple checkout and an admin area for products and orders.",
    results: [
      "Shorter path from discovery to purchase",
      "Products presented as a proper brand, not a feed",
      "Orders managed in one place",
    ],
    meta: ["React", "Node.js", "Stripe-ready"],
    delay: "",
    liveUrl: null,
  },
  {
    slug: "tavolina",
    className: "project-card--tavolina",
    img: "/img/projects/tavolina.png",
    alt: "Tavolina hospitality ordering system",
    client: "Tavolina",
    industry: "Hospitality",
    tag: "Hospitality",
    title: "Tavolina — digital menu and ordering for venues",
    problem:
      "Paper menus and manual order handling slowed service and created mistakes.",
    built:
      "Digital menu, table ordering flow and a POS-style admin for bars and restaurants.",
    results: [
      "Fewer missed or handwritten orders",
      "Faster service at the table",
      "One screen for staff to manage the floor",
    ],
    meta: ["React", "Node.js", "POS"],
    delay: " reveal-delay-1",
    liveUrl: null,
  },
  {
    slug: "rental-car",
    className: "project-card--autorent",
    img: "/img/projects/autorent.png",
    alt: "AutoRent car rental booking platform",
    client: "AutoRent",
    industry: "Car rental",
    tag: "Rental",
    title: "AutoRent — fleet search and online booking",
    problem:
      "Availability and bookings were handled by phone and spreadsheets.",
    built:
      "Rental platform with fleet filters, online booking and an admin panel for reservations.",
    results: [
      "Customers can book without calling first",
      "Staff see availability in one system",
      "Higher-quality enquiries",
    ],
    meta: ["React", "Node.js", "PostgreSQL"],
    delay: " reveal-delay-2",
    liveUrl: "https://www.rentalcaral.com/",
  },
];

export const PACKAGES = [
  {
    name: "Business Website",
    price: "From €800",
    priceValue: "800",
    timeline: "Typical timeline: 2–4 weeks",
    desc: "A professional site that explains what you do and turns visits into enquiries.",
    features: [
      "Up to 6 pages, mobile-first design",
      "Contact form and WhatsApp CTA",
      "Essential technical SEO",
      "Launch on your domain",
    ],
    affects: "Extra pages, languages, CMS or content migration change the price.",
    featured: false,
  },
  {
    name: "E-commerce Store",
    price: "From €2,000",
    priceValue: "2000",
    timeline: "Typical timeline: 4–8 weeks",
    desc: "A store built to sell — catalogue, checkout and order management.",
    features: [
      "Product catalogue and categories",
      "Checkout and payment integration",
      "Admin for products and orders",
      "Basic product SEO and analytics",
    ],
    affects: "Catalogue size, payments, shipping rules and custom design affect the quote.",
    featured: true,
  },
  {
    name: "Custom Web App",
    price: "From €3,500",
    priceValue: "3500",
    timeline: "Typical timeline: 6–12 weeks",
    desc: "Booking, rental, POS or admin systems tailored to how you work.",
    features: [
      "Custom workflows and roles",
      "Admin dashboard and database",
      "API integrations as needed",
      "Training and launch support",
    ],
    affects: "Scope, integrations and user roles drive the final fixed price.",
    featured: false,
  },
] as const;

export const FAQS = [
  {
    q: "How long does a project take?",
    a: "A business website usually takes 2–4 weeks. An e-commerce store 4–8 weeks. A custom web app 6–12 weeks. Timing is confirmed in your quote.",
  },
  {
    q: "Do you work with clients outside Albania?",
    a: "Yes. We work remotely in English, on CET hours, with clients across Europe.",
  },
  {
    q: "Does the price include hosting and domain?",
    a: "We help you choose and set them up. Third-party costs are paid directly by you, with no markup from us.",
  },
  {
    q: "Who owns the code?",
    a: "You do. After final payment you receive full ownership of the code and project materials.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Every project includes an initial support window. Monthly care plans are available afterwards.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes. We are happy to sign one before discussing your project.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Clear communication and a system that saves us time every day.",
    name: "Ardit K.",
    role: "Restaurant owner",
    company: "Tavolina",
    placeholder: true,
  },
  {
    quote:
      "The website finally feels like our brand, and ordering is much simpler.",
    name: "Elena M.",
    role: "Founder",
    company: "Stitch Bear",
    placeholder: true,
  },
  {
    quote:
      "From idea to launch, every step was organised and transparent.",
    name: "John L.",
    role: "Operations",
    company: "AutoRent",
    placeholder: true,
  },
] as const;

export const CTA = {
  mid: {
    title: "Need a site that brings enquiries?",
    text: "Share a short brief. You get a fixed-price quote within 24 hours.",
    cta: "Get a quote",
  },
  final: {
    title: "Ready to start?",
    text: "Tell us about your business. We reply within one business day on CET hours.",
    cta: "Get a quote",
  },
} as const;

export const PROJECT_TYPES = [
  "Business website",
  "E-commerce store",
  "Booking / rental system",
  "Admin / POS panel",
  "Web app",
  "SEO / redesign",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under €1,000",
  "€1,000 – €2,500",
  "€2,500 – €5,000",
  "€5,000 – €10,000",
  "€10,000+",
  "Not sure yet",
] as const;
