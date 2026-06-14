import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/ui/AnimatedSections";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { articles } from "@/data/articles";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `How to Choose the Right Cable Carrier for Your System | RSTECH Knowledge Base`,
    description:
      "A complete engineering guide to selecting cable carriers based on number of cables, bending radius, travel length, and total cost of ownership. Includes practical tables and real-world examples.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/knowledge-base/${slug}`,
      languages: {
        en: `https://rstech.co.il/en/knowledge-base/${slug}`,
        he: `https://rstech.co.il/he/knowledge-base/${slug}`,
        "x-default": `https://rstech.co.il/en/knowledge-base/${slug}`,
      },
    },
    openGraph: {
      title: `How to Choose the Right Cable Carrier for Your System`,
      description: "Engineering guide with practical examples for cable carrier selection",
      url: `https://rstech.co.il/${locale}/knowledge-base/${slug}`,
      type: "article",
      images: [
        {
          url: `https://rstech.co.il${article.heroImageLocal || '/products/tsubaki/cc-robotrax.jpg'}`,
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
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Choose the Right Cable Carrier for Your System",
    "description": "A complete engineering guide to selecting cable carriers based on number of cables, bending radius, travel length, and total cost of ownership.",
    "image": `https://rstech.co.il${article.heroImageLocal || '/products/tsubaki/cc-robotrax.jpg'}`,
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
        "url": "https://rstech.co.il/logo.svg"
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
            <ArrowLeft className="w-4 h-4" />
            Back to Knowledge Base
          </Link>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Cable Carriers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How to Choose the Right Cable Carrier for Your System
            </h1>
            <p className="text-slate-400 text-lg max-w-3xl">
              A complete engineering guide to selecting cable carriers based on number of cables, bending radius, travel length, and total cost of ownership.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 border-t border-slate-700 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <span className="ml-auto">8 min read</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeUp>
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Introduction</h2>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                Cable carriers—also called energy chains or cable management systems—are critical components in industrial automation, manufacturing, and machinery. Yet many engineers and procurement teams still approach cable carrier selection reactively, choosing based on price alone or defaulting to what "worked last time."
              </p>
              <p className="text-[#4a5568] leading-relaxed">
                The reality? Selecting the right cable carrier can reduce downtime by 40%, extend system lifespan by 5+ years, and lower total cost of ownership significantly. This guide walks you through the systematic approach that leading manufacturers use.
              </p>
            </section>

            {/* Application Requirements */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a202c] mb-6">1. Understand Your Application Requirements</h2>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                Before evaluating any cable carrier, map out what your system actually demands.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-[#1a202c] mb-4">Ask these questions:</h3>
                <ul className="space-y-3 text-[#4a5568]">
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">Motion type:</span>
                    <span>Is this linear motion, rotary, or hybrid? A pick-and-place robotic arm has different demands than a rotating turntable.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">Cycle speed:</span>
                    <span>How many cycles per minute? High-speed operations (100+ cycles/min) need carriers designed for fatigue resistance.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">Travel distance:</span>
                    <span>Short strokes (under 1m) vs. long-range travel (10m+) affect material choice and chain design.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">Environmental exposure:</span>
                    <span>Will the carrier face temperature extremes, moisture, oils, chemicals, or UV?</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">Space constraints:</span>
                    <span>How much room do you have for the carrier system?</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">Duty cycle:</span>
                    <span>Is this 8-hour, 24/7, or episodic operation?</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Material Selection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a202c] mb-6">2. Select the Right Material and Profile</h2>
              <p className="text-[#4a5568] leading-relaxed mb-6">
                Once you understand your application, material selection becomes logical rather than arbitrary.
              </p>

              <h3 className="text-2xl font-bold text-[#1a202c] mb-4">Material Options</h3>

              <div className="space-y-6 mb-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-[#1a202c] mb-2">Plastic (Thermoplastic Polymer)</h4>
                  <ul className="text-[#4a5568] space-y-1 text-sm">
                    <li><strong>Best for:</strong> General industrial automation, food/beverage, pharmaceutical</li>
                    <li><strong>Lifespan:</strong> 3-7 years depending on duty cycle</li>
                  </ul>
                </div>

                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="font-bold text-[#1a202c] mb-2">Steel</h4>
                  <ul className="text-[#4a5568] space-y-1 text-sm">
                    <li><strong>Best for:</strong> Heavy industrial, foundries, extreme temperature</li>
                    <li><strong>Lifespan:</strong> 7-15+ years with proper maintenance</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-[#1a202c] mb-2">Composite (Hybrid)</h4>
                  <ul className="text-[#4a5568] space-y-1 text-sm">
                    <li><strong>Best for:</strong> Demanding environments needing balanced performance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Three Critical Parameters */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a202c] mb-6">3. The Three Critical Decision Parameters</h2>
              <p className="text-[#4a5568] leading-relaxed mb-6">
                Before you evaluate performance metrics, nail down these three numbers. They drive everything and determine which carriers are physically compatible.
              </p>

              {/* Parameter 1 */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1a202c] mb-4">Parameter 1: Number of Cables</h3>
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Count every single cable that will run through the carrier: power cables, signal cables, hydraulic hoses, pneumatic tubing, fiber optic lines, cooling lines.
                </p>
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  <strong>Why this matters:</strong> Under-sizing forces cables to compress, creating EMI interference, insulation damage, reduced lifespan (30-50% shorter), and intermittent connection failures.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 px-4 py-2 text-left font-bold text-[#1a202c]">Application</th>
                        <th className="border border-slate-300 px-4 py-2 text-left font-bold text-[#1a202c]">Cable Count</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#4a5568]">
                      <tr>
                        <td className="border border-slate-300 px-4 py-2">Simple pick-and-place robot</td>
                        <td className="border border-slate-300 px-4 py-2">3-5 cables</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-2">5-axis CNC machine</td>
                        <td className="border border-slate-300 px-4 py-2">12-18 cables</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-2">Assembly line conveyor</td>
                        <td className="border border-slate-300 px-4 py-2">6-10 cables</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-2">Industrial press</td>
                        <td className="border border-slate-300 px-4 py-2">8-12 cables</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <p className="text-[#4a5568]">
                    <strong>Pro tip:</strong> Add 20% extra capacity for future cable additions.
                  </p>
                </div>
              </div>

              {/* Parameter 2 */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1a202c] mb-4">Parameter 2: Bending Radius</h3>
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  The radius is the tightest curve your cable carrier will bend around. Get this wrong and you'll overstress the structure and cables.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 px-4 py-2 text-left font-bold text-[#1a202c]">Radius</th>
                        <th className="border border-slate-300 px-4 py-2 text-left font-bold text-[#1a202c]">Use Case</th>
                        <th className="border border-slate-300 px-4 py-2 text-left font-bold text-[#1a202c]">Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#4a5568]">
                      <tr>
                        <td className="border border-slate-300 px-4 py-2"><strong>0.5m - 0.8m</strong></td>
                        <td className="border border-slate-300 px-4 py-2">Tight robotic arms, compact wrist joints</td>
                        <td className="border border-slate-300 px-4 py-2">Premium carriers (Tsubaki TKR)</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-2"><strong>0.8m - 1.5m</strong></td>
                        <td className="border border-slate-300 px-4 py-2">Medium industrial arms, gantry corners</td>
                        <td className="border border-slate-300 px-4 py-2">Standard high-quality carriers</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-2"><strong>1.5m - 2.5m</strong></td>
                        <td className="border border-slate-300 px-4 py-2">Standard industrial machines</td>
                        <td className="border border-slate-300 px-4 py-2">Regular carriers work fine</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-2"><strong>5m+</strong></td>
                        <td className="border border-slate-300 px-4 py-2">Straight runs or very gentle slopes</td>
                        <td className="border border-slate-300 px-4 py-2">Any carrier works; focus on cost</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-[#4a5568]">
                    <strong>Critical measurement mistake:</strong> Many engineers measure from the motor or pivot point to the edge of the cable carrier, not the center. Measure to the cable centerline, not the carrier edge.
                  </p>
                </div>
              </div>

              {/* Parameter 3 */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1a202c] mb-4">Parameter 3: Travel Length</h3>
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  This is the total distance the cables move per cycle. It affects cost, speed, stress, and room requirements.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 px-4 py-2 text-left font-bold text-[#1a202c]">Application</th>
                        <th className="border border-slate-300 px-4 py-2 text-left font-bold text-[#1a202c]">Max Distance</th>
                        <th className="border border-slate-300 px-4 py-2 text-left font-bold text-[#1a202c]">Total Needed</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#4a5568]">
                      <tr>
                        <td className="border border-slate-300 px-4 py-2">Pick-and-place (Z-axis)</td>
                        <td className="border border-slate-300 px-4 py-2">0.5m</td>
                        <td className="border border-slate-300 px-4 py-2">0.8m</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-2"><strong>CNC Machine X-axis</strong></td>
                        <td className="border border-slate-300 px-4 py-2">2.0m</td>
                        <td className="border border-slate-300 px-4 py-2">2.3m</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-2"><strong>CNC Machine Y-axis</strong></td>
                        <td className="border border-slate-300 px-4 py-2">1.5m</td>
                        <td className="border border-slate-300 px-4 py-2">1.8m</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-2"><strong>Total CNC System</strong></td>
                        <td className="border border-slate-300 px-4 py-2">-</td>
                        <td className="border border-slate-300 px-4 py-2"><strong>~5.2m</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-[#1a202c] mb-2">Real-world example (Assembly Robot):</h4>
                  <ul className="text-[#4a5568] space-y-1 text-sm">
                    <li>• Robot base to work table: 2.8m horizontal travel → <strong>3.5m carrier needed</strong></li>
                    <li>• Drop height: 0.6m vertical travel → <strong>1.0m carrier needed</strong></li>
                    <li>• <strong>Budget:</strong> 4.5m × $100/meter = <strong>$450</strong> in carrier material</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Selection Checklist */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Selection Checklist</h2>
              <div className="space-y-2 text-[#4a5568]">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" disabled />
                  <span><strong>Cable count documented</strong> — Listed all cables</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" disabled />
                  <span><strong>Bending radius measured</strong> — Found tightest curve and measured to cable centerline</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" disabled />
                  <span><strong>Travel length calculated</strong> — Added full range + slack for each axis</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" disabled />
                  <span><strong>Carrier minimum radius verified</strong> — Selected carrier's minimum ≥ your radius</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" disabled />
                  <span><strong>Load capacity confirmed</strong> — Total cable weight fits within rating</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" disabled />
                  <span><strong>Cable accommodation verified</strong> — All cables fit safely with 20% spare capacity</span>
                </label>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Conclusion</h2>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                Choosing a cable carrier isn't a commodity purchase—it's a systems decision affecting reliability, maintenance costs, and operational uptime for years. Engineers who approach it methodically consistently report 30-40% fewer cable-related failures.
              </p>
              <p className="text-[#4a5568] leading-relaxed">
                <strong>The best cable carrier is the one designed specifically for your application</strong>, not the cheapest option.
              </p>
            </section>

            {/* CTA */}
            <section className="mb-12 bg-red-50 border border-red-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-4">Ready to Select Your Cable Carrier?</h2>
              <p className="text-[#4a5568] leading-relaxed mb-6">
                At RSTECH Electronics, we specialize in matching Tsubaki Kabelschlepp cable carrier systems to complex industrial applications across Israel.
              </p>
              <p className="text-[#4a5568] leading-relaxed mb-6">
                With your three critical parameters (cable count, radius, travel length), our engineering team can quickly recommend the optimal solution.
              </p>
              <Link
                href="/contact?product=Cable Carrier Consultation"
                className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer"
              >
                Schedule a Consultation
              </Link>
            </section>
          </article>
        </FadeUp>

        {/* Share & Navigation */}
        <FadeUp delay={0.2}>
          <div className="border-t border-slate-200 pt-8 mt-8 space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-semibold text-[#7A8A99]">Share:</span>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=https://rstech.co.il/en/knowledge-base/cable-carrier-selection-guide"
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
              <ArrowLeft className="w-4 h-4" />
              Back to Knowledge Base
            </Link>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
