/* ─── Business constants ─────────────────────────────────────────── */
export const PHONE_DISPLAY = "(931) 414-4455";
export const PHONE_TEL = "tel:+19314144455";
export const ADDRESS = "509 Sparta St, McMinnville, TN 37110";
export const EMAIL = "takohibachisushi25@gmail.com";
export const ORDER_URL =
  "https://takohibachi.getbento.com/online-ordering/asap-offline";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=509+Sparta+St+McMinnville+TN+37110";
export const API_URL = "/.netlify/functions/site-data";

/* ─── Default site content (used until the owner saves changes) ──── */
export const DEFAULT_SITE_DATA = {
  locationText: "509 SPARTA ST, MCMINNVILLE · MON–SAT 11AM–8PM",
  isOpen: true,
  announcement: "",
  hours: [
    { day: "Monday", hours: "11 AM – 8 PM" },
    { day: "Tuesday", hours: "11 AM – 8 PM" },
    { day: "Wednesday", hours: "11 AM – 8 PM" },
    { day: "Thursday", hours: "11 AM – 8 PM" },
    { day: "Friday", hours: "11 AM – 8 PM" },
    { day: "Saturday", hours: "11 AM – 8 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  menu: {
    Appetizers: [
      { id: "crab-rangoon", name: "Crab Rangoon", price: 4.95 },
      { id: "edamame", name: "Edamame", price: 4.95, desc: "Japanese soybeans with salt" },
      { id: "garlic-edamame", name: "Garlic Edamame", price: 6.3, desc: "Sautéed Japanese soybeans with garlic" },
      { id: "fried-gyoza", name: "Deep Fried Gyoza", price: 5.7, desc: "Pork & veggie mix" },
      { id: "steamed-gyoza", name: "Steamed Gyoza", price: 5.7, desc: "Pork & veggie mix" },
      { id: "veggie-spring-roll", name: "Veggie Spring Roll", price: 4.65 },
    ],
    Hibachi: [
      { id: "hibachi-chicken", name: "Hibachi Chicken", price: 9.15 },
      { id: "hibachi-steak", name: "Hibachi Steak", price: 11.55 },
      { id: "hibachi-shrimp", name: "Hibachi Shrimp", price: 11.55 },
      { id: "hibachi-salmon", name: "Hibachi Salmon", price: 11.55 },
      { id: "hibachi-vegetable", name: "Hibachi Vegetable", price: 8.1, desc: "Comes with tofu and fried rice" },
      { id: "hibachi-extra-egg", name: "Extra Egg", price: 1.2, desc: "Mixed with fried rice" },
    ],
    "Hibachi Combos": [
      { id: "combo-chicken-shrimp", name: "Hibachi Chicken & Shrimp", price: 13.8 },
      { id: "combo-chicken-steak", name: "Hibachi Chicken & Steak", price: 13.8 },
      { id: "combo-shrimp-steak", name: "Hibachi Shrimp & Steak", price: 15.0 },
      { id: "combo-chicken-salmon", name: "Hibachi Chicken & Salmon", price: 15.0 },
      { id: "combo-shrimp-salmon", name: "Hibachi Shrimp & Salmon", price: 16.05 },
      { id: "combo-steak-salmon", name: "Hibachi Steak & Salmon", price: 17.25 },
      { id: "combo-chef-special", name: "Chef Special", price: 20.7, desc: "Steak, chicken & shrimp" },
    ],
    "Hibachi Noodles": [
      { id: "noodle-chicken", name: "Chicken Noodle", price: 11.55 },
      { id: "noodle-shrimp", name: "Shrimp Noodle", price: 12.6 },
      { id: "noodle-steak", name: "Steak Noodle", price: 12.6 },
      { id: "noodle-salmon", name: "Salmon Noodle", price: 13.2 },
      { id: "noodle-vegetable", name: "Vegetable Noodle", price: 10.35, desc: "Comes with tofu" },
      { id: "noodle-chicken-shrimp", name: "Chicken & Shrimp Noodle", price: 15.6 },
      { id: "noodle-chicken-steak", name: "Chicken & Steak Noodle", price: 15.6 },
      { id: "noodle-chicken-salmon", name: "Chicken & Salmon Noodle", price: 16.65 },
      { id: "noodle-shrimp-steak", name: "Shrimp & Steak Noodle", price: 16.65 },
      { id: "noodle-shrimp-salmon", name: "Shrimp & Salmon Noodle", price: 17.85 },
      { id: "noodle-steak-salmon", name: "Steak & Salmon Noodle", price: 19.05 },
      { id: "noodle-chef-special", name: "Chef Special Noodle", price: 22.5, desc: "Steak, chicken & shrimp" },
    ],
    "Sushi Rolls": [
      { id: "california-roll", name: "California Roll", price: 6.15, desc: "Crabstick, avocado, cucumber" },
      { id: "veggie-roll", name: "Veggie Roll", price: 5.7, desc: "Avocado, cucumber" },
      { id: "spicy-tuna-roll", name: "Spicy Tuna", price: 6.3, desc: "Spicy tuna, cucumber" },
      { id: "spicy-salmon-roll", name: "Spicy Salmon", price: 6.3, desc: "Spicy salmon, cucumber" },
      { id: "philly-roll", name: "Philly Roll", price: 6.9, desc: "Smoked salmon, avocado, cream cheese" },
      { id: "hollywood-roll", name: "Hollywood Roll", price: 6.9, desc: "Crabstick, avocado, cucumber, cream cheese" },
      { id: "chicken-tempura-roll", name: "Chicken Tempura Roll", price: 6.9, desc: "Chicken tempura, cucumber, eel sauce" },
      { id: "shrimp-tempura-roll", name: "Shrimp Tempura Roll", price: 7.5, desc: "Shrimp tempura, cucumber, eel sauce" },
    ],
    "Signature Rolls": [
      { id: "alaska-roll", name: "Alaska Roll", price: 11.55, desc: "California roll topped with fresh salmon" },
      { id: "cc-roll", name: "CC Roll", price: 11.55, desc: "California roll topped with crab salad & eel sauce" },
      { id: "rock-n-roll", name: "Rock N Roll", price: 11.55, desc: "Spicy salmon, cucumber, topped with cooked shrimp, avocado, eel sauce & spicy mayo" },
      { id: "tiger-roll", name: "Tiger Roll", price: 11.55, desc: "Shrimp tempura, cucumber, topped with cooked shrimp, avocado, eel sauce & spicy mayo" },
      { id: "crazy-roll", name: "Crazy Roll (Fried)", price: 12.6, desc: "Crabstick, avocado, cucumber, topped with spicy crab, eel sauce & spicy mayo" },
      { id: "dynamite-roll", name: "Dynamite Roll", price: 12.6, desc: "Spicy tuna, cucumber, topped with crab salad & eel sauce" },
      { id: "sparta-roll", name: "Sparta Roll", price: 13.8, desc: "Salmon, avocado, cucumber, topped with spicy tuna, eel sauce & sriracha" },
      { id: "mcminnville-roll", name: "McMinnville Roll", price: 13.8, desc: "Spicy crab, cucumber, cream cheese, topped with smoked salmon, eel sauce & spicy mayo" },
      { id: "johns-creek-roll", name: "Johns Creek Roll", price: 13.8, desc: "Chicken tempura, cream cheese, topped with crab salad & eel sauce" },
      { id: "ebi-lovers-roll", name: "Ebi Lovers Roll", price: 15.0, desc: "Shrimp tempura, cream cheese, topped with crab salad, cooked shrimp & chef sauce" },
      { id: "tako-roll", name: "TAKO Roll (Fried)", price: 15.0, desc: "Smoked salmon, crabmeat, cream cheese, avocado, topped with chef sauce" },
    ],
    "Special Rolls": [
      { id: "crispy-crab-roll", name: "Crispy Crab Roll", price: 6.3, desc: "Tempura crabstick, topped with Japanese mayo & eel sauce" },
      { id: "salmon-roll", name: "Salmon Roll", price: 8.1, desc: "Salmon & avocado inside" },
      { id: "tuna-roll", name: "Tuna Roll", price: 8.1, desc: "Tuna & avocado inside" },
      { id: "yumi-roll", name: "Yumi Roll (Fried)", price: 8.1, desc: "Spicy tuna, avocado, topped with spicy mayo" },
      { id: "fire-roll", name: "Fire Roll", price: 9.75, desc: "Tempura jalapeño, salmon, avocado, topped with spicy mayo & sriracha" },
      { id: "godzilla-roll", name: "Godzilla Roll", price: 11.55, desc: "Salmon, crabmeat, avocado, with fresh jalapeño & spicy mayo on top" },
      { id: "scorpion-roll", name: "Scorpion Roll", price: 13.2, desc: "Shrimp tempura inside, topped with cooked shrimp, eel sauce & spicy mayo" },
      { id: "downtown-roll", name: "Downtown Roll (Fried)", price: 13.2, desc: "Salmon, crabmeat, avocado, topped with spicy mayo & eel sauce" },
      { id: "sweetheart-roll", name: "Sweetheart Roll", price: 13.8, desc: "Spicy tuna & avocado inside, topped with sliced tuna & spicy mayo" },
      { id: "rainbow-roll", name: "Rainbow Roll", price: 15.0, desc: "Crabstick, avocado, cucumber, topped with sliced avocado, tuna & salmon" },
      { id: "un-roll", name: "UN Roll", price: 15.0, desc: "Tuna & salmon, topped with sliced avocado" },
      { id: "bahama-roll", name: "Bahama Roll", price: 15.0, desc: "Spicy tuna & spicy salmon, topped with tuna, sliced jalapeño & spicy mayo" },
      { id: "dragon-roll", name: "Dragon Roll", price: 15.0, desc: "Shrimp tempura, avocado, topped with spicy crab & eel sauce" },
      { id: "hurricane-roll", name: "Hurricane Roll (Fried)", price: 15.6, desc: "Tuna, avocado, cream cheese, topped with spicy tuna & spicy mayo" },
      { id: "sunset-roll", name: "Sunset Roll", price: 16.05, desc: "Tuna, salmon, cucumber, topped with sliced avocado & eel sauce" },
      { id: "b52-roll", name: "B52 Roll (Fried)", price: 17.25, desc: "Salmon, tuna, cream cheese, topped with spicy mayo & eel sauce" },
    ],
    "Ramen & Sides": [
      { id: "chicken-ramen", name: "Chicken Ramen", price: 12.75, desc: "Sliced tempura fried chicken, noodle, corn, green onion" },
      { id: "side-fried-rice", name: "Side Fried Rice", price: 4.05 },
      { id: "side-noodle", name: "Side Noodle", price: 5.25 },
      { id: "side-vegetable", name: "Side Vegetable", price: 5.25 },
      { id: "side-tofu", name: "Side Tofu", price: 5.25 },
      { id: "side-chicken", name: "Side Chicken", price: 6.15 },
      { id: "side-shrimp", name: "Side Shrimp", price: 7.2 },
      { id: "side-steak", name: "Side Steak", price: 7.2 },
      { id: "side-salmon", name: "Side Salmon", price: 8.1 },
      { id: "side-extra-egg", name: "Extra Egg", price: 1.2, desc: "Mixed with fried rice" },
    ],
    "Desserts & Drinks": [
      { id: "fried-ice-cream", name: "Tempura Fried Ice Cream", price: 6.3, desc: "With chocolate drizzle" },
      { id: "ramune-original", name: "Original Ramune", price: 4.05, desc: "Japanese soda with a marble inside" },
      { id: "ramune-melon", name: "Melon Ramune", price: 4.05 },
      { id: "ramune-strawberry", name: "Strawberry Ramune", price: 4.05 },
      { id: "ramune-coconut", name: "Coconut Ramune", price: 4.05 },
      { id: "bubble-tea-green", name: "Green Tea Bubble Tea", price: 4.05 },
      { id: "bubble-tea-brown-sugar", name: "Brown Sugar Bubble Tea", price: 4.05 },
      { id: "coke", name: "Coke", price: 1.2 },
      { id: "sprite", name: "Sprite", price: 1.2 },
      { id: "mountain-dew", name: "Mountain Dew", price: 1.2 },
      { id: "water-bottle", name: "Water Bottle", price: 1.2 },
    ],
    Extras: [
      { id: "sauce-yum-yum", name: "Yum-Yum Sauce", price: 0.6 },
      { id: "sauce-spicy-mayo", name: "Spicy Mayo", price: 0.6 },
      { id: "sauce-eel", name: "Eel Sauce", price: 0.6 },
      { id: "sauce-teriyaki", name: "Teriyaki Sauce", price: 0.6 },
      { id: "sauce-sriracha", name: "Sriracha", price: 0.6 },
      { id: "sauce-wasabi", name: "Wasabi", price: 0.6 },
      { id: "sauce-ginger", name: "Ginger", price: 0.6 },
      { id: "add-shrimp-tempura", name: "Add Shrimp Tempura", price: 3.0 },
      { id: "add-spicy-tuna", name: "Add Spicy Tuna", price: 3.45 },
      { id: "add-tuna", name: "Add Tuna", price: 3.45 },
      { id: "add-salmon", name: "Add Salmon", price: 3.45 },
      { id: "add-smoked-salmon", name: "Add Smoked Salmon", price: 3.45 },
      { id: "add-boiled-shrimp", name: "Add Shrimp (Boiled)", price: 3.45 },
      { id: "add-spicy-crab", name: "Add Spicy Crab", price: 2.7 },
      { id: "add-crabstick", name: "Add Crabstick", price: 2.4 },
      { id: "add-avocado-top", name: "Add Avocado On Top", price: 2.4 },
      { id: "add-avocado-inside", name: "Add Avocado Inside", price: 1.2 },
      { id: "add-cream-cheese", name: "Add Cream Cheese", price: 1.2 },
      { id: "add-cucumber", name: "Add Cucumber", price: 1.2 },
      { id: "add-deep-fry", name: "Deep Fry Any Roll", price: 1.2 },
    ],
  },
};

export const CATEGORY_NOTES = {
  Appetizers: "Fried fresh to order",
  Hibachi: "Grilled to order · served with fried rice & vegetables",
  "Hibachi Combos": "Two proteins · served with fried rice & vegetables",
  "Hibachi Noodles": "Stir-fried noodles · served with vegetables",
  "Sushi Rolls": "Classic rolls, hand-rolled daily",
  "Signature Rolls": "House creations you'll only find at TAKO",
  "Special Rolls": "Premium rolls for the true sushi lover",
  "Ramen & Sides": "Round out your plate",
  "Desserts & Drinks": "Sweet endings & Japanese sodas",
  Extras: "Sauces & add-ons to customize any roll",
};

export const RATING = { score: "4.6", count: "105+ ratings" };

export const REVIEWS = [
  {
    id: "robert-graves",
    name: "Robert Graves",
    source: "Google",
    date: "April 2025",
    stars: 5,
    text: "The food is amazing, on par with sit-down hibachi restaurants if not better. There's not much wait time, and they're the ONLY hibachi place I've ordered from that can actually package their food in a way that doesn't spill everywhere in the bag.",
    featured: true,
  },
  {
    id: "jonathan-n",
    name: "Jonathan Naaktgeboren",
    source: "Google",
    date: "September 2025",
    stars: 5,
    text: "Great food at a great price. Yum yum sauce is delicious. Sushi is nice and fresh. Hibachi chicken and fried rice are terrific.",
  },
  {
    id: "krishna-t",
    name: "Krishna Turlapati",
    source: "Google",
    date: "June 2025",
    stars: 5,
    text: "Amazing food! The owner Claire was very nice and friendly! We will be back!",
  },
  {
    id: "victoria-d",
    name: "Victoria DeFrenn",
    source: "Google",
    date: "September 2025",
    stars: 5,
    text: "Really good food and a big huge plate. You get the bang for the buck for sure.",
  },
  {
    id: "katie-w",
    name: "Katie Wilson",
    source: "Google",
    date: "April 2026",
    stars: 5,
    text: "Best sushi in town.",
  },
  {
    id: "bell",
    name: "Bell",
    source: "Google",
    date: "January 2026",
    stars: 5,
    text: "Best hibachi around 😊",
  },
  {
    id: "courtney-b",
    name: "Courtney Bennett",
    source: "Facebook",
    date: "May 2026",
    stars: 5,
    text: "Tried TAKO for the first time yesterday. It was awesome! 🍣",
  },
];

/* Merge server data with defaults so new fields never break old saves */
export function mergeSiteData(saved) {
  if (!saved || typeof saved !== "object") return DEFAULT_SITE_DATA;
  return {
    ...DEFAULT_SITE_DATA,
    ...saved,
    hours:
      Array.isArray(saved.hours) && saved.hours.length === 7
        ? saved.hours
        : DEFAULT_SITE_DATA.hours,
    menu: { ...DEFAULT_SITE_DATA.menu, ...(saved.menu || {}) },
  };
}

export function formatPrice(value) {
  const num = Number(value);
  return Number.isFinite(num) ? `$${num.toFixed(2)}` : "$—";
}
