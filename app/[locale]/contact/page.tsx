import type { Metadata } from "next";
import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Contact RSTECH Electronics — Technical Consultation & Pricing",
    description:
      "Contact RSTECH Electronics for pricing, availability, and technical consultation on W.L. Gore, Tsubaki Kabelschlepp, and JAE products. Local Israeli support in Hebrew and English.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/contact`,
      languages: { en: "https://rstech.co.il/en/contact", he: "https://rstech.co.il/he/contact", "x-default": "https://rstech.co.il/en/contact" },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}

function ContactPageContent() {
  const t = useTranslations("contact");

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
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>{t("badge")}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-slate-400 text-lg max-w-2xl">{t("subtitle")}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Form */}
          <div className="lg:col-span-2">
            <Suspense fallback={<div className="h-96" />}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact details */}
            <div className="bg-[#0F172A] rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
                <div className="w-10 h-10 bg-[#CC1C1C]/20 rounded-lg flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t("detailsTitle")}</div>
                  <div className="text-slate-400 text-xs">RSTECH Electronics Ltd.</div>
                </div>
              </div>
              <div className="space-y-5">
                <ContactDetail icon={Mail} label={t("emailLabel")} value="info@rstech.co.il" href="mailto:info@rstech.co.il" />
                <ContactDetail icon={Phone} label={t("phoneLabel")} value="03-6490-454" href="tel:+97236490454" />
                <ContactDetail icon={MapPin} label={t("addressLabel")} value={t("address")} />
              </div>
            </div>

            {/* Partners */}
            <div className="bg-[#0F172A] rounded-2xl p-6 border border-slate-700">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">Our Partners</div>
              {[
                { name: "W.L. Gore & Associates", url: "https://www.gore.com", color: "text-blue-400" },
                { name: "Tsubaki Kabelschlepp", url: "https://www.kabelschlepp.com", color: "text-orange-400" },
                { name: "JAE", url: "https://www.jae.com/en", color: "text-slate-300" },
              ].map(({ name, url, color }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between py-2 border-b border-white/5 last:border-0 hover:opacity-80 transition-opacity cursor-pointer`}
                >
                  <span className={`text-sm font-medium ${color}`}>{name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              ))}
            </div>

            {/* Trust note */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-[#CC1C1C] mt-0.5 shrink-0" />
                <p className="text-sm text-[#334155] leading-relaxed">{t("trustNote")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-[#CC1C1C]/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-4 h-4 text-red-400" />
      </div>
      <div>
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">{label}</div>
        {href ? (
          <a href={href} className="text-sm text-red-400 hover:text-red-300 font-medium transition-colors" suppressHydrationWarning>
            {value}
          </a>
        ) : (
          <div className="text-sm text-slate-300 font-medium">{value}</div>
        )}
      </div>
    </div>
  );
}
