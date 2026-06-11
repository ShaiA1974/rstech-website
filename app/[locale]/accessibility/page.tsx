import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, CheckCircle } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export default async function AccessibilityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      <AccessibilityContent locale={locale} />
      <Footer />
    </>
  );
}

function AccessibilityContent({ locale }: { locale: string }) {
  const t = useTranslations("accessibility");

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Commitment Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t("commitment")}
            </h2>
            <div className="h-1 w-16 bg-[#CC1C1C] rounded-full mb-6" />
            <p className="text-lg text-slate-700 leading-relaxed">
              {t("commitmentText")}
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-blue-900 font-medium">
              {t("complianceStatement")}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {t("features")}
          </h2>
          <div className="h-1 w-16 bg-[#CC1C1C] rounded-full mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(t.raw("featuresList") as string[]).map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-[#CC1C1C] flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accessibility Toolbar Section */}
        <section className="mb-16 bg-slate-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {t("toolbarTitle")}
          </h2>
          <p className="text-slate-700 mb-6">
            {t("toolbarIntro")}
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-[#CC1C1C]">•</span>
              <span>{t("toolbarFontSize")}</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-[#CC1C1C]">•</span>
              <span>{t("toolbarContrast")}</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-[#CC1C1C]">•</span>
              <span>{t("toolbarDisplay")}</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-[#CC1C1C]">•</span>
              <span>{t("toolbarNavigation")}</span>
            </li>
          </ul>
        </section>

        {/* Continuous Improvement Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {t("continuous")}
          </h2>
          <div className="h-1 w-16 bg-[#CC1C1C] rounded-full mb-6" />
          <p className="text-lg text-slate-700 leading-relaxed">
            {t("continuousText")}
          </p>
        </section>

        {/* Known Limitations Section */}
        <section className="mb-16 bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-lg">
          <h3 className="text-2xl font-bold text-orange-900 mb-4">{t("knownLimitations")}</h3>
          <p className="text-orange-800 mb-4">
            {t("knownLimitationsIntro")}
          </p>
          <ul className="space-y-2 text-orange-800">
            <li className="flex gap-3">
              <span>•</span>
              <span>{t("limitationThirdParty")}</span>
            </li>
            <li className="flex gap-3">
              <span>•</span>
              <span>{t("limitationPDF")}</span>
            </li>
            <li className="flex gap-3">
              <span>•</span>
              <span>{t("limitationLegacy")}</span>
            </li>
          </ul>
          <p className="text-orange-800 mt-4">
            {t("limitationContact")}
          </p>
        </section>

        {/* Feedback & Contact Section */}
        <section className="bg-gradient-to-br from-[#0F172A] to-slate-800 text-white p-8 sm:p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">{t("feedbackTitle")}</h2>
          <p className="text-slate-300 mb-8 text-lg leading-relaxed">
            {t("feedbackText")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href={`mailto:${t("feedbackEmail")}`}
              className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Mail className="w-8 h-8 text-[#CC1C1C] flex-shrink-0" />
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-white font-semibold">{t("feedbackEmail")}</p>
              </div>
            </a>

            <a
              href={`tel:${t("feedbackPhone").replace(/-/g, "")}`}
              className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Phone className="w-8 h-8 text-[#CC1C1C] flex-shrink-0" />
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="text-white font-semibold">{t("feedbackPhone")}</p>
              </div>
            </a>
          </div>

          <p className="text-slate-400 italic border-t border-white/10 pt-6">
            {t("feedbackResponse")}
          </p>
        </section>
      </div>
    </main>
  );
}
