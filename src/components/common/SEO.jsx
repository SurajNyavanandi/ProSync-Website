import { useEffect } from "react";

/**
 * SEO Component: Programmatically updates document title, canonical link,
 * meta description, robots indexing directive, and OpenGraph/Twitter tags.
 */
export default function SEO({
  title = "DPR Preparation Services | Prosync Consulting",
  description = "Professional DPR preparation, project feasibility, financial projections, DSCR and CMA data support for new and expansion projects in Hyderabad and Vijayawada.",
  canonical = "https://prosyncindia.com/",
  image = "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793258172/Navy_and_Orange_CP_Monogram_Logo_xkgmso.jpg",
  noindex = false,
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to safely set or create meta elements
    const setMeta = (selector, attr, attrVal, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 2. Meta Title & Description
    setMeta('meta[name="title"]', "name", "title", title);
    setMeta('meta[name="description"]', "name", "description", description);

    // 3. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute("href", canonical);
    } else {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      linkCanonical.href = canonical;
      document.head.appendChild(linkCanonical);
    }

    // 4. Robots Directives
    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // 5. OpenGraph Tags
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:image"]', "property", "og:image", image);

    // 6. Twitter Card Tags
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:url"]', "name", "twitter:url", canonical);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
  }, [title, description, canonical, image, noindex]);

  return null;
}
