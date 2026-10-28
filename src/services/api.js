
/**
 * api.js: Service layer for mandate enquiry formatting, WhatsApp dispatch,
 * and future CRM API integration.
 */
export const leadService = {
  /**
   * Format and build direct WhatsApp enquiry link with mandate brief
   */
  buildWhatsAppUrl(leadData) {
    const { name, email, company, mandate, notes } = leadData;

    const messageLines = [
      `*New Mandate Enquiry - Prosync Advisory*`,
      ``,
      `• *Name:* ${name || "Anonymous"}`,
      `• *Work Email:* ${email || "Not provided"}`,
      `• *Company:* ${company || "Not specified"}`,
      `• *Mandate Focus:* ${mandate || "Capital Advisory"}`,
      notes ? `• *Details:* ${notes}` : null,
      ``,
      `_Submitted via Prosync Advisory Deal Desk (prosyncindia.com)_`
    ].filter(Boolean).join("\n");

    return `https://wa.me/919951445544?text=${encodeURIComponent(messageLines)}`;
  },

  /**
   * Submit enquiry (asynchronous dispatch)
   */
  async submitEnquiry(leadData) {
    // In production, can dispatch to a webhook or CRM endpoint
    const url = this.buildWhatsAppUrl(leadData);
    return { success: true, redirectUrl: url };
  }
};
