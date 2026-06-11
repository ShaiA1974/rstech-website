import type { Metadata } from "next";
import Image from "next/image";
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
    title: "JAE — Japan Aviation Electronics | Authorized Representative in Israel",
    description:
      "RSTECH Electronics is the authorized Israeli representative of JAE (Japan Aviation Electronics Industry) — high-precision connectors for aerospace, automotive, and industrial applications.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/jae`,
      languages: { en: "https://rstech.co.il/en/companies/jae", he: "https://rstech.co.il/he/companies/jae", "x-default": "https://rstech.co.il/en/companies/jae" },
    },
  };
}

export default async function JaePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <JaeContent locale={locale} />
      </main>
      <Footer />
    </>
  );
}

const PRODUCT_LINES = [
  {
    name: "Board-to-Board Connectors",
    items: ["0.4mm Pitch", "0.5mm Pitch", "1.0mm Pitch", "High-Speed Signal"],
    color: "border-slate-200 bg-slate-50",
    dot: "bg-slate-500",
    image: "/products/jae/jae-mx80.jpg",
    href: "/companies/jae/products?category=board-to-board",
  },
  {
    name: "FPC / FFC Connectors",
    items: ["Bottom Contact", "Top Contact", "Dual Contact", "ZIF & Non-ZIF"],
    color: "border-blue-200 bg-blue-50",
    dot: "bg-blue-500",
    image: "/products/jae/jae-fr02.jpg",
    href: "/companies/jae/products?category=fpc-connectors",
  },
  {
    name: "Wire-to-Board",
    items: ["Crimp Connectors", "IDC Connectors", "Waterproof Series", "High-Current"],
    color: "border-indigo-200 bg-indigo-50",
    dot: "bg-indigo-500",
    image: "/products/jae/jae-st1.jpg",
    href: "/companies/jae/products?category=wire-to-board",
  },
  {
    name: "Circular & Coaxial",
    items: ["MIL-Spec Circular", "D-Sub Connectors", "RF/Coaxial", "High-Density Circular"],
    color: "border-violet-200 bg-violet-50",
    dot: "bg-violet-500",
    image: "/products/jae/jae-wp7.jpg",
    href: "/companies/jae/products?category=circular-coaxial",
  },
];

const INDUSTRIES = [
  "Aerospace",
  "Automotive",
  "Consumer Electronics",
  "Industrial Automation",
  "Medical Devices",
  "Telecommunications",
  "Defense",
  "Test & Measurement",
];

function JaeContent({ locale }: { locale: string }) {
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
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
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
                  src="/logos/jae.svg"
                  alt="JAE Logo"
                  width={200}
                  height={120}
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
            {/* Content Section */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-slate-500/20 border border-slate-500/40 text-slate-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Authorized Israeli Representative</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                JAE — Japan Aviation Electronics
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl">
                Connecting the world with precision — high-reliability connectors for critical applications.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/companies/jae/products"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer text-sm"
            >
              <Package className="w-4 h-4" />
              Browse Products
            </Link>
            <a
              href="https://www.jae.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              jae.com
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <FadeUp>
              <div>
                <h2 className="text-2xl font-bold text-[#1a202c] mb-4">About JAE</h2>
                <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Japan Aviation Electronics Industry, Ltd. (JAE) is a leading Japanese manufacturer of high-precision connectors and electronic components, founded in 1953 as a joint venture with ITT Corporation. Originally focused on aviation electronics, JAE has grown into a global supplier serving a diverse range of high-reliability markets.
                </p>
                <p className="text-[#4a5568] leading-relaxed">
                  JAE&apos;s connectors are trusted in the most demanding environments — from cockpit avionics to automotive control systems, from smartphone internals to semiconductor test equipment. The company&apos;s strength lies in miniaturization, signal integrity, and mechanical reliability, making JAE connectors the choice for engineers who cannot afford failure.
                </p>
              </div>
            </FadeUp>

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
                        <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <FadeUp delay={0.05}>
              <div className="bg-[#0F172A] rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 bg-slate-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-slate-300" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Japan Aviation Electronics</div>
                    <div className="text-slate-400 text-xs">Founded 1953 · Japan</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Headquarters</div>
                    <div className="text-slate-300">Tokyo, Japan</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Core Technology</div>
                    <div className="text-slate-300">High-Precision Connectors</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Israeli Rep</div>
                    <div className="text-slate-300">RSTECH Electronics Ltd</div>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <a
                    href="https://www.jae.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-300 font-semibold text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    Visit jae.com
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </FadeUp>

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

            <FadeUp delay={0.15}>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 className="font-bold text-[#1a202c] mb-2 text-sm">Looking for JAE connectors?</h3>
                <p className="text-sm text-[#4a5568] mb-4 leading-relaxed">
                  Contact our team for part numbers, pricing, and technical support.
                </p>
                <Link
                  href="/contact?product=JAE Connectors"
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
