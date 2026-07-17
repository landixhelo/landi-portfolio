import { Helmet } from "react-helmet-async";
import { SITE } from "../lib/site";

type Props = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
};

export function Seo({
  title,
  description = SITE.defaultDescription,
  path = "/",
  image = SITE.ogImage,
  noindex = false,
}: Props) {
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : SITE.defaultTitle;
  const url = `${SITE.url}${path === "/" ? "/" : path}`;

  return (
    <Helmet>
      <html lang="sq" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="sq_AL" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="author" content={SITE.name} />
      <meta name="keywords" content="web development Shqipëri, agjenci SEO, krijim website, UX UI design, e-commerce Shqipëri, DevByLand" />
    </Helmet>
  );
}
