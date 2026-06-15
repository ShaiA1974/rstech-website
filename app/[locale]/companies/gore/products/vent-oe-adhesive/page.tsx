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
    title: "Adhesive Outdoor Electronics Vents — Gore Vents via RSTECH Electronics Israel | VE70205, VE80205, VE90308",
    description: "Gore adhesive ePTFE vents (VE7/VE8/VE9) for outdoor telecom enclosures, junction boxes & LED luminaires. IP64–IP68 rated. Authorized distributor in Israel — RSTECH Electronics. Part numbers: VE7 series (VE70205–VE72029), VE8 series (VE80205–VE82029), VE9 series (VE90308–VE92029).",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/vent-oe-adhesive`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/vent-oe-adhesive`,
        he: `https://www.rstech.co.il/he/companies/gore/products/vent-oe-adhesive`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/vent-oe-adhesive`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-oe-adhesive.jpg";

  const product = {
    name: "Adhesive Outdoor Electronics Vents",
    tagline: "Peel-and-Stick IP68 Pressure Equalization",
    headline: "Protect Outdoor Enclosures Without Drilling a Single Hole",
    subheadline: "Gore's VE7, VE8, and VE9 series adhesive vents deliver IP64–IP68 ingress protection with a simple peel-and-stick installation — no threads, no tools, no compromises on seal integrity.",
    description: "Peel-and-stick ePTFE membrane vents (VE7/VE8/VE9 series) for outdoor telecom enclosures, junction boxes, and LED luminaires. These adhesive-backed vents equalize pressure caused by temperature fluctuations and altitude changes, preventing condensation build-up and seal failure — all while blocking liquid water and particulate contamination to IP64–IP68 standards. EU REACH compliant and RoHS compatible.",
    industries: ["Telecommunications", "Industrial", "Electronics"],
    goreUrl: "https://www.gore.com/products/protective-adhesive-vents-electronic-outdoor-enclosures",
    benefits: [
      {
        title: "Zero-Modification Installation",
        body: "Adhesive-backed mounting eliminates the need to drill, tap, or ultrasonically weld enclosures. Engineers can apply vents to flat or slightly curved surfaces in seconds, dramatically reducing assembly time on telecom cabinets, smart meters, and outdoor junction boxes — including post-manufacture retrofits.",
      },
      {
        title: "IP64–IP68 Ingress Protection",
        body: "Gore's expanded PTFE (ePTFE) membrane is hydrophobic by nature, repelling liquid water while allowing air and water vapor to pass freely. This maintains pressure equilibrium without admitting moisture, protecting electronics from condensation-induced corrosion in outdoor 5G base stations, IoT nodes, and street lighting controllers.",
      },
      {
        title: "EU REACH & RoHS Compliance",
        body: "Fully compliant with EU REACH regulations and compatible with RoHS-restricted product lines, these vents are suitable for electronics shipped throughout Europe and Israel without additional documentation burden or substance-of-concern declarations.",
      },
    ],
    specs: [
      { label: "Series", value: "VE7 / VE8 / VE9" },
      { label: "Ingress Protection", value: "IP64 to IP68" },
      { label: "Membrane Material", value: "Expanded PTFE (ePTFE)" },
      { label: "Mounting Method", value: "Pressure-sensitive adhesive" },
      { label: "Operating Temperature", value: "-40°C to +85°C" },
      { label: "Chemical Compliance", value: "EU REACH, RoHS compatible" },
      { label: "Surface Compatibility", value: "Flat or low-curvature enclosure walls" },
      { label: "Typical Diameter", value: "7–25 mm (series dependent)" },
    ],
    applications: [
      "5G small-cell and macro base station outdoor enclosures",
      "Smart meter and AMI junction boxes exposed to rain and dust",
      "LED street luminaire housings requiring condensation control",
      "IoT gateway and edge-compute outdoor enclosures",
      "Solar inverter and battery management system housings",
      "CCTV and traffic monitoring camera enclosures",
    ],
    faq: [
      {
        q: "What surface preparation is needed before applying adhesive vents?",
        a: "The mounting surface should be clean, dry, and free of oils, release agents, or dust. Isopropyl alcohol wiping is typically sufficient. Gore recommends a dwell time of 24–72 hours at room temperature before subjecting the assembly to pressure differential or water spray testing.",
      },
      {
        q: "Can adhesive vents withstand high-pressure water jets (IP69K)?",
        a: "The VE7/VE8/VE9 adhesive series is rated to IP68 (continuous submersion). IP69K (high-pressure steam jet) requires the screw-in vent series. If your enclosure requires IP69K, contact RSTECH to discuss the screw-in vent alternatives.",
      },
      {
        q: "What is the difference between VE7, VE8, and VE9?",
        a: "The series differ primarily in membrane area, airflow rate, and protection level. VE7 targets IP64–IP65 applications with smaller footprints; VE8 and VE9 provide higher airflow and IP67–IP68 ratings for larger enclosures with greater internal volume. RSTECH can help select the correct variant for your enclosure volume and temperature cycle requirements.",
      },
      {
        q: "Are these vents available through RSTECH Electronics in Israel?",
        a: "Yes. RSTECH Electronics is the authorized Gore representative in Israel. We supply Gore adhesive vents with full technical support, including selection assistance, sample evaluation, and volume procurement. Contact us for pricing and lead times.",
      },
    ],
  };

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-oe-adhesive" url={"https://www.rstech.co.il/en/companies/gore/products/vent-oe-adhesive"} />
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

        <GorePartNumbers id="vent-oe-adhesive" />

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
