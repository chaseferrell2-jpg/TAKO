/* ─── Business constants ─────────────────────────────────────────── */
export const PHONE_DISPLAY = "931-414-4455";
export const PHONE_TEL = "tel:+19314144455";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=TAKO+Hibachi+Sushi+McMinnville+TN";
export const STORAGE_KEY = "tako-site-data-v1";
export const ADMIN_PASSCODE = "tako2026";

/* ─── Default site content (used until the owner saves changes) ──── */
export const DEFAULT_SITE_DATA = {
  locationText: "LIVE TODAY IN MCMINNVILLE: 11AM - 8PM",
  isOpen: true,
  menu: {
    Appetizers: [
      { id: "veggie-spring-roll", name: "Veggie Spring Roll", price: 2.95 },
      { id: "crab-rangoon", name: "Crab Rangoon", price: 3.25 },
      { id: "gyoza", name: "Gyoza", price: 3.95 },
    ],
    Hibachi: [
      { id: "hibachi-chicken", name: "Chicken", price: 6.95 },
      { id: "hibachi-shrimp", name: "Shrimp", price: 8.95 },
      { id: "hibachi-steak", name: "Steak", price: 8.95 },
      { id: "hibachi-salmon", name: "Salmon", price: 8.95 },
      { id: "chef-special", name: "Chef Special", price: 16.95 },
    ],
    "Sushi Rolls": [
      { id: "alaska-roll", name: "Alaska Roll", price: 8.95 },
      { id: "dynamite-roll", name: "Dynamite Roll", price: 9.95 },
      { id: "mcminnville-roll", name: "McMinnville Roll", price: 10.95 },
      { id: "sparta-roll", name: "Sparta Roll", price: 10.95 },
      { id: "tako-roll", name: "TAKO Roll", price: 11.95 },
    ],
  },
};

export const CATEGORY_NOTES = {
  Appetizers: "Fried fresh to order",
  Hibachi: "Served with grilled veggies & fried rice",
  "Sushi Rolls": "Signature rolls, hand-rolled daily",
};

/* Merge stored data with defaults so new fields never break old saves */
export function loadSiteData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SITE_DATA;
    const saved = JSON.parse(raw);
    return {
      ...DEFAULT_SITE_DATA,
      ...saved,
      menu: { ...DEFAULT_SITE_DATA.menu, ...(saved.menu || {}) },
    };
  } catch {
    return DEFAULT_SITE_DATA;
  }
}

export function saveSiteData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable (private mode) — site still works in-memory */
  }
}

export function formatPrice(value) {
  const num = Number(value);
  return Number.isFinite(num) ? `$${num.toFixed(2)}` : "$—";
}
