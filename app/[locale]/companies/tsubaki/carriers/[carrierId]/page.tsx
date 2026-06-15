import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { FadeUp } from "@/components/ui/AnimatedSections";
import { TSUBAKI_CARRIERS } from "@/data/tsubaki-carriers";

// ─── Static params ────────────────────────────────────────────────────────────

const CARRIER_IDS = [
  "cc-mono",
  "cc-quicktrax",
  "cc-uniflex",
  "cc-tkp35",
  "cc-tkk",
  "cc-protum",
  "cc-easytrax",
  "cc-quantum",
  "cc-tkr",
  "cc-tka",
  "cc-k-series",
  "cc-m-series",
  "cc-tkhp",
  "cc-xl-series",
  "cc-mt-series",
  "cc-xlt-series",
  "cc-uat",
  "cc-ls-lsx",
  "cc-s-sx",
  "cc-s-sx-tubes",
  "cc-robotrax",
  "cc-cleanveyor",
  "cc-flatveyor",
  "cc-flatveyor-zp",
] as const;

type Props = { params: Promise<{ locale: string; carrierId: string }> };

export function generateStaticParams() {
  const locales = ["en", "he"];
  return CARRIER_IDS.flatMap((carrierId) =>
    locales.map((locale) => ({ locale, carrierId }))
  );
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, carrierId } = await params;
  const carrier = TSUBAKI_CARRIERS.find((c) => c.id === carrierId);
  if (!carrier) return {};
  return {
    title: `${carrier.name} — Tsubaki Kabelschlepp Cable Carriers via RSTECH Electronics Israel`,
    description: carrier.description,
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/tsubaki/carriers/${carrierId}`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/tsubaki/carriers/${carrierId}`,
        he: `https://www.rstech.co.il/he/companies/tsubaki/carriers/${carrierId}`,
        "x-default": `https://www.rstech.co.il/en/companies/tsubaki/carriers/${carrierId}`,
      },
    },
  };
}

// ─── Spec chip helper ─────────────────────────────────────────────────────────

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

// ─── Material badge colour ────────────────────────────────────────────────────

const MATERIAL_COLOUR: Record<string, string> = {
  plastic: "bg-sky-100 text-sky-700 border-sky-200",
  steel: "bg-slate-200 text-slate-700 border-slate-300",
  hybrid: "bg-amber-100 text-amber-700 border-amber-200",
  aluminium: "bg-indigo-100 text-indigo-700 border-indigo-200",
};

const MATERIAL_LABEL: Record<string, string> = {
  plastic: "Plastic",
  steel: "Steel",
  hybrid: "Hybrid",
  aluminium: "Aluminium",
};

const OPENING_LABEL: Record<string, string> = {
  open: "Open-style",
  closed: "Enclosed",
  both: "Open & Closed",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function TsubakiCarrierPage({ params }: Props) {
  const { locale, carrierId } = await params;
  setRequestLocale(locale);

  const carrier = TSUBAKI_CARRIERS.find((c) => c.id === carrierId);
  if (!carrier) notFound();

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <div
          className="relative overflow-hidden py-16 sm:py-24"
          style={{
            backgroundImage: carrier.imageUrl ? `url(${carrier.imageUrl})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Dot-grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Orange glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-slate-300 text-sm mb-8 flex-wrap">
              <Link
                href="/companies"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Companies
              </Link>
              <span>/</span>
              <Link
                href="/companies/tsubaki"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Tsubaki Kabelschlepp
              </Link>
              <span>/</span>
              <Link
                href="/companies/tsubaki/carriers"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Cable Carriers
              </Link>
              <span>/</span>
              <span className="text-white">{carrier.name}</span>
            </nav>

            <div className="max-w-2xl">
              {/* Orange badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Tsubaki Kabelschlepp — Authorized in Israel</span>
              </div>

              {/* Tagline */}
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">
                {carrier.tagline}
              </p>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {carrier.name}
              </h1>

              {/* Subheadline */}
              <p className="text-slate-100 text-lg leading-relaxed mb-8">
                {carrier.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact?product=Tsubaki+Kabelschlepp"
                  className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer"
                >
                  Request Pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={carrier.supplierUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                >
                  View on Supplier Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. SPEC CHIPS BAR ────────────────────────────────────────────── */}
        <div className="bg-white border-b border-[#e2e8f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <FadeUp>
              <div className="flex flex-wrap gap-3 items-center">
                <SpecChip label="Inner Heights" value={carrier.innerHeights} />
                <SpecChip label="Inner Widths" value={carrier.innerWidths} />
                <SpecChip label="Pitch" value={carrier.pitch} />
                {carrier.travelLength && (
                  <SpecChip label="Travel Length" value={carrier.travelLength} />
                )}
                <SpecChip
                  label="Material"
                  value={MATERIAL_LABEL[carrier.material] ?? carrier.material}
                />
                <SpecChip
                  label="Opening"
                  value={OPENING_LABEL[carrier.opening] ?? carrier.opening}
                />
                {carrier.variantCount && (
                  <SpecChip
                    label="Variants"
                    value={`${carrier.variantCount}+`}
                  />
                )}
                {/* Material pill */}
                <span
                  className={`ml-auto text-xs font-semibold px-3 py-1 rounded-full border ${
                    MATERIAL_COLOUR[carrier.material] ??
                    "bg-gray-100 text-gray-600 border-gray-200"
                  }`}
                >
                  {MATERIAL_LABEL[carrier.material] ?? carrier.material}
                </span>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── 3. BENEFITS ──────────────────────────────────────────────────── */}
        <div className="bg-[#f0f4f8] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#1a202c]">
                Why Choose {carrier.name}?
              </h2>
              <div className="mt-3 h-1 w-12 bg-orange-500 mx-auto rounded-full" />
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {carrier.benefits.map((benefit, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    </div>
                    <h3 className="font-bold text-[#1a202c] mb-2 text-[15px]">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[#4a5568] leading-relaxed">
                      {benefit.body}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4. SPECS + APPLICATIONS ──────────────────────────────────────── */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Technical Specifications */}
              <FadeUp>
                <div>
                  <h2 className="text-2xl font-bold text-[#1a202c] mb-4">
                    Technical Specifications
                  </h2>
                  <div className="h-1 w-12 bg-orange-500 rounded-full mb-6" />
                  <dl className="space-y-0">
                    {carrier.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between items-start py-3 border-b border-[#f0f4f8] last:border-b-0"
                      >
                        <dt className="text-sm font-medium text-[#7A8A99] shrink-0 mr-4">
                          {spec.label}
                        </dt>
                        <dd className="text-sm font-semibold text-[#1a202c] text-right">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeUp>

              {/* Applications */}
              <FadeUp delay={0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-[#1a202c] mb-4">
                    Applications
                  </h2>
                  <div className="h-1 w-12 bg-orange-500 rounded-full mb-6" />
                  <ul className="space-y-3">
                    {carrier.applications.map((app) => (
                      <li key={app} className="flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                        <span className="text-[#334155] text-sm leading-relaxed">
                          {app}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* ── 5. INDUSTRIES ────────────────────────────────────────────────── */}
        <div className="bg-[#f0f4f8] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="text-xl font-bold text-[#1a202c] mb-6">
                Industries Served
              </h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {carrier.industries.map((industry) => (
                  <span
                    key={industry}
                    className="text-sm font-medium text-[#334155] bg-white border border-[#e2e8f0] px-4 py-2 rounded-full shadow-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── 6. FAQ ───────────────────────────────────────────────────────── */}
        <div className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#1a202c]">
                Frequently Asked Questions
              </h2>
              <div className="mt-3 h-1 w-12 bg-orange-500 mx-auto rounded-full" />
            </FadeUp>

            <div className="space-y-4">
              {carrier.faq.map((item, i) => (
                <FadeUp key={i} delay={i * 0.05}>
                  <div className="border border-[#e2e8f0] rounded-xl p-5">
                    <h3 className="font-semibold text-[#1a202c] mb-2 text-[15px]">
                      {item.q}
                    </h3>
                    <p className="text-sm text-[#4a5568] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* ── 7. DARK CTA BANNER ───────────────────────────────────────────── */}
        <div className="bg-[#0F172A] py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to source {carrier.name} in Israel?
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Contact RSTECH Electronics — your local authorized Tsubaki
                Kabelschlepp representative — for pricing, availability, and
                technical support.
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
                  href="/companies/tsubaki/carriers"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Carriers
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
