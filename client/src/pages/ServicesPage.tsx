import { type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { SERVICES, SITE } from "../lib/site";
import { CTA, PACKAGES, SERVICES_SECTION } from "../lib/content";

export function ServicesPage() {
  useReveal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DevByLand Services",
    description: SERVICES_SECTION.text,
    url: `${SITE.url}/services`,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: SERVICES.map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.intro,
      url: `${SITE.url}/services/${s.slug}`,
    })),
  };

  return (
    <>
      <Seo
        title="Services | Websites, E-commerce, UX/UI & SEO"
        description={`${SERVICES_SECTION.title}. ${SERVICES_SECTION.text}`}
        path="/services"
        keywords={`${SITE.keywords}, web agency Albania`}
        jsonLd={jsonLd}
      />
      <Navbar />

      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">{SERVICES_SECTION.label}</p>
          <h1>{SERVICES_SECTION.title}</h1>
          <p className="section-intro">{SERVICES_SECTION.text}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {SERVICES.map((service, index) => (
              <article
                className="service-card reveal"
                key={service.slug}
                id={service.slug}
                style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as CSSProperties}
              >
                <div className="service-number">0{index + 1}</div>
                <h3>{service.h1}</h3>
                <p>{service.intro}</p>
                <ul className="inner-bullets">
                  {service.bullets.slice(0, 4).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="inner-actions">
                  <Link className="btn btn-primary" to={`/services/${service.slug}`}>
                    More about {service.shortName}
                  </Link>
                  <Link className="text-link" to="/contact">
                    Get a quote →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="packages">
        <div className="container">
          <header className="section-heading reveal">
            <p className="eyebrow">Pricing</p>
            <h2>Pick the plan that fits your business</h2>
            <p className="section-intro">
              Fixed-price quotes. Prices in euro, no hidden costs.
            </p>
          </header>
          <div className="pricing-grid">
            {PACKAGES.map((pkg, index) => (
              <article
                className={`price-card reveal ${pkg.featured ? "featured" : ""}`}
                key={pkg.name}
                style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
              >
                {pkg.featured && <span className="popular-badge">Most popular</span>}
                <h3>{pkg.name}</h3>
                <p className="price">
                  <strong>{pkg.price}</strong>
                </p>
                <p className="price-desc">{pkg.desc}</p>
                <ul>
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  className={`btn ${pkg.featured ? "btn-primary" : "btn-outline"}`}
                  to="/contact"
                >
                  Get a quote
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={CTA.mid.title} text={CTA.mid.text} cta={CTA.mid.cta} />
      <Footer />
    </>
  );
}
