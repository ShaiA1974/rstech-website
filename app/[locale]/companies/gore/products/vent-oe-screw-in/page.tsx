import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeUp } from "@/components/ui/AnimatedSections";
import GorePartNumbers from "@/components/gore/GorePartNumbers";
import GoreProductSchema from "@/components/gore/GoreProductSchema";

type Props = { params: Promise<{ locale: string; productId: string }> };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "he" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Screw-In Outdoor Electronics Vents — Gore Vents via RSTECH Electronics Israel | PMF100318, PMF100320, PMF300670, PMF200400",
    description: "Gore threaded ePTFE screw-in vents for outdoor enclosures. IP68 & IP69K rated, tamper-resistant versions available, field-replaceable. Authorized distributor in Israel — RSTECH Electronics. Part numbers: PMF100318, PMF100319, PMF100320, PMF100321, PMF100600, PMF300670, PMF300671, PMF200400, PMF200444, PMF200542.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/gore/products/vent-oe-screw-in`,
      languages: {
        en: `https://rstech.co.il/en/companies/gore/products/vent-oe-screw-in`,
        he: `https://rstech.co.il/he/companies/gore/products/vent-oe-screw-in`,
        "x-default": `https://rstech.co.il/en/companies/gore/products/vent-oe-screw-in`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-oe-screw-in.jpg";

  const product = {
    name: "Screw-In Outdoor Electronics Vents",
    tagline: "IP68 & IP69K Threaded Pressure Equalization",
    headline: "Field-Replaceable Vents That Hold Up to High-Pressure Wash and Continuous Submersion",
    subheadline: "Gore screw-in ePTFE vents thread directly into standard M-size ports, providing robust IP68 and IP69K ingress protection with the mechanical integrity needed for the harshest outdoor environments — and full field-replaceability when maintenance is required.",
    description: "Threaded ePTFE vents for outdoor enclosures requiring robust, field-replaceable pressure equalization with IP68 and IP69K protection against high-pressure water jets. The threaded design creates a mechanically secure, vibration-resistant seal that survives the temperature cycles, UV exposure, and wash-down procedures typical in 5G infrastructure, smart grid equipment, and industrial outdoor enclosures. Tamper-resistant variants protect against unauthorized access in public-facing installations.",
    industries: ["Telecommunications", "Industrial", "Electronics"],
    goreUrl: "https://www.gore.com/products/screw-protective-vents-outdoor-electronics-enclosures",
    benefits: [
      {
        title: "IP68 & IP69K Dual-Standard Protection",
        body: "Unlike adhesive vents limited to IP68, Gore screw-in vents are rated to IP69K — withstanding high-pressure, high-temperature water jets at 80 bar and 80°C from 100–150 mm distance. This makes them suitable for enclosures subject to industrial cleaning and wash-down procedures, such as food-processing electronics and outdoor network cabinets on highways.",
      },
      {
        title: "Tamper-Resistant Security",
        body: "Optional tamper-resistant head designs prevent unauthorized removal by standard tools, protecting equipment deployed in public or semi-public locations such as utility meters, traffic management systems, and smart city infrastructure. The vent continues to equalize pressure while resisting vandalism and casual tampering.",
      },
      {
        title: "Field Replacement Without Enclosure Rework",
        body: "Screw-in installation allows vents to be replaced in the field without removing the PCB, breaking adhesive bonds, or re-sealing the enclosure. This reduces maintenance cost on deployed outdoor assets and allows upgrading protection ratings without hardware redesign — critical for 10–20 year service life infrastructure.",
      },
    ],
    specs: [
      { label: "Ingress Protection", value: "IP68 & IP69K" },
      { label: "Membrane Material", value: "Expanded PTFE (ePTFE)" },
      { label: "Thread Sizes", value: "M12×1, M12×1.5, M16, M20 (series dependent)" },
      { label: "Airflow Rate", value: "Up to 7,600 ml/min at 70 mbar (high-airflow models)" },
      { label: "Operating Temperature", value: "-40°C to +85°C" },
      { label: "Installation Torque", value: "Per series datasheet (hand-tight + 1/4 turn typical)" },
      { label: "Tamper-Resistant Option", value: "Available (special driver required)" },
      { label: "Housing Material", value: "PA / PBT (UV-stabilized variants available)" },
    ],
    applications: [
      "5G macro and small-cell base station outdoor radio units (ORUs)",
      "Smart grid switchgear and pad-mount transformer enclosures",
      "Industrial outdoor PLCs, RTUs, and SCADA equipment housings",
      "Highway traffic management and variable message sign controllers",
      "Utility meter distribution boxes and AMI communication nodes",
      "Outdoor surveillance and access control system enclosures",
    ],
    faq: [
      {
        q: "What thread standards are available for Gore screw-in vents?",
        a: "Gore offers screw-in vents in metric thread sizes including M12×1, M12×1.5, M16, and M20 depending on the series. Custom thread configurations may be available for high-volume programs. RSTECH Electronics can confirm availability for your specific port specification.",
      },
      {
        q: "How do screw-in vents achieve IP69K alongside IP68?",
        a: "The threaded mechanical connection provides a significantly higher clamping force than adhesive mounting, enabling the membrane and housing seal to resist the combination of heat, pressure, and flow rate defined by IP69K (IEC 60529). The ePTFE membrane itself remains unaffected by the high-temperature water jet.",
      },
      {
        q: "Can these vents be used in automated assembly lines?",
        a: "Yes. Gore screw-in vents are compatible with semi-automated and fully automated torque-controlled assembly. The PolyVent High Airflow PRO series specifically features a scratch-free flap design and shorter thread for faster machine installation. Contact RSTECH to discuss automation requirements.",
      },
      {
        q: "What is the service life of Gore screw-in vents in outdoor applications?",
        a: "Gore ePTFE membranes are chemically inert and UV-stable, with service life exceeding 10–20 years in typical outdoor telecom environments when correctly installed and torqued. The vent housing material (PA/PBT with UV stabilizers) is selected to match this service life.",
      },
    ],
  };

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-oe-screw-in" url={"https://rstech.co.il/en/companies/gore/products/vent-oe-screw-in"} />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative bg-[#0F172A] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 flex-wrap">
              <Link href="/companies" className="hover:text-white transition-colors cursor-pointer">Companies</Link>
              <span>/</span>
              <Link href="/companies/gore" className="hover:text-white transition-colors cursor-pointer">W.L. Gore</Link>
              <span>/</span>
              <Link href="/companies/gore/products?cat=vents" className="hover:text-white transition-colors cursor-pointer">Vents</Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>W.L. Gore — Authorized in Israel</span>
                </div>
                <p className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-2">{product.tagline}</p>
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
              <div className="rounded-2xl overflow-hidden h-64 lg:h-80 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                {imageUrl ? (
                  <Image src={imageUrl} alt={product.name} width={600} height={400} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-8">
                    <div className="text-6xl font-black text-slate-200 mb-2">GORE</div>
                    <div className="text-slate-400 font-semibold">{product.name}</div>
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

        <GorePartNumbers id="vent-oe-screw-in" />

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
              <Link href="/companies/gore/products?cat=vents" className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                <ArrowLeft className="w-4 h-4" /> Back to Vents
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
