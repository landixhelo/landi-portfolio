import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SITE } from "../lib/site";

const links = [
  { to: "/services", label: "Services", kind: "route" },
  { to: "/projects", label: "Work", kind: "route" },
  { to: "/#process", label: "Process", kind: "hash" },
  { to: "/#pricing", label: "Pricing", kind: "hash" },
  { to: "/contact", label: "Contact", kind: "route" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-wrap">
        <Link className="logo logo-light" to="/" aria-label={`${SITE.name} home`}>
          <span className="logo-mark">D</span>
          <span>
            DevBy<span>Land</span>
          </span>
        </Link>

        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          {links.map((link) =>
            link.kind === "route" ? (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? "is-active" : undefined)}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ) : (
              <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-primary nav-cta" to="/contact">
            Get a quote
          </Link>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="20"
              viewBox="0 0 24 24"
              width="20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
