import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
}

const SEO = ({ 
  title = "HRWL — Cinematic Brand Films & Motion Design", 
  description = "Cinematic brand films that make your product impossible to ignore. Senior-level motion design and creative direction by Djamel Haroual.", 
  url = "https://hrwl.studio", 
  image = "https://hrwl.studio/og/hero-thumb.png",
  type = "website"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
};

export default SEO;
