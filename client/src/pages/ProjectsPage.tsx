import { useEffect, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { SITE } from "../lib/site";
import { CTA, PROJECTS, PROJECTS_SECTION } from "../lib/content";

export function ProjectsPage() {
  useReveal();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  const jsonLd = PROJECTS.map((p) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    description: `${p.problem} ${p.built}`,
    about: p.industry,
    creator: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    ...(p.liveUrl ? { url: p.liveUrl } : {}),
  }));

  return (
    <>
      <Seo
        title="Case Studies | DevByLand Work"
        description={`${PROJECTS_SECTION.title}. ${PROJECTS_SECTION.text}`}
        path="/projects"
        keywords={`web portfolio Europe, e-commerce case study, booking system, ${SITE.keywords}`}
        jsonLd={jsonLd}
      />
      <Navbar />

      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">{PROJECTS_SECTION.label}</p>
          <h1>{PROJECTS_SECTION.title}</h1>
          <p className="section-intro">{PROJECTS_SECTION.text}</p>
        </div>
      </header>

      <section className="section work-section">
        <div className="container">
          <div className="projects-list">
            {PROJECTS.map((p, index) => (
              <article
                className="project-card case-study reveal"
                id={p.slug}
                key={p.slug}
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <div className="project-visual-wrap">
                  <div className="project-visual visual-cream portfolio-media">
                    <img
                      src={p.img}
                      alt={p.alt}
                      loading="lazy"
                      decoding="async"
                      width={960}
                      height={640}
                    />
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>0{index + 1}</span>
                    <p>
                      {p.client} · {p.industry}
                    </p>
                  </div>
                  <h2>{p.title}</h2>
                  <dl className="project-details">
                    <div>
                      <dt>Problem</dt>
                      <dd>{p.problem}</dd>
                    </div>
                    <div>
                      <dt>What we built</dt>
                      <dd>{p.built}</dd>
                    </div>
                    <div>
                      <dt>Results</dt>
                      <dd>
                        <ul className="case-results">
                          {p.results.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                  <div className="project-footer">
                    <div className="tags">
                      {p.meta.map((m) => (
                        <span key={m}>{m}</span>
                      ))}
                    </div>
                    {p.liveUrl ? (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                        View live site →
                      </a>
                    ) : (
                      <Link to="/contact">Similar project? →</Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={CTA.final.title} text={CTA.final.text} cta={CTA.final.cta} />
      <Footer />
    </>
  );
}
