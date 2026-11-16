import { Link } from "react-router-dom";
import { SITE } from "../lib/site";

type Props = {
  title: string;
  text: string;
  cta?: string;
};

export function CtaBand({ title, text, cta = "Get a free quote" }: Props) {
  return (
    <section className="contact-section cta-band-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Ready?</p>
          <h2>{title}</h2>
          <p>{text}</p>
          <a
            href={`${SITE.whatsappUrl}?text=${encodeURIComponent(
              "Hi DevByLand! I’d like to talk about a project."
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
        <div className="cta-band-actions">
          <Link className="btn btn-primary btn-large" to="/contact">
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
