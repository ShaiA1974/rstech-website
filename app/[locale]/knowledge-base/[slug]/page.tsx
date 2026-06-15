import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/ui/AnimatedSections";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { articles } from "@/data/articles";
import { getArticleContent } from "@/data/articleContent";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  const content = getArticleContent(locale);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${content.title} | RSTECH Knowledge Base`,
    description: content.description,
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/knowledge-base/${slug}`,
      languages: {
        en: `https://www.rstech.co.il/en/knowledge-base/${slug}`,
        he: `https://www.rstech.co.il/he/knowledge-base/${slug}`,
        "x-default": `https://www.rstech.co.il/en/knowledge-base/${slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://www.rstech.co.il/${locale}/knowledge-base/${slug}`,
      type: "article",
      images: [
        {
          url: `https://www.rstech.co.il${article.heroImageLocal || '/products/tsubaki/cc-robotrax.jpg'}`,
          width: 1200,
          height: 630,
          alt: article.heroAlt,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return articles.flatMap((article) => [
    {
      slug: article.slug,
      locale: "en",
    },
    {
      slug: article.slug,
      locale: "he",
    },
  ]);
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header locale={locale} />
        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-2xl font-bold text-[#1a202c] mb-4">Article Not Found</h1>
            <Link href="/knowledge-base" className="text-[#CC1C1C] font-semibold">
              Back to Knowledge Base
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <ArticleContent article={article} locale={locale} />
      </main>
      <Footer />
    </>
  );
}

function ArticleContent({
  article,
  locale,
}: {
  article: (typeof articles)[0];
  locale: string;
}) {
  const content = getArticleContent(locale);
  const isRtl = locale === "he";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title,
    "description": content.description,
    "image": `https://www.rstech.co.il${article.heroImageLocal || '/products/tsubaki/cc-robotrax.jpg'}`,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": "RSTECH Electronics"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RSTECH Electronics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.rstech.co.il/logo.svg"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Article Header */}
      <div className="relative bg-[#0F172A] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/knowledge-base"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors cursor-pointer"
          >
            {isRtl ? null : <ArrowLeft className="w-4 h-4" />}
            {content.backToKB}
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : null}
          </Link>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              {content.categoryLabel}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {content.title}
            </h1>
            <p className="text-slate-400 text-lg max-w-3xl">
              {content.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 border-t border-slate-700 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(article.date).toLocaleDateString(locale === "he" ? "he-IL" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <span className={isRtl ? "" : "ml-auto"}>{content.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeUp>
          <article className="prose prose-lg max-w-none">
            {content.sections.map((section, idx) => (
              <section key={section.id} className="mb-12">
                <h2 className="text-3xl font-bold text-[#1a202c] mb-6">{section.title}</h2>
                {section.content.map((para, pIdx) => (
                  <p key={pIdx} className="text-[#4a5568] leading-relaxed mb-4">
                    {para}
                  </p>
                ))}

                {section.box && (
                  <div className={`rounded-lg p-6 mb-6 border ${
                    section.box.type === "info" ? "bg-blue-50 border-blue-200" :
                    section.box.type === "warning" ? "bg-red-50 border-red-200" :
                    section.box.type === "success" ? "bg-green-50 border-green-200" :
                    "bg-orange-50 border-orange-200"
                  }`}>
                    {section.box.title && <h3 className="font-semibold text-[#1a202c] mb-4">{section.box.title}</h3>}
                    {section.box.items && (
                      <ul className="space-y-3 text-[#4a5568]">
                        {section.box.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex gap-3">
                            {item.includes(":") ? (
                              <>
                                <span className="font-semibold min-w-fit">{item.split(":")[0]}:</span>
                                <span>{item.split(":")[1]}</span>
                              </>
                            ) : (
                              <span>• {item}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.box.content && <p className="text-[#4a5568]">{section.box.content}</p>}
                  </div>
                )}

                {section.subsections && section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx} className="mb-10">
                    <h3 className="text-2xl font-bold text-[#1a202c] mb-4">{subsection.title}</h3>
                    {subsection.content && subsection.content.map((para, pIdx) => (
                      <p key={pIdx} className="text-[#4a5568] leading-relaxed mb-4">
                        {para}
                      </p>
                    ))}
                    {subsection.items && (
                      <ul className="space-y-2 text-[#4a5568] mb-6">
                        {subsection.items.map((item, iIdx) => (
                          <li key={iIdx}><strong>{item.split(" - ")[0]}</strong> - {item.split(" - ")[1] || ""}</li>
                        ))}
                      </ul>
                    )}
                    {subsection.box && (
                      <div className={`rounded-lg p-4 mb-6 border ${
                        subsection.box.type === "info" ? "bg-blue-50 border-blue-200" :
                        subsection.box.type === "warning" ? "bg-red-50 border-red-200" :
                        subsection.box.type === "success" ? "bg-green-50 border-green-200" :
                        "bg-orange-50 border-orange-200"
                      }`}>
                        {subsection.box.title && <h4 className="font-semibold text-[#1a202c] mb-2">{subsection.box.title}</h4>}
                        {subsection.box.items && (
                          <ul className="space-y-1 text-[#4a5568] text-sm">
                            {subsection.box.items.map((item, iIdx) => (
                              <li key={iIdx}>• {item}</li>
                            ))}
                          </ul>
                        )}
                        {subsection.box.content && <p className="text-[#4a5568]">{subsection.box.content}</p>}
                      </div>
                    )}
                  </div>
                ))}
              </section>
            ))}


            {/* Selection Checklist */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Selection Checklist</h2>
              <div className="space-y-2 text-[#4a5568]">
                {content.checklist.map((item) => (
                  <label key={item.id} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" disabled />
                    <span><strong>{item.label}</strong> — {item.description}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a202c] mb-6">{content.conclusion.title}</h2>
              {content.conclusion.paragraphs.map((para, idx) => (
                <p key={idx} className="text-[#4a5568] leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </section>

            {/* CTA */}
            <section className="mb-12 bg-red-50 border border-red-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-4">{content.cta.title}</h2>
              {content.cta.paragraphs.map((para, idx) => (
                <p key={idx} className="text-[#4a5568] leading-relaxed mb-6">
                  {para}
                </p>
              ))}
              <Link
                href="/contact?product=Cable Carrier Consultation"
                className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer"
              >
                {content.cta.buttonText}
              </Link>
            </section>
          </article>
        </FadeUp>

        {/* Share & Navigation */}
        <FadeUp delay={0.2}>
          <div className="border-t border-slate-200 pt-8 mt-8 space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-semibold text-[#7A8A99]">{content.share}</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.rstech.co.il/${locale}/knowledge-base/cable-carrier-selection-guide`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-[#CC1C1C] transition-colors"
              >
                <Share2 className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            <Link
              href="/knowledge-base"
              className="inline-flex items-center gap-2 text-[#CC1C1C] font-semibold hover:gap-3 transition-all"
            >
              {isRtl ? null : <ArrowLeft className="w-4 h-4" />}
              {content.backToKB}
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : null}
            </Link>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
