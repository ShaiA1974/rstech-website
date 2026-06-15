import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GORE_PRODUCTS } from "@/data/gore-products";
import { Hash, ExternalLink, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "he" }];
}

export const metadata: Metadata = {
  title: "Gore Vent Part Numbers — Full Catalog | RSTECH Electronics Israel",
  description:
    "Complete catalog of W.L. Gore vent part numbers available through RSTECH Electronics in Israel. Browse PMF, PE, VE7 and all vent series. Request a quote for any part number.",
  alternates: {
    canonical: "https://www.rstech.co.il/en/companies/gore/parts",
  },
};

const ventProducts = GORE_PRODUCTS.filter(
  (p) => p.category === "vents" && p.partNumbers && p.partNumbers.length > 0
);

const totalPartNumbers = ventProducts.reduce(
  (sum, p) => sum + (p.partNumbers?.length ?? 0),
  0
);

export default async function GorePartsIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/companies/gore" className="hover:text-white transition-colors">
                Gore
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Part Numbers</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <Hash className="w-8 h-8 text-[#CC1C1C]" />
              <h1 className="text-4xl font-bold">Gore Vent Part Numbers</h1>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mb-6">
              Complete catalog of orderable W.L. Gore® vent part numbers available through
              RSTECH Electronics — your authorized Gore distributor in Israel.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span>
                <strong className="text-white text-2xl">{totalPartNumbers}</strong> part numbers
              </span>
              <span>
                <strong className="text-white text-2xl">{ventProducts.length}</strong> vent product families
              </span>
            </div>
          </div>
        </section>

        {/* Part Number Groups */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {ventProducts.map((product) => {
                const partNumbers = product.partNumbers ?? [];

                // Group by model
                const groups = new Map<string, typeof partNumbers>();
                for (const entry of partNumbers) {
                  const key = entry.model ?? "";
                  if (!groups.has(key)) groups.set(key, []);
                  groups.get(key)!.push(entry);
                }

                return (
                  <div key={product.id} className="border border-[#e2e8f0] rounded-2xl overflow-hidden">
                    {/* Product header */}
                    <div className="bg-[#f8fafc] border-b border-[#e2e8f0] px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h2 className="text-xl font-bold text-[#1a202c]">{product.name}</h2>
                        <p className="text-sm text-[#7A8A99] mt-0.5 max-w-xl">{product.description}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <Link
                          href={`/companies/gore/products/${product.id}`}
                          className="text-sm font-medium text-[#CC1C1C] hover:underline whitespace-nowrap"
                        >
                          Product page →
                        </Link>
                        <a
                          href={product.goreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#7A8A99] hover:text-[#334155] transition-colors"
                          aria-label="Gore.com product page"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Part number grid */}
                    <div className="p-6">
                      {Array.from(groups.entries()).map(([model, items]) => (
                        <div key={model || "__ungrouped__"} className="mb-6 last:mb-0">
                          {model && (
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#334155] mb-3">
                              {model}
                            </h3>
                          )}
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
                            {items.map((entry) => (
                              <Link
                                key={entry.number}
                                href={`/companies/gore/parts/${encodeURIComponent(entry.number)}`}
                                className="group bg-[#f8fafc] hover:bg-[#CC1C1C] border border-[#e2e8f0] hover:border-[#CC1C1C] rounded-lg px-3 py-2.5 flex flex-col gap-0.5 transition-colors"
                              >
                                <code className="text-xs font-mono font-semibold text-[#1a202c] group-hover:text-white tracking-wide transition-colors">
                                  {entry.number}
                                </code>
                                {entry.variant && (
                                  <span className="text-[10px] text-[#7A8A99] group-hover:text-red-100 transition-colors">
                                    {entry.variant}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1a202c] py-16 text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Need a specific part?</h2>
            <p className="text-gray-400 mb-8">
              RSTECH Electronics is the authorized Gore distributor in Israel. We provide
              pricing, lead times, and samples for all Gore vent part numbers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#CC1C1C] hover:bg-[#a01515] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}