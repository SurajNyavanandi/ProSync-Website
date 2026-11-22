/**
 * api.js: Service layer for DPR mandate enquiries and API integration.
 */

const rawApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const API_BASE = rawApiUrl.endsWith("/api") ? rawApiUrl : `${rawApiUrl}/api`;

export const leadService = {
  /**
   * Submit enquiry to the backend Express / MongoDB API
   */
  async submitEnquiry(payload) {
    try {
      const res = await fetch(`${API_BASE}/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        return {
          ok: false,
          error: data.error || "Could not reach our enquiry server. Please try WhatsApp or call us.",
        };
      }

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error("[API submitEnquiry error]:", err);
      return {
        ok: false,
        error: "Could not reach our enquiry server. Please try WhatsApp or call us.",
      };
    }
  },
};
