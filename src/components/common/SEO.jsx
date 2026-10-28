import { useEffect } from "react";

/**
 * SEO Component: Programmatically updates document title, canonical link,
 * and meta descriptions for prosyncindia.com and search discovery (Prosync, Pro Sync, Prosync India).
 */
export default function SEO({
  title = "Prosync India (Pro Sync) | Investment Banking, Debt Syndication & Advisory | prosyncindia.com",
  description = "Prosync India (Pro Sync Consulting) is a premier boutique investment banking advisory firm in Hyderabad, India. Specializing in corporate debt syndication, project finance, pre-IPO advisory, solar funding, and DPR studies.",
  canonical = "https://prosyncindia.com/",
  image = "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793098353/prosync_ufbcfj.jpg"
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update or Create Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      metaDesc.content = description;
      document.head.appendChild(metaDesc);
    }

    // 3. Update or Create Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute("href", canonical);
    } else {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      linkCanonical.href = canonical;
      document.head.appendChild(linkCanonical);
    }

    // 4. Update OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonical);

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute("content", image);
  }, [title, description, canonical, image]);

  return null;
}
