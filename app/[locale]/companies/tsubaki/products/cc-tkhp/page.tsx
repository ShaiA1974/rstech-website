import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, ShieldCheck, ArrowRight, CheckCircle2, Download, Layers } from "lucide-react";
import { FadeUp, StaggerGrid, StaggerCard } from "@/components/ui/AnimatedSections";
import { TSUBAKI_PRODUCTS } from "@/data/tsubaki-products";

type Props = { params: Promise<{ locale: string }> };

const PRODUCT_ID = "cc-tkhp";
const IMAGE_URL: string | null = "/products/tsubaki/cc-tkhp.jpg";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "he" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const product = TSUBAKI_PRODUCTS.find((p) => p.id === PRODUCT_ID)!;
  return {
    title: `${product.name} — Tsubaki Kabelschlepp via RSTECH Electronics Israel`,
    description: product.description,
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/tsubaki/products/cc-tkhp`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/tsubaki/products/cc-tkhp`,
        he: `https://www.rstech.co.il/he/companies/tsubaki/products/cc-tkhp`,
        "x-default": `https://www.rstech.co.il/en/companies/tsubaki/products/cc-tkhp`,
      },
    },
  };
}

export default async function TsubakiProductPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const product = TSUBAKI_PRODUCTS.find((p) => p.id === PRODUCT_ID)!;
  const related = TSUBAKI_PRODUCTS.filter(
    (p) => p.subcategory === product.subcategory && p.id !== product.id
  ).slice(0, 3);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <div className="relative bg-[#0F172A] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 flex-wrap">
              <Link href="/companies" className="hover:text-white transition-colors cursor-pointer">Companies</Link>
              <span>/</span>
              <Link href="/companies/tsubaki" className="hover:text-white transition-colors cursor-pointer">Tsubaki Kabelschlepp</Link>
              <span>/</span>
              <Link href="/companies/tsubaki/products" className="hover:text-white transition-colors cursor-pointer">Products</Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Tsubaki Kabelschlepp — Authorized in Israel</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{product.name}</h1>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">{product.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact?product=Tsubaki Kabelschlepp"
                    className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer">
                    Request Pricing <ArrowRight className="w-4 h-4" />
                  </Link>
                  {product.datasheetUrl && (
                    <a href={product.datasheetUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-orange-500/40 text-orange-300 font-medium px-6 py-3 rounded-lg hover:bg-orange-500/10 transition-colors cursor-pointer">
                      <Download className="w-4 h-4" /> Download Datasheet
                    </a>
                  )}
                  <a href={product.supplierUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    View on Supplier Site <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden h-64 lg:h-80 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                {IMAGE_URL ? (
                  <Image src={IMAGE_URL} alt={product.name} width={600} height={400} className="w-full h-full object-cover" />
                ) : (
                  <Layers className="w-24 h-24 text-orange-400 opacity-40" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {product.features && product.features.length > 0 && (
                <FadeUp>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a202c] mb-4">Key Features</h2>
                    <div className="h-1 w-12 bg-orange-500 rounded-full mb-6" />
                    <ul className="space-y-3">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                          <span className="text-[#334155]">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              )}
              <FadeUp delay={0.05}>
                <div>
                  <h2 className="text-2xl font-bold text-[#1a202c] mb-4">Industries Served</h2>
                  <div className="h-1 w-12 bg-orange-500 rounded-full mb-6" />
                  <div className="flex flex-wrap gap-2">
                    {product.industries.map((ind) => (
                      <span key={ind} className="text-sm font-medium text-[#334155] bg-[#f0f4f8] border border-[#e2e8f0] px-4 py-2 rounded-full">{ind}</span>
                    ))}
                  </div>
                </div>
              </FadeUp>
              {related.length > 0 && (
                <FadeUp delay={0.1}>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a202c] mb-4">Related Products</h2>
                    <div className="h-1 w-12 bg-orange-500 rounded-full mb-6" />
                    <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {related.map((r) => (
                        <StaggerCard key={r.id}>
                          <Link href={`/companies/tsubaki/products/${r.id}`}
                            className="block border border-[#e2e8f0] rounded-xl p-4 hover:border-orange-500/30 hover:shadow-md transition-all cursor-pointer group">
                            <h3 className="font-semibold text-[#1a202c] text-sm mb-1 group-hover:text-orange-600 transition-colors">{r.name}</h3>
                            <p className="text-xs text-[#7A8A99] line-clamp-2">{r.description}</p>
                          </Link>
                        </StaggerCard>
                      ))}
                    </StaggerGrid>
                  </div>
                </FadeUp>
              )}
            </div>
            <div className="space-y-6">
              <FadeUp>
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                  <h3 className="font-bold text-[#1a202c] mb-2 text-sm">Interested in this product?</h3>
                  <p className="text-sm text-[#4a5568] mb-4 leading-relaxed">Contact our local Israeli team for pricing, availability, and technical consultation.</p>
                  <Link href="/contact?product=Tsubaki Kabelschlepp"
                    className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer text-sm w-full justify-center">
                    Get in Touch <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeUp>
              <FadeUp delay={0.05}>
                <div className="bg-[#0F172A] rounded-2xl p-6 border border-slate-700">
                  <div className="space-y-4 text-sm">
                    <div><div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Category</div><div className="text-slate-300">{product.subcategory}</div></div>
                    <div><div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Manufacturer</div><div className="text-slate-300">Tsubaki Kabelschlepp GmbH</div></div>
                    <div><div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Israeli Rep</div><div className="text-slate-300">RSTECH Electronics Ltd</div></div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
                    <a href={product.supplierUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-orange-400 font-semibold text-sm hover:text-orange-300 transition-colors cursor-pointer">
                      Official Product Page <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    {product.datasheetUrl && (
                      <a href={product.datasheetUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-400 font-semibold text-sm hover:text-slate-300 transition-colors cursor-pointer">
                        <Download className="w-3.5 h-3.5" /> Download Datasheet PDF
                      </a>
                    )}
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="space-y-2">
                  <Link href="/companies/tsubaki/products" className="flex items-center gap-2 text-sm text-[#4a5568] hover:text-orange-600 transition-colors cursor-pointer">
                    <ArrowLeft className="w-4 h-4" /> All Tsubaki Products
                  </Link>
                  <Link href="/companies/tsubaki" className="flex items-center gap-2 text-sm text-[#4a5568] hover:text-orange-600 transition-colors cursor-pointer">
                    <ArrowLeft className="w-4 h-4" /> Tsubaki Overview
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}