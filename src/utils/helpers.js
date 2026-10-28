/**
 * helpers.js: Utility functions for formatting currencies, numbers, and text.
 */

/**
 * Format Indian Rupee currency (e.g. 2500000000 -> ₹250 Cr)
 */
export function formatINR(amountInCrores) {
  if (!amountInCrores) return "";
  return `₹${amountInCrores} Cr`;
}

/**
 * Smooth scroll to element by ID
 */
export function scrollToElement(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Truncate text cleanly with ellipsis
 */
export function truncate(text, maxChars = 120) {
  if (!text || text.length <= maxChars) return text;
  return `${text.slice(0, maxChars)}...`;
}
