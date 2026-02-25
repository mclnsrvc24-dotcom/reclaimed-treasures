// =============================================================================
// INVENTORY — edit this file to update your shop
// =============================================================================
//
// HOW TO ADD A NEW ITEM:
//   1. Drop your photo into:  public/images/products/your-photo.jpg
//   2. Copy one of the blocks below and paste it at the top of the products array
//   3. Fill in the details, then save, commit, and push — Vercel will redeploy
//
// FIELDS:
//   id          → unique number, just increment from the last one
//   slug        → url-friendly name, e.g. "brass-lamp-1920s" (no spaces)
//   name        → item name shown on the card
//   variant     → size, color, era, material — whatever's relevant
//   description → one or two sentences about the piece
//   price       → current asking price in dollars (no $ sign)
//   originalPrice → (optional) crossed-out price if on sale
//   tag         → (optional) "New" | "Sale" | "Sold"
//   image       → path to your photo: "/images/products/your-photo.jpg"
//                 OR a full URL if using an external image
//
// TO MARK AN ITEM SOLD:   change tag to "Sold"
// TO CHANGE A PRICE:      update the price field
// TO REMOVE AN ITEM:      delete its { } block (and the comma before it)
//
// =============================================================================

export interface Product {
  id: string;
  slug: string;
  name: string;
  variant: string;
  description: string;
  price: number;
  originalPrice?: number;
  tag?: "New" | "Sale" | "Sold";
  image: string;
}

export const heroImage =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85";

export const products: Product[] = [
  {
    id: "1",
    slug: "linen-knit-vest-oat",
    name: "Linen Knit Vest",
    variant: "Oat / One size",
    description: "Airy open-knit vest in a neutral oat linen blend. Barely worn, no pilling.",
    price: 68,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    slug: "raw-hem-denim-jacket",
    name: "Raw Hem Denim Jacket",
    variant: "Size S / Levi's Vintage",
    description: "Authentic Levi's trucker jacket with raw-cut hem. Faded wash with character.",
    price: 94,
    originalPrice: 140,
    tag: "Sale",
    image:
      "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    slug: "wool-fisherman-sweater",
    name: "Wool Fisherman Sweater",
    variant: "Size M / Cream",
    description: "Classic cable-knit in heavy cream wool. Warm, substantial, and timeless.",
    price: 112,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    slug: "linen-wide-leg-trousers",
    name: "Linen Wide-Leg Trousers",
    variant: "Size 27 / Stone",
    description: "High-rise wide-leg trousers in a warm stone linen. Wrinkle-free and polished.",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1548624313-0396a8e50b4f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    slug: "cotton-gauze-dress",
    name: "Cotton Gauze Dress",
    variant: "Size S / Natural",
    description: "Floaty midi dress in double-layered cotton gauze. Perfect for warm weather.",
    price: 76,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    slug: "waxed-canvas-tote",
    name: "Waxed Canvas Tote",
    variant: "Tan / One size",
    description: "Heavy-duty waxed canvas with leather handles. Develops a beautiful patina over time.",
    price: 58,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "7",
    slug: "vintage-pearl-brooch",
    name: "Vintage Pearl Brooch",
    variant: "Gold-tone / 1950s",
    description: "Delicate cluster brooch with faux pearls in original gold-tone setting. Clasp works perfectly.",
    price: 42,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "8",
    slug: "art-deco-necklace",
    name: "Art Deco Chain Necklace",
    variant: "Gold-fill / 1930s",
    description: "Geometric link chain with original gold-fill. Light surface wear, strong clasp.",
    price: 88,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "9",
    slug: "mid-century-armchair",
    name: "Mid-Century Armchair",
    variant: "Walnut & Boucle / 1960s",
    description: "Sculpted walnut frame with original boucle upholstery. Structurally sound, fabric shows light use.",
    price: 380,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "10",
    slug: "victorian-side-table",
    name: "Victorian Side Table",
    variant: "Dark Mahogany / Late 1800s",
    description: "Hand-carved mahogany side table with turned legs. Minor scuffs consistent with age, very sturdy.",
    price: 225,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
  },
];

export const featuredProduct = products[0];
export const gridProducts = products.slice(1, 5);
export const newArrivalsProducts = products.filter((p) => p.tag === "New" || !p.tag).slice(0, 4);
