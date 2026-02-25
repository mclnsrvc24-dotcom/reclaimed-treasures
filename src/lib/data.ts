export interface Product {
  id: string;
  slug: string;
  name: string;
  variant: string;
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
    price: 112,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    slug: "linen-wide-leg-trousers",
    name: "Linen Wide-Leg Trousers",
    variant: "Size 27 / Stone",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1548624313-0396a8e50b4f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    slug: "cotton-gauze-dress",
    name: "Cotton Gauze Dress",
    variant: "Size S / Natural",
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
    price: 58,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "7",
    slug: "vintage-pearl-brooch",
    name: "Vintage Pearl Brooch",
    variant: "Gold-tone / 1950s",
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
    price: 225,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
  },
];

export const featuredProduct = products[0];
export const gridProducts = products.slice(1, 5);
export const newArrivalsProducts = products.filter((p) => p.tag === "New" || !p.tag).slice(0, 4);
