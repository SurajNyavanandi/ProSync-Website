/**
 * Builds standard WhatsApp deep links using VITE_WHATSAPP_NUMBER.
 * Pre-filled message (blanks show ____):
 * Hello Prosync Consulting, I am interested in DPR preparation. Name: ____. Project: ____. Location: ____. Estimated project cost: ____. Funding required: ____.
 */
export function buildWhatsAppUrl(values = {}) {
  const envNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
  const cleanNumber = String(envNumber).replace(/\D/g, "");

  const name = values.name ? String(values.name).trim() : "____";
  const project = values.projectName || values.project ? String(values.projectName || values.project).trim() : "____";
  const location = values.location ? String(values.location).trim() : "____";
  const cost = values.estimatedCost || values.cost ? String(values.estimatedCost || values.cost).trim() : "____";
  const funding = values.fundingRequirement || values.funding ? String(values.fundingRequirement || values.funding).trim() : "____";

  const message = `Hello Prosync Consulting, I am interested in DPR preparation. Name: ${name}. Project: ${project}. Location: ${location}. Estimated project cost: ${cost}. Funding required: ${funding}.`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
