import type { Metadata } from "next";
import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import TsubakiCarriersClient from "./TsubakiCarriersClient";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "he" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Cable Carriers — Tsubaki Kabelschlepp via RSTECH Electronics Israel",
    description:
      "Full range of Tsubaki Kabelschlepp cable carriers: plastic, steel, hybrid and aluminium. MONO, QUANTUM®, ROBOTRAX®, CLEANVEYOR and more. Filter by material and opening style. Authorized distributor in Israel.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/tsubaki/carriers`,
      languages: {
        en: "https://www.rstech.co.il/en/companies/tsubaki/carriers",
        he: "https://www.rstech.co.il/he/companies/tsubaki/carriers",
        "x-default": "https://www.rstech.co.il/en/companies/tsubaki/carriers",
      },
    },
  };
}

export default async function TsubakiCarriersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        {/* Hero */}
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
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 flex-wrap">
              <Link href="/companies" className="hover:text-white transition-colors cursor-pointer">
                Companies
              </Link>
              <span>/</span>
              <Link href="/companies/tsubaki" className="hover:text-white transition-colors cursor-pointer">
                Tsubaki Kabelschlepp
              </Link>
              <span>/</span>
              <span className="text-white">Cable Carriers</span>
            </div>

            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Authorized Israeli Representative</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Complete Cable Carrier Range
                </h1>
                <p className="text-slate-300 max-w-2xl">
                  24 series covering plastic, steel, hybrid and aluminium cable carriers — from compact light-duty units to heavy steel chains rated for 500 m travel. Filter by material and opening style to find the right carrier.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/companies/tsubaki"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Tsubaki Overview
                </Link>
                <a
                  href="https://tsubaki-kabelschlepp.com/en-int/products/cable-carriers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-orange-500/40 text-orange-300 hover:bg-orange-500/10 text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  tsubaki-kabelschlepp.com
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive carrier listing */}
        <Suspense
          fallback={
            <div className="max-w-7xl mx-auto px-4 py-20 text-center text-[#7A8A99]">
              Loading carriers…
            </div>
          }
        >
          <TsubakiCarriersClient />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
