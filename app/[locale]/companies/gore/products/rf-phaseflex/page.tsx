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
    title: "PHASEFLEX® Ruggedized Test Assemblies — Gore via RSTECH Electronics Israel",
    description: "Gore PHASEFLEX® test cable assemblies: best-in-class phase stability, DC to 110 GHz, rated for millions of flex cycles. Authorized distributor in Israel — RSTECH Electronics.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/gore/products/rf-phaseflex`,
      languages: {
        en: `https://rstech.co.il/en/companies/gore/products/rf-phaseflex`,
        he: `https://rstech.co.il/he/companies/gore/products/rf-phaseflex`,
        "x-default": `https://rstech.co.il/en/companies/gore/products/rf-phaseflex`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/rf-phaseflex.jpg";

  const product = {
    name: "PHASEFLEX® Ruggedized Test Assemblies",
    tagline: "The Industry Standard for Microwave Test Phase Stability",
    headline: "PHASEFLEX®: Unmatched Phase Repeatability for Demanding RF Test",
    subheadline: "When measurement accuracy is non-negotiable, PHASEFLEX® test cable assemblies deliver exceptional phase stability and repeatability across millions of flex cycles — from DC to 110 GHz. Trusted by the world's leading microwave test labs.",
    description: "The industry-leading PHASEFLEX® test cable assemblies deliver exceptional phase stability and repeatability for the most demanding microwave test environments. Engineered for DC to 110 GHz with phase stability performance that outlasts competitive solutions across millions of flex cycles.",
    industries: ["Test & Measurement", "Aerospace & Defense", "Semiconductor"],
    goreUrl: "https://www.gore.com/products/ruggedized-test-microwave-rf-assemblies",
    benefits: [
      {
        title: "Best-in-Class Phase Stability Under Flexure",
        body: "PHASEFLEX® cables maintain phase within ±3° under repeated flexure — a specification that competitive cables struggle to achieve even when new, let alone after repeated use. This directly translates to measurement confidence: calibration errors from cable movement are minimized, and your VNA or signal analyzer measurements remain accurate throughout the test sequence.",
      },
      {
        title: "DC to 110 GHz Coverage in One Platform",
        body: "From baseband signal routing to W-band (75–110 GHz) component characterization, PHASEFLEX® covers the full range your lab needs. Rather than maintaining multiple cable families for different frequency bands, engineers can standardize on PHASEFLEX® and benefit from consistent phase behavior across all measurement setups.",
      },
      {
        title: "Millions of Flex Cycles — Verified Durability",
        body: "Lab cables fail from fatigue long before their electrical specs degrade in a datasheet. PHASEFLEX® assemblies are rated for millions of flex cycles, which means they outlast typical lab equipment lifetimes. This reduces cable replacement costs and eliminates the costly downtime and recalibration triggered by a failed test cable mid-measurement campaign.",
      },
    ],
    specs: [
      { label: "Frequency Range", value: "DC to 110 GHz" },
      { label: "Characteristic Impedance", value: "50 Ω" },
      { label: "Phase Stability (flex)", value: "±3° (typical)" },
      { label: "Amplitude Stability (flex)", value: "±0.1 dB (typical)" },
      { label: "Flex Life Rating", value: "Millions of flex cycles" },
      { label: "Connector Options", value: "SMA, 2.92 mm, 2.4 mm, 1.85 mm, 1.0 mm" },
      { label: "Operating Temperature", value: "-65°C to +165°C" },
    ],
    applications: [
      "VNA measurement port extensions and test fixture interconnects",
      "On-wafer probing setups for semiconductor device characterization",
      "Millimeter-wave (mmWave) component testing at 5G frequencies",
      "Phased array antenna element calibration and test",
      "Automated test equipment (ATE) RF switching matrix cabling",
      "Radar component characterization up to W-band",
    ],
    faq: [
      {
        q: "What makes PHASEFLEX® phase stability superior to standard test cables?",
        a: "PHASEFLEX® uses Gore's proprietary ePTFE dielectric construction that minimizes dimensional change under flexure. The cable geometry is engineered to distribute bending stress uniformly, preventing the localized phase shifts that occur in competitive cables when the cable is moved or repositioned between measurements.",
      },
      {
        q: "Can PHASEFLEX® cables be used for calibration reference standards?",
        a: "PHASEFLEX® assemblies are used as measurement cables, not calibration standards. However, their exceptional phase stability means that repositioning the cable between calibration and measurement introduces negligible error — a key benefit in setups where the cable must move during testing.",
      },
      {
        q: "What is the highest frequency connector available for PHASEFLEX®?",
        a: "PHASEFLEX® is available with 1.0 mm connectors supporting frequencies up to 110 GHz (W-band). For 26.5 GHz measurements, 2.92 mm (K) connectors are standard. Gore's application team can advise on connector selection for your specific frequency range.",
      },
      {
        q: "How does RSTECH support PHASEFLEX® procurement in Israel?",
        a: "RSTECH Electronics is the authorized Gore representative in Israel and can source PHASEFLEX® assemblies in standard configurations as well as custom lengths and connector combinations. We provide local technical support for specification selection and can assist with customs and import documentation.",
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
