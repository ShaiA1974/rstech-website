import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeUp } from "@/components/ui/AnimatedSections";

type Props = { params: Promise<{ locale: string; productId: string }> };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "he" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "SPM Space Cables — Gore via RSTECH Electronics Israel",
    description: "Gore SPM-series space power and multipurpose cables for reliable electrical performance in vacuum and extreme temperature environment of space. Authorized in Israel — RSTECH Electronics.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/gore/products/space-spm`,
      languages: {
        en: `https://rstech.co.il/en/companies/gore/products/space-spm`,
        he: `https://rstech.co.il/he/companies/gore/products/space-spm`,
        "x-default": `https://rstech.co.il/en/companies/gore/products/space-spm`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/space-spm.jpg";

  const product = {
    name: "SPM Space Cables",
    tagline: "Space Power and Multipurpose Cables for Reliable Orbital Operation",
    headline: "SPM Space Cables: Dependable Power Distribution for Spacecraft",
    subheadline: "Gore SPM-series space power and multipurpose cables deliver reliable electrical performance across the extreme vacuum and temperature environment of space — providing the robust power distribution backbone that spacecraft subsystems depend on throughout the mission lifetime.",
    description: "SPM-series space power and multipurpose cables delivering reliable electrical performance across the extreme vacuum and temperature environment of space. The SPM series addresses the demanding requirements of spacecraft power distribution: high current capacity, low resistance, radiation tolerance, and zero-outgassing materials — all in a construction optimized for space harness integration.",
    industries: ["Space", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/space-cables-type-spm",
    benefits: [
      {
        title: "Reliable Power Delivery Across Extreme Temperature Range",
        body: "Spacecraft power cables must maintain conductor resistance and insulation integrity through thermal excursions from the deep cold of eclipse (-180°C) to the heat of direct sun exposure (+200°C). SPM cables use silver-plated conductors and ePTFE insulation that maintain their electrical properties across this full range — ensuring regulated bus voltages reach all spacecraft loads without voltage drops that trigger protective shutdowns.",
      },
      {
        title: "Vacuum-Rated Construction Prevents Outgassing Failures",
        body: "In vacuum, trapped gas within cable insulation can outgas and deposit on optical and thermal surfaces, or create corona discharge at voltages much lower than atmospheric breakdown voltage. SPM cables are constructed with low-outgassing materials that meet space agency contamination control requirements, and their design eliminates void trapping that can lead to partial discharge in space power systems.",
      },
      {
        title: "High Current Capacity in a Lightweight Form Factor",
        body: "Power cables in spacecraft must balance current-carrying capacity against mass — using undersized conductors to save mass creates resistive losses and thermal management challenges, while oversized conductors waste precious mass budget. SPM cables are engineered at specific gauges to deliver the current ratings spacecraft power system engineers need within optimized mass envelopes.",
      },
    ],
    specs: [
      { label: "Cable Type", value: "Power & multipurpose, space-grade" },
      { label: "Conductor", value: "Silver-plated copper, stranded" },
      { label: "Insulation", value: "ePTFE, radiation tolerant" },
      { label: "Operating Temperature", value: "-180°C to +200°C" },
      { label: "Voltage Rating", value: "Up to 600 V (application dependent)" },
      { label: "Outgassing", value: "ECSS-Q-ST-70-02 / ASTM E595 compliant" },
      { label: "Conductor Sizes", value: "20–10 AWG (application dependent)" },
    ],
    applications: [
      "Solar array power distribution bus cables",
      "Battery charge/discharge circuit wiring",
      "Power control and distribution unit (PCDU) output wiring",
      "Electric propulsion (ion/Hall thruster) power feed cables",
      "Reaction wheel and momentum wheel drive power cables",
      "Payload instrument primary power distribution",
    ],
    faq: [
      {
        q: "What voltage levels are SPM cables rated for?",
        a: "SPM cables are rated up to 600 V DC depending on the specific construction variant. With the trend toward higher bus voltages in modern satellites (100 V, 120 V, and beyond), Gore can advise on appropriate insulation system selection. Contact RSTECH for your specific bus voltage requirements.",
      },
      {
        q: "How does SPM handle corona discharge in space?",
        a: "The transition from atmospheric pressure to vacuum lowers the partial discharge inception voltage significantly, making corona a real concern for space power systems. SPM cables are designed to eliminate void-trapping in the insulation construction and meet space power system requirements that address this transition region risk.",
      },
      {
        q: "Can SPM cables be routed alongside signal cables in the same harness bundle?",
        a: "SPM power cables can be bundled with signal cables when appropriate EMC separation guidelines are followed. Gore provides harness routing recommendations that address EMI coupling from power cables to sensitive signal wires — RSTECH's technical team can assist with harness EMC design review.",
      },
      {
        q: "Is SPM suitable for high-power electric propulsion systems?",
        a: "SPM cables are used in electric propulsion power feed applications, where high voltage (hundreds to thousands of volts in some systems) and moderate current combine with the vacuum environment. Specific electric propulsion requirements should be reviewed with Gore's application engineers — contact RSTECH to arrange this technical discussion.",
      },
    ],
  };

  const gradient = "from-blue-100 to-blue-50";

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative bg-[#0F172A] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 flex-wrap">
              <Link href="/companies" className="hover:text-white transition-colors cursor-pointer">Companies</Link>
              <span>/</span>
              <Link href="/companies/gore" className="hover:text-white transition-colors cursor-pointer">W.L. Gore</Link>
              <span>/</span>
              <Link href="/companies/gore/products?cat=cables" className="hover:text-white transition-colors cursor-pointer">Products</Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>W.L. Gore — Authorized in Israel</span>
                </div>
                <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-2">{product.tagline}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{product.headline}</h1>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">{product.subheadline}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact?product=W.L. Gore" className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer">
                    Request Pricing <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={product.goreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    View on Gore.com <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className={`rounded-2xl overflow-hidden h-64 lg:h-80 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                {imageUrl ? (
                  <Image src={imageUrl} alt={product.name} width={600} height={400} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-8">
                    <div className="text-6xl font-black text-blue-200 mb-2">GORE</div>
                    <div className="text-blue-400 font-semibold">{product.name}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-white border-b border-[#e2e8f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <FadeUp><p className="text-xl text-[#4a5568] max-w-3xl leading-relaxed">{product.description}</p></FadeUp>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#f0f4f8] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#1a202c]">Why Choose Gore {product.name}?</h2>
              <div className="mt-3 h-1 w-12 bg-[#CC1C1C] mx-auto rounded-full" />
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.benefits.map((b, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-5 h-5 text-[#CC1C1C]" />
                    </div>
                    <h3 className="font-bold text-[#1a202c] mb-2">{b.title}</h3>
                    <p className="text-sm text-[#4a5568] leading-relaxed">{b.body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* Specs + Applications */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <FadeUp>
                <div>
                  <h2 className="text-2xl font-bold text-[#1a202c] mb-4">Technical Specifications</h2>
                  <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
                  <dl className="space-y-3">
                    {product.specs.map((s) => (
                      <div key={s.label} className="flex justify-between py-2.5 border-b border-[#f0f4f8]">
                        <dt className="text-sm font-medium text-[#7A8A99]">{s.label}</dt>
                        <dd className="text-sm font-semibold text-[#1a202c] text-end">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-[#1a202c] mb-4">Applications</h2>
                  <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
                  <ul className="space-y-3">
                    {product.applications.map((app) => (
                      <li key={app} className="flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-[#CC1C1C] mt-0.5 shrink-0" />
                        <span className="text-[#334155]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="bg-[#f0f4f8] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="text-xl font-bold text-[#1a202c] mb-6">Industries Served</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {product.industries.map((ind) => (
                  <span key={ind} className="text-sm font-medium text-[#334155] bg-white border border-[#e2e8f0] px-4 py-2 rounded-full shadow-sm">{ind}</span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#1a202c]">Frequently Asked Questions</h2>
              <div className="mt-3 h-1 w-12 bg-[#CC1C1C] mx-auto rounded-full" />
            </FadeUp>
            <div className="space-y-4">
              {product.faq.map((item, i) => (
                <FadeUp key={i} delay={i * 0.05}>
                  <div className="border border-[#e2e8f0] rounded-xl p-5">
                    <h3 className="font-semibold text-[#1a202c] mb-2">{item.q}</h3>
                    <p className="text-sm text-[#4a5568] leading-relaxed">{item.a}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0F172A] py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to source {product.name} in Israel?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Contact RSTECH Electronics — your authorized Gore representative in Israel.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact?product=W.L. Gore" className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer">
                Contact RSTECH <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/companies/gore/products?cat=cables" className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                <ArrowLeft className="w-4 h-4" /> Back to Products
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
