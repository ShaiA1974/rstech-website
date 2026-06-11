import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/AnimatedSections";
import {
  TSUBAKI_CABLES,
  CABLE_CATEGORIES,
  getCablesByCategory,
  type CableCategory,
  type CableShielding,
} from "@/data/tsubaki-cables";

type Props = { params: Promise<{ locale: string; category: string }> };

const CATEGORIES: CableCategory[] = [
  "control",
  "power",
  "data",
  "bus",
  "coaxial",
  "fiber-optic",
  "high-voltage",
  "oem",
];

export function generateStaticParams() {
  return ["en", "he"].flatMap((locale) =>
    CATEGORIES.map((category) => ({ locale, category }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const catInfo = CABLE_CATEGORIES.find((c) => c.key === category);
  if (!catInfo || catInfo.key === "all") return {};
  return {
    title: `${catInfo.label} Cables — Tsubaki Kabelschlepp | RSTECH Electronics Israel`,
    description: catInfo.description,
  };
}

// ── Helpers ────────────────────────────────────────────────────────────────────

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

const SHIELDING_LABEL: Record<CableShielding, string> = {
  none:     "Unshielded",
  overall:  "Shielded",
  double:   "Double Shielded",
  twisted:  "Twisted Shield",
  shielded: "Indiv. Shielded",
};

const SHIELDING_BADGE: Record<CableShielding, string> = {
  none:     "bg-slate-100 text-slate-600 border-slate-200",
  overall:  "bg-orange-100 text-orange-700 border-orange-200",
  double:   "bg-violet-100 text-violet-700 border-violet-200",
  twisted:  "bg-amber-100 text-amber-700 border-amber-200",
  shielded: "bg-teal-100 text-teal-700 border-teal-200",
};

const JACKET_BADGE: Record<string, string> = {
  PVC: "bg-slate-100 text-slate-600 border-slate-200",
  PUR: "bg-blue-100 text-blue-700 border-blue-200",
  TPE: "bg-green-100 text-green-700 border-green-200",
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default async function TsubakiCategoryPage({ params }: Props) {
  const { locale, category } = await params;
  setRequestLocale(locale);

  const catInfo = CABLE_CATEGORIES.find((c) => c.key === category && c.key !== "all");
  if (!catInfo) notFound();

  const cables = getCablesByCategory(category as CableCategory);
  if (cables.length === 0) notFound();

  const colorBar = CATEGORY_COLOR[category] ?? "bg-orange-500";

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
              <Link href="/companies/tsubaki/cables" className="hover:text-white transition-colors cursor-pointer">
                Cables
              </Link>
              <span>/</span>
              <span className="text-white">{catInfo.label}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              TRAXLINE® {catInfo.label}
            </h1>
            <p className="text-slate-300 max-w-2xl text-lg leading-relaxed">
              {catInfo.description}{" "}
              <span className="text-orange-400 font-semibold">{cables.length} series available.</span>
            </p>
          </div>
        </div>

        {/* ── Cable card grid ───────────────────────────────────────────────── */}
        <div className="bg-[#f8fafc] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cables.map((cable) => (
                  <div
                    key={cable.id}
                    className="group border border-[#e2e8f0] rounded-xl hover:shadow-md hover:border-orange-500/30 transition-all duration-200 flex flex-col bg-white overflow-hidden"
                  >
                    {/* Product image */}
                    <div className={`relative h-44 w-full overflow-hidden border-b-4 ${colorBar}`}>
                      <Image
                        src={cable.image}
                        alt={cable.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Header */}
                    <div className="px-5 pt-4 pb-3 relative">
                      <span
                        className={`absolute top-4 end-5 text-[10px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${SHIELDING_BADGE[cable.shielding]}`}
                      >
                        {SHIELDING_LABEL[cable.shielding]}
                      </span>

                      <h2 className="font-bold text-[#1a202c] text-base leading-snug group-hover:text-orange-600 transition-colors pr-28">
                        {cable.name}
                      </h2>

                      <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${JACKET_BADGE[cable.jacket] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}
                        >
                          {cable.jacket}
                        </span>
                      </div>

                      <p className="text-xs text-[#4a5568] leading-snug mt-2">{cable.tagline}</p>
                    </div>

                    {/* Spec table */}
                    <dl className="border-t border-[#e2e8f0] mx-5 divide-y divide-[#f0f4f8] flex-1">
                      <div className="flex items-center justify-between py-2">
                        <dt className="text-xs text-[#7A8A99] w-32 shrink-0">Voltage :</dt>
                        <dd className="text-xs font-medium text-[#1a202c]">{cable.voltage}</dd>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <dt className="text-xs text-[#7A8A99] w-32 shrink-0">Temp Range :</dt>
                        <dd className="text-xs font-medium text-[#1a202c]">{cable.tempRange}</dd>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <dt className="text-xs text-[#7A8A99] w-32 shrink-0">Motion Cycles :</dt>
                        <dd className="text-xs font-medium text-[#1a202c]">{cable.motionCycles}</dd>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <dt className="text-xs text-[#7A8A99] w-32 shrink-0">Travel Length :</dt>
                        <dd className="text-xs font-medium text-[#1a202c]">{cable.travelLength}</dd>
                      </div>
                    </dl>

                    {/* Part number chips */}
                    {cable.partNumbers.length > 0 && (
                      <div className="px-5 pt-3 pb-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#7A8A99] mb-1.5">
                          Part Numbers
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {cable.partNumbers.slice(0, 3).map((pn) => (
                            <code
                              key={pn.part}
                              className="text-[10px] font-mono bg-[#f0f4f8] text-[#334155] px-2 py-0.5 rounded"
                              title={pn.config}
                            >
                              {pn.part}
                            </code>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="px-5 py-4 border-t border-[#f0f4f8] mt-3">
                      <Link
                        href={`/companies/tsubaki/cables/${category}/${cable.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        View Details
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
