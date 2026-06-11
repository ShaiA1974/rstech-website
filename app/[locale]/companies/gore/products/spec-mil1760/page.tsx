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
    title: "MIL-STD-1760 Cables — Gore via RSTECH Electronics Israel",
    description: "Gore MIL-STD-1760 cables for aircraft-to-store electrical interfaces: qualified for external stores, ruggedized connectors, data and power for smart weapons. Authorized in Israel — RSTECH.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/gore/products/spec-mil1760`,
      languages: {
        en: `https://rstech.co.il/en/companies/gore/products/spec-mil1760`,
        he: `https://rstech.co.il/he/companies/gore/products/spec-mil1760`,
        "x-default": `https://rstech.co.il/en/companies/gore/products/spec-mil1760`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/spec-mil1760.jpg";

  const product = {
    name: "MIL-STD-1760 Cables",
    tagline: "Aircraft-to-Store Interface Cables for Smart Weapons Integration",
    headline: "MIL-STD-1760 Cables: Reliable Aircraft-to-Store Electrical Interfaces",
    subheadline: "Gore MIL-STD-1760-compliant cables provide the data and power connections between aircraft and external stores — smart weapons, targeting pods, and fuel tanks — meeting the demanding environmental and electrical requirements of combat aircraft integration.",
    description: "MIL-STD-1760-compliant cables for aircraft-to-store electrical interfaces, providing data and power connections for smart weapons and external stores. These cables must withstand the extreme vibration, aerodynamic loading, temperature cycling, and electromagnetic environment of fighter and attack aircraft weapons pylons — while maintaining the signal integrity that store management systems depend on for safe weapon employment.",
    industries: ["Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/mil-std-1760-cables-umbilical-assemblies-defense-aircraft",
    benefits: [
      {
        title: "Full MIL-STD-1760 Electrical Compliance",
        body: "MIL-STD-1760 specifies the complete aircraft-to-store interface: power (28V DC and 115V AC), discrete signals, and MIL-STD-1553B data bus communications. Gore MIL-STD-1760 cables are designed to meet the standard's electrical requirements including impedance control for the 1553B bus, power conductor sizing, and the complete connector pin-out — enabling plug-and-play compatibility with store management systems and certified smart weapons.",
      },
      {
        title: "Qualified for External Store Environments",
        body: "External store cables operate in an environment of intense aerodynamic pressure, vibration from the aircraft and weapon, rain, icing, and temperature extremes from high-altitude cold to low-altitude heat. Gore's ruggedized cable construction and qualified connector interfaces are tested to the environmental conditions of MIL-STD-810 and the specific store interface qualification requirements — providing confidence for both development and production weapons programs.",
      },
      {
        title: "Ruggedized Connectors Resist Repeated Mating Cycles",
        body: "Stores are loaded and unloaded repeatedly across many sorties. The aircraft-to-store connector must remain functional through hundreds of mating cycles under ground-handling conditions that include contamination, misalignment, and physical impact. Gore MIL-STD-1760 assemblies use qualified ruggedized connector interfaces rated for the mating cycles and abuse conditions of operational aircraft weapons loading.",
      },
    ],
    specs: [
      { label: "Standard Compliance", value: "MIL-STD-1760 aircraft-to-store interface" },
      { label: "Data Bus", value: "MIL-STD-1553B (1 Mbit/s)" },
      { label: "Power Circuits", value: "28V DC, 115V AC 400 Hz" },
      { label: "Connector Type", value: "Ruggedized MIL-spec circular" },
      { label: "Operating Temperature", value: "-65°C to +200°C" },
      { label: "Environmental Rating", value: "MIL-STD-810 (vibration, rain, icing, temp)" },
      { label: "EMI Shielding", value: "MIL-STD-461 compatible" },
    ],
    applications: [
      "Fighter aircraft wing and centerline pylon cable assemblies",
      "Smart bomb and precision guided munition (PGM) interface cables",
      "Targeting and surveillance pod electrical interfaces",
      "Air-to-air and air-to-surface missile interface cables",
      "Conformal fuel tank data and discrete signal interfaces",
      "Electronic warfare pod aircraft interface harnesses",
    ],
    faq: [
      {
        q: "Does MIL-STD-1760 apply to all NATO fighter aircraft?",
        a: "MIL-STD-1760 is a US military standard that has been adopted by NATO allies and applied broadly to fighter aircraft capable of employing smart weapons. Most modern F-16, F-15, F/A-18, Eurofighter, and Rafale variants use MIL-STD-1760 compliant store interfaces. Israeli Air Force platforms that are MIL-STD-1760 compatible are served by RSTECH's supply of Gore-qualified cable assemblies.",
      },
      {
        q: "What is the MIL-STD-1553B bus specification for store interface cables?",
        a: "MIL-STD-1553B operates at 1 Mbit/s with a characteristic impedance of 70–85 Ω (transformer-coupled). The cable must maintain this impedance and provide shielding effectiveness adequate for the aircraft electromagnetic environment. Gore 1760 cables are characterized to these requirements with test data to support qualification documentation.",
      },
      {
        q: "Can Gore MIL-STD-1760 cables be supplied with export-controlled documentation?",
        a: "Store interface cables for military aircraft are subject to export control regulations (ITAR/EAR). RSTECH Electronics manages all export compliance requirements for supplying these cables to Israeli defense customers. We work directly with Gore and the relevant authorities to ensure full compliance with all applicable regulations.",
      },
      {
        q: "Can RSTECH supply both the aircraft-side and store-side cable assemblies?",
        a: "RSTECH Electronics can source Gore cable assemblies for both the aircraft pylon/adapter side and the store (weapon or pod) side of the MIL-STD-1760 interface. Contact us with your specific platform and store interface requirements to initiate a technical review.",
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
