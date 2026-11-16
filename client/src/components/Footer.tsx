import { Link } from "react-router-dom";
import { SITE } from "../lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="logo logo-light" to="/" aria-label={`${SITE.name} home`}>
            <span className="logo-mark">D</span>
            <span>
              DevBy<span>Land</span>
            </span>
          </Link>
          <p>
            Fast websites and web systems for businesses that want more
            customers and less manual work.
          </p>
          <span>{SITE.address}</span>
        </div>
        <div>
          <h3>Services</h3>
          <Link to="/services/web-development">Websites</Link>
          <Link to="/services/ecommerce">E-commerce</Link>
          <Link to="/services/custom-systems">Custom systems</Link>
          <Link to="/services/maintenance">Maintenance</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link to="/projects">Work</Link>
          <a href="/#process">Process</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#faq">FAQ</a>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>
          <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {year} {SITE.name}. All rights reserved.
        </p>
        <div>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
