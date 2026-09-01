// ─────────────────────────────────────────────────────────────
// PLACEHOLDER PRODUCTS. None of these are confirmed inventory —
// they exist so the layout can be reviewed before real products
// and photography are supplied. Swap the `image` path and the
// fields below with real data; no component changes are needed
// to add, remove, or reorder products.
// ─────────────────────────────────────────────────────────────

const products = [
  {
    id: 1,
    name: "Traditional Brass Lamp",
    category: "Brass",
    price: "₹ —",
    description: "A placeholder for a traditional brass lamp — replace with confirmed product details.",
    image: "/images/placeholder-01.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Brass Uruli",
    category: "Brass",
    price: "₹ —",
    description: "A placeholder for a brass uruli — replace with confirmed product details.",
    image: "/images/placeholder-02.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Wooden Decorative Piece",
    category: "Wood",
    price: "₹ —",
    description: "A placeholder for a wooden decorative piece — replace with confirmed product details.",
    image: "/images/placeholder-03.jpg",
    featured: true,
  },
  {
    id: 4,
    name: "Traditional Gift Set",
    category: "Gifts",
    price: "₹ —",
    description: "A placeholder for a traditional gift set — replace with confirmed product details.",
    image: "/images/placeholder-04.jpg",
    featured: true,
  },
  {
    id: 5,
    name: "Brass Pooja Item",
    category: "Traditional",
    price: "₹ —",
    description: "A placeholder for a brass pooja item — replace with confirmed product details.",
    image: "/images/placeholder-05.jpg",
    featured: true,
  },
  {
    id: 6,
    name: "Wooden Serving Piece",
    category: "Wood",
    price: "₹ —",
    description: "A placeholder for a wooden serving piece — replace with confirmed product details.",
    image: "/images/placeholder-06.jpg",
    featured: false,
  },
  {
    id: 7,
    name: "Decorative Brass Vessel",
    category: "Brass",
    price: "₹ —",
    description: "A placeholder for a decorative brass vessel — replace with confirmed product details.",
    image: "/images/placeholder-07.jpg",
    featured: false,
  },
  {
    id: 8,
    name: "Handcrafted Gift Item",
    category: "Handcrafted",
    price: "₹ —",
    description: "A placeholder for a handcrafted gift item — replace with confirmed product details.",
    image: "/images/placeholder-08.jpg",
    featured: false,
  },
];

export const categories = [
  { name: "Brass", image: "/images/category-brass.jpg" },
  { name: "Wood", image: "/images/category-wood.jpg" },
  { name: "Handcrafted", image: "/images/category-handcrafted.jpg" },
  { name: "Gifts", image: "/images/category-gifts.jpg" },
  { name: "Traditional", image: "/images/category-traditional.jpg" },
  { name: "Home Décor", image: "/images/category-decor.jpg" },
];

const TONE_BY_CATEGORY = {
  Brass: "brass",
  Wood: "wood",
  Handcrafted: "earth",
  Gifts: "ivory",
  Traditional: "charcoal",
  "Home Décor": "wood",
};

export function toneForCategory(category) {
  return TONE_BY_CATEGORY[category] || "brass";
}

export default products;
