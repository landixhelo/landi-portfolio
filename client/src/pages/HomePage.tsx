import { useEffect, useRef, useState } from "react";
import type { CSSProperties, FormEvent, MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { SITE } from "../lib/site";

type Language = "sq" | "en";
type IconName =
  | "arrow"
  | "bag"
  | "calendar"
  | "cart"
  | "check"
  | "code"
  | "layers"
  | "menu"
  | "message"
  | "search"
  | "shield"
  | "spark"
  | "support"
  | "x";

const WHATSAPP_URL = `${SITE.whatsappUrl}?text=${encodeURIComponent(
  "Hello DevByLand, I would like a quote for my project."
)}`;

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    bag: (
      <>
        <path d="M6 8h12l1 12H5L6 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01" />
      </>
    ),
    cart: (
      <>
        <path d="M3 4h2l2.4 10.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
        <circle cx="10" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    code: (
      <>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    message: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 21l1.7-4.8A8.8 8.8 0 1 1 21 11.5Z" />
        <path d="M8.5 9.5c.5 2.3 1.8 3.7 4 4.5" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 4 6v5c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: (
      <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3ZM5 17l.7 2.3L8 20l-2.3.7L5 23l-.7-2.3L2 20l2.3-.7L5 17Z" />
    ),
    support: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M4 12h4M16 12h4M12 4v4M12 16v4" />
      </>
    ),
    x: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}

const copy = {
  sq: {
    nav: ["Shërbimet", "Projektet", "Procesi", "Çmimet", "FAQ", "Kontakt"],
    quote: "Merr një ofertë falas",
    heroEyebrow: "Studio web nga Tirana • Për biznese që duan të rriten",
    heroTitle: (
      <>
        Faqe interneti të shpejta që <span>sjellin klientë.</span>
      </>
    ),
    heroText:
      "Dizajnojmë dhe ndërtojmë faqe, dyqane online dhe sisteme rezervimi që janë të qarta, të shpejta dhe gati për biznes.",
    whatsapp: "Shkruaj në WhatsApp",
    trust: ["Përgjigje brenda 24h", "SEO bazë i përfshirë", "Çmime fikse"],
    techLabel: "Teknologji moderne. Pa varësi të panevojshme.",
    servicesEyebrow: "Çfarë bëjmë",
    servicesTitle: "Gjithçka që biznesi yt duhet për të performuar online.",
    servicesText:
      "Nga ideja te lançimi dhe mirëmbajtja — një partner i vetëm, me komunikim të qartë në çdo hap.",
    stats: [
      ["30+", "projekte të realizuara"],
      ["24h", "kohë mesatare përgjigjeje"],
      ["20+", "biznese të mbështetura"],
      ["4+", "vite eksperiencë"],
    ],
    workEyebrow: "Punët tona",
    workTitle: "Probleme reale. Zgjidhje që punojnë.",
    workText:
      "Çdo projekt nis nga objektivi i biznesit — jo nga një template. Këtu janë tre lloje produktesh që ndërtojmë.",
    viewCase: "Shiko projektin",
    problem: "Problemi",
    solution: "Zgjidhja",
    result: "Rezultati",
    feedbackEyebrow: "Feedback",
    feedbackTitle: "Besimi fitohet me punë të mirë.",
    placeholder: "Profile demonstrimi — zëvendësohet me dëshmi të verifikuar para publikimit.",
    processEyebrow: "Proces i qartë",
    processTitle: "Katër hapa. Asnjë surprizë.",
    processText: "Ti e di gjithmonë çfarë po ndodh, çfarë vjen më pas dhe kur do të jetë gati.",
    pricingEyebrow: "Çmime transparente",
    pricingTitle: "Zgjidh bazën. Ne e përshtatim për ty.",
    pricingText: "Çmim fiks, pa kosto të fshehura. Oferta finale vjen pas një bisede të shkurtër.",
    from: "Nga",
    popular: "Më i zgjedhuri",
    choose: "Kërko këtë plan",
    faqEyebrow: "Pyetje të shpeshta",
    faqTitle: "Përgjigje të qarta, para se të fillojmë.",
    finalEyebrow: "Ke një ide?",
    finalTitle: "Le ta ndërtojmë bashkë.",
    finalText:
      "Na trego shkurt çfarë të duhet. Do të marrësh një përgjigje të qartë brenda një dite pune.",
    name: "Emri",
    email: "Email",
    message: "Mesazhi",
    send: "Dërgo kërkesën",
    footerText:
      "Faqe dhe sisteme web të shpejta për biznese që duan më shumë klientë dhe më pak punë manuale.",
    company: "Kompania",
    services: "Shërbimet",
    contact: "Kontakt",
    location: "Tiranë, Shqipëri",
    rights: "Të gjitha të drejtat e rezervuara.",
  },
  en: {
    nav: ["Services", "Work", "Process", "Pricing", "FAQ", "Contact"],
    quote: "Get a free quote",
    heroEyebrow: "Web studio from Tirana • Built for growing businesses",
    heroTitle: (
      <>
        Fast websites that <span>bring you customers.</span>
      </>
    ),
    heroText:
      "We design and build websites, online stores and booking systems that are clear, fast and ready for business.",
    whatsapp: "Chat on WhatsApp",
    trust: ["Reply within 24h", "Essential SEO included", "Fixed pricing"],
    techLabel: "Modern technology. No unnecessary dependencies.",
    servicesEyebrow: "What we do",
    servicesTitle: "Everything your business needs to perform online.",
    servicesText:
      "From idea to launch and maintenance — one partner, with clear communication at every step.",
    stats: [
      ["30+", "projects delivered"],
      ["24h", "average response time"],
      ["20+", "businesses supported"],
      ["4+", "years of experience"],
    ],
    workEyebrow: "Selected work",
    workTitle: "Real problems. Solutions that work.",
    workText:
      "Every project starts with the business goal — not a template. Here are three types of products we build.",
    viewCase: "View case study",
    problem: "Problem",
    solution: "Solution",
    result: "Result",
    feedbackEyebrow: "Client feedback",
    feedbackTitle: "Trust is earned through good work.",
    placeholder: "Demo profile — replace with a verified testimonial before publishing.",
    processEyebrow: "A clear process",
    processTitle: "Four steps. Zero surprises.",
    processText: "You always know what is happening, what comes next and when it will be ready.",
    pricingEyebrow: "Transparent pricing",
    pricingTitle: "Choose a base. We tailor it to you.",
    pricingText: "Fixed price, no hidden costs. Your final quote follows a short discovery call.",
    from: "From",
    popular: "Most popular",
    choose: "Choose this plan",
    faqEyebrow: "Frequently asked",
    faqTitle: "Clear answers, before we start.",
    finalEyebrow: "Have an idea?",
    finalTitle: "Let’s build it together.",
    finalText: "Tell us briefly what you need. You will get a clear reply within one business day.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send request",
    footerText:
      "Fast websites and web systems for businesses that want more customers and less manual work.",
    company: "Company",
    services: "Services",
    contact: "Contact",
    location: "Tirana, Albania",
    rights: "All rights reserved.",
  },
};

const serviceData = {
  sq: [
    ["Websites", "Faqe të shpejta, moderne dhe të optimizuara për konvertime.", "layers"],
    ["E-commerce", "Dyqane online që e bëjnë blerjen të thjeshtë dhe të sigurt.", "cart"],
    ["UX/UI Design", "Eksperienca të qarta që udhëheqin vizitorin drejt veprimit.", "spark"],
    ["SEO", "Strukturë teknike dhe përmbajtje bazë për t’u gjetur në Google.", "search"],
    ["Sisteme custom", "Rezervime, qira, dashboard-e dhe procese sipas biznesit.", "code"],
    ["Mirëmbajtje", "Përditësime, monitorim dhe ndihmë kur të duhet.", "support"],
  ],
  en: [
    ["Websites", "Fast, modern websites optimised to turn visits into enquiries.", "layers"],
    ["E-commerce", "Online stores that make buying simple, fast and secure.", "cart"],
    ["UX/UI Design", "Clear experiences that guide visitors toward action.", "spark"],
    ["SEO", "Technical structure and essential content to help you rank.", "search"],
    ["Custom systems", "Booking, rental, dashboards and workflows built for you.", "code"],
    ["Maintenance", "Updates, monitoring and help whenever you need it.", "support"],
  ],
} as const;

const projects = {
  sq: [
    {
      name: "Tavolina",
      type: "Platformë rezervimi",
      headline: "Rezervime restoranti, pa telefonata të humbura.",
      problem: "Proces manual dhe konfirmime të ngadalta.",
      solution: "Platformë e qartë me orare dhe menaxhim tavolinash.",
      result: "Më pak punë manuale dhe eksperiencë më e mirë për klientin.",
      tags: ["React", "Node.js", "PostgreSQL"],
      theme: "orange",
    },
    {
      name: "Stitch Bear",
      type: "E-commerce",
      headline: "Një dyqan i ngrohtë për dhurata personale.",
      problem: "Produktet unike humbnin në një prezantim të paqartë.",
      solution: "Katalog vizual me personalizim dhe checkout të thjeshtë.",
      result: "Rrugë më e shkurtër nga zbulimi te porosia.",
      tags: ["React", "Stripe", "Vercel"],
      theme: "cream",
    },
    {
      name: "AutoRent",
      type: "Sistem qiraje",
      headline: "Nga kërkimi i makinës te rezervimi në pak minuta.",
      problem: "Disponueshmëria kontrollohej manualisht.",
      solution: "Flotë, filtra dhe rezervime në një sistem të vetëm.",
      result: "Kërkesa më cilësore dhe menaxhim më i shpejtë.",
      tags: ["React", "Node.js", "API"],
      theme: "blue",
    },
  ],
  en: [
    {
      name: "Tavolina",
      type: "Booking platform",
      headline: "Restaurant bookings, without missed calls.",
      problem: "Manual process and slow confirmations.",
      solution: "A clear platform with time slots and table management.",
      result: "Less admin and a better customer experience.",
      tags: ["React", "Node.js", "PostgreSQL"],
      theme: "orange",
    },
    {
      name: "Stitch Bear",
      type: "E-commerce",
      headline: "A warm online store for personal gifts.",
      problem: "Unique products were lost in an unclear presentation.",
      solution: "A visual catalogue with customisation and simple checkout.",
      result: "A shorter journey from discovery to purchase.",
      tags: ["React", "Stripe", "Vercel"],
      theme: "cream",
    },
    {
      name: "AutoRent",
      type: "Rental system",
      headline: "From finding a car to booking it in minutes.",
      problem: "Availability was checked manually.",
      solution: "Fleet, filters and reservations in one system.",
      result: "Better enquiries and faster management.",
      tags: ["React", "Node.js", "API"],
      theme: "blue",
    },
  ],
};

const plans = {
  sq: [
    [
      "Starter",
      "150",
      [
        "Landing page profesionale",
        "Dizajn responsive",
        "Formular kontakti",
        "SEO bazë",
        "Dorëzim i shpejtë",
      ],
    ],
    [
      "Web + Features",
      "350",
      [
        "Deri në 6 faqe",
        "Dizajn i personalizuar",
        "Integrime & funksione",
        "CMS i thjeshtë",
        "30 ditë mbështetje",
      ],
    ],
    [
      "Full Platform",
      "550",
      [
        "Sistem sipas biznesit",
        "Login & role",
        "Dashboard menaxhimi",
        "Database & API",
        "Trajnim dhe mbështetje",
      ],
    ],
  ],
  en: [
    [
      "Starter",
      "150",
      [
        "Professional landing page",
        "Responsive design",
        "Contact form",
        "Essential SEO",
        "Fast delivery",
      ],
    ],
    [
      "Web + Features",
      "350",
      [
        "Up to 6 pages",
        "Custom design",
        "Integrations & features",
        "Simple CMS",
        "30 days support",
      ],
    ],
    [
      "Full Platform",
      "550",
      [
        "Custom business system",
        "Login & roles",
        "Admin dashboard",
        "Database & API",
        "Training and support",
      ],
    ],
  ],
};

const faqData = {
  sq: [
    [
      "A përfshihen hostimi dhe domain-i?",
      "Të ndihmojmë t’i zgjedhësh dhe konfigurosh. Kostot e palëve të treta paguhen direkt nga ti, pa markup nga ne.",
    ],
    [
      "Kush e zotëron kodin dhe faqen?",
      "Ti. Pas pagesës finale merr aksesin, kodin dhe pronësinë e plotë të materialeve të projektit.",
    ],
    [
      "Sa kohë zgjat një projekt?",
      "Një landing page zakonisht 1–2 javë; një faqe me funksione 3–5 javë. Afati konfirmohet në ofertë.",
    ],
    [
      "A ofroni mbështetje pas lançimit?",
      "Po. Çdo projekt ka një periudhë fillestare mbështetjeje dhe mund të zgjedhësh plan mirëmbajtjeje mujore.",
    ],
    [
      "A mund të nënshkruajmë NDA?",
      "Po. E trajtojmë idenë, të dhënat dhe materialet e biznesit tënd me konfidencialitet të plotë.",
    ],
    [
      "Si kryhet pagesa?",
      "Zakonisht 50% për të nisur dhe 50% para lançimit. Projektet më të mëdha mund të ndahen në etapa.",
    ],
    [
      "A mund ta përditësoj vetë përmbajtjen?",
      "Po. Kur kjo është kërkesë, ndërtojmë një panel të thjeshtë që ekipi yt mund ta përdorë pa njohuri teknike.",
    ],
  ],
  en: [
    [
      "Are hosting and domain included?",
      "We help you choose and configure both. Third-party costs are paid directly by you, with no markup from us.",
    ],
    [
      "Who owns the code and website?",
      "You do. After final payment, you receive access, code and full ownership of the project materials.",
    ],
    [
      "How long does a project take?",
      "A landing page usually takes 1–2 weeks; a feature-rich website 3–5 weeks. Timing is confirmed in your quote.",
    ],
    [
      "Do you offer support after launch?",
      "Yes. Every project has an initial support period, and you can choose an ongoing monthly care plan.",
    ],
    [
      "Can we sign an NDA?",
      "Yes. We treat your idea, data and business materials with complete confidentiality.",
    ],
    [
      "How do payments work?",
      "Usually 50% to begin and 50% before launch. Larger projects can be split into milestones.",
    ],
    [
      "Can I update the content myself?",
      "Yes. When needed, we build a simple admin area your team can use without technical knowledge.",
    ],
  ],
};

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? "logo-light" : ""}`} href="/" aria-label="DevByLand home">
      <span className="logo-mark">D</span>
      <span>
        DevBy<span>Land</span>
      </span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <header className={`section-heading ${light ? "light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </header>
  );
}

function ProjectVisual({ name, theme }: { name: string; theme: string }) {
  return (
    <div
      className={`project-visual visual-${theme}`}
      aria-label={`${name} website preview`}
      role="img"
    >
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <div>www.{name.toLowerCase().replace(" ", "")}.al</div>
      </div>
      {name === "Tavolina" && (
        <div className="tavolina-ui">
          <div className="mini-nav">
            <b>Tavolina.</b>
            <span>Explore &nbsp; About &nbsp; Sign in</span>
          </div>
          <div className="mini-hero">
            <small>TABLE, SET, ENJOY.</small>
            <strong>
              Your table is
              <br />
              waiting.
            </strong>
            <button>Find a table</button>
          </div>
          <div className="mini-card-row">
            <i />
            <i />
            <i />
          </div>
        </div>
      )}
      {name === "Stitch Bear" && (
        <div className="bear-ui">
          <div className="mini-nav">
            <b>Stitch Bear</b>
            <span>Shop &nbsp; Our story &nbsp; Cart (0)</span>
          </div>
          <div className="bear-grid">
            <div>
              <small>MADE FOR YOU</small>
              <strong>
                Little gifts.
                <br />
                Big feelings.
              </strong>
              <button>Shop gifts</button>
            </div>
            <div className="bear-shape">
              <span>SB</span>
            </div>
          </div>
          <div className="product-dots">
            <i />
            <i />
            <i />
          </div>
        </div>
      )}
      {name === "AutoRent" && (
        <div className="auto-ui">
          <div className="mini-nav">
            <b>AUTORENT</b>
            <span>Fleet &nbsp; Locations &nbsp; Support</span>
          </div>
          <div className="auto-copy">
            <small>DRIVE YOUR WAY</small>
            <strong>
              Find the right car
              <br />
              for every road.
            </strong>
          </div>
          <div className="car-shape">
            <span />
            <span />
          </div>
          <div className="search-strip">
            <span>Pick-up</span>
            <span>Return</span>
            <button>Search cars</button>
          </div>
        </div>
      )}
    </div>
  );
}

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const target = Number.parseInt(value, 10);
    const suffix = value.replace(String(target), "");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const startedAt = performance.now();
        const duration = 1100;
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${Math.round(target * eased)}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <strong ref={ref}>{display}</strong>;
}

export function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const mainRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const elements = mainRef.current?.querySelectorAll(".reveal");
    if (!elements || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const process = mainRef.current?.querySelector(".process-grid");
    if (!process) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && entry.target.classList.add("is-active"),
      { threshold: 0.35 },
    );
    observer.observe(process);
    return () => observer.disconnect();
  }, []);

  const handleHeroPointer = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  const handleProjectTilt = (event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(max-width: 860px), (prefers-reduced-motion: reduce)").matches) return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -2.5;
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 3.5;
    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (name.length < 2 || !email || message.length < 10) {
      setFormStatus("error");
      return;
    }
    setFormStatus("loading");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: `DevByLand enquiry from ${name}`,
          message,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = (await res.json()) as { success?: string | boolean };
      if (!res.ok || json.success === "false" || json.success === false) {
        throw new Error("Send failed");
      }
      setFormStatus("success");
      form.reset();
    } catch {
      setFormStatus("error");
    }
  };

  const homeFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.en.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <Seo
        path="/"
        title={SITE.defaultTitle}
        description={SITE.defaultDescription}
        jsonLd={homeFaqLd}
      />
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-wrap">
          <Logo light />
          <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
            {t.nav.map((item, index) => (
              <a
                key={item}
                href={["#services", "#work", "#process", "#pricing", "#faq", "#contact"][index]}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <div className="lang-switch" aria-label="Language selector">
              {(["sq", "en"] as Language[]).map((lang) => (
                <button
                  className={language === lang ? "active" : ""}
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  aria-pressed={language === lang}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <a className="btn btn-primary nav-cta" href="#contact">
              {t.quote}
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <Icon name={menuOpen ? "x" : "menu"} />
            </button>
          </div>
        </div>
      </header>

      <main ref={mainRef} id="top">
        <section className="hero" ref={heroRef} onMouseMove={handleHeroPointer}>
          <div className="hero-mesh" aria-hidden="true">
            <span className="mesh-blob mesh-one" />
            <span className="mesh-blob mesh-two" />
            <span className="mesh-blob mesh-three" />
          </div>
          <div className="hero-cursor-glow" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{t.heroEyebrow}</p>
              <h1
                aria-label={
                  language === "en"
                    ? "Fast websites that bring you customers."
                    : "Faqe interneti të shpejta që sjellin klientë."
                }
              >
                {(language === "en"
                  ? ["Fast", "websites", "that", "bring", "you", "customers."]
                  : ["Faqe", "interneti", "të", "shpejta", "që", "sjellin", "klientë."]
                ).map((word, index, words) => (
                  <span
                    className={index >= words.length - 2 ? "accent-word hero-word" : "hero-word"}
                    key={`${language}-${word}`}
                    style={{ "--word-delay": `${0.12 + index * 0.07}s` } as CSSProperties}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </h1>
              <p className="hero-text">{t.heroText}</p>
              <div className="hero-actions">
                <a className="btn btn-primary btn-large" href="#contact">
                  {t.quote}
                  <Icon name="arrow" />
                </a>
                <a
                  className="btn btn-secondary btn-large"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="message" />
                  {t.whatsapp}
                </a>
              </div>
              <ul className="trust-list" aria-label="Service guarantees">
                {t.trust.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero-showcase">
              <span className="abstract-shape shape-ring" aria-hidden="true" />
              <span className="abstract-shape shape-code" aria-hidden="true">
                {"{ }"}
              </span>
              <span className="abstract-shape shape-tag" aria-hidden="true">
                {"</>"}
              </span>
              <div className="showcase-card">
                <div className="showcase-topbar">
                  <div>
                    <span />
                    <span />
                    <span />
                  </div>
                  <small>live preview</small>
                </div>
                <div className="showcase-page">
                  <div className="showcase-nav">
                    <b>ORA.</b>
                    <span>Stay &nbsp; Explore &nbsp; Reserve</span>
                  </div>
                  <div className="showcase-main">
                    <p>STAY CLOSE TO THE SEA</p>
                    <h3>
                      Slow mornings.
                      <br />
                      <em>Better views.</em>
                    </h3>
                    <button>
                      Book your stay <Icon name="arrow" size={14} />
                    </button>
                  </div>
                  <div className="showcase-booking">
                    <span>
                      <small>Check in</small>18 Jun
                    </span>
                    <span>
                      <small>Check out</small>21 Jun
                    </span>
                    <span>
                      <small>Guests</small>2 adults
                    </span>
                    <button>
                      <Icon name="arrow" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="floating-score">
                <span>
                  <Icon name="spark" size={18} />
                </span>
                <div>
                  <strong>98/100</strong>
                  <small>Performance</small>
                </div>
              </div>
              <div className="floating-booking">
                <span>
                  <Icon name="calendar" size={18} />
                </span>
                <div>
                  <strong>New booking</strong>
                  <small>Confirmed just now</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tech-strip" aria-label="Technologies">
          <div className="container">
            <p>{t.techLabel}</p>
            <div className="tech-marquee">
              <div className="tech-list">
                {[0, 1].flatMap((group) =>
                  ["React", "Node.js", "PostgreSQL", "Next.js", "Vercel"].map((tech) => (
                    <span key={`${group}-${tech}`} aria-hidden={group === 1}>
                      {tech}
                    </span>
                  )),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <SectionHeading
              eyebrow={t.servicesEyebrow}
              title={t.servicesTitle}
              text={t.servicesText}
            />
            <div className="service-grid">
              {serviceData[language].map(([title, description, icon], index) => (
                <article
                  className="service-card reveal"
                  key={title}
                  style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as CSSProperties}
                >
                  <div className="service-number">0{index + 1}</div>
                  <div className="icon-box">
                    <Icon name={icon} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            {t.stats.map(([number, label]) => (
              <div className="stat reveal" key={label}>
                <AnimatedNumber value={number} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <SectionHeading eyebrow={t.workEyebrow} title={t.workTitle} text={t.workText} />
            <div className="projects-list">
              {projects[language].map((project, index) => (
                <article
                  className="project-card reveal"
                  key={project.name}
                  onMouseMove={handleProjectTilt}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.setProperty("--tilt-x", "0deg");
                    event.currentTarget.style.setProperty("--tilt-y", "0deg");
                  }}
                >
                  <div className="project-visual-wrap">
                    <ProjectVisual name={project.name} theme={project.theme} />
                  </div>
                  <div className="project-content">
                    <div className="project-meta">
                      <span>0{index + 1}</span>
                      <p>{project.type}</p>
                    </div>
                    <h3>{project.name}</h3>
                    <p className="project-headline">{project.headline}</p>
                    <dl className="project-details">
                      <div>
                        <dt>{t.problem}</dt>
                        <dd>{project.problem}</dd>
                      </div>
                      <div>
                        <dt>{t.solution}</dt>
                        <dd>{project.solution}</dd>
                      </div>
                      <div>
                        <dt>{t.result}</dt>
                        <dd>{project.result}</dd>
                      </div>
                    </dl>
                    <div className="project-footer">
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      {project.name === "AutoRent" ? (
                        <a
                          href="https://www.rentalcaral.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t.viewCase}
                          <Icon name="arrow" size={17} />
                        </a>
                      ) : (
                        <a href="#contact">
                          {t.viewCase}
                          <Icon name="arrow" size={17} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <SectionHeading eyebrow={t.feedbackEyebrow} title={t.feedbackTitle} />
            <div className="testimonial-grid">
              {[
                [
                  "AK",
                  "Ardit K.",
                  "Restaurant owner",
                  "Tavolina",
                  language === "sq"
                    ? "Komunikim i qartë dhe një sistem që na kursen kohë çdo ditë."
                    : "Clear communication and a system that saves us time every day.",
                ],
                [
                  "EM",
                  "Elena M.",
                  "Founder",
                  "Stitch Bear",
                  language === "sq"
                    ? "Faqja tani ndihet si marka jonë dhe porositë janë shumë më të thjeshta."
                    : "The website now feels like our brand, and ordering is much simpler.",
                ],
                [
                  "JL",
                  "John L.",
                  "Operations",
                  "AutoRent",
                  language === "sq"
                    ? "Nga ideja te lançimi, çdo hap ishte i organizuar dhe transparent."
                    : "From idea to launch, every step was organised and transparent.",
                ],
              ].map(([initials, name, role, company, quote], index) => (
                <article
                  className="testimonial-card reveal"
                  key={name}
                  style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
                >
                  <div className="stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote>“{quote}”</blockquote>
                  <footer>
                    <span className="avatar">{initials}</span>
                    <div>
                      <strong>{name}</strong>
                      <p>
                        {role}, {company}
                      </p>
                    </div>
                  </footer>
                  <small>{t.placeholder}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <SectionHeading
              eyebrow={t.processEyebrow}
              title={t.processTitle}
              text={t.processText}
            />
            <div className="process-grid">
              {(language === "sq"
                ? [
                    ["Briefing", "Kuptojmë biznesin, klientët dhe objektivin kryesor."],
                    ["Design", "Krijojmë strukturën dhe pamjen për aprovim."],
                    ["Build", "Ndërtojmë, testojmë dhe optimizojmë produktin."],
                    ["Launch", "Publikojmë, trajnojmë dhe qëndrojmë pranë teje."],
                  ]
                : [
                    ["Briefing", "We understand your business, customers and main goal."],
                    ["Design", "We create the structure and visual direction for approval."],
                    ["Build", "We develop, test and optimise the product."],
                    ["Launch", "We go live, train your team and stay close."],
                  ]
              ).map(([title, text], index) => (
                <article
                  className="process-step reveal"
                  key={title}
                  style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
                >
                  <div className="step-top">
                    <span>0{index + 1}</span>
                    <i />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="container">
            <SectionHeading
              eyebrow={t.pricingEyebrow}
              title={t.pricingTitle}
              text={t.pricingText}
            />
            <div className="pricing-grid">
              {plans[language].map(([name, price, features], index) => (
                <article
                  className={`price-card reveal ${index === 1 ? "featured" : ""}`}
                  key={name as string}
                  style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
                >
                  {index === 1 && <span className="popular-badge">{t.popular}</span>}
                  <h3>{name as string}</h3>
                  <p className="price">
                    <small>{t.from}</small>
                    <strong>€{price as string}</strong>
                  </p>
                  <ul>
                    {(features as string[]).map((feature) => (
                      <li key={feature}>
                        <Icon name="check" size={17} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`btn ${index === 1 ? "btn-primary" : "btn-outline"}`}
                    href="#contact"
                  >
                    {t.choose}
                    <Icon name="arrow" />
                  </a>
                </article>
              ))}
            </div>
            <p className="pricing-note">
              <Icon name="shield" size={18} />{" "}
              {language === "sq"
                ? "Çmim fiks, pa kosto të fshehura."
                : "Fixed price, no hidden costs."}
            </p>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <SectionHeading eyebrow={t.faqEyebrow} title={t.faqTitle} />
            <div className="faq-list">
              {faqData[language].map(([question, answer], index) => {
                const isOpen = openFaq === index;
                return (
                  <article className={`faq-item ${isOpen ? "open" : ""}`} key={question}>
                    <h3>
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                      >
                        <span>{question}</span>
                        <i aria-hidden="true" />
                      </button>
                    </h3>
                    <div className="faq-answer">
                      <div>
                        <p>{answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">{t.finalEyebrow}</p>
              <h2>{t.finalTitle}</h2>
              <p>{t.finalText}</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Icon name="message" />
                {t.whatsapp}
                <Icon name="arrow" />
              </a>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  {t.name}
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder={language === "sq" ? "Emri yt" : "Your name"}
                  />
                </label>
                <label>
                  {t.email}
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label>
                {t.message}
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={
                    language === "sq" ? "Më duhet një faqe për..." : "I need a website for..."
                  }
                />
              </label>
              <button
                className="btn btn-primary btn-large"
                type="submit"
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading"
                  ? language === "sq"
                    ? "Duke dërguar…"
                    : "Sending…"
                  : t.send}
                <Icon name="arrow" />
              </button>
              <small>
                {formStatus === "success"
                  ? language === "sq"
                    ? "Faleminderit! Mesazhi u dërgua."
                    : "Thank you! Your message was sent."
                  : formStatus === "error"
                    ? language === "sq"
                      ? `Diçka shkoi keq. Na shkruaj te ${SITE.email}.`
                      : `Something went wrong. Email us at ${SITE.email}.`
                    : formStatus === "loading"
                      ? language === "sq"
                        ? "Duke dërguar…"
                        : "Sending…"
                      : language === "sq"
                        ? "Përgjigjemi brenda një dite pune."
                        : "We reply within one business day."}
              </small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>{t.footerText}</p>
            <span>{t.location}</span>
          </div>
          <div>
            <h3>{t.services}</h3>
            <a href="#services">Websites</a>
            <a href="#services">E-commerce</a>
            <a href="#services">Custom systems</a>
            <a href="#services">Maintenance</a>
          </div>
          <div>
            <h3>{t.company}</h3>
            <a href="#work">{t.nav[1]}</a>
            <a href="#process">{t.nav[2]}</a>
            <a href="#pricing">{t.nav[3]}</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h3>{t.contact}</h3>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={WHATSAPP_URL}>{SITE.phoneDisplay}</a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="DevByLand on Instagram"
            >
              Instagram
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="DevByLand on LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} DevByLand. {t.rights}
          </p>
          <div>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

