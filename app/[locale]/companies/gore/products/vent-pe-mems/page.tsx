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
    title: "MEMs Protective Vents — Gore Vents via RSTECH Electronics Israel | VP1001MPX, VP0002MPN, VP0001MWN",
    description: "Gore ePTFE protective vent membranes for MEMS pressure & microphone sensors. Sub-1µm particle filtration, high acoustic transparency, adhesive or reel format. RSTECH Electronics Israel. Part numbers: VP1001MPX (Style 100), VP0002MPN (Style 200), VP0001MWN (Style 300).",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/vent-pe-mems`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/vent-pe-mems`,
        he: `https://www.rstech.co.il/he/companies/gore/products/vent-pe-mems`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/vent-pe-mems`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-pe-mems.jpg";

  const product = {
    name: "MEMs Protective Vents",
    tagline: "Sub-Micron Particle Shield for MEMS Sensors",
    headline: "Protect MEMS Pressure and Microphone Sensors From Contamination Without Blocking Signal",
    subheadline: "Gore ePTFE protective vent membranes block particles smaller than 1 µm from reaching MEMS sensor diaphragms while maintaining acoustic and pressure transmission fidelity — enabling reliable MEMS operation in consumer, industrial, and medical devices exposed to real-world contamination.",
    description: "Protective ePTFE membranes shielding MEMS pressure and microphone sensors from particle contamination while allowing pressure and sound transmission. MEMS sensor diaphragms are fragile structures measured in micrometers — a single particle impact or adhesive contamination event can cause irreversible sensitivity drift or catastrophic failure. Gore's ePTFE membranes provide a physical barrier with pore sizes below 1 µm, stopping particles while the open microporous structure maintains high acoustic transparency for microphone applications and rapid pressure equilibration for barometric sensors. Available in adhesive-backed discrete parts and in reel format for automated placement.",
    industries: ["Electronics", "Medical"],
    goreUrl: "https://www.gore.com/products/mems-protective-vents-microphones",
    benefits: [
      {
        title: "Sub-1 µm Particle Exclusion",
        body: "MEMS microphone capsules and pressure sensor diaphragms are vulnerable to particles far smaller than visible dust. Gore's ePTFE membrane pore structure filters particles below 1 µm, protecting against solder flux aerosols, fine dust, skin debris, and liquid-borne particulate in portable device environments — the contamination sources responsible for the majority of MEMS field failures.",
      },
      {
        title: "High Acoustic and Pressure Transparency",
        body: "Unlike solid protective coatings that degrade MEMS sensor performance, the microporous ePTFE structure presents minimal acoustic impedance to the sensor. Sound pressure waves and static pressure changes pass through the membrane with negligible attenuation, maintaining sensor sensitivity and frequency response within the design specification. Microphone SNR and pressure sensor resolution are preserved.",
      },
      {
        title: "Adhesive and Reel Formats for Any Assembly Process",
        body: "Gore MEMs protective vents are available as adhesive-backed discrete parts for manual or semi-automated placement, and in reel format for high-volume SMT-compatible assembly lines. The reel format enables pick-and-place application directly adjacent to MEMS sensor placement, minimizing handling exposure between membrane application and device sealing.",
      },
    ],
    specs: [
      { label: "Membrane Material", value: "Expanded PTFE (ePTFE)" },
      { label: "Particle Filtration", value: "< 1 µm pore size" },
      { label: "Acoustic Transparency", value: "High (low insertion loss)" },
      { label: "Mounting Method", value: "Adhesive-backed / reel (pick-and-place)" },
      { label: "Membrane Thickness", value: "Ultra-thin (application dependent)" },
      { label: "Liquid Resistance", value: "Hydrophobic — water and aqueous repellent" },
      { label: "Compatible Sensors", value: "MEMS microphones, barometric pressure sensors" },
      { label: "Supply Format", value: "Discrete adhesive parts / tape-and-reel" },
    ],
    applications: [
      "MEMS microphone capsule protection in smartphones and TWS earbuds",
      "Barometric pressure sensor port protection in smartwatches and GPS devices",
      "Altitude and environmental sensor protection in wearables and IoT nodes",
      "Medical-grade MEMS pressure sensor shielding in portable diagnostic devices",
      "Industrial MEMS pressure transducer protection in contaminated environments",
      "Hearing aid MEMS microphone protection against cerumen and humidity",
    ],
    faq: [
      {
        q: "What particle sizes do Gore MEMs protective vents filter?",
        a: "Gore ePTFE membranes for MEMS protection have pore sizes below 1 µm, providing high-efficiency filtration of fine dust, solder flux aerosols, and biological particulate. This covers the particle size range responsible for MEMS diaphragm contamination in both manufacturing and field environments.",
      },
      {
        q: "Does the membrane affect MEMS microphone sensitivity or frequency response?",
        a: "The ePTFE microporous structure presents very low acoustic impedance. Typical insertion loss is below 1–2 dB across the audio frequency range, and the frequency response remains flat within specification. Gore provides acoustic characterization data for engineering evaluation.",
      },
      {
        q: "Are Gore MEMs protective vents compatible with automated SMT assembly?",
        a: "Yes. The reel format is designed for pick-and-place machine compatibility. Membrane placement can be integrated into the SMT assembly sequence immediately before or after MEMS sensor placement, minimizing the window of sensor exposure. Contact RSTECH for reel specifications and placement parameter recommendations.",
      },
      {
        q: "Can these membranes be used on MEMS pressure sensors in medical devices?",
        a: "Yes. Gore ePTFE is a well-characterized biocompatible material. For medical device applications, material certifications and regulatory documentation are available. Contact RSTECH Electronics to discuss medical-grade supply and documentation requirements for your specific device.",
      },
    ],
  };

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-pe-mems" url={"https://www.rstech.co.il/en/companies/gore/products/vent-pe-mems"} />
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

        <GorePartNumbers id="vent-pe-mems" />

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
