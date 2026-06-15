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
    title: "Packaging Liners — Gore Vents via RSTECH Electronics Israel | 323G, 324G, 383G, CM6B, CM6C",
    description: "Gore ePTFE liner membranes for pharmaceutical, specialty chemical & food packaging. Chemically inert, FDA-compliant, custom cut to size. Authorized Gore distributor in Israel — RSTECH Electronics. Part numbers: 323G, 324G, 383G, 384G, CM6B, CM6C, CM8C.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/vent-pkg-liners`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/vent-pkg-liners`,
        he: `https://www.rstech.co.il/he/companies/gore/products/vent-pkg-liners`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/vent-pkg-liners`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-pkg-liners.jpg";

  const product = {
    name: "Packaging Liners",
    tagline: "Controlled Gas Exchange for Critical Packaging",
    headline: "Maintain Package Integrity While Controlling Gas Exchange and Moisture",
    subheadline: "Gore ePTFE packaging liner membranes control gas transmission and moisture exchange in pharmaceutical, specialty chemical, and food packaging — preserving product integrity while preventing container deformation from pressure build-up or collapse.",
    description: "Gore ePTFE liner membranes for pharmaceutical, specialty chemical, and food packaging — controlling gas exchange and moisture while maintaining product integrity. These liner membranes are integrated into packaging closures or container walls to allow selective gas permeation (controlled atmosphere) while blocking liquid egress and contamination ingress. Chemically inert ePTFE is compatible with virtually all pharmaceutical active ingredients, aggressive specialty chemicals, and food-contact applications. FDA-compliant materials support regulatory submissions for food and drug packaging. Custom cut to size for any closure or container format.",
    industries: ["Industrial", "Medical"],
    goreUrl: "https://www.gore.com/products/packaging-vents-liners-pressure-equalization-sealed-packaging",
    benefits: [
      {
        title: "Chemically Inert ePTFE — Compatible With Aggressive Contents",
        body: "ePTFE is one of the most chemically inert materials available, with resistance to virtually all organic and inorganic chemicals including strong acids, bases, oxidizers, and solvents. Packaging liners made from ePTFE will not react with, absorb, or release contamination into pharmaceutical actives, hydrogen peroxide, peracetic acid, sodium hypochlorite, or specialty agrochemicals — eliminating contamination concerns that affect other liner materials.",
      },
      {
        title: "FDA-Compliant Materials for Regulated Packaging",
        body: "Gore packaging liner membranes use FDA-compliant ePTFE materials suitable for food and pharmaceutical contact applications. Material certifications and regulatory support documentation are available to assist with 21 CFR food contact compliance, pharmaceutical DMF filings, and EU food contact regulation submissions — reducing the regulatory documentation burden for manufacturers and CMOs.",
      },
      {
        title: "Custom Cut to Any Closure Geometry",
        body: "Liner membranes are die-cut to the exact dimensions of drum closures, container caps, specialty packaging fitments, and custom aperture geometries. No standard size constraints mean the liner membrane area can be optimized for the required gas transmission rate and pressure differential, while fitting existing closure tooling without modification.",
      },
    ],
    specs: [
      { label: "Membrane Material", value: "Expanded PTFE (ePTFE)" },
      { label: "Chemical Resistance", value: "Broad-spectrum — acids, bases, oxidizers, solvents" },
      { label: "Regulatory Compliance", value: "FDA-compliant materials (21 CFR applicable)" },
      { label: "Function", value: "Controlled gas exchange / moisture management" },
      { label: "Liquid Containment", value: "Blocks liquid egress under positive pressure" },
      { label: "Temperature Range", value: "-200°C to +260°C (ePTFE continuous)" },
      { label: "Shape", value: "Custom die-cut to any geometry" },
      { label: "Testing Compliance", value: "DOT / ADR transport testing compatible" },
    ],
    applications: [
      "Pharmaceutical primary and secondary packaging closures requiring controlled atmosphere",
      "Specialty chemical drums and IBCs with oxidizer or corrosive liquid contents",
      "Food packaging with controlled atmosphere requirements (modified atmosphere packaging)",
      "Agrochemical container liners for pesticide, herbicide, and fertilizer products",
      "Hydrogen peroxide and peracetic acid packaging vent liners",
      "Hazardous goods packaging meeting DOT/ADR transport venting requirements",
    ],
    faq: [
      {
        q: "What regulatory documentation is available for FDA food and drug contact compliance?",
        a: "Gore provides material certifications confirming ePTFE compliance with 21 CFR regulations applicable to food contact and pharmaceutical applications. Drug Master File (DMF) support documentation may be available for pharmaceutical packaging programs. Contact RSTECH Electronics to request applicable certifications for your application and regulatory jurisdiction.",
      },
      {
        q: "Can packaging liners be used with hydrogen peroxide and other strong oxidizers?",
        a: "Yes. ePTFE is chemically inert to hydrogen peroxide at concentrations up to 90% and to peracetic acid, sodium hypochlorite, and other strong oxidizers routinely used in pharmaceutical and food processing. This is a primary application for Gore packaging liners, where competing liner materials (silicone, rubber) degrade and cause seal failure.",
      },
      {
        q: "How is the liner membrane integrated into an existing closure design?",
        a: "The die-cut liner membrane is typically inserted under the closure cap or into a dedicated recess in the closure molding. Gore provides application engineering guidance for liner seat design, compression requirements, and torque specifications. For existing closures, retrofit liner insertion is possible in many cases — contact RSTECH for feasibility assessment.",
      },
      {
        q: "Are Gore packaging liners available for hazardous goods packaging meeting DOT and ADR requirements?",
        a: "Yes. Gore packaging vent membranes including liner configurations have been validated in DOT and ADR transport testing programs for hazardous goods packaging. Relevant test data and compliance documentation are available. Contact RSTECH Electronics for specific transport regulation compliance information for your packaging program.",
      },
    ],
  };

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-pkg-liners" url={"https://www.rstech.co.il/en/companies/gore/products/vent-pkg-liners"} />
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

        <GorePartNumbers id="vent-pkg-liners" />

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
