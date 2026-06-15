import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, ShieldCheck, ArrowRight, CheckCircle2, Cable, Wind, Layers } from "lucide-react";
import { FadeUp, StaggerGrid, StaggerCard } from "@/components/ui/AnimatedSections";
import { GORE_PRODUCTS } from "@/data/gore-products";

type Props = { params: Promise<{ locale: string; productId: string }> };

export async function generateStaticParams() {
  const locales = ["en", "he"];
  return GORE_PRODUCTS.flatMap((p) =>
    locales.map((locale) => ({ locale, productId: p.id }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, productId } = await params;
  const product = GORE_PRODUCTS.find((p) => p.id === productId);
  if (!product) return {};
  return {
    title: `${product.name} — Gore Products via RSTECH Electronics Israel`,
    description: product.description,
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/${productId}`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/${productId}`,
        he: `https://www.rstech.co.il/he/companies/gore/products/${productId}`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/${productId}`,
      },
    },
  };
}

const CATEGORY_ICON: Record<string, React.ElementType> = {
  cables: Cable,
  sealants: Layers,
  vents: Wind,
};

const CATEGORY_GRADIENT: Record<string, string> = {
  cables: "from-blue-100 to-blue-50",
  sealants: "from-orange-100 to-orange-50",
  vents: "from-slate-100 to-slate-50",
};

const CATEGORY_ACCENT: Record<string, string> = {
  cables: "text-blue-400",
  sealants: "text-orange-400",
  vents: "text-slate-400",
};

export default async function GoreProductPage({ params }: Props) {
  const { locale, productId } = await params;
  setRequestLocale(locale);

  const product = GORE_PRODUCTS.find((p) => p.id === productId);
  if (!product) notFound();

  const Icon = CATEGORY_ICON[product.category] ?? Cable;
  const gradient = CATEGORY_GRADIENT[product.category] ?? CATEGORY_GRADIENT.cables;
  const accent = CATEGORY_ACCENT[product.category] ?? CATEGORY_ACCENT.cables;

  // Related products: same subcategory, exclude self
  const related = GORE_PRODUCTS.filter(
    (p) => p.subcategory === product.subcategory && p.id !== product.id
  ).slice(0, 3);

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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 flex-wrap">
              <Link href="/companies" className="hover:text-white transition-colors cursor-pointer">Companies</Link>
              <span>/</span>
              <Link href="/companies/gore" className="hover:text-white transition-colors cursor-pointer">W.L. Gore</Link>
              <span>/</span>
              <Link href="/companies/gore/products" className="hover:text-white transition-colors cursor-pointer">Products</Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>W.L. Gore — Authorized in Israel</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact?product=W.L. Gore"
                    className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer"
                  >
                    Request Pricing
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={product.goreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    View on Gore.com
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Product image / gradient */}
              <div className={`rounded-2xl overflow-hidden h-64 lg:h-80 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Icon className={`w-24 h-24 ${accent} opacity-40`} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <FadeUp>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a202c] mb-4">Key Features</h2>
                    <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
                    <ul className="space-y-3">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#CC1C1C] mt-0.5 shrink-0" />
                          <span className="text-[#334155]">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              )}

              {/* Industries */}
              <FadeUp delay={0.05}>
                <div>
                  <h2 className="text-2xl font-bold text-[#1a202c] mb-4">Industries Served</h2>
                  <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
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
                </div>
              </FadeUp>

              {/* Related products */}
              {related.length > 0 && (
                <FadeUp delay={0.1}>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a202c] mb-4">Related Products</h2>
                    <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
                    <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {related.map((r) => (
                        <StaggerCard key={r.id}>
                          <Link
                            href={`/companies/gore/products/${r.id}`}
                            className="block border border-[#e2e8f0] rounded-xl p-4 hover:border-[#CC1C1C]/30 hover:shadow-md transition-all cursor-pointer group"
                          >
                            <h3 className="font-semibold text-[#1a202c] text-sm mb-1 group-hover:text-[#CC1C1C] transition-colors">
                              {r.name}
                            </h3>
                            <p className="text-xs text-[#7A8A99] line-clamp-2">{r.description}</p>
                          </Link>
                        </StaggerCard>
                      ))}
                    </StaggerGrid>
                  </div>
                </FadeUp>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA */}
              <FadeUp>
                <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                  <h3 className="font-bold text-[#1a202c] mb-2 text-sm">Interested in this product?</h3>
                  <p className="text-sm text-[#4a5568] mb-4 leading-relaxed">
                    Contact our local Israeli team for pricing, availability, and technical consultation.
                  </p>
                  <Link
                    href="/contact?product=W.L. Gore"
                    className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer text-sm w-full justify-center"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeUp>

              {/* Product meta */}
              <FadeUp delay={0.05}>
                <div className="bg-[#0F172A] rounded-2xl p-6 border border-slate-700">
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Category</div>
                      <div className="text-slate-300">{product.subcategory}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Manufacturer</div>
                      <div className="text-slate-300">W.L. Gore & Associates</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Israeli Rep</div>
                      <div className="text-slate-300">RSTECH Electronics Ltd</div>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <a
                      href={product.goreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      Official Product Page
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </FadeUp>

              {/* Back links */}
              <FadeUp delay={0.1}>
                <div className="space-y-2">
                  <Link
                    href="/companies/gore/products"
                    className="flex items-center gap-2 text-sm text-[#4a5568] hover:text-[#CC1C1C] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    All Gore Products
                  </Link>
                  <Link
                    href="/companies/gore"
                    className="flex items-center gap-2 text-sm text-[#4a5568] hover:text-[#CC1C1C] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Gore Overview
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
