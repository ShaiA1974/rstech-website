import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp, StaggerGrid, StaggerCard } from "@/components/ui/AnimatedSections";
import { ArrowRight, ArrowLeft, ExternalLink, ShieldCheck, CheckCircle2, Package } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "W.L. Gore & Associates — Authorized Representative in Israel",
    description:
      "RSTECH Electronics is the authorized Israeli representative of W.L. Gore & Associates. Cables, interconnects, filtration, medical devices, and more.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/gore`,
      languages: { en: "https://rstech.co.il/en/companies/gore", he: "https://rstech.co.il/he/companies/gore", "x-default": "https://rstech.co.il/en/companies/gore" },
    },
  };
}

export default async function GorePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <GoreContent locale={locale} />
      </main>
      <Footer />
    </>
  );
}

const PRODUCT_LINES = [
  {
    name: "Cables & Interconnects",
    items: ["Data Cables", "Signal & Control Cables", "High-Frequency Cables", "Shielded Assemblies"],
    color: "border-blue-200 bg-blue-50",
    dot: "bg-blue-500",
    image: "/products/gore/cables-data.jpg",
    href: "/companies/gore/products?category=cables",
  },
  {
    name: "Aviation Cables",
    items: ["GORE-JET® Cables", "Aerospace Signal Cables", "Flight-Critical Applications", "MIL-Spec Cables"],
    color: "border-cyan-200 bg-cyan-50",
    dot: "bg-cyan-600",
    image: "/products/gore/cables-rf-airframe.jpg",
    href: "/companies/gore/products?category=aviation",
  },
  {
    name: "Aircraft Sealants",
    items: ["SKYFLEX® Sealants", "Aerospace Potting Compounds", "Protective Coatings", "Environmental Sealing"],
    color: "border-amber-200 bg-amber-50",
    dot: "bg-amber-600",
    image: "/products/gore/seal-skyflex-defense.jpg",
    href: "/companies/gore/products?category=sealants",
  },
  {
    name: "Vents & Filtration",
    items: ["Automotive & Aerospace Vents", "Protective Vent Membranes", "Moisture Management", "Contamination Prevention"],
    color: "border-green-200 bg-green-50",
    dot: "bg-green-500",
    image: "/products/gore/vent-pe-pressure.jpg",
    href: "/companies/gore/products?category=vents",
  },
];

const INDUSTRIES = [
  "Aerospace & Defense",
  "Medical Devices",
  "Semiconductor",
  "Industrial Manufacturing",
  "Telecommunications",
  "Energy",
  "Electronics",
  "Pharmaceutical",
];

function GoreContent({ locale }: { locale: string }) {
  const isRtl = locale === "he";

  return (
    <>
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
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            All Companies
          </Link>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Image
                  src="/logos/gore.svg"
                  alt="Gore Logo"
                  width={200}
                  height={120}
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
            {/* Content Section */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Authorized Israeli Representative</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                W.L. Gore & Associates
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl">
                Pushing the boundaries of what&apos;s possible through advanced materials science.
              </p>
            </div>
          </div>
          <a
            href="https://www.gore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors cursor-pointer"
          >
            gore.com
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* About */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <FadeUp>
              <div>
                <h2 className="text-2xl font-bold text-[#1a202c] mb-4">About W.L. Gore</h2>
                <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  W.L. Gore & Associates is a uniquely innovative company that has been solving complex technical challenges for over 60 years. Founded in 1958, Gore is best known for GORE-TEX® fabric, but its materials science expertise extends far beyond apparel into critical medical devices, aerospace, electronics, and industrial applications.
                </p>
                <p className="text-[#4a5568] leading-relaxed">
                  Gore&apos;s products are built on ePTFE (expanded polytetrafluoroethylene) technology and other advanced polymers, delivering performance that is simply not achievable with conventional materials. From life-saving vascular grafts to high-frequency signal cables that perform in extreme environments, Gore&apos;s solutions are chosen by the world&apos;s most demanding industries.
                </p>
              </div>
            </FadeUp>

            {/* Products */}
            <FadeUp delay={0.1}>
              <div>
                <h2 className="text-2xl font-bold text-[#1a202c] mb-6">Product Lines</h2>
                <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {PRODUCT_LINES.map(({ name, items, color, dot, image, href }) => (
                    <StaggerCard key={name}>
                      <Link
                        href={href}
                        className={`border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer block h-full flex flex-col ${color}`}
                      >
                        {/* Product Image */}
                        <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-blue-200 to-blue-100">
                          <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                            sizes="300px"
                          />
                        </div>
                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 mb-4">
                            <div className={`w-2 h-2 rounded-full ${dot}`} />
                            <h3 className="font-bold text-[#1a202c] text-base">{name}</h3>
                          </div>
                          <ul className="space-y-2 flex-1 mb-4">
                            {items.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#CC1C1C] mt-0.5 shrink-0" />
                                <span className="text-sm text-[#334155]">{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center gap-2 text-[#CC1C1C] font-semibold text-sm group-hover:gap-3 transition-all">
                            View Products
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </Link>
                    </StaggerCard>
                  ))}
                </StaggerGrid>
              </div>
            </FadeUp>

            {/* View all products CTA */}
            <FadeUp delay={0.2}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Package className="w-4 h-4 text-blue-600" />
                    <h3 className="font-bold text-[#1a202c] text-sm">Full Product Catalog</h3>
                  </div>
                  <p className="text-xs text-[#4a5568]">
                    Browse all Gore products we represent — cables & assemblies, SKYFLEX® sealant, and ePTFE vents — with industry filters.
                  </p>
                </div>
                <Link
                  href="/companies/gore/products"
                  className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer text-sm shrink-0"
                >
                  View All Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick facts */}
            <FadeUp delay={0.05}>
              <div className="bg-[#0F172A] rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">W.L. Gore & Associates</div>
                    <div className="text-slate-400 text-xs">Founded 1958 · USA</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Headquarters</div>
                    <div className="text-slate-300">Newark, Delaware, USA</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Core Technology</div>
                    <div className="text-slate-300">ePTFE & Advanced Polymers</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Israeli Rep</div>
                    <div className="text-slate-300">RSTECH Electronics Ltd</div>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <a
                    href="https://www.gore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    Visit gore.com
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Industries */}
            <FadeUp delay={0.1}>
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A8A99] mb-4">Industries Served</h3>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRIES.map((ind) => (
                    <span key={ind} className="text-xs font-medium text-[#334155] bg-[#f0f4f8] border border-[#e2e8f0] px-2.5 py-1 rounded-full">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* CTA */}
            <FadeUp delay={0.15}>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 className="font-bold text-[#1a202c] mb-2 text-sm">Interested in Gore products?</h3>
                <p className="text-sm text-[#4a5568] mb-4 leading-relaxed">
                  Contact our team for pricing, availability, and technical consultation.
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
          </div>
        </div>
      </div>
    </>
  );
}
