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
    title: "Portable Electronic Pressure Vents — Gore Vents via RSTECH Electronics Israel | PE80205, PE80306, PE80510, PE152.04.2",
    description: "Gore ePTFE pressure equalization membranes for altitude sensors, barometers & environmental sensors in consumer and medical portable devices. Authorized distributor in Israel — RSTECH Electronics. Part numbers: PE80205, PE30205, PE80306, PE70306, PE80510, PE70510, PE152.04.2 and more.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/vent-pe-pressure`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/vent-pe-pressure`,
        he: `https://www.rstech.co.il/he/companies/gore/products/vent-pe-pressure`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/vent-pe-pressure`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-pe-pressure.png";

  const product = {
    name: "Portable Electronic Pressure Vents",
    tagline: "Accurate Altitude and Pressure Data — In Any Environment",
    headline: "Equalize Pressure and Protect Sensors Without Sacrificing Measurement Accuracy",
    subheadline: "Gore pressure vent membranes for portable electronics allow barometric pressure, altitude, and environmental sensors to measure the outside atmosphere accurately — while blocking liquid water, humidity, and particulate contamination from reaching the sensor cavity.",
    description: "Pressure equalization ePTFE membranes for altitude sensors, barometers, and environmental sensors in consumer and medical portable devices. These membranes create a breathable but water-resistant barrier over the sensor port, allowing static pressure to equalize between the device interior and the external atmosphere for accurate absolute pressure readings, while preventing the liquid ingress and humidity condensation that degrades sensor electronics and causes measurement drift. Available for standard smartwatch and wristband port geometries as well as custom formats for medical and industrial portable instruments.",
    industries: ["Electronics", "Medical"],
    goreUrl: "https://www.gore.com/products/pressure-vents-portable-electronics",
    benefits: [
      {
        title: "Accurate Pressure Sensing Through the Membrane",
        body: "Gore's ePTFE pressure vent membranes allow atmospheric pressure to equilibrate across the membrane rapidly enough for accurate static pressure measurement by the barometric sensor beneath. This enables correct altitude calculation in GPS watches and fitness trackers, accurate weather prediction in weather stations, and precise pressure monitoring in medical pulse oximeters and portable spirometers.",
      },
      {
        title: "IP67/IP68 Water and Humidity Protection",
        body: "The hydrophobic ePTFE surface repels liquid water at IP67 and IP68 immersion levels while remaining permeable to gas-phase pressure equalization. This combination is not achievable with open sensor ports or conventional hydrophobic coatings. Sensors behind Gore pressure vents maintain calibration even after submersion, sweating, and rain exposure.",
      },
      {
        title: "10 ATM Rating for Swim-Proof Wearables",
        body: "Gore's latest pressure vent series includes variants rated to 10 ATM (100 metres equivalent), enabling smartwatch and sports watch designs that meet the most demanding water resistance marketing claims. These vents maintain pressure equalization function during surface swimming and shallow diving scenarios while preventing water intrusion into the barometric sensor port.",
      },
    ],
    specs: [
      { label: "Membrane Material", value: "Expanded PTFE (ePTFE)" },
      { label: "Ingress Protection", value: "IP67 / IP68 / 10 ATM (series dependent)" },
      { label: "Pressure Equalization", value: "Rapid static pressure equilibration" },
      { label: "Liquid Repellency", value: "Hydrophobic — water and aqueous solutions" },
      { label: "Mounting Method", value: "Adhesive-backed for port application" },
      { label: "Membrane Thickness", value: "Ultra-thin (sub-mm, application dependent)" },
      { label: "Compatible Sensors", value: "Barometric MEMS, altitude, environmental" },
      { label: "Supply Format", value: "Discrete adhesive / reel for automation" },
    ],
    applications: [
      "GPS smartwatch and multisport watch barometric altitude sensors",
      "Fitness tracker and activity monitor environmental pressure ports",
      "Portable weather station and outdoor navigation instrument sensor ports",
      "Medical portable pulse oximeter and spirometer pressure transducer protection",
      "Industrial portable gas detector and environmental monitor sensor ports",
      "10 ATM swim-proof smartwatch barometric pressure sensor integration",
    ],
    faq: [
      {
        q: "Does the pressure vent membrane affect the accuracy of the barometric sensor?",
        a: "Gore pressure vent membranes are designed to allow rapid gas-phase pressure equalization with minimal lag. For static pressure measurement (altitude, weather), the membrane presents negligible resistance. For fast-response differential pressure applications, the membrane response time should be evaluated against sensor requirements — contact RSTECH for application-specific guidance.",
      },
      {
        q: "What is the difference between pressure vents and acoustic vents?",
        a: "Pressure vents are optimized for slow gas equalization — they allow static atmospheric pressure to equilibrate for barometric sensing. Acoustic vents are optimized for fast pressure-wave transmission at audio frequencies for microphone and speaker applications. While both use ePTFE membranes, the pore structure, thickness, and membrane area are optimized differently. Do not substitute one for the other.",
      },
      {
        q: "Are 10 ATM pressure vents suitable for diving watches?",
        a: "10 ATM (100 m equivalent) ratings cover surface swimming and occasional submersion. Actual diving watches (saturation diving equipment) require significantly higher pressure ratings and are a different product category. For recreational diving watch applications (typically up to 200 m), contact RSTECH to discuss the appropriate Gore pressure vent specification.",
      },
      {
        q: "Can Gore pressure vents be used in medical-grade portable devices?",
        a: "Yes. Gore ePTFE is a widely used biomaterial with an established safety profile. For medical device applications, RSTECH can provide material certifications and biocompatibility documentation relevant to your regulatory submission. Contact us early in the design process to ensure supply chain and documentation alignment.",
      },
    ],
  };

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-pe-pressure" url={"https://www.rstech.co.il/en/companies/gore/products/vent-pe-pressure"} />
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

        <GorePartNumbers id="vent-pe-pressure" />

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
