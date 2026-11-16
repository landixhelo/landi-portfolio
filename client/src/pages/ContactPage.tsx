import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
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

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const terms = data.get("terms") === "on";

    if (!terms || name.length < 2 || message.length < 10 || !email) {
      setStatus("error");
      setErrorMsg("Please fill in the required fields (name, email, message, terms).");
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
          _replyto: email,
          _subject: subject || `DevByLand enquiry: ${service}`,
          service,
          message,
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
        title="Contact | Get a free quote"
        description="Tell us about your project. DevByLand replies within 24 hours — websites, e-commerce, UX/UI and SEO."
        path="/contact"
        keywords={`contact DevByLand, website quote Tirana, ${SITE.keywords}`}
      />
      <Navbar />

      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Get a free quote</h1>
          <p className="section-intro">
            Tell us about your project and get a clear quote within 24 hours.
            Starter from €150 · Web + features from €350 · Full platform from €550.
          </p>
        </div>
      </header>

      <section className="contact-section" id="contact-us">
        <div className="container contact-grid">
          <div className="contact-copy reveal">
            <p className="eyebrow">Reach us</p>
            <h2>Your project starts here</h2>
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
                "Hi DevByLand! I’d like to talk about a project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>

          <form className="contact-form reveal" onSubmit={onSubmit}>
            {status === "success" && (
              <p className="form-alert form-alert--ok">Message sent successfully. Thank you!</p>
            )}
            {status === "error" && (
              <p className="form-alert form-alert--err">{errorMsg}</p>
            )}

            <div className="field-row">
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required minLength={2} placeholder="Your name" />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
              </label>
            </div>
            <div className="field-row">
              <label>
                Subject
                <input name="subject" type="text" placeholder="Subject" />
              </label>
              <label>
                Service
                <select name="service" defaultValue="Web Development">
                  <option value="Web Development">Web development</option>
                  <option value="UX/UI Design">UX / UI design</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="SEO">SEO and performance</option>
                  <option value="Custom systems">Custom systems</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Other">Other</option>
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
                placeholder="Tell us about your project"
              />
            </label>
            <label className="terms-check">
              <input type="checkbox" name="terms" required />
              <span>
                By submitting, you agree to our <Link to="/terms">Terms</Link> and{" "}
                <Link to="/privacy">Privacy</Link>.
              </span>
            </label>
            <button className="btn btn-primary btn-large" type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            <small>We reply within one business day.</small>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
