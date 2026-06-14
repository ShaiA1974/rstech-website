import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ArrowRight, BookOpen, Zap, Lightbulb } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp, StaggerGrid, StaggerCard } from "@/components/ui/AnimatedSections";
import { articles } from "@/data/articles";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isHe = locale === "he";
  return {
    title: isHe
      ? "בסיס ידע — כבלי צנרה, מחברים וסלקציה | RSTECH"
      : "Knowledge Base — Cable Carriers, Connectors & Selection | RSTECH",
    description: isHe
      ? "מדריכים טכניים על בחירת נושאי כבלים, מחברים דיוק וחיבורים תעשייתיים. נכתב על ידי RSTECH אלקטרוניקה — נציג Tsubaki Kabelschlepp, W.L. Gore ו-JAE בישראל."
      : "Technical guides on cable carrier selection, precision connectors, and industrial interconnects. Written for engineers by RSTECH Electronics — authorized representative of Tsubaki Kabelschlepp, W.L. Gore, and JAE in Israel.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/knowledge-base`,
      languages: {
        en: "https://rstech.co.il/en/knowledge-base",
        he: "https://rstech.co.il/he/knowledge-base",
        "x-default": "https://rstech.co.il/en/knowledge-base",
      },
    },
    openGraph: {
      title: isHe ? "בסיס ידע" : "Knowledge Base",
      description: isHe
        ? "מדריכים טכניים על בחירת נושאי כבלים ומחברים"
        : "Technical guides on cable carriers and industrial interconnects",
      url: `https://rstech.co.il/${locale}/knowledge-base`,
      type: "website",
    },
  };
}

export default async function KnowledgeBasePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <KnowledgeBaseContent locale={locale} />
      </main>
      <Footer />
    </>
  );
}

const CATEGORY_ICON = {
  "cable-carriers": Zap,
  "connectors": Lightbulb,
  "industrial-selection": BookOpen,
} as const;

const CATEGORY_COLORS = {
  "cable-carriers": "bg-orange-50 text-orange-700 border-orange-200",
  "connectors": "bg-blue-50 text-blue-700 border-blue-200",
  "industrial-selection": "bg-purple-50 text-purple-700 border-purple-200",
} as const;

function KnowledgeBaseContent({ locale }: { locale: string }) {
  const isHe = locale === "he";

  const categoryLabel: Record<string, string> = {
    "cable-carriers": isHe ? "נושאי כבלים" : "Cable Carriers",
    "connectors": isHe ? "מחברים" : "Connectors",
    "industrial-selection": isHe ? "בחירה תעשייתית" : "Industrial Selection",
  };

  const groupedArticles = articles.reduce(
    (acc, article) => {
      if (!acc[article.category]) acc[article.category] = [];
      acc[article.category].push(article);
      return acc;
    },
    {} as Record<string, typeof articles>
  );

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
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#CC1C1C]/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-[#CC1C1C]/20 border border-[#CC1C1C]/40 text-red-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>{isHe ? "מדריכים טכניים לאנשי מקצוע" : "Technical guides for engineers"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {isHe ? "בסיס ידע תעשייתי" : "Industrial Knowledge Base"}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            {isHe
              ? "מדריכים טכניים מפורטים על בחירת נושאי כבלים, מחברים דיוק וחיבורים תעשייתיים — נכתבו על ידי RSTECH אלקטרוניקה, נציג Tsubaki Kabelschlepp, W.L. Gore ו-JAE בישראל."
              : "Detailed technical guides on cable carrier selection, precision connectors, and industrial interconnects — written by RSTECH Electronics, authorized representative of Tsubaki Kabelschlepp, W.L. Gore, and JAE in Israel."}
          </p>
        </div>
      </div>

      {/* Articles by category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {(Object.keys(groupedArticles) as Array<keyof typeof groupedArticles>).map((category) => {
          const Icon = CATEGORY_ICON[category];
          const colorClass = CATEGORY_COLORS[category];

          return (
            <div key={category} className="mb-16">
              <FadeUp>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-lg ${colorClass} border`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1a202c]">
                    {categoryLabel[category]}
                  </h2>
                </div>
              </FadeUp>

              <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groupedArticles[category].map((article) => (
                  <StaggerCard key={article.slug}>
                    <Link
                      href={`/knowledge-base/${article.slug}`}
                      className="group relative border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer block h-full flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                        {article.heroImageLocal ? (
                          <img
                            src={article.heroImageLocal}
                            alt={article.heroAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <img
                            src={`https://images.unsplash.com/photo-${article.heroImage}?w=600&q=80`}
                            alt={article.heroAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6 bg-white flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${colorClass}`}>
                            {categoryLabel[category]}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-[#1a202c] mb-2 group-hover:text-[#CC1C1C] transition-colors">
                          How to Choose the Right Cable Carrier for Your System
                        </h3>

                        <p className="text-sm text-[#4a5568] leading-relaxed mb-4 flex-1">
                          A complete engineering guide to selecting cable carriers based on number of cables, bending radius, travel length, and total cost of ownership with practical examples.
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div className="text-xs text-[#7A8A99]">
                            {new Date(article.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="inline-flex items-center gap-2 text-[#CC1C1C] font-semibold text-sm group-hover:gap-3 transition-all">
                            Read
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>

                        {article.relatedProducts.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-slate-100">
                            <div className="text-xs font-semibold text-[#7A8A99] uppercase tracking-wider mb-2">
                              Related Products
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {article.relatedProducts.map((product) => (
                                <span
                                  key={product}
                                  className="text-xs bg-slate-100 text-[#4a5568] px-2 py-1 rounded"
                                >
                                  {product}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  </StaggerCard>
                ))}
              </StaggerGrid>
            </div>
          );
        })}

        {/* Coming soon */}
        <FadeUp delay={0.2}>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 text-center mt-12">
            <h3 className="text-lg font-bold text-[#1a202c] mb-2">More Resources Coming Soon</h3>
            <p className="text-[#4a5568] mb-4">
              {isHe
                ? "אנחנו מפרסמים מדריכים טכניים רגילים על מחברים, צנרה, ופתרונות אוטומציה תעשייתית."
                : "We're publishing regular technical guides on connectors, tubing, and industrial automation solutions."}
            </p>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
