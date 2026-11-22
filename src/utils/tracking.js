/**
 * Centralized tracking utility pushing to window.dataLayer.
 * Does not fire events on button clicks or validation errors for leads.
 * Fired only when conditions explicitly dictate.
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });

  if (import.meta.env.DEV) {
    console.log(`[Tracking dataLayer.push]`, { event: eventName, ...params });
  }
}

/**
 * Fires generate_lead ONLY after API confirms save.
 */
export function trackLeadSubmission(sector, stage) {
  trackEvent("generate_lead", {
    form_name: "dpr_enquiry",
    project_sector: sector,
    project_stage: stage,
  });
}

/**
 * Tracks WhatsApp button clicks by location ('hero', 'contact', 'floating').
 */
export function trackWhatsAppClick(location) {
  trackEvent("whatsapp_click", { location });
}

/**
 * Tracks phone clicks by location ('header', 'contact').
 */
export function trackPhoneClick(location) {
  trackEvent("phone_click", { location });
}

/**
 * Initializes Google Tag Manager script ONLY if VITE_GTM_ID is set.
 * If blank, loads nothing.
 */
export function initGTM() {
  if (typeof window === "undefined") return;
  const gtmId = import.meta.env.VITE_GTM_ID;
  if (!gtmId || !String(gtmId).trim()) {
    return;
  }

  // Check if GTM script is already added
  if (document.getElementById("gtm-script")) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId.trim())}`;
  document.head.appendChild(script);
}
