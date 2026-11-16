import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { SITE } from "../lib/site";

export function TermsPage() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="Terms of use for the DevByLand website and services."
        path="/terms"
      />
      <Navbar />

      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Terms & Conditions</h1>
          <p className="section-intro">Last updated: 29/10/2026</p>
        </div>
      </header>

      <section className="section">
        <div className="container legal-content">
          <p>
            These terms (“Terms”) govern use of the DevByLand website and
            services provided by DevByLand.
          </p>
          <h2>1. Acceptance</h2>
          <p>
            By using our website or requesting a service, you accept these terms.
            If you do not agree, please do not use our site.
          </p>
          <h2>2. Our services</h2>
          <p>
            Web design & development, e-commerce, UX/UI, SEO and related digital
            services — as agreed with each client.
          </p>
          <h2>3. Payments</h2>
          <p>
            Payments follow the agreement for each project. Any deposit required
            is non-refundable after work has started.
          </p>
          <h2>4. Ownership</h2>
          <p>
            Deliverables become the client’s property after full payment. Until
            then they remain the property of DevByLand. After final payment, code
            and assets are transferred to you.
          </p>
          <h2>5. Changes</h2>
          <p>
            We may update these terms. The latest version is published on this
            page.
          </p>
          <h2>6. Limitation of liability</h2>
          <p>
            We are not liable for damages arising from use of our websites or
            services, except where required by law.
          </p>
          <h2>7. Governing law</h2>
          <p>These terms are governed by the laws of the Republic of Albania.</p>
          <h2>8. Contact</h2>
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
