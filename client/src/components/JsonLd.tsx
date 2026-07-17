import { Helmet } from "react-helmet-async";
import { SITE } from "../lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/img/logo.png`,
        email: SITE.email,
        telephone: SITE.phoneE164,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bulevardi Dëshmorët e Kombit",
          addressLocality: "Tiranë",
          addressCountry: "AL",
        },
        sameAs: [SITE.instagram, SITE.linkedin],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: SITE.email,
            telephone: SITE.phoneE164,
            availableLanguage: ["Albanian", "English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "sq",
      },
      {
        "@type": "ProfessionalService",
        name: SITE.name,
        image: `${SITE.url}/img/logo.png`,
        url: SITE.url,
        telephone: SITE.phoneE164,
        email: SITE.email,
        priceRange: "$$",
        areaServed: {
          "@type": "Country",
          name: "Albania",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bulevardi Dëshmorët e Kombit",
          addressLocality: "Tiranë",
          addressCountry: "AL",
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
