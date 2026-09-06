// Mock "backend" data. In a real integration this would live behind
// 1Fi's catalogue + lending APIs — kept separate from UI components
// so swapping this file for real fetch calls needs no component changes.

export const categories = [
  { id: "mobiles", label: "Mobiles" },
  { id: "laptops", label: "Laptops" },
  { id: "wearables", label: "Wearables" },
  { id: "appliances", label: "Appliances" },
  { id: "two-wheelers", label: "Two-Wheelers" },
];

// EMI plan generator: 1Fi's core pitch is 0%-interest EMI backed by
// mutual funds, with tenures from a few months up to a few years.
function buildEmiPlans(price) {
  const tenures = [3, 6, 9, 12, 18, 24];
  return tenures.map((months) => ({
    id: `emi-${months}`,
    months,
    monthlyAmount: Math.ceil(price / months),
    interestRate: 0,
    processingFee: 0,
    label: `${months} months`,
  }));
}

const RAW_PRODUCTS = [
  {
    id: "p1",
    category: "mobiles",
    brand: "Apple",
    name: "iPhone 17",
    tagline: "Latest iPhone, 0% interest EMI",
    price: 82900,
    rating: 4.7,
    reviews: 2148,
    variants: {
      Storage: ["128GB", "256GB", "512GB"],
      Colour: ["Black", "White", "Lavender"],
    },
    priceByVariant: { "128GB": 82900, "256GB": 92900, "512GB": 112900 },
    highlights: [
      "A19 chip for smooth everyday performance",
      "48MP dual camera system",
      "All-day battery life",
    ],
  },
  {
    id: "p2",
    category: "mobiles",
    brand: "Apple",
    name: "iPhone 17 Pro Max",
    tagline: "Instant approval, no CIBIL check",
    price: 149900,
    rating: 4.8,
    reviews: 1032,
    variants: {
      Storage: ["256GB", "512GB", "1TB"],
      Colour: ["Titanium Grey", "Deep Blue"],
    },
    priceByVariant: { "256GB": 149900, "512GB": 169900, "1TB": 189900 },
    highlights: [
      "Pro camera system with 5x telephoto",
      "Titanium build",
      "ProMotion 120Hz display",
    ],
  },
  {
    id: "p3",
    category: "mobiles",
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    tagline: "Flagship Android, 0% interest",
    price: 129999,
    rating: 4.6,
    reviews: 876,
    variants: {
      Storage: ["256GB", "512GB"],
      Colour: ["Titanium Black", "Titanium Silver"],
    },
    priceByVariant: { "256GB": 129999, "512GB": 144999 },
    highlights: ["200MP camera", "Built-in S Pen", "Snapdragon flagship chip"],
  },
  {
    id: "p4",
    category: "mobiles",
    brand: "OnePlus",
    name: "OnePlus 15",
    tagline: "Flagship performance, EMI friendly",
    price: 64999,
    rating: 4.5,
    reviews: 543,
    variants: {
      Storage: ["128GB", "256GB"],
      Colour: ["Sand Storm", "Infinite Black"],
    },
    priceByVariant: { "128GB": 64999, "256GB": 69999 },
    highlights: ["120W fast charging", "Snapdragon flagship chip", "Fluid AMOLED display"],
  },
  {
    id: "p5",
    category: "laptops",
    brand: "Apple",
    name: "MacBook Pro 14\"",
    tagline: "Own it now, pay in easy EMIs",
    price: 169900,
    rating: 4.9,
    reviews: 654,
    variants: {
      Chip: ["M4", "M4 Pro"],
      Storage: ["512GB", "1TB"],
    },
    priceByVariant: { "512GB": 169900, "1TB": 199900 },
    highlights: ["Apple M4 chip", "Liquid Retina XDR display", "Up to 18 hours battery"],
  },
  {
    id: "p6",
    category: "laptops",
    brand: "Dell",
    name: "XPS 14",
    tagline: "Premium ultrabook on no-cost EMI",
    price: 134990,
    rating: 4.4,
    reviews: 312,
    variants: {
      RAM: ["16GB", "32GB"],
      Storage: ["512GB", "1TB"],
    },
    priceByVariant: { "512GB": 134990, "1TB": 154990 },
    highlights: ["Intel Core Ultra", "3.2K OLED display", "CNC aluminium body"],
  },
  {
    id: "p7",
    category: "wearables",
    brand: "Apple",
    name: "Apple Watch Series 11",
    tagline: "Wear it today, pay later",
    price: 41900,
    rating: 4.7,
    reviews: 987,
    variants: {
      Size: ["41mm", "45mm"],
      Colour: ["Midnight", "Starlight", "Jet Black"],
    },
    priceByVariant: { "41mm": 41900, "45mm": 44900 },
    highlights: ["Always-on Retina display", "Advanced health sensors", "Up to 18h battery"],
  },
  {
    id: "p8",
    category: "appliances",
    brand: "LG",
    name: "LG 1.5 Ton 5-Star Inverter AC",
    tagline: "Beat the heat, pay across the year",
    price: 46990,
    rating: 4.3,
    reviews: 421,
    variants: {
      Capacity: ["1 Ton", "1.5 Ton", "2 Ton"],
    },
    priceByVariant: { "1 Ton": 36990, "1.5 Ton": 46990, "2 Ton": 56990 },
    highlights: ["5-star energy rating", "Dual inverter compressor", "10-year warranty on compressor"],
  },
  {
    id: "p9",
    category: "two-wheelers",
    brand: "Royal Enfield",
    name: "Royal Enfield Classic 350",
    tagline: "Ride now, EMI backed by your funds",
    price: 193000,
    rating: 4.6,
    reviews: 289,
    variants: {
      Colour: ["Stealth Black", "Redditch Blue"],
    },
    priceByVariant: { "Stealth Black": 193000, "Redditch Blue": 198000 },
    highlights: ["349cc J-series engine", "Dual-channel ABS", "Classic design"],
  },
  {
    id: "p10",
    category: "mobiles",
    brand: "Google",
    name: "Pixel 10",
    tagline: "Pure Android, smart EMI",
    price: 74999,
    rating: 4.5,
    reviews: 198,
    variants: {
      Storage: ["128GB", "256GB"],
      Colour: ["Obsidian", "Porcelain"],
    },
    priceByVariant: { "128GB": 74999, "256GB": 82999 },
    highlights: ["Google Tensor chip", "Best-in-class computational photography", "7 years of OS updates"],
  },
];

export const products = RAW_PRODUCTS.map((p) => ({
  ...p,
  emiPlans: buildEmiPlans(p.price),
}));

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getEmiPlansForPrice(price) {
  return buildEmiPlans(price);
}
