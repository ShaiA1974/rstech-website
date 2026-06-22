import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroAnimate, FadeUp, StaggerGrid, StaggerCard } from "@/components/ui/AnimatedSections";
import {
  ShieldCheck,
  MapPin,
  Wrench,
  Package,
  ArrowRight,
  Globe,
} from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Authorized Technology Representative in Israel — W.L. Gore, Tsubaki Kabelschlepp, JAE",
    description:
      "RSTECH Electronics Ltd is the authorized Israeli representative of W.L. Gore, Tsubaki Kabelschlepp, and JAE — bringing world-class technology to Israeli industries.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}`,
      languages: { en: "https://www.rstech.co.il/en", he: "https://www.rstech.co.il/he", "x-default": "https://www.rstech.co.il/en" },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <HeroSection />
        <IndustriesStrip />
        <CompaniesSection />
        <WhySection />
        <AboutSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative bg-[#0F172A] overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Red glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#CC1C1C]/15 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#CC1C1C]/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

      {/* Background image */}
      <div className="absolute inset-0 right-0 opacity-40 pointer-events-none overflow-hidden">
        <Image
          src="/products/HomePage/RSTECH HomePage.png"
          alt="RSTECH Hero Background"
          fill
          className="object-cover object-right"
          priority
          quality={85}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroAnimate>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#CC1C1C]/20 border border-[#CC1C1C]/40 text-red-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{t("badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl leading-relaxed">
              {t("subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/companies"
                className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#A01515] transition-colors duration-200 shadow-lg cursor-pointer"
              >
                {t("ctaCompanies")}
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 hover:border-white/60 transition-colors duration-200 cursor-pointer"
              >
                {t("ctaContact")}
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              <TrustStat icon={Globe} label={t("stat1Label")} value={t("stat1Value")} />
              <TrustStat icon={MapPin} label={t("stat2Label")} value={t("stat2Value")} />
              <TrustStat icon={Package} label={t("stat3Label")} value={t("stat3Value")} />
              <TrustStat icon={ShieldCheck} label={t("stat4Label")} value={t("stat4Value")} />
            </div>
          </div>
        </HeroAnimate>
      </div>
    </section>
  );
}

function TrustStat({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="bg-white/5 rounded-xl p-4">
      <Icon className="w-5 h-5 text-red-400 mb-2" />
      <div className="text-white text-sm font-semibold">{value}</div>
      <div className="text-slate-400 text-xs mt-0.5">{label}</div>
    </div>
  );
}

function IndustriesStrip() {
  const t = useTranslations("home.industries");

  const industries = [
    t("medical"),
    t("semiconductor"),
    t("defense"),
    t("industrial"),
    t("telecom"),
    t("test"),
  ] as const;

  return (
    <section className="bg-white border-b border-[#e2e8f0] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 justify-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7A8A99] me-2">
            {t("label")}
          </span>
          {industries.map((industry) => (
            <span
              key={industry}
              className="text-xs font-medium text-[#334155] bg-[#f0f4f8] border border-[#e2e8f0] px-3 py-1.5 rounded-full"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const COMPANIES = [
  {
    key: "gore",
    href: "/companies/gore",
    logo: "/logos/gore.svg",
    name: "W.L. Gore & Associates",
    tagline: "Advanced materials science & fluoropolymer solutions",
    tags: [
      { name: "Cables & Interconnects", image: "/products/gore/cables-data.jpg" },
      { name: "Medical", image: "/products/gore/data-fiber-optic.jpg" },
      { name: "Filtration", image: "/products/gore/seal-skyflex.jpg" },
      { name: "Sealants", image: "/products/gore/seal-skyflex.jpg" },
    ],
    accent: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    dot: "bg-blue-500",
    topBorder: "border-t-4 border-t-blue-600",
    tagBg: "bg-blue-50",
    tagBorder: "border-blue-200",
    tagText: "text-blue-700",
    ctaColor: "text-blue-600 group-hover:text-blue-700",
    headerBg: "bg-blue-50/60",
  },
  {
    key: "tsubaki",
    href: "/companies/tsubaki",
    logo: "/logos/tsubaki.svg",
    name: "Tsubaki Kabelschlepp",
    tagline: "Energy chains & cable management systems",
    tags: [
      { name: "Energy Chains", image: "/images/cables/control-200.jpg" },
      { name: "Cable Carriers", image: "/products/tsubaki/carriers/cc-mono.jpg" },
      { name: "Triflex®", image: "/products/tsubaki/carriers/cc-quantum.jpg" },
      { name: "Automation", image: "/images/cables/profibus-700c.jpg" },
    ],
    accent: "from-orange-50 to-orange-100",
    border: "border-orange-200",
    dot: "bg-orange-500",
    topBorder: "border-t-4 border-t-orange-600",
    tagBg: "bg-orange-50",
    tagBorder: "border-orange-200",
    tagText: "text-orange-700",
    ctaColor: "text-orange-600 group-hover:text-orange-700",
    headerBg: "bg-orange-50/60",
  },
  {
    key: "jae",
    href: "/companies/jae",
    logo: "/logos/jae.svg",
    name: "JAE — Japan Aviation Electronics",
    tagline: "High-precision connectors & electronic components",
    tags: [
      { name: "Board-to-Board", image: "/products/jae/jae-mx80.jpg" },
      { name: "FPC Connectors", image: "/products/jae/jae-fr02.jpg" },
      { name: "Circular", image: "/products/jae/jae-wp7.jpg" },
      { name: "Coaxial", image: "/products/jae/jae-st12.jpg" },
    ],
    accent: "from-slate-50 to-slate-100",
    border: "border-slate-200",
    dot: "bg-slate-500",
    topBorder: "border-t-4 border-t-slate-700",
    tagBg: "bg-slate-50",
    tagBorder: "border-slate-200",
    tagText: "text-slate-700",
    ctaColor: "text-slate-600 group-hover:text-slate-700",
    headerBg: "bg-slate-50/60",
  },
];

function CompaniesSection() {
  const t = useTranslations("home.companies");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a202c]">{t("title")}</h2>
          <p className="text-[#7A8A99] mt-4 max-w-2xl mx-auto text-lg">{t("subtitle")}</p>
          <div className="mt-6 h-1 w-20 bg-[#CC1C1C] mx-auto rounded-full" />
        </FadeUp>
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANIES.map(({ key, href, logo, name, tagline, tags, accent, border, dot, topBorder, tagBg, tagBorder, tagText, ctaColor, headerBg }) => (
            <StaggerCard key={key}>
              <Link
                href={href}
                className={`group bg-gradient-to-br ${accent} border ${border} ${topBorder} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block h-full flex flex-col`}
              >
                {/* Header with logo */}
                <div className={`${headerBg} px-8 pt-6 pb-4 border-b ${border}`}>
                  <div className="h-12 flex items-center">
                    <Image src={logo} alt={name} width={160} height={48} className="h-10 w-auto object-contain" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#1a202c] mb-2 group-hover:text-[#CC1C1C] transition-colors leading-snug">
                    {name}
                  </h3>
                  <p className="text-sm text-[#4a5568] leading-relaxed mb-6 flex-1">{tagline}</p>

                  {/* Product Category Images */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {tags.map((tag) => (
                      <div
                        key={tag.name}
                        className="relative rounded-lg overflow-hidden border border-white/30 h-20 group/image hover:border-white/60 transition-all duration-200"
                        title={tag.name}
                      >
                        <Image
                          src={tag.image}
                          alt={tag.name}
                          fill
                          className="object-cover group-hover/image:scale-110 transition-transform duration-300"
                          sizes="100px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-end p-2">
                          <span className="text-white text-xs font-semibold leading-tight">{tag.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <span className={`inline-flex items-center gap-2 font-semibold text-sm ${ctaColor} group-hover:gap-3 transition-all duration-200`}>
                    {t("learnMore")}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </StaggerCard>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

function WhySection() {
  const t = useTranslations("home.why");

  const items: { key: string; icon: LucideIcon; accentBg: string; accentColor: string }[] = [
    { key: "local", icon: MapPin, accentBg: "bg-red-50", accentColor: "text-red-600" },
    { key: "authorized", icon: ShieldCheck, accentBg: "bg-green-50", accentColor: "text-green-600" },
    { key: "expertise", icon: Wrench, accentBg: "bg-orange-50", accentColor: "text-orange-600" },
    { key: "range", icon: Package, accentBg: "bg-blue-50", accentColor: "text-blue-600" },
  ];

  return (
    <section className="py-20 bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a202c]">{t("title")}</h2>
          <div className="mt-3 h-1 w-16 bg-[#CC1C1C] mx-auto rounded-full" />
        </FadeUp>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ key, icon: Icon, accentBg, accentColor }) => (
            <StaggerCard key={key}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className={`w-11 h-11 ${accentBg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${accentColor}`} />
                </div>
                <h3 className="font-semibold text-[#1a202c] mb-2">{t(key)}</h3>
                <p className="text-sm text-[#4a5568] leading-relaxed">{t(`${key}Desc`)}</p>
              </div>
            </StaggerCard>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

function AboutSection() {
  const t = useTranslations("home");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div>
              <h2 className="text-3xl font-bold text-[#1a202c] mb-4">{t("about.title")}</h2>
              <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
              <p className="text-[#4a5568] leading-relaxed mb-6">{t("about.body")}</p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-[#CC1C1C] font-semibold hover:gap-2.5 transition-all duration-200 cursor-pointer"
              >
                {t("about.learnMore")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="bg-[#0F172A] rounded-2xl p-8 border border-slate-700">
              <div className="space-y-4">
                {COMPANIES.map(({ name, dot }) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${dot} shrink-0`} />
                    <span className="text-white font-medium text-sm">{name}</span>
                  </div>
                ))}
              </div>
              <div className="h-px bg-white/10 my-6" />
              <div className="inline-flex items-center gap-2 text-red-300 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                Authorized Israeli Representative
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  const t = useTranslations("nav");

  return (
    <section className="bg-[#0F172A] py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-red-300 text-sm font-medium mb-4">
          <Globe className="w-4 h-4" />
          <span>Local Israeli team · Fast response · Technical consultation</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Ready to find the right product?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Contact our team for technical consultation, custom specifications, or pricing.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-10 py-4 rounded-lg hover:bg-[#A01515] transition-colors duration-200 text-lg cursor-pointer shadow-lg"
        >
          {t("contact")}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
