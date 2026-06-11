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
    title: "LEW Space Cables — Gore via RSTECH Electronics Israel",
    description: "Gore LEW-series lightweight electrical wires with radiation-hardened ePTFE insulation, NASA and ESA outgassing standards for satellite applications. Authorized in Israel — RSTECH Electronics.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/gore/products/space-lew`,
      languages: {
        en: `https://rstech.co.il/en/companies/gore/products/space-lew`,
        he: `https://rstech.co.il/he/companies/gore/products/space-lew`,
        "x-default": `https://rstech.co.il/en/companies/gore/products/space-lew`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/space-lew.jpg";

  const product = {
    name: "LEW Space Cables",
    tagline: "Ultra-Lightweight Space Wire Meeting NASA and ESA Standards",
    headline: "LEW Lightweight Electrical Wire: Maximum Performance, Minimum Mass",
    subheadline: "Gore LEW-series lightweight electrical wires combine radiation-hardened ePTFE insulation with mass-optimized conductor construction, meeting NASA and ESA outgassing standards for satellite applications where every gram of harness weight carries a real cost.",
    description: "LEW-series lightweight electrical wires with radiation-hardened ePTFE insulation, meeting NASA and ESA outgassing standards for satellite applications. The LEW series is purpose-built for spacecraft harnesses where low weight and small diameter are as important as electrical performance and environmental qualification.",
    industries: ["Space", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/space-cables-type-lew",
    benefits: [
      {
        title: "Mass Savings That Translate to Mission Capability",
        body: "Spacecraft harnesses can account for 5–10% of total spacecraft mass. LEW's lightweight construction — achieved through fine conductor stranding, thin ePTFE wall insulation, and low-density materials — reduces harness mass by 30–50% compared to conventional space-grade wire of equivalent current capacity. On a communications satellite, this mass saving translates directly to additional payload capacity or fuel for extended mission life.",
      },
      {
        title: "Radiation Hardening for Long Mission Lifetimes",
        body: "Conventional polymer insulations become brittle and crack under accumulated radiation dose, creating short circuits and harness failures in long-duration missions. Gore's ePTFE insulation is inherently radiation-resistant, maintaining its mechanical and electrical properties through the total ionizing dose levels encountered in 15-year GEO satellite missions and extended deep-space missions.",
      },
      {
        title: "Dual NASA/ESA Outgassing Qualification",
        body: "Meeting both NASA outgassing requirements (ASTM E595) and ESA requirements (ECSS-Q-ST-70-02) provides maximum procurement flexibility for international programs. LEW materials have been characterized for total mass loss (TML) and collected volatile condensable material (CVCM) values that satisfy the most demanding contamination control specifications.",
      },
    ],
    specs: [
      { label: "Insulation", value: "Radiation-hardened ePTFE" },
      { label: "Conductor", value: "Silver-plated copper, fine stranded" },
      { label: "Conductor Sizes", value: "30–22 AWG (application dependent)" },
      { label: "Operating Temperature", value: "-180°C to +200°C" },
      { label: "Outgassing (NASA)", value: "ASTM E595: TML ≤1.0%, CVCM ≤0.1%" },
      { label: "Outgassing (ESA)", value: "ECSS-Q-ST-70-02 compliant" },
      { label: "Voltage Rating", value: "300 V (application dependent)" },
    ],
    applications: [
      "General-purpose signal wiring throughout spacecraft harness",
      "Attitude and orbit control system (AOCS) sensor wiring",
      "Thermal control heater and temperature sensor circuits",
      "Battery management system wiring in power subsystem",
      "Telemetry, tracking and command (TT&C) subsystem wiring",
      "Payload instrument internal low-current signal wiring",
    ],
    faq: [
      {
        q: "What is the weight saving of LEW compared to standard MIL-W-22759 wire?",
        a: "LEW series cables achieve significant weight reductions compared to standard MIL-W-22759/32 or equivalent. The exact saving depends on gauge and configuration — Gore's technical data sheets provide weight-per-meter figures for direct comparison with your existing wire specification.",
      },
      {
        q: "Is LEW wire suitable for use in crewed spacecraft?",
        a: "LEW wire's low-outgassing and flame-retardant properties make it suitable for habitable spacecraft environments, subject to the specific crewed spacecraft certification requirements of the applicable program. Contact RSTECH to discuss certification documentation support.",
      },
      {
        q: "Can LEW wire be procured with full material traceability for flight use?",
        a: "Yes. RSTECH Electronics supplies LEW wire with full material traceability documentation including material certifications, lot traceability, and test reports. This documentation package satisfies the source control requirements of typical spacecraft hardware procurement contracts.",
      },
      {
        q: "What connector termination options are available for LEW wire?",
        a: "LEW wire can be terminated to any space-qualified connector system including Micro-D, D-Sub, circular MIL-DTL-38999, and custom interfaces. RSTECH can source both raw wire and terminated harness assemblies, working with qualified space harness manufacturers in Israel.",
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
