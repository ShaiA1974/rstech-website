import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp, StaggerGrid, StaggerCard } from "@/components/ui/AnimatedSections";
import { ArrowRight, ArrowLeft, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Tsubaki Kabelschlepp — Authorized Representative in Israel",
    description:
      "RSTECH Electronics is the authorized Israeli representative of Tsubaki Kabelschlepp — energy chains, cable carriers, and cable management systems.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/tsubaki`,
      languages: { en: "https://rstech.co.il/en/companies/tsubaki", he: "https://rstech.co.il/he/companies/tsubaki", "x-default": "https://rstech.co.il/en/companies/tsubaki" },
    },
  };
}

export default async function TsubakiPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <TsubakiContent locale={locale} />
      </main>
      <Footer />
    </>
  );
}

const PRODUCT_LINES = [
  {
    name: "Cable Carriers",
    items: ["MONO & QuickTrax® Standard Series", "UNIFLEX Advanced & EasyTrax® Series", "QUANTUM® & TKR High-Performance", "ROBOTRAX® for Robotics", "CLEANVEYOR / FLATVEYOR for Cleanrooms", "S/SX Steel Heavy-Duty Carriers"],
    color: "border-orange-200 bg-orange-50",
    dot: "bg-orange-500",
    image: "/products/tsubaki/carriers/cc-mono.jpg",
    href: "/companies/tsubaki/cables",
  },
  {
    name: "TRAXLINE® Cables",
    items: ["Control & Signal Cables", "Power Cables (up to 1 kV)", "Data & BUS Cables (PROFIBUS, CAN, CAT.6)", "Fiber Optic Cables", "High Voltage Cables (to 12 kV)", "OEM / Servo Cables"],
    color: "border-amber-200 bg-amber-50",
    dot: "bg-amber-500",
    image: "/images/cables/control-200.jpg",
    href: "/companies/tsubaki/cables",
  },
  {
    name: "Conveyor Systems",
    items: ["Hinged Belt Conveyors", "Wave-Belt Conveyors", "Scraper Belt Conveyors", "Chip & Coolant Disposal Systems"],
    color: "border-yellow-200 bg-yellow-50",
    dot: "bg-yellow-600",
    image: "/products/tsubaki/conv-systems.jpg",
    href: "/companies/tsubaki/products?category=systems",
  },
  {
    name: "Machine & Guideway Protection",
    items: ["Telescopic Covers", "Protective Bellows", "Way Wiper Systems", "Apron & Spring Covers", "Machine Protection Systems"],
    color: "border-red-200 bg-red-50",
    dot: "bg-red-500",
    image: "/products/tsubaki/guide-telescopic.jpg",
    href: "/companies/tsubaki/products?category=systems",
  },
];

const INDUSTRIES = [
  "Machine Tools",
  "Automation",
  "Robotics",
  "Semiconductor",
  "Medical Equipment",
  "Crane & Gantry",
  "Stage & Entertainment",
  "Packaging",
];

function TsubakiContent({ locale }: { locale: string }) {
  const t = useTranslations();
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
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("nav.companies")}
          </Link>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Image
                  src="/logos/tsubaki.svg"
                  alt="Tsubaki Logo"
                  width={200}
                  height={120}
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
            {/* Content Section */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>{t("tsubaki.tagline")}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t("tsubaki.name")}
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl">
                {t("tsubaki.description")}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href="/companies/tsubaki/products"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer text-sm"
            >
              Browse Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://tsubaki-kabelschlepp.com/en-int/products/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 text-sm font-medium transition-colors cursor-pointer"
            >
              tsubaki-kabelschlepp.com
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
                <h2 className="text-2xl font-bold text-[#1a202c] mb-4">About Tsubaki Kabelschlepp</h2>
                <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Tsubaki Kabelschlepp GmbH is part of the global Tsubaki Group and is a world leader in energy guiding systems — commonly known as energy chains or drag chains. Headquartered in Wettenberg, Germany, the company has been developing innovative cable management solutions for over 60 years.
                </p>
                <p className="text-[#4a5568] leading-relaxed">
                  Their products are designed to safely guide, protect, and move cables, hoses, and other supply lines in dynamic applications. From compact plastic chains to heavy-duty steel variants, Tsubaki Kabelschlepp covers virtually every motion application in industrial machinery, robotics, semiconductor equipment, and medical devices.
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
                        <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-orange-200 to-orange-100">
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
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Tsubaki Kabelschlepp</div>
                    <div className="text-slate-400 text-xs">Part of Tsubaki Group · Germany</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Headquarters</div>
                    <div className="text-slate-300">Wettenberg, Germany</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Core Technology</div>
                    <div className="text-slate-300">Energy Chain Systems</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Israeli Rep</div>
                    <div className="text-slate-300">RSTECH Electronics Ltd</div>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <a
                    href="https://www.kabelschlepp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-orange-400 font-semibold text-sm hover:text-orange-300 transition-colors cursor-pointer"
                  >
                    Visit kabelschlepp.com
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
                <h3 className="font-bold text-[#1a202c] mb-2 text-sm">Need cable management solutions?</h3>
                <p className="text-sm text-[#4a5568] mb-4 leading-relaxed">
                  Contact our team for pricing, sizing, and technical consultation.
                </p>
                <Link
                  href="/contact?product=Tsubaki Kabelschlepp"
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
