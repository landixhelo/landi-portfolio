import { type CSSProperties } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { getService, SERVICES, SITE } from "../lib/site";
import { CTA } from "../lib/content";

export function ServiceDetailPage() {
  useReveal();
  const { slug = "" } = useParams();
  const service = getService(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const url = `${SITE.url}/services/${service.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.description,
      url,
      provider: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
      },
      areaServed: [
        { "@type": "City", name: "Tirana" },
        { "@type": "Country", name: "Albania" },
      ],
      serviceType: service.name,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE.url}/services`,
        },
        { "@type": "ListItem", position: 3, name: service.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const related = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Seo
        title={service.title}
        description={service.description}
        path={`/services/${service.slug}`}
        keywords={`${service.name}, ${SITE.keywords}`}
        jsonLd={jsonLd}
      />
      <Navbar />

      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">
            <Link to="/services">Services</Link> / {service.shortName}
          </p>
          <h1>{service.h1}</h1>
          <p className="section-intro">{service.intro}</p>
        </div>
      </header>

      <section className="section">
        <div className="container service-detail-layout">
          <div className="reveal">
            <h2>What’s included</h2>
            <ul className="inner-bullets inner-bullets--lg">
              {service.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="inner-actions" style={{ marginTop: "1.75rem" }}>
              <Link className="btn btn-primary" to="/contact">
                Get a quote
              </Link>
              <a
                className="btn btn-outline"
                href={`${SITE.whatsappUrl}?text=${encodeURIComponent(
                  `Hi DevByLand! I’d like info about: ${service.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <aside className="service-side reveal">
            <h3>Why DevByLand?</h3>
            <p>
              A small studio in Tirana focused on results: websites that bring
              contact, sales or bookings — not just looks.
            </p>
            <ul className="inner-bullets">
              <li>1:1 communication</li>
              <li>Clear process</li>
              <li>Modern stack</li>
              <li>Support after launch</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <header className="section-heading reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Questions about {service.shortName}</h2>
          </header>
          <div className="faq-list reveal">
            {service.faqs.map((f) => (
              <details className="faq-item legal-faq" key={f.q}>
                <summary>{f.q}</summary>
                <div className="faq-answer">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-heading reveal">
            <p className="eyebrow">Other services</p>
            <h2>You might also need</h2>
          </header>
          <div className="service-grid">
            {related.map((s, i) => (
              <Link
                className="service-card reveal"
                to={`/services/${s.slug}`}
                key={s.slug}
                style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as CSSProperties}
              >
                <h3>{s.h1}</h3>
                <p>{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={CTA.final.title} text={CTA.final.text} cta={CTA.final.cta} />
      <Footer />
    </>
  );
}
