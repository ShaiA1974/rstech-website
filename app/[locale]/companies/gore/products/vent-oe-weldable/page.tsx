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
    title: "Weldable Outdoor Electronics Vents — Gore Vents via RSTECH Electronics Israel",
    description: "Gore ultrasonic or heat-weldable ePTFE vent membranes for seamless integration into plastic enclosures. Custom shapes available. Authorized Gore distributor in Israel — RSTECH Electronics. Part numbers: VC70008-1, VE0001SLR, VE0003AML.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/vent-oe-weldable`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/vent-oe-weldable`,
        he: `https://www.rstech.co.il/he/companies/gore/products/vent-oe-weldable`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/vent-oe-weldable`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-oe-weldable.jpg";

  const product = {
    name: "Weldable Outdoor Electronics Vents",
    tagline: "Permanently Integrated ePTFE Venting",
    headline: "Weld Venting Directly Into Your Enclosure — No Separate Hardware Required",
    subheadline: "Gore weldable ePTFE vent membranes bond ultrasonically or thermally to your plastic enclosure housing, creating a seamless, permanently integrated vent with no gaskets, adhesives, or mechanical fasteners to age or loosen over time.",
    description: "Ultrasonic or heat-weldable ePTFE vent membranes for seamless integration into plastic enclosures without additional hardware. Weldable vents eliminate the separate vent body entirely — the ePTFE membrane is welded directly onto a prepared surface or into a port in the enclosure shell during manufacture, creating a monolithic assembly with no secondary sealing interfaces. Available in custom shapes and sizes to match enclosure aperture geometry, these vents are ideal for high-volume consumer electronics, outdoor luminaires, and telecom equipment where component count reduction and sealing reliability are paramount.",
    industries: ["Electronics", "Industrial", "Telecommunications"],
    goreUrl: "https://www.gore.com/products/protective-vents-weldable",
    benefits: [
      {
        title: "Monolithic Seal — No Interface to Fail",
        body: "By welding the ePTFE membrane directly to the enclosure material, the vent-to-housing joint is eliminated as a failure mode. There is no adhesive bond that degrades in UV exposure, no O-ring that compresses and creeps, and no threaded joint that loosens under vibration. The resulting assembly passes IP67/IP68 testing with the same reliability as the base enclosure seal.",
      },
      {
        title: "Custom Shapes for Any Aperture",
        body: "Gore weldable membranes are die-cut to virtually any shape — round, rectangular, slot, or complex contour — matching the aperture geometry defined in your enclosure tooling. This eliminates the constraint of round standard vent diameters and allows vent area to be optimized for airflow requirements without modifying the part's structural cross-section.",
      },
      {
        title: "Clean Manufacturing Process",
        body: "Ultrasonic welding is a fast, clean, and repeatable bonding process compatible with standard enclosure assembly lines. No adhesive dispensing, cure time, or contamination risk. Heat welding (laser or hot-plate) is equally clean and automatable. Both processes integrate directly into existing plastic welding stations with no additional consumables.",
      },
    ],
    specs: [
      { label: "Membrane Material", value: "Expanded PTFE (ePTFE)" },
      { label: "Welding Method", value: "Ultrasonic welding / heat welding (laser or hot-plate)" },
      { label: "Compatible Enclosure Materials", value: "ABS, PC, PC/ABS, PA, PBT, PP" },
      { label: "Ingress Protection", value: "IP67 to IP68 (application dependent)" },
      { label: "Membrane Thickness", value: "Application-specific (typically 0.2–1.0 mm)" },
      { label: "Shape", value: "Custom die-cut to any geometry" },
      { label: "Operating Temperature", value: "-40°C to +85°C (continuous)" },
      { label: "Supply Format", value: "Individual parts or roll / strip for automated feeding" },
    ],
    applications: [
      "Outdoor LED street luminaire driver housings with no surface for adhesive or screw vents",
      "5G radio unit plastic housings requiring permanent, tamper-proof venting",
      "Industrial outdoor IoT sensor node enclosures produced at high volume",
      "Smart meter polymer housings where component count drives unit cost",
      "Consumer outdoor electronics requiring clean, hardware-free vent apertures",
      "EV charging station front panels and control enclosures",
    ],
    faq: [
      {
        q: "Which enclosure plastics are compatible with ultrasonic welding of Gore ePTFE membranes?",
        a: "Gore weldable membranes are compatible with a wide range of engineering thermoplastics including ABS, PC, PC/ABS blends, PA (nylon), PBT, and PP. The enclosure design must include a weld land (flat annular surface around the aperture) of sufficient width for the weld sonotrode geometry. Gore provides weld parameter recommendations for each material combination.",
      },
      {
        q: "Can weldable vents be applied retroactively to existing enclosure tooling?",
        a: "Retroactive application requires that the existing enclosure has a suitable flat weld land around a vent aperture. If the aperture does not exist, tooling modification is needed. Weldable vents are most cost-effective for new designs where the aperture and weld land are specified in the original tooling. Contact RSTECH for feasibility assessment of existing enclosures.",
      },
      {
        q: "What IP rating can be achieved with weldable vents?",
        a: "When correctly welded using qualified parameters, Gore weldable vents achieve IP67 and IP68 protection levels. The actual rating depends on the enclosure overall design, additional seal interfaces, and testing protocol. Gore provides application engineering support for IP validation.",
      },
      {
        q: "Are custom membrane shapes available through RSTECH Electronics?",
        a: "Yes. RSTECH works with Gore to supply custom die-cut membrane shapes and sizes. Tooling for custom shapes is typically amortized into volume orders. Contact us with your aperture drawing and volume forecast to discuss a custom supply program.",
      },
    ],
  };

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-oe-weldable" url={"https://www.rstech.co.il/en/companies/gore/products/vent-oe-weldable"} />
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

        <GorePartNumbers id="vent-oe-weldable" />

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
