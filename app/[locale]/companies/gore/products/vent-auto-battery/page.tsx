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
    title: "Automotive Battery Vents — Gore via RSTECH Electronics Israel",
    description:
      "Gore ePTFE vents for EV Li-Ion battery packs and BMS modules. IPX7-rated, high-volume gas release, thermal event pressure venting. Authorized distributor in Israel — RSTECH Electronics. Part numbers: AMF300114, AMF300070, AMF300200, NVA9064.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/gore/products/vent-auto-battery`,
      languages: {
        en: `https://rstech.co.il/en/companies/gore/products/vent-auto-battery`,
        he: `https://rstech.co.il/he/companies/gore/products/vent-auto-battery`,
        "x-default": `https://rstech.co.il/en/companies/gore/products/vent-auto-battery`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-auto-battery.jpg";

  const product = {
    name: "Automotive Battery Vents",
    tagline: "Pressure Management for EV Battery Packs & BMS Modules",
    headline: "EV Battery Safety Starts with Reliable Pressure Equalization",
    subheadline:
      "Gore automotive battery vents protect Li-Ion battery packs and Battery Management Systems against pressure buildups from temperature cycling and altitude changes — while maintaining IPX7 ingress protection against water, salts, and automotive fluids.",
    description:
      "Electric vehicle battery packs operate in one of the harshest environments in automotive engineering: sealed enclosures that must withstand temperature swings from −30°C to +75°C, altitude changes, vibration, and exposure to water and road chemicals — while safely managing the pressure differentials these conditions generate. Gore's ePTFE membrane vents solve this with a single compact component. Under normal operation, the breathable membrane continuously equalizes pressure, preventing seal stress and condensation ingress. In the event of a thermal incident, the Super High Airflow series provides 3x the minimum airflow of standard High Airflow models, enabling rapid gas release through a single vent rather than requiring multiple components. 100% inline quality inspection ensures water entry pressure consistency across every unit shipped.",
    industries: ["Automotive", "Electric Vehicles (EV)", "Battery Systems"],
    goreUrl: "https://www.gore.com/products/vents-automotive-battery-components",
    benefits: [
      {
        title: "Continuous Pressure Equalization",
        body: "EV battery packs experience repeated pressure differentials from thermal cycling, altitude change, and charge/discharge heating. Without equalization, these forces stress seals and gaskets, eventually causing ingress failures. Gore's breathable ePTFE membrane equalizes these pressures continuously and passively — no valves, no maintenance, no failure modes.",
      },
      {
        title: "IPX7 Ingress Protection",
        body: "Water, road salts, mud, and automotive fluids are excluded by Gore's hydrophobic membrane. IPX7 rating confirms protection against immersion to 1 meter for 30 minutes — covering all foreseeable road and wash scenarios. 100% inline quality inspection validates water entry pressure on every unit, not just a statistical sample.",
      },
      {
        title: "High-Volume Gas Release for Thermal Events",
        body: "The Super High Airflow series delivers 3x the gas release capacity of standard High Airflow models. In a thermal runaway scenario, rapid gas venting through a single Gore vent — rather than relying on rupture discs or multiple smaller vents — reduces BMS housing stress and can delay or contain thermal propagation, contributing to battery pack safety margin.",
      },
      {
        title: "Snap-Fit Integration — Fast Assembly",
        body: "Gore battery vents use a snap-fit mounting system compatible with both plastic and metal enclosures. No adhesives, no threaded inserts, no specialized tooling. Combined with the compact, lightweight form factor, this enables straightforward integration into high-volume battery pack production lines.",
      },
      {
        title: "Lead-Acid EFB Battery Support",
        body: "The GORE® Catalytic Device for Enhanced Flooded Battery (EFB) applications recombines hydrogen and oxygen generated during charging, reducing electrolyte loss to EN 50342-1 W5 levels. This improves Dynamic Charge Acceptance (DCA) and extends battery service life in start-stop vehicle applications.",
      },
      {
        title: "Compact Series for Space-Constrained BMS",
        body: "The Compact Series addresses the packaging challenges of modern BMS modules. Low-profile form factor with a Digital Matrix Code (DMC) for traceability, enabling deployment in densely populated electronics housings where standard vent footprints cannot be accommodated.",
      },
    ],
    specs: [
      { label: "Sample Part Numbers", value: "AVS 14, AVS 70, AVS 200" },
      { label: "IP Rating", value: "IPX7 (immersion 1m/30min)" },
      { label: "Operating Temperature", value: "−30°C to +75°C" },
      { label: "Super High Airflow", value: "3× standard High Airflow models" },
      { label: "High Airflow Series", value: "5× Standard Series airflow" },
      { label: "Mounting", value: "Snap-fit (plastic & metal enclosures)" },
      { label: "Quality Control", value: "100% inline water entry pressure inspection" },
      { label: "EFB Catalytic Device", value: "EN 50342-1 W5 compliant" },
      { label: "Regulatory Compliance", value: "EU REACH (PFOA-free)" },
    ],
    applications: [
      "Li-Ion battery packs in battery electric vehicles (BEV) and plug-in hybrids (PHEV)",
      "Battery Management System (BMS) electronics housings",
      "48V mild-hybrid battery modules",
      "Enhanced Flooded Battery (EFB) lead-acid cells in start-stop vehicles",
      "High-voltage junction boxes and power distribution units",
      "Stationary battery energy storage systems (BESS)",
    ],
    faq: [
      {
        q: "What is the difference between the Standard, High Airflow, and Super High Airflow series?",
        a: "All three series provide IPX7 ingress protection and continuous pressure equalization. They differ in ePTFE membrane area and thus maximum airflow rate. The Standard Series handles normal thermal cycling. The High Airflow Series provides 5× the airflow of the Standard — suitable for larger battery packs. The Super High Airflow Series provides 3× the minimum airflow of the High Airflow models, enabling a single vent to replace multiple standard vents and providing greater gas release capacity for thermal event scenarios.",
      },
      {
        q: "Does the Gore battery vent meet automotive IP6K9K requirements?",
        a: "The battery vent series is IPX7-rated (1m immersion, 30min), which addresses the primary ingress risk for sealed battery enclosures. If your application requires IP6K9K high-pressure spray resistance, Gore's automotive electronics vent series includes IP6K9K-compliant options. Contact RSTECH Electronics to discuss which series matches your IP specification.",
      },
      {
        q: "Can one vent handle the gas release requirements of a large EV battery pack?",
        a: "For most battery pack configurations, the Super High Airflow series allows a single vent to replace multiple standard vents, simplifying the housing design. For very large battery packs, multiple Super High Airflow vents may be specified. Gore provides application engineering support to determine the correct configuration — RSTECH Electronics can facilitate this consultation.",
      },
      {
        q: "Are flame-retardant versions of Gore battery vents available?",
        a: "Yes. Flame-retardant housing versions are available for applications where UL94 V-0 or equivalent flammability ratings are required by the system specification. Please specify your flammability requirement when contacting RSTECH Electronics.",
      },
    ],
  };

  const gradient = "from-slate-100 to-slate-50";
  const glowColor = "bg-slate-500/10";
  const catHref = "/companies/gore/products?cat=vents";

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-auto-battery" url={"https://rstech.co.il/en/companies/gore/products/vent-auto-battery"} />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative bg-[#0F172A] overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className={`absolute top-0 right-1/3 w-96 h-96 ${glowColor} rounded-full blur-3xl -translate-y-1/2 pointer-events-none`}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 flex-wrap">
              <Link
                href="/companies"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Companies
              </Link>
              <span>/</span>
              <Link
                href="/companies/gore"
                className="hover:text-white transition-colors cursor-pointer"
              >
                W.L. Gore
              </Link>
              <span>/</span>
              <Link
                href={catHref}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Products
              </Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>W.L. Gore — Authorized in Israel</span>
                </div>
                <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-2">
                  {product.tagline}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {product.headline}
                </h1>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {product.subheadline}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact?product=W.L. Gore"
                    className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer"
                  >
                    Request Pricing <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={product.goreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    View on Gore.com <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div
                className={`rounded-2xl overflow-hidden h-64 lg:h-80 bg-gradient-to-br ${gradient} flex items-center justify-center`}
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="text-6xl font-black text-slate-200 mb-2">
                      GORE
                    </div>
                    <div className="text-slate-400 font-semibold">
                      {product.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-white border-b border-[#e2e8f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <FadeUp>
              <p className="text-xl text-[#4a5568] max-w-3xl leading-relaxed">
                {product.description}
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#f0f4f8] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#1a202c]">
                Why Choose Gore {product.name}?
              </h2>
              <div className="mt-3 h-1 w-12 bg-[#CC1C1C] mx-auto rounded-full" />
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.benefits.map((b, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-5 h-5 text-[#CC1C1C]" />
                    </div>
                    <h3 className="font-bold text-[#1a202c] mb-2">{b.title}</h3>
                    <p className="text-sm text-[#4a5568] leading-relaxed">
                      {b.body}
                    </p>
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
                  <h2 className="text-2xl font-bold text-[#1a202c] mb-4">
                    Technical Specifications
                  </h2>
                  <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-6" />
                  <dl className="space-y-3">
                    {product.specs.map((s) => (
                      <div
                        key={s.label}
                        className="flex justify-between py-2.5 border-b border-[#f0f4f8]"
                      >
                        <dt className="text-sm font-medium text-[#7A8A99]">
                          {s.label}
                        </dt>
                        <dd className="text-sm font-semibold text-[#1a202c] text-end">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-[#1a202c] mb-4">
                    Applications
                  </h2>
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
              <h2 className="text-xl font-bold text-[#1a202c] mb-6">
                Industries Served
              </h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {product.industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-sm font-medium text-[#334155] bg-white border border-[#e2e8f0] px-4 py-2 rounded-full shadow-sm"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        <GorePartNumbers id="vent-auto-battery" />

        {/* FAQ */}
        <div className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#1a202c]">
                Frequently Asked Questions
              </h2>
              <div className="mt-3 h-1 w-12 bg-[#CC1C1C] mx-auto rounded-full" />
            </FadeUp>
            <div className="space-y-4">
              {product.faq.map((item, i) => (
                <FadeUp key={i} delay={i * 0.05}>
                  <div className="border border-[#e2e8f0] rounded-xl p-5">
                    <h3 className="font-semibold text-[#1a202c] mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm text-[#4a5568] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0F172A] py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to source {product.name} in Israel?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Contact RSTECH Electronics — your authorized Gore representative
              in Israel.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact?product=W.L. Gore"
                className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#A01515] transition-colors cursor-pointer"
              >
                Contact RSTECH <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={catHref}
                className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
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
