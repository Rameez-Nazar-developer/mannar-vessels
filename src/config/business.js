// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for business/contact information.
// Every unverified value below is explicitly marked. Do not
// publish REQUIRES_OWNER_CONFIRMATION values anywhere in the UI
// as if they were confirmed — components should treat that
// string as "unset" and render a graceful fallback or hide
// the field, not print it literally to visitors.
// ─────────────────────────────────────────────────────────────

const business = {
  name: "Mannar Vessels & Gifts",

  instagram: {
    handle: "@mannar_vessels_gifts",
    url: "https://www.instagram.com/mannar_vessels_gifts",
  },

  // WhatsApp number in international format, no symbols, e.g. "919447660310".
  // The number publicly listed for this business has NOT been verified
  // with the owner — replace before launch.
  whatsapp: "REPLACE_WITH_VERIFIED_NUMBER",

  // Publicly listed, unverified — confirm with owner before publishing.
  phone: "REQUIRES_OWNER_CONFIRMATION",

  address: {
    line1: "Central Junction",
    line2: "Karukachal, Kottayam",
    postcode: "Kerala 686540",
    country: "India",
    // Set once the owner confirms the pin is accurate.
    mapsUrl: "REQUIRES_OWNER_CONFIRMATION",
  },

  // Publicly listed, unverified — confirm with owner before publishing.
  openingHours: "REQUIRES_OWNER_CONFIRMATION",
};

export function whatsappLink(message) {
  const text = encodeURIComponent(message);
  if (business.whatsapp === "REPLACE_WITH_VERIFIED_NUMBER") {
    // No verified number yet — falls back to the Instagram profile
    // so the button is never dead, but never fabricates a number.
    return business.instagram.url;
  }
  return `https://wa.me/${business.whatsapp}?text=${text}`;
}

export function isConfirmed(value) {
  return Boolean(value) && !String(value).startsWith("REQUIRES_OWNER_CONFIRMATION") && value !== "REPLACE_WITH_VERIFIED_NUMBER";
}

export default business;
