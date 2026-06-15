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
    title: "Plug-In Packaging Vents — Gore Vents via RSTECH Electronics Israel",
    description: "Gore plug-in ePTFE membrane vents for drums, containers & specialty packaging. Controlled vapor exchange, liquid-ingress protection, DOT/ADR compliant. RSTECH Electronics Israel. Model designations: D38, D17, D15, D10, D3.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/vent-pkg-plugin`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/vent-pkg-plugin`,
        he: `https://www.rstech.co.il/he/companies/gore/products/vent-pkg-plugin`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/vent-pkg-plugin`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-pkg-plugin.jpg";

  const product = {
    name: "Plug-In Packaging Vents",
    tagline: "Controlled Vapor Exchange for Drums and Specialty Containers",
    headline: "Stop Container Bulging and Collapse — Without Risking Liquid Leakage",
    subheadline: "Gore plug-in ePTFE packaging vents install directly into standard bung ports on drums, IBCs, and specialty containers, providing controlled vapor exchange and pressure equalization while maintaining a complete barrier against liquid egress — even with high-viscosity or low-surface-tension contents.",
    description: "Plug-in ePTFE membrane vents for drums, containers, and specialty packaging requiring controlled vapor exchange and protection against liquid ingress. Gore plug-in vents thread or push into standard bung openings on UN-rated drums, intermediate bulk containers (IBCs), and custom packaging. The ePTFE membrane allows oxygen, nitrogen, and vapor to exchange with the atmosphere — preventing container deformation from temperature changes, altitude, and outgassing — while its hydrophobic and oleophobic surface properties block liquid contents even after contact with high-viscosity or low-surface-tension fluids that block conventional vent membranes. Validated to DOT and ADR transport regulations for hazardous goods packaging.",
    industries: ["Industrial", "Medical"],
    goreUrl: "https://www.gore.com/products/vents-plug-in",
    benefits: [
      {
        title: "Prevents Container Deformation in Transport and Storage",
        body: "Temperature changes during transport (from warm warehouse to cold transport, or vice versa) and altitude changes in air freight cause significant pressure differentials inside sealed containers. Gore plug-in vents equalize this pressure continuously, preventing the drum bulging, IBC panel distortion, and closure failure that results in dangerous leaks and costly product loss — without requiring manual pressure relief operations.",
      },
      {
        title: "Repellency Maintained After Liquid Exposure",
        body: "Many vent membranes lose their liquid repellency after contact with low-surface-tension fluids such as solvents, detergents, and agricultural concentrates. Gore ePTFE membranes are intrinsically oleophobic and hydrophobic — their surface repellency recovers rapidly after liquid contact, maintaining consistent airflow and liquid containment throughout the container service life. This is a critical differentiator for agrochemical and institutional cleaner packaging.",
      },
      {
        title: "DOT and ADR Compliant for Hazardous Goods",
        body: "Gore plug-in packaging vents are validated in DOT (US Department of Transportation) and ADR (European Agreement for Dangerous Goods by Road) test programs for packaging hazardous substances. This validation supports the use of vented packaging in regulated transport scenarios without requiring individual shipper testing — reducing compliance cost for chemical, pharmaceutical, and agrochemical manufacturers.",
      },
    ],
    specs: [
      { label: "Membrane Material", value: "Expanded PTFE (ePTFE)" },
      { label: "Mounting Method", value: "Plug-in / threaded into standard bung port" },
      { label: "Bung Compatibility", value: "Standard UN drum and IBC bung sizes" },
      { label: "Chemical Resistance", value: "Broad-spectrum chemical inertness" },
      { label: "Liquid Repellency", value: "Hydrophobic and oleophobic — recovers after liquid contact" },
      { label: "Transport Compliance", value: "DOT / ADR validated for hazardous goods packaging" },
      { label: "Operating Temperature", value: "-60°C to +200°C (ePTFE membrane)" },
      { label: "Airflow", value: "Sufficient for drum pressure equalization in transport" },
    ],
    applications: [
      "UN-rated steel and plastic drums containing agrochemicals, pesticides, and herbicides",
      "Intermediate bulk containers (IBCs) for industrial chemicals and institutional cleaners",
      "Pharmaceutical bulk API and excipient drums requiring controlled atmosphere",
      "Specialty packaging for hydrogen peroxide, peracetic acid, and strong oxidizers",
      "Household chemical concentrate packaging (bleach, disinfectants, drain cleaners)",
      "Food additive and flavoring concentrate containers requiring gas exchange control",
    ],
    faq: [
      {
        q: "What bung sizes are compatible with Gore plug-in packaging vents?",
        a: "Gore plug-in vents are designed for standard UN drum bung sizes including 2-inch (51 mm) and 3/4-inch (19 mm) openings commonly found on UN-rated steel and plastic drums. IBC bung compatibility depends on the IBC closure standard. Contact RSTECH Electronics to confirm compatibility with your specific container bung specification.",
      },
      {
        q: "How does the vent maintain repellency after contact with low-surface-tension fluids?",
        a: "ePTFE is inherently both hydrophobic and oleophobic. When a low-surface-tension liquid contacts the membrane surface, surface tension forces prevent the liquid from penetrating the pore structure. After liquid drains from the surface, the membrane regains its full gas permeability. This recovery behavior is measured and reported by Gore and distinguishes ePTFE from surface-treated membranes that lose repellency after liquid contact.",
      },
      {
        q: "Can Gore plug-in vents be used for air freight of hazardous goods?",
        a: "Pressure changes in aircraft cargo holds (typically 0.55–0.75 bar cabin pressure equivalent) place significant stress on sealed containers. Gore plug-in vents equalize this pressure and prevent closure failure during air freight. Specific air transport regulations (IATA DGR) requirements should be verified for each product classification — contact RSTECH for regulatory compliance support.",
      },
      {
        q: "Are Gore plug-in packaging vents available through RSTECH Electronics in Israel?",
        a: "Yes. RSTECH Electronics supplies Gore packaging vents including plug-in configurations for industrial, chemical, and pharmaceutical packaging applications in Israel. We provide selection support, volume pricing, and regulatory documentation assistance. Contact us to discuss your packaging vent requirements.",
      },
    ],
  };

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-pkg-plugin" url={"https://www.rstech.co.il/en/companies/gore/products/vent-pkg-plugin"} />
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

        <GorePartNumbers id="vent-pkg-plugin" />

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
