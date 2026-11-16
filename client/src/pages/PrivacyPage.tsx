import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { SITE } from "../lib/site";

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="DevByLand privacy policy — how we collect, use and protect your personal data."
        path="/privacy"
      />
      <Navbar />

      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="section-intro">Last updated: 29/10/2026</p>
        </div>
      </header>

      <section className="section">
        <div className="container legal-content">
          <p>
            DevByLand respects the privacy of clients and website visitors. This
            policy explains how we collect, use and protect personal information.
          </p>
          <h2>1. Data we collect</h2>
          <p>
            Name, email and phone number (when you submit the contact form).
            Company or business name. Technical data (IP, browser, pages visited
            — for anonymous analytics).
          </p>
          <h2>2. How we use the data</h2>
          <p>
            To reply to enquiries or quotes, improve our services, and send
            updates only with your consent.
          </p>
          <h2>3. Data protection</h2>
          <p>
            We use security measures to protect information against unauthorised
            access, alteration or disclosure.
          </p>
          <h2>4. Sharing with third parties</h2>
          <p>
            We do not share your information with others, except when needed to
            fulfil a request or comply with the law.
          </p>
          <h2>5. Your rights</h2>
          <p>
            You may request a copy of your data, correction or deletion, and stop
            receiving marketing messages.
          </p>
          <h2>6. Contact</h2>
          <p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <br />
            <a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
