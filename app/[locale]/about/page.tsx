import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp, StaggerGrid, StaggerCard } from "@/components/ui/AnimatedSections";
import {
  ShieldCheck,
  MapPin,
  Wrench,
  Package,
  ArrowRight,
  CheckCircle2,
  Microscope,
  Cpu,
  Shield,
  Factory,
  Radio,
  Gauge,
  Building2,
} from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "About RSTECH Electronics — Authorized Israeli Technology Representative",
    description:
      "RSTECH Electronics Ltd is the authorized Israeli representative of W.L. Gore, Tsubaki Kabelschlepp, and JAE. Local technical support and Hebrew-language service.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/about`,
      languages: { en: "https://www.rstech.co.il/en/about", he: "https://www.rstech.co.il/he/about", "x-default": "https://www.rstech.co.il/en/about" },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  microscope: Microscope,
  cpu: Cpu,
  shield: Shield,
  factory: Factory,
  radio: Radio,
  gauge: Gauge,
};

const COMPANIES = [
  { name: "W.L. Gore & Associates", href: "/companies/gore", dot: "bg-blue-500", desc: "Materials science & fluoropolymer solutions" },
  { name: "Tsubaki Kabelschlepp", href: "/companies/tsubaki", dot: "bg-orange-500", desc: "Energy chains & cable management" },
  { name: "JAE — Japan Aviation Electronics", href: "/companies/jae", dot: "bg-slate-500", desc: "High-precision connectors" },
];

function AboutContent() {
  const t = useTranslations("about");
  const whyItems = t.raw("why") as string[];
  const industries = t.raw("industries") as { name: string; icon: string }[];

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
            <span>{t("badge")}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-slate-400 text-lg max-w-2xl">{t("subtitle")}</p>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Who we are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUp>
            <div>
              <h2 className="text-2xl font-bold text-[#1a202c] mb-4">Who We Are</h2>
              <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
              <p className="text-[#4a5568] leading-relaxed mb-4">{t("body1")}</p>
              <p className="text-[#4a5568] leading-relaxed mb-8">{t("body2")}</p>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6">
                <h3 className="font-bold text-[#1a202c] mb-3 text-sm uppercase tracking-wider">{t("mission")}</h3>
                <p className="text-[#4a5568] text-sm leading-relaxed italic">&ldquo;{t("missionBody")}&rdquo;</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div>
              <h2 className="text-2xl font-bold text-[#1a202c] mb-4">Why Choose RSTECH?</h2>
              <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
              <ul className="space-y-3">
                {whyItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#CC1C1C] mt-0.5 shrink-0" />
                    <span className="text-[#4a5568]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* Industries */}
        <FadeUp>
          <div>
            <h2 className="text-2xl font-bold text-[#1a202c] mb-2">{t("industriesTitle")}</h2>
            <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-8" />
            <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map(({ name, icon }: { name: string; icon: string }) => {
                const Icon = INDUSTRY_ICONS[icon] ?? Building2;
                return (
                  <StaggerCard key={name}>
                    <div className="bg-white border border-[#e2e8f0] rounded-xl p-4 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-5 h-5 text-[#CC1C1C]" />
                      </div>
                      <p className="text-xs font-semibold text-[#334155] leading-snug">{name}</p>
                    </div>
                  </StaggerCard>
                );
              })}
            </StaggerGrid>
          </div>
        </FadeUp>

        {/* Partners */}
        <FadeUp>
          <div>
            <h2 className="text-2xl font-bold text-[#1a202c] mb-2">{t("partnersTitle")}</h2>
            <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-8" />
            <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPANIES.map(({ name, href, dot, desc }) => (
                <StaggerCard key={name}>
                  <Link
                    href={href}
                    className="group bg-white border border-[#e2e8f0] rounded-xl p-6 hover:shadow-md hover:border-[#CC1C1C]/30 transition-all duration-200 cursor-pointer block"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2.5 h-2.5 rounded-full ${dot}`} />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#7A8A99]">Official Partner</span>
                    </div>
                    <h3 className="font-bold text-[#1a202c] mb-1 group-hover:text-[#CC1C1C] transition-colors">{name}</h3>
                    <p className="text-sm text-[#7A8A99]">{desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm text-[#CC1C1C] font-semibold group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </StaggerCard>
              ))}
            </StaggerGrid>
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp>
          <div className="bg-[#0F172A] rounded-2xl p-10 text-center border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-3">{t("ctaTitle")}</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">{t("ctaBody")}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-10 py-3.5 rounded-lg hover:bg-[#A01515] transition-colors duration-200 cursor-pointer shadow-lg"
            >
              {t("ctaButton")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
