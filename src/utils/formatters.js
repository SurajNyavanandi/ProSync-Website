/**
 * Financial & Typography Formatting Utilities
 */

/**
 * Formats a number or string into Indian Rupee denomination (Cr / L)
 */
export function formatRupees(amount) {
  if (!amount) return "";
  if (typeof amount === "string" && amount.startsWith("₹")) return amount;
  return `₹${amount}`;
}

/**
 * Truncates text with ellipsis cleanly without breaking words
 */
export function truncateText(text, maxLength = 120) {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

/**
 * Sanitizes phone number for tel: or wa.me URI schemes
 */
export function sanitizePhone(phone) {
  if (!phone) return "";
  return phone.replace(/[^0-9]/g, "");
}
