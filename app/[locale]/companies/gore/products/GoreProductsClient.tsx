"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ExternalLink, Download, Filter, ChevronDown, ChevronUp, ArrowRight, Cable, Wind, Layers } from "lucide-react";
import {
  GORE_PRODUCTS,
  GORE_CATEGORIES,
  GORE_INDUSTRIES,
  type GoreCategoryKey,
  type GoreIndustry,
} from "@/data/gore-products";

const CATEGORY_STYLE: Record<string, { gradient: string; iconColor: string; icon: React.ElementType }> = {
  cables:   { gradient: "from-blue-100 to-blue-50",   iconColor: "text-blue-400",  icon: Cable  },
  sealants: { gradient: "from-orange-100 to-orange-50", iconColor: "text-orange-400", icon: Layers },
  vents:    { gradient: "from-slate-100 to-slate-50",  iconColor: "text-slate-400", icon: Wind   },
};

export default function GoreProductsClient() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat") as GoreCategoryKey | null;
  const initialCat: GoreCategoryKey =
    catParam && GORE_CATEGORIES.some((c) => c.key === catParam) ? catParam : "all";

  const [activeCategory, setActiveCategory] = useState<GoreCategoryKey>(initialCat);
  const [activeIndustry, setActiveIndustry] = useState<GoreIndustry>("All");
  const [expandedSubs, setExpandedSubs] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    return GORE_PRODUCTS.filter((p) => {
      const catMatch = activeCategory === "all" || p.category === activeCategory;
      const indMatch = activeIndustry === "All" || p.industries.includes(activeIndustry);
      return catMatch && indMatch;
    });
  }, [activeCategory, activeIndustry]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const p of filtered) {
      if (!map.has(p.subcategory)) map.set(p.subcategory, []);
      map.get(p.subcategory)!.push(p);
    }
    return map;
  }, [filtered]);

  const toggleSub = (sub: string) =>
    setExpandedSubs((prev) => ({ ...prev, [sub]: !prev[sub] }));

  const isExpanded = (sub: string) => expandedSubs[sub] !== false;
  const totalCount = filtered.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ── Filter bar ──────────────────────────────────────────────────── */}
      <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 mb-8 space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#7A8A99] mb-3">Category</p>
          <div className="flex flex-wrap gap-2">
            {GORE_CATEGORIES.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  activeCategory === key
                    ? "bg-[#CC1C1C] text-white"
                    : "bg-[#f0f4f8] text-[#334155] hover:bg-[#e2e8f0]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1.5 mb-3">
            <Filter className="w-3.5 h-3.5 text-[#7A8A99]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#7A8A99]">Filter by Industry</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {GORE_INDUSTRIES.map((ind) => (
              <button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeIndustry === ind
                    ? "bg-[#0F172A] text-white"
                    : "bg-[#f0f4f8] text-[#334155] border border-[#e2e8f0] hover:border-[#CC1C1C]/40 hover:text-[#CC1C1C]"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-[#7A8A99]">
          Showing <span className="font-semibold text-[#1a202c]">{totalCount}</span> product{totalCount !== 1 ? "s" : ""}
          {activeIndustry !== "All" && (
            <span> for <span className="font-semibold text-[#CC1C1C]">{activeIndustry}</span></span>
          )}
        </p>
      </div>

      {/* ── Product groups ───────────────────────────────────────────────── */}
      {grouped.size === 0 ? (
        <div className="text-center py-20 text-[#7A8A99]">
          <p className="text-lg font-medium">No products match this filter.</p>
          <p className="text-sm mt-1">Try selecting a different industry or category.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Array.from(grouped.entries()).map(([subcategory, products]) => (
            <div key={subcategory} className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden">
              {/* Subcategory header */}
              <button
                onClick={() => toggleSub(subcategory)}
                className="w-full flex items-center justify-between px-6 py-4 bg-[#f8fafc] border-b border-[#e2e8f0] hover:bg-[#f0f4f8] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-5 bg-[#CC1C1C] rounded-full" />
                  <h2 className="font-bold text-[#1a202c] text-base">{subcategory}</h2>
                  <span className="text-xs text-[#7A8A99] font-medium bg-[#e2e8f0] px-2 py-0.5 rounded-full">
                    {products.length}
                  </span>
                </div>
                {isExpanded(subcategory) ? (
                  <ChevronUp className="w-4 h-4 text-[#7A8A99]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#7A8A99]" />
                )}
              </button>

              {/* Products grid */}
              {isExpanded(subcategory) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
                  {products.map((product) => {
                    const style = CATEGORY_STYLE[product.category] ?? CATEGORY_STYLE.cables;
                    const Icon = style.icon;
                    return (
                      <div
                        key={product.id}
                        className="group border border-[#e2e8f0] rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                      >
                        {/* Image / gradient */}
                        <div className={`relative h-44 bg-gradient-to-br ${style.gradient} flex items-center justify-center overflow-hidden`}>
                          {product.imageUrl ? (
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            />
                          ) : (
                            <Icon className={`w-16 h-16 ${style.iconColor} opacity-30`} />
                          )}
                          {/* Category badge */}
                          <span className="absolute top-3 start-3 text-[10px] font-bold uppercase tracking-wider bg-white/80 backdrop-blur-sm text-[#334155] px-2 py-0.5 rounded-full">
                            {product.subcategory}
                          </span>
                        </div>

                        {/* Body */}
                        <div className="p-5 flex flex-col gap-3 flex-1">
                          <h3 className="font-bold text-[#1a202c] text-sm leading-snug group-hover:text-[#CC1C1C] transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-xs text-[#4a5568] leading-relaxed line-clamp-3">
                            {product.description}
                          </p>

                          {/* Industries */}
                          <div className="flex flex-wrap gap-1">
                            {product.industries.map((ind) => (
                              <span
                                key={ind}
                                className="text-[10px] font-medium text-[#334155] bg-[#f0f4f8] border border-[#e2e8f0] px-2 py-0.5 rounded-full"
                              >
                                {ind}
                              </span>
                            ))}
                          </div>

                          {/* Actions */}
                          <div className="mt-auto pt-3 border-t border-[#f0f4f8] flex items-center justify-between gap-2">
                            <Link
                              href={`/companies/gore/products/${product.id}`}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#CC1C1C] hover:bg-[#A01515] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                            >
                              Learn More
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                            <div className="flex items-center gap-3">
                              <a
                                href={product.goreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-[#7A8A99] hover:text-[#CC1C1C] transition-colors cursor-pointer"
                              >
                                Gore.com
                                <ExternalLink className="w-3 h-3" />
                              </a>
                              {product.catalogUrl && (
                                <a
                                  href={product.catalogUrl}
                                  download
                                  className="inline-flex items-center gap-1 text-xs font-medium text-[#7A8A99] hover:text-[#1a202c] transition-colors cursor-pointer"
                                >
                                  <Download className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
