import type { Metadata } from "next";
import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import GoreProductsClient from "./GoreProductsClient";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "W.L. Gore Products — Cables, RF Assemblies, SKYFLEX® & Vents",
    description:
      "Full catalog of W.L. Gore products represented by RSTECH Electronics in Israel: cables & assemblies, SKYFLEX® aerospace sealant, and ePTFE vents for automotive, electronics, and more.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products`,
      languages: {
        en: "https://www.rstech.co.il/en/companies/gore/products",
        he: "https://www.rstech.co.il/he/companies/gore/products",
        "x-default": "https://www.rstech.co.il/en/companies/gore/products",
      },
    },
  };
}

export default async function GoreProductsPage({ params }: Props) {
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
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 flex-wrap">
              <Link href="/companies" className="hover:text-white transition-colors cursor-pointer">
                Companies
              </Link>
              <span>/</span>
              <Link href="/companies/gore" className="hover:text-white transition-colors cursor-pointer">
                W.L. Gore
              </Link>
              <span>/</span>
              <span className="text-white">Products</span>
            </div>

            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Authorized Israeli Representative</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  W.L. Gore Product Catalog
                </h1>
                <p className="text-slate-300 max-w-2xl">
                  Cables & assemblies, SKYFLEX® aerospace sealant, and ePTFE vents — filter by category or industry to find the right product.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/companies/gore"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Gore Overview
                </Link>
                <a
                  href="https://www.gore.com/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-blue-500/40 text-blue-300 hover:bg-blue-500/10 text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  gore.com
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive product listing */}
        <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-[#7A8A99]">Loading products…</div>}>
          <GoreProductsClient />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
