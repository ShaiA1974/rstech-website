export interface Article {
  slug: string;
  date: string;
  category: "cable-carriers" | "connectors" | "industrial-selection";
  relatedProducts: string[];
  heroImage: string;
  heroImageLocal?: string;
  heroAlt: string;
  title: {
    en: string;
    he: string;
  };
  excerpt: {
    en: string;
    he: string;
  };
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
    title: {
      en: "How to Choose the Right Cable Carrier for Your System",
      he: "כיצד לבחור את נושא הכבלים הנכון למערכת שלך"
    },
    excerpt: {
      en: "A complete engineering guide to selecting cable carriers based on number of cables, bending radius, travel length, and total cost of ownership with practical examples.",
      he: "מדריך הנדסי מלא לבחירת נושאי כבלים על בסיס מספר כבלים, רדיוס כיפוף, אורך נסיעה ועלות בעלות כוללת עם דוגמאות מעשיות."
    }
  },
];
