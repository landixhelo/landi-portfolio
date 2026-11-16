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

  return (
    <>
      <Seo
        title="Work | Selected projects"
        description={`${PROJECTS_SECTION.title}. ${PROJECTS_SECTION.text}`}
        path="/projects"
        keywords={`web portfolio Albania, e-commerce project, ${SITE.keywords}`}
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
                className="project-card reveal"
                id={p.slug}
                key={p.slug}
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <div className="project-visual-wrap">
                  <div className="project-visual visual-cream portfolio-media">
                    <img src={p.img} alt={p.alt} loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>0{index + 1}</span>
                    <p>{p.tag}</p>
                  </div>
                  <h3>{p.title}</h3>
                  <dl className="project-details">
                    <div>
                      <dt>Problem</dt>
                      <dd>{p.problem}</dd>
                    </div>
                    <div>
                      <dt>Built</dt>
                      <dd>{p.built}</dd>
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
