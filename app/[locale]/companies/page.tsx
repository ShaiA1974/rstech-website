import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp, StaggerGrid, StaggerCard } from "@/components/ui/AnimatedSections";
import { ArrowRight, Building2, ExternalLink } from "lucide-react";

const COMPANY_CONFIG = [
  {
    key: "gore",
    logo: "/logos/gore.svg",
    href: "/companies/gore",
    externalUrl: "https://www.gore.com",
    accent: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    dot: "bg-blue-500",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    backgroundImage: "/products/gore/cables-ethernet.jpg",
  },
  {
    key: "tsubaki",
    logo: "/logos/tsubaki.svg",
    href: "/companies/tsubaki",
    externalUrl: "https://www.kabelschlepp.com",
    accent: "from-orange-50 to-orange-100",
    border: "border-orange-200",
    dot: "bg-orange-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    backgroundImage: "/products/tsubaki/cc-robotrax.jpg",
  },
  {
    key: "jae",
    logo: "/logos/jae.svg",
    href: "/companies/jae",
    externalUrl: "https://www.jae.com/en",
    accent: "from-slate-50 to-slate-100",
    border: "border-slate-200",
    dot: "bg-slate-500",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    backgroundImage: "/products/jae/jae-fi.jpg",
  },
];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Our Principal Companies — W.L. Gore, Tsubaki Kabelschlepp, JAE",
    description:
      "RSTECH Electronics is the authorized Israeli representative of W.L. Gore, Tsubaki Kabelschlepp, and JAE — world-class technology partners for Israeli industries.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies`,
      languages: { en: "https://rstech.co.il/en/companies", he: "https://rstech.co.il/he/companies", "x-default": "https://rstech.co.il/en/companies" },
    },
  };
}

export default async function CompaniesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <CompaniesContent />
      </main>
      <Footer />
    </>
  );
}

function CompaniesContent() {
  const t = useTranslations();
  const companies = COMPANY_CONFIG.map((config) => ({
    ...config,
    name: t(`${config.key}.name`),
    description: t(`${config.key}.description`),
    industries: t(`${config.key}.industries`).split(", "),
    products: t(`${config.key}.products`).split(", "),
  }));

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
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#CC1C1C]/15 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-[#CC1C1C]/20 border border-[#CC1C1C]/40 text-red-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Building2 className="w-4 h-4 shrink-0" />
            <span>RSTECH Electronics</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("companies.title")}</h1>
          <p className="text-slate-400 text-lg max-w-2xl">{t("companies.subtitle")}</p>
        </div>
      </div>

      {/* Company cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StaggerGrid className="space-y-10">
          {companies.map(({ key, href, logo, externalUrl, name, description, industries, products, accent, border, dot, backgroundImage }) => (
            <StaggerCard key={key}>
              <div className={`relative border ${border} rounded-2xl p-8 lg:p-10 overflow-hidden`}>
                {backgroundImage && (
                  <>
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className="absolute inset-0 bg-black/55 rounded-2xl" />
                  </>
                )}
                {!backgroundImage && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${accent} rounded-2xl`} />
                )}

                {/* Content */}
                <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: info */}
                  <div className="lg:col-span-2">
                    <div className="h-10 mb-5">
                      <Image src={logo} alt={name} width={180} height={40} className="h-9 w-auto object-contain" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">{name}</h2>
                    <p className="text-gray-100 leading-relaxed mb-6">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {industries.map((ind) => (
                        <span
                          key={ind}
                          className="text-xs font-medium text-slate-900 bg-white/90 border border-white/50 px-2.5 py-1 rounded-full"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={href}
                        className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer text-sm"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-[#CC1C1C]/30 text-[#CC1C1C] font-semibold px-6 py-2.5 rounded-lg hover:bg-[#CC1C1C]/10 transition-colors cursor-pointer text-sm"
                      >
                        Visit Website
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right: products */}
                  <div className="bg-white/60 rounded-xl p-6 border border-white/80">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A8A99] mb-4">
                      Key Products
                    </h3>
                    <ul className="space-y-2">
                      {products.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${dot} mt-1.5 shrink-0`} />
                          <span className="text-sm text-[#334155]">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            </StaggerCard>
          ))}
        </StaggerGrid>
      </div>
    </>
  );
}
