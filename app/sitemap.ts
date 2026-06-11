import type { MetadataRoute } from "next";
import { GORE_PRODUCTS, getAllVentPartNumbers } from "@/data/gore-products";
import { TSUBAKI_PRODUCTS } from "@/data/tsubaki-products";
import { TSUBAKI_CARRIERS } from "@/data/tsubaki-carriers";
import { TSUBAKI_CABLES, CABLE_CATEGORIES } from "@/data/tsubaki-cables";
import { JAE_PRODUCTS } from "@/data/jae-products";

const BASE = "https://rstech.co.il";
const LOCALES = ["en", "he"];

function urls(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]) {
  return LOCALES.map((locale) => ({
    url: `${BASE}/${locale}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(LOCALES.map((l) => [l, `${BASE}/${l}${path}`])),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const goreProductUrls = GORE_PRODUCTS.flatMap((p) =>
    urls(`/companies/gore/products/${p.id}`, 0.75, "monthly")
  );
  const tsubakiProductUrls = TSUBAKI_PRODUCTS.flatMap((p) =>
    urls(`/companies/tsubaki/products/${p.id}`, 0.75, "monthly")
  );
  const tsubakiCarrierUrls = TSUBAKI_CARRIERS.flatMap((c) =>
    urls(`/companies/tsubaki/carriers/${c.id}`, 0.8, "monthly")
  );
  const tsubakiCableCategoryUrls = CABLE_CATEGORIES
    .filter((cat) => cat.key !== "all")
    .flatMap((cat) => urls(`/companies/tsubaki/cables/${cat.key}`, 0.8, "monthly"));
  const tsubakiCableUrls = TSUBAKI_CABLES.flatMap((c) =>
    urls(`/companies/tsubaki/cables/${c.category}/${c.id}`, 0.8, "monthly")
  );
  const jaeProductUrls = JAE_PRODUCTS.flatMap((p) =>
    urls(`/companies/jae/products/${p.id}`, 0.75, "monthly")
  );

  const gorePartNumberUrls = getAllVentPartNumbers().flatMap(({ partNumber }) =>
    urls(`/companies/gore/parts/${encodeURIComponent(partNumber)}`, 0.8, "monthly")
  );

  return [
    ...urls("", 1.0, "monthly"),
    ...urls("/companies", 0.9, "monthly"),
    ...urls("/companies/gore", 0.85, "monthly"),
    ...urls("/companies/gore/products", 0.85, "weekly"),
    ...goreProductUrls,
    ...urls("/companies/gore/parts", 0.85, "monthly"),
    ...gorePartNumberUrls,
    ...urls("/companies/tsubaki", 0.85, "monthly"),
    ...urls("/companies/tsubaki/products", 0.85, "weekly"),
    ...tsubakiProductUrls,
    ...urls("/companies/tsubaki/carriers", 0.85, "weekly"),
    ...tsubakiCarrierUrls,
    ...urls("/companies/tsubaki/cables", 0.85, "weekly"),
    ...tsubakiCableCategoryUrls,
    ...tsubakiCableUrls,
    ...urls("/companies/jae", 0.85, "monthly"),
    ...urls("/companies/jae/products", 0.85, "weekly"),
    ...jaeProductUrls,
    ...urls("/about", 0.8, "yearly"),
    ...urls("/contact", 0.8, "yearly"),
  ];
}
