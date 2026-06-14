export interface Article {
  slug: string;
  date: string;
  category: "cable-carriers" | "connectors" | "industrial-selection";
  relatedProducts: string[];
  heroImage: string;
  heroImageLocal?: string;
  heroAlt: string;
}

export const articles: Article[] = [
  {
    slug: "cable-carrier-selection-guide",
    date: "2026-06-14",
    category: "cable-carriers",
    relatedProducts: ["Tsubaki TKHP", "Tsubaki TKR", "Tsubaki CC-Mono"],
    heroImage: "1526140412200-fcb0fc91dcfa",
    heroImageLocal: "/products/tsubaki/cc-robotrax.jpg",
    heroAlt: "Tsubaki cable carrier system in industrial automation application",
  },
];
