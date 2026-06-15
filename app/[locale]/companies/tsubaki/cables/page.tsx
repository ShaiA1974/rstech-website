import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { CABLE_CATEGORIES } from "@/data/tsubaki-cables";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "he" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "TRAXLINE® Cables — Tsubaki Kabelschlepp | RSTECH Electronics Israel",
    description:
      "Full TRAXLINE® cable range: control, power, high voltage, BUS, coaxial, data, fiber optic and OEM cables for dynamic cable carrier applications. Authorized distributor in Israel.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/tsubaki/cables`,
      languages: {
        en: "https://www.rstech.co.il/en/companies/tsubaki/cables",
        he: "https://www.rstech.co.il/he/companies/tsubaki/cables",
        "x-default": "https://www.rstech.co.il/en/companies/tsubaki/cables",
      },
    },
  };
}

const CATEGORY_COLOR: Record<string, string> = {
  control:       "bg-orange-500",
  power:         "bg-blue-500",
  data:          "bg-teal-500",
  bus:           "bg-violet-500",
  coaxial:       "bg-slate-500",
  "fiber-optic": "bg-amber-500",
  "high-voltage":"bg-red-500",
  oem:           "bg-green-500",
};

export default async function TsubakiCablesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Categories without "all"
  const displayCategories = CABLE_CATEGORIES.filter((c) => c.key !== "all");

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div className="relative bg-[#0F172A] overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-slate-400 text-sm mb-8 flex-wrap">
              <Link href="/companies" className="hover:text-white transition-colors cursor-pointer">
                Companies
              </Link>
              <span>/</span>
              <Link href="/companies/tsubaki" className="hover:text-white transition-colors cursor-pointer">
                Tsubaki Kabelschlepp
              </Link>
              <span>/</span>
              <span className="text-white">Cables</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              TRAXLINE® Cable Range
            </h1>
            <p className="text-slate-300 max-w-2xl text-lg leading-relaxed">
              44 products across 8 categories — engineered for dynamic cable carrier systems and rated for millions of motion cycles.
            </p>
          </div>
        </div>

        {/* ── Category grid ─────────────────────────────────────────────────── */}
        <div className="bg-[#f8fafc] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayCategories.map((cat) => (
                <Link
                  key={cat.key}
                  href={`/companies/tsubaki/cables/${cat.key}`}
                  className="group bg-white rounded-xl border border-[#e2e8f0] hover:shadow-md hover:border-orange-400/40 transition-all duration-200 flex flex-col overflow-hidden cursor-pointer"
                >
                  {/* Colored top stripe */}
                  <div className={`h-2 w-full ${CATEGORY_COLOR[cat.key] ?? "bg-orange-500"}`} />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-bold text-[#1a202c] text-lg group-hover:text-orange-600 transition-colors">
                        {cat.label}
                      </h2>
                      <span className="text-xs font-semibold bg-[#f0f4f8] text-[#334155] px-2.5 py-1 rounded-full border border-[#e2e8f0]">
                        {cat.count} series
                      </span>
                    </div>
                    <p className="text-sm text-[#4a5568] leading-relaxed flex-1 mb-5">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 group-hover:gap-2.5 transition-all">
                      View Series
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Dark CTA ──────────────────────────────────────────────────────── */}
        <div className="bg-[#0F172A] py-14 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Need a TRAXLINE® cable for your application?
            </h2>
            <p className="text-slate-400 mb-7 max-w-xl mx-auto">
              Contact RSTECH Electronics — authorized Israeli representative for Tsubaki Kabelschlepp — for pricing and availability.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
