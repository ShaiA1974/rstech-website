import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/ui/AnimatedSections";
import { Mail, Phone, Check } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Privacy Policy — RSTECH Electronics",
    description: "RSTECH Electronics privacy policy. Learn how we protect your personal data and your rights under Israeli and GDPR regulations.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/privacy`,
      languages: { en: "https://rstech.co.il/en/privacy", he: "https://rstech.co.il/he/privacy", "x-default": "https://rstech.co.il/en/privacy" },
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isRtl = locale === "he";

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <PrivacyContent locale={locale} isRtl={isRtl} />
      </main>
      <Footer />
    </>
  );
}

function PrivacyContent({ locale, isRtl }: { locale: string; isRtl: boolean }) {
  const t = useTranslations("privacy");

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#0F172A] overflow-hidden py-16">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("title")}</h1>
              <p className="text-slate-300 text-lg max-w-2xl mb-6">{t("subtitle")}</p>
              <p className="text-slate-400 text-sm">{t("lastUpdated")}</p>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeUp>
          <Section title={t("whoWeAre")}>
            <p className="text-[#4a5568] leading-relaxed">{t("whoWeAreText")}</p>
          </Section>
        </FadeUp>

        <FadeUp delay={0.05}>
          <Section title={t("whatWeCollect")}>
            <p className="text-[#4a5568] leading-relaxed mb-4">{t("whatWeCollectText")}</p>
            <ul className="space-y-2">
              {t.raw("collectList").map((item: string) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#CC1C1C] mt-0.5 shrink-0" />
                  <span className="text-[#4a5568]">{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        </FadeUp>

        <FadeUp delay={0.1}>
          <Section title={t("howWeUse")}>
            <p className="text-[#4a5568] leading-relaxed mb-4">{t("howWeUseText")}</p>
            <ul className="space-y-2">
              {t.raw("useList").map((item: string) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#CC1C1C] mt-0.5 shrink-0" />
                  <span className="text-[#4a5568]">{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        </FadeUp>

        <FadeUp delay={0.15}>
          <Section title={t("dataSharing")}>
            <p className="text-[#4a5568] leading-relaxed">{t("dataSharingText")}</p>
          </Section>
        </FadeUp>

        <FadeUp delay={0.2}>
          <Section title={t("dataRetention")}>
            <p className="text-[#4a5568] leading-relaxed">{t("dataRetentionText")}</p>
          </Section>
        </FadeUp>

        <FadeUp delay={0.25}>
          <Section title={t("cookies")}>
            <p className="text-[#4a5568] leading-relaxed">{t("cookiesText")}</p>
          </Section>
        </FadeUp>

        <FadeUp delay={0.3}>
          <Section title={t("yourRights")}>
            <p className="text-[#4a5568] leading-relaxed mb-4">{t("yourRightsText")}</p>
            <ul className="space-y-2">
              {t.raw("rightsList").map((item: string) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#CC1C1C] mt-0.5 shrink-0" />
                  <span className="text-[#4a5568]">{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        </FadeUp>

        <FadeUp delay={0.35}>
          <Section title={t("privacyContact")}>
            <p className="text-[#4a5568] leading-relaxed mb-6">{t("privacyContactText")}</p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#CC1C1C]" />
                <a href="mailto:info@rstech.co.il" className="text-[#CC1C1C] hover:text-[#A01515] font-medium">
                  {t("privacyEmail")}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#CC1C1C]" />
                <span className="text-[#4a5568] font-medium">{t("privacyPhone")}</span>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-[#4a5568] leading-relaxed text-sm">{t("responseTime")}</p>
            </div>
          </Section>
        </FadeUp>

        {/* Accessibility Section */}
        <div className="mt-20 pt-12 border-t border-[#e2e8f0]">
          <AccessibilitySection locale={locale} isRtl={isRtl} />
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12 scroll-mt-20" id={title.toLowerCase().replace(/\s+/g, "-")}>
      <h2 className="text-2xl font-bold text-[#1a202c] mb-4">{title}</h2>
      <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
      {children}
    </div>
  );
}

function AccessibilitySection({ locale, isRtl }: { locale: string; isRtl: boolean }) {
  const t = useTranslations("accessibility");

  return (
    <>
      <FadeUp>
        <Section title={t("title")}>
          <p className="text-[#4a5568] leading-relaxed">{t("subtitle")}</p>
        </Section>
      </FadeUp>

      <FadeUp delay={0.05}>
        <Section title={t("commitment")}>
          <p className="text-[#4a5568] leading-relaxed">{t("commitmentText")}</p>
        </Section>
      </FadeUp>

      <FadeUp delay={0.1}>
        <Section title={t("features")}>
          <ul className="space-y-2">
            {t.raw("featuresList").map((item: string) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#CC1C1C] mt-0.5 shrink-0" />
                <span className="text-[#4a5568]">{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      </FadeUp>

      <FadeUp delay={0.15}>
        <Section title={t("continuous")}>
          <p className="text-[#4a5568] leading-relaxed mb-6">{t("continuousText")}</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-bold text-[#1a202c] mb-3">{t("feedbackTitle")}</h3>
            <p className="text-[#4a5568] text-sm leading-relaxed mb-4">{t("feedbackText")}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#CC1C1C]" />
                <a href="mailto:info@rstech.co.il" className="text-[#CC1C1C] hover:text-[#A01515] text-sm font-medium">
                  {t("feedbackEmail")}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#CC1C1C]" />
                <span className="text-[#4a5568] text-sm font-medium">{t("feedbackPhone")}</span>
              </div>
            </div>
            <p className="text-[#4a5568] text-xs mt-4">{t("feedbackResponse")}</p>
          </div>
        </Section>
      </FadeUp>
    </>
  );
}
