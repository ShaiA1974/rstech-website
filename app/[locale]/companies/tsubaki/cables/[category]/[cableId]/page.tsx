import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { FadeUp } from "@/components/ui/AnimatedSections";
import {
  TSUBAKI_CABLES,
  CABLE_CATEGORIES,
  type CableShielding,
} from "@/data/tsubaki-cables";

type Props = { params: Promise<{ locale: string; category: string; cableId: string }> };

// ─── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  const locales = ["en", "he"];
  return TSUBAKI_CABLES.flatMap((cable) =>
    locales.map((locale) => ({ locale, category: cable.category, cableId: cable.id }))
  );
}

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category, cableId } = await params;
  const cable = TSUBAKI_CABLES.find((c) => c.id === cableId && c.category === category);
  if (!cable) return {};
  const catInfo = CABLE_CATEGORIES.find((c) => c.key === category);
  return {
    title: `${cable.name} — Tsubaki Kabelschlepp | RSTECH Electronics Israel`,
    description: cable.description,
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/tsubaki/cables/${category}/${cableId}`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/tsubaki/cables/${category}/${cableId}`,
        he: `https://www.rstech.co.il/he/companies/tsubaki/cables/${category}/${cableId}`,
        "x-default": `https://www.rstech.co.il/en/companies/tsubaki/cables/${category}/${cableId}`,
      },
    },
  };
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

function SpecChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 px-4 py-2.5 bg-white border border-[#e2e8f0] rounded-lg shadow-sm min-w-[100px]">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7A8A99]">
        {label}
      </span>
      <span className="text-sm font-bold text-[#1a202c] text-center leading-tight">
        {value}
      </span>
    </div>
  );
}

const CATEGORY_COLOR: Record<string, string> = {
  control:       "bg-orange-500 text-white",
  power:         "bg-blue-500 text-white",
  data:          "bg-teal-500 text-white",
  bus:           "bg-violet-500 text-white",
  coaxial:       "bg-slate-500 text-white",
  "fiber-optic": "bg-amber-500 text-white",
  "high-voltage":"bg-red-500 text-white",
  oem:           "bg-green-500 text-white",
};

const SHIELDING_LABEL: Record<CableShielding, string> = {
  none:     "Unshielded",
  overall:  "Overall Shield",
  double:   "Double Shield",
  twisted:  "Twisted Pair",
  shielded: "Shielded",
};

const JACKET_COLOUR: Record<string, string> = {
  PVC: "bg-slate-100 text-slate-700 border-slate-200",
  PUR: "bg-indigo-100 text-indigo-700 border-indigo-200",
  TPE: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function TsubakiCableDetailPage({ params }: Props) {
  const { locale, category, cableId } = await params;
  setRequestLocale(locale);

  const cable = TSUBAKI_CABLES.find((c) => c.id === cableId && c.category === category);
  if (!cable) notFound();

  const catInfo = CABLE_CATEGORIES.find((c) => c.key === category);
  const categoryLabel = catInfo?.label ?? category;
  const categoryBadge = CATEGORY_COLOR[category] ?? "bg-orange-500 text-white";

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <div className="relative bg-[#0F172A] overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

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
              <Link href={`/companies/tsubaki/cables/${category}`} className="hover:text-white transition-colors cursor-pointer">
                {categoryLabel}
              </Link>
              <span>/</span>
              <span className="text-white">{cable.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: copy */}
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Tsubaki Kabelschlepp — Authorized in Israel</span>
                </div>

                <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">
                  {cable.tagline}
                </p>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {cable.name}
                </h1>

                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {cable.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact?product=Tsubaki+Kabelschlepp"
                    className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer"
                  >
                    Request Pricing
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={cable.supplierUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-orange-300/50 text-orange-300 font-medium px-6 py-3 rounded-lg hover:bg-orange-500/10 transition-colors cursor-pointer"
                  >
                    View on Supplier Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right: product image + badges */}
              <div className="rounded-xl border border-slate-700 bg-slate-800/60 overflow-hidden">
                <div className="relative w-full h-64 bg-slate-900">
                  <Image
                    src={cable.image}
                    alt={cable.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${categoryBadge}`}>
                      {categoryLabel}
                    </span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${JACKET_COLOUR[cable.jacket] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
                      {cable.jacket} Jacket
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-slate-700/60 text-slate-300 border-slate-600">
                      {SHIELDING_LABEL[cable.shielding] ?? cable.shielding}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{cable.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. SPEC CHIPS BAR ────────────────────────────────────────────── */}
        <div className="bg-white border-b border-[#e2e8f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <FadeUp>
              <div className="flex flex-wrap gap-3 items-center overflow-x-auto">
                <SpecChip label="Voltage" value={cable.voltage} />
                <SpecChip label="Temp Range" value={cable.tempRange} />
                <SpecChip label="Motion Cycles" value={cable.motionCycles} />
                <SpecChip label="Travel Length" value={cable.travelLength} />
                <SpecChip label="Bend Radius" value={cable.bendRadius} />
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── 3. KEY FEATURES ──────────────────────────────────────────────── */}
        <div className="bg-[#f0f4f8] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-10">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-3">Key Features</h2>
              <div className="h-1 w-12 bg-orange-500 rounded-full" />
            </FadeUp>
            <FadeUp delay={0.06}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cable.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-[#334155] leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── 4. PART NUMBER TABLE ─────────────────────────────────────────── */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-2">Type Selection</h2>
              <div className="h-1 w-12 bg-orange-500 rounded-full mb-3" />
              <p className="text-sm text-[#7A8A99]">
                Complete list of orderable configurations — contact RSTECH for pricing and availability.
              </p>
            </FadeUp>

            <FadeUp delay={0.06}>
              {cable.partNumbers.length > 0 ? (
                <div className="overflow-x-auto rounded-xl border border-[#e2e8f0]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#1a202c] text-white">
                        <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider">
                          Core Number × Cross-section
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider">
                          Part No.
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider">
                          max. Ø mm
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider">
                          Cable weight kg/m
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider">
                          Copper index kg/m
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cable.partNumbers.map((pn, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}
                        >
                          <td className="px-4 py-2.5 text-[#334155] border-b border-[#e2e8f0]">
                            {pn.config}
                          </td>
                          <td className="px-4 py-2.5 border-b border-[#e2e8f0] font-mono font-bold text-orange-600">
                            {pn.part}
                          </td>
                          <td className="px-4 py-2.5 text-[#334155] border-b border-[#e2e8f0]">
                            {"diameter" in pn ? (pn as { diameter?: string }).diameter ?? "—" : "—"}
                          </td>
                          <td className="px-4 py-2.5 text-[#334155] border-b border-[#e2e8f0]">
                            {"weight" in pn ? (pn as { weight?: string }).weight ?? "—" : "—"}
                          </td>
                          <td className="px-4 py-2.5 text-[#334155] border-b border-[#e2e8f0]">
                            {"copperIndex" in pn ? (pn as { copperIndex?: string }).copperIndex ?? "—" : "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm text-[#7A8A99] italic py-6">
                  Contact RSTECH for part numbers and custom configurations.
                </p>
              )}

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-sm text-[#4a5568] flex-1">
                  Additional configurations available upon request. Contact RSTECH Electronics for pricing, lead times and samples.
                </p>
                <Link
                  href="/contact?product=Tsubaki+Kabelschlepp"
                  className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer shrink-0"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── 5. APPLICATIONS ──────────────────────────────────────────────── */}
        <div className="bg-[#f0f4f8] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-3">Applications</h2>
              <div className="h-1 w-12 bg-orange-500 rounded-full" />
            </FadeUp>
            <FadeUp delay={0.06}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cable.applications.map((app) => (
                  <li key={app} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-[#334155] text-sm leading-relaxed">{app}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>

        {/* ── 6. DARK CTA ──────────────────────────────────────────────────── */}
        <div className="bg-[#0F172A] py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="text-3xl font-bold text-white mb-4">
                Source {cable.name} in Israel
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Contact RSTECH Electronics — your local authorized Tsubaki Kabelschlepp representative — for pricing, availability, and technical support.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact?product=Tsubaki+Kabelschlepp"
                  className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer"
                >
                  Contact RSTECH
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/companies/tsubaki/cables/${category}`}
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {categoryLabel} Cables
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
