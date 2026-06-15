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
  ExternalLink,
  ShieldCheck,
  Hash,
  Package,
  CheckCircle2,
} from "lucide-react";
import { FadeUp } from "@/components/ui/AnimatedSections";
import {
  findProductByPartNumber,
  getAllVentPartNumbers,
} from "@/data/gore-products";

type Props = { params: Promise<{ locale: string; partNumber: string }> };

/** Pre-render a static page for every vent part number × locale */
export async function generateStaticParams() {
  const locales = ["en", "he"];
  const allParts = getAllVentPartNumbers();
  return locales.flatMap((locale) =>
    allParts.map(({ partNumber }) => ({ locale, partNumber }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, partNumber } = await params;
  const decoded = decodeURIComponent(partNumber);
  const match = findProductByPartNumber(decoded);
  if (!match) return {};

  const { product, partEntry } = match;
  const variantStr = partEntry.variant ? ` (${partEntry.variant})` : "";
  const modelStr = partEntry.model ? ` — ${partEntry.model}` : "";

  return {
    title: `${decoded}${variantStr} — GORE® ${product.name} | RSTECH Electronics Israel`,
    description: `${decoded}${modelStr}${variantStr}: GORE® ${product.name} available from RSTECH Electronics, the authorized W.L. Gore distributor in Israel. Request a quote or sample today.`,
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/parts/${partNumber}`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/parts/${partNumber}`,
        he: `https://www.rstech.co.il/he/companies/gore/parts/${partNumber}`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/parts/${partNumber}`,
      },
    },
  };
}

export default async function GorePartNumberPage({ params }: Props) {
  const { locale, partNumber } = await params;
  setRequestLocale(locale);

  const decoded = decodeURIComponent(partNumber);
  const match = findProductByPartNumber(decoded);
  if (!match) notFound();

  const { product, partEntry } = match;

  // Sibling part numbers from the same product (for cross-linking)
  const siblings = (product.partNumbers ?? []).filter(
    (pn) => pn.number !== decoded
  );

  const productPageHref = `/companies/gore/products/${product.id}`;
  const canonicalUrl = `https://www.rstech.co.il/en/companies/gore/parts/${partNumber}`;

  // JSON-LD: single Product with this exact MPN
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: partEntry.model
      ? `GORE® ${partEntry.model} — ${product.name}`
      : `GORE® ${product.name}`,
    sku: decoded,
    mpn: decoded,
    description: product.description,
    url: canonicalUrl,
    ...(partEntry.variant ? { color: partEntry.variant } : {}),
    ...(product.imageUrl
      ? { image: `https://www.rstech.co.il${product.imageUrl}` }
      : {}),
    brand: {
      "@type": "Brand",
      name: "W.L. Gore & Associates",
    },
    manufacturer: {
      "@type": "Organization",
      name: "W.L. Gore & Associates",
      url: "https://www.gore.com",
    },
    offers: {
      "@type": "Offer",
      seller: {
        "@type": "Organization",
        name: "RSTECH Electronics Ltd",
        url: "https://www.rstech.co.il",
      },
      url: canonicalUrl,
      availability: "https://schema.org/InStock",
      areaServed: { "@type": "Country", name: "Israel" },
    },
  };

  return (
    <>
      <Header locale={locale} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
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
              <Link href="/companies" className="hover:text-white transition-colors cursor-pointer">Companies</Link>
              <span>/</span>
              <Link href="/companies/gore" className="hover:text-white transition-colors cursor-pointer">W.L. Gore</Link>
              <span>/</span>
              <Link href={productPageHref} className="hover:text-white transition-colors cursor-pointer">{product.name}</Link>
              <span>/</span>
              <span className="text-white font-mono">{decoded}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>W.L. Gore — Authorized Distributor in Israel</span>
                </div>

                {/* Part number as H1 */}
                <div className="flex items-center gap-3 mb-2">
                  <Hash className="w-6 h-6 text-slate-400 shrink-0" />
                  <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold">
                    Part Number
                  </p>
                </div>
                <h1 className="text-4xl md:text-5xl font-black font-mono text-white mb-4 tracking-tight">
                  {decoded}
                </h1>

                {/* Model + variant chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {partEntry.model && (
                    <span className="text-sm font-semibold text-white bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                      {partEntry.model}
                    </span>
                  )}
                  {partEntry.variant && (
                    <span className="text-sm font-medium text-slate-300 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                      {partEntry.variant}
                    </span>
                  )}
                  <span className="text-sm font-medium text-slate-300 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                    {product.subcategory}
                  </span>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Part of the <span className="font-semibold text-white">{product.name}</span> family by W.L. Gore &amp; Associates.{" "}
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/contact?product=${encodeURIComponent("W.L. Gore — " + decoded)}`}
                    className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={productPageHref}
                    className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <Package className="w-4 h-4" />
                    Full Product Specs
                  </Link>
                  <a
                    href={product.goreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 text-slate-400 font-medium px-6 py-3 rounded-lg hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                  >
                    gore.com
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Product image */}
              <div className="rounded-2xl overflow-hidden h-64 lg:h-80 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex flex-col items-center justify-center gap-4 p-8">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={`${decoded} — ${product.name}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <>
                    <div className="text-center">
                      <div className="text-5xl font-black font-mono text-white tracking-tight mb-1">
                        {decoded}
                      </div>
                      <div className="text-slate-400 text-sm">{product.name}</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Why source here ────────────────────────────────────────────── */}
        <div className="bg-white border-b border-[#e2e8f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Authorized Israeli Distributor",
                    body: "RSTECH Electronics is the official authorized representative of W.L. Gore & Associates in Israel. Every unit is genuine, fully certified, and traceable to the manufacturer.",
                  },
                  {
                    title: "Local Support & Fast Quotes",
                    body: "Submit a quote request and receive a response from our Israeli team within one business day — pricing, lead times, and technical guidance in one call.",
                  },
                  {
                    title: "Samples Available",
                    body: "Evaluating this part for a design? Ask about sample availability. We work directly with Gore to support your qualification process.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#CC1C1C] mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#1a202c] mb-1 text-sm">{item.title}</h3>
                      <p className="text-sm text-[#4a5568] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── Product specs (from parent) ────────────────────────────────── */}
        {product.features && product.features.length > 0 && (
          <div className="bg-[#f0f4f8] py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeUp>
                <h2 className="text-xl font-bold text-[#1a202c] mb-2">
                  Product Family Highlights
                </h2>
                <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#CC1C1C] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#334155]">{f}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          </div>
        )}

        {/* ── Industries ─────────────────────────────────────────────────── */}
        <div className="bg-white py-10 border-b border-[#e2e8f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-wider text-[#7A8A99] mb-3">
                Industries Served
              </p>
              <div className="flex flex-wrap gap-2">
                {product.industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-sm font-medium text-[#334155] bg-[#f0f4f8] border border-[#e2e8f0] px-4 py-2 rounded-full"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── Related part numbers from same product ─────────────────────── */}
        {siblings.length > 0 && (
          <div className="bg-[#f8fafc] py-14 border-b border-[#e2e8f0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeUp>
                <h2 className="text-xl font-bold text-[#1a202c] mb-2">
                  Related Part Numbers
                </h2>
                <p className="text-sm text-[#7A8A99] mb-6">
                  Other part numbers in the <span className="font-semibold text-[#334155]">{product.name}</span> family:
                </p>
                <div className="flex flex-wrap gap-3">
                  {siblings.map((pn) => (
                    <Link
                      key={pn.number}
                      href={`/companies/gore/parts/${encodeURIComponent(pn.number)}`}
                      className="group flex items-center gap-2 bg-white border border-[#e2e8f0] hover:border-blue-400/40 hover:shadow-sm rounded-lg px-4 py-2.5 transition-all cursor-pointer"
                    >
                      <code className="text-sm font-mono font-semibold text-[#1a202c] group-hover:text-blue-600 transition-colors">
                        {pn.number}
                      </code>
                      {pn.variant && (
                        <span className="text-xs text-[#7A8A99]">{pn.variant}</span>
                      )}
                      {pn.model && !pn.variant && (
                        <span className="text-xs text-[#7A8A99]">{pn.model}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        )}

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div className="bg-[#0F172A] py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeUp>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Ready to order?
              </p>
              <h2 className="text-3xl font-bold text-white mb-3">
                Source{" "}
                <span className="font-mono text-blue-300">{decoded}</span>{" "}
                in Israel
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Contact RSTECH Electronics — your authorized Gore representative — for pricing,
                lead times, and samples.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href={`/contact?product=${encodeURIComponent("W.L. Gore — " + decoded)}`}
                  className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={productPageHref}
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Full Product Page
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
