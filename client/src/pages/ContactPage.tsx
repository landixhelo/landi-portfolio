import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { BUDGET_RANGES, PROJECT_TYPES } from "../lib/content";
import { SITE } from "../lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactPage() {
  useReveal();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company_website") ?? "").trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const budget = String(data.get("budget") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const terms = data.get("terms") === "on";

    if (!terms || name.length < 2 || message.length < 10 || !email) {
      setStatus("error");
      setErrorMsg("Please fill in name, email, message and accept the terms.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

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
          company,
          projectType,
          budget,
          message,
          _replyto: email,
          _subject: `DevByLand quote: ${projectType || "project"} — ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const json = (await res.json()) as {
        success?: string | boolean;
        message?: string;
        error?: string;
      };

      if (!res.ok || json.success === "false" || json.success === false) {
        throw new Error(json.message || json.error || "Send failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(
        `Something went wrong. Email us at ${SITE.email} or WhatsApp ${SITE.phoneDisplay}.`
      );
    }
  }

  return (
    <>
      <Seo
        title="Get a Quote | DevByLand"
        description="Request a fixed-price quote within 24 hours. Business websites from €800, e-commerce from €2,000, custom web apps from €3,500."
        path="/contact"
        keywords={`get a quote, web development Europe, ${SITE.keywords}`}
      />
      <Navbar />

      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Get a quote</h1>
          <p className="section-intro">
            Tell us about your project. You get a clear fixed-price quote within
            24 hours on CET hours. Business website from €800 · E-commerce from
            €2,000 · Custom web app from €3,500.
          </p>
        </div>
      </header>

      <section className="contact-section" id="contact-us">
        <div className="container contact-grid">
          <div className="contact-copy reveal">
            <p className="eyebrow">Reach us</p>
            <h2>Your project starts with a short brief</h2>
            <p>
              Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <br />
              Phone: <a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>
              <br />
              WhatsApp:{" "}
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">
                {SITE.phoneDisplay}
              </a>
            </p>
            <a
              href={`${SITE.whatsappUrl}?text=${encodeURIComponent(
                "Hi DevByLand! I’d like a quote for a project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>

          <form className="contact-form reveal" onSubmit={onSubmit}>
            {status === "success" && (
              <p className="form-alert form-alert--ok" role="status">
                Message sent. We’ll reply within one business day.
              </p>
            )}
            {status === "error" && (
              <p className="form-alert form-alert--err" role="alert">
                {errorMsg}
              </p>
            )}

            <div className="hp-field" aria-hidden="true">
              <label>
                Company website
                <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="field-row">
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
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
              Company
              <input
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Company name"
              />
            </label>
            <div className="field-row">
              <label>
                Project type
                <select name="projectType" defaultValue={PROJECT_TYPES[0]} required>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Budget range
                <select name="budget" defaultValue="Not sure yet" required>
                  {BUDGET_RANGES.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              Message
              <textarea
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="What do you need, and by when?"
              />
            </label>
            <label className="terms-check">
              <input type="checkbox" name="terms" required />
              <span>
                By submitting, you agree to our <Link to="/terms">Terms</Link> and{" "}
                <Link to="/privacy">Privacy</Link>.
              </span>
            </label>
            <button
              className="btn btn-primary btn-large"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Get a quote"}
            </button>
            <small>We reply within one business day (CET).</small>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
