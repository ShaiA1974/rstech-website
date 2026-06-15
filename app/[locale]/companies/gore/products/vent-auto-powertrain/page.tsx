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
    title: "Automotive Powertrain Vents — Gore via RSTECH Electronics Israel | VE2148, VE2048",
    description:
      "Gore ePTFE vents for transmissions, axles, and e-drivetrains. Oil-resistant, up to +150°C continuous, snap-in and tube-mount options. Authorized in Israel — RSTECH Electronics. Part numbers: VE2148 (Direct-Fit), VE2048 (Tube-Mount).",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/vent-auto-powertrain`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/vent-auto-powertrain`,
        he: `https://www.rstech.co.il/he/companies/gore/products/vent-auto-powertrain`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/vent-auto-powertrain`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-auto-powertrain.jpg";

  const product = {
    name: "Automotive Powertrain Vents",
    tagline: "Rugged Venting for Transmissions, Axles & E-Drivetrains",
    headline: "Protect Powertrain Seals from Pressure Differentials — In Oil, Heat, and Water Wading",
    subheadline:
      "Gore powertrain vents rapidly equalize pressure in transmissions, differentials, axles, and e-drivetrains — preventing seal failures from thermal cycling, oil aerosols, and water wading events that cause expensive field failures.",
    description:
      "Powertrain housings face some of the most demanding venting requirements in the vehicle: continuous exposure to hot gear oil and aerosols, extreme temperature cycling between cold-start and operating temperature, and periodic water wading events that create rapid external pressure loads on seals. Without an effective vent, these pressure differentials cause premature seal failure and allow fluid or water ingress — leading to costly transmission and axle damage. Gore's Direct-Fit (AVS 2148 / VE2148) and Tube-Mount (AVS 41 / VE2048) powertrain vents address each of these failure modes. The integrated pre-filter protects the Gore ePTFE membrane from internal oil aerosols that would plug an unprotected vent. The breathable membrane continuously equalizes pressure, reducing seal stress across all operating conditions. Tube-mount variants distance the vent from heat sources and oil mist by routing through a flexible tube to a cooler, cleaner location — enabling easy replacement without disturbing the main housing.",
    industries: ["Automotive", "Commercial Vehicles", "Electric Vehicles (EV)"],
    goreUrl: "https://www.gore.com/products/automotive-vents-powertrain-protection-performance",
    benefits: [
      {
        title: "Oil-Resistant Membrane with Integrated Pre-Filter",
        body: "Standard ePTFE vents can be plugged by oil aerosols generated inside transmission and gearbox housings. Gore's powertrain vents incorporate an integrated pre-filter that captures oil mist before it reaches the ePTFE membrane, maintaining full airflow capacity over the service life of the unit and protecting the membrane's breathability.",
      },
      {
        title: "Eliminates Water Wading Test Failures",
        body: "When a vehicle descends rapidly into water during wading, the sudden pressure differential across powertrain seals is one of the primary causes of field seal failures. Gore powertrain vents equalize this pressure spike fast enough to prevent over-stressing the seal, enabling compliance with OEM wading test standards without seal design changes.",
      },
      {
        title: "Up to +150°C Continuous Operation",
        body: "The High Temperature snap-fit variant is rated for continuous operation at +150°C and is resistant to mineral oil — making it suitable for automatic transmission housings, differentials, and e-drivetrain gearboxes that operate at sustained high temperatures during towing or high-load driving cycles.",
      },
      {
        title: "Direct-Fit and Tube-Mount Configurations",
        body: "The Direct-Fit variant (AVS 2148) integrates compactly into space-constrained housings. The Tube-Mount variant (AVS 41) uses a flexible tube to route the vent to a more favorable location — physically separating it from internal heat and oil mist, and enabling replacement without opening the main housing. Both are snap-fit for straightforward assembly integration.",
      },
      {
        title: "Reduces Overall System Cost",
        body: "By extending seal service life and eliminating vent-related wading failures, Gore powertrain vents reduce warranty costs and field service events. The compact, lightweight design also eliminates the need for machined vent plugs or labyrinth seal solutions that add mass and manufacturing cost to the powertrain housing.",
      },
      {
        title: "Compatible with ICE, Hybrid, and EV Drivetrains",
        body: "Gore powertrain vents are specified for conventional gearboxes, transmissions, and differentials as well as for e-drivetrains and e-motors in BEV and PHEV applications. The same membrane technology that handles hot gear oil in an ICE transmission is equally effective in the sealed gearbox of a high-torque electric axle.",
      },
    ],
    specs: [
      { label: "Direct-Fit Sample / Production", value: "AVS 2148 / VE2148" },
      { label: "Tube-Mount Sample / Production", value: "AVS 41 / VE2048" },
      { label: "Mounting Style", value: "Snap-fit (both variants)" },
      { label: "Standard Max Temperature", value: "+125°C continuous" },
      { label: "High Temperature Variant", value: "+150°C continuous, mineral oil resistant" },
      { label: "Oil Aerosol Protection", value: "Integrated pre-filter" },
      { label: "Application Standards", value: "OEM wading test compliant" },
      { label: "Drivetrain Compatibility", value: "ICE, hybrid, BEV e-drivetrains" },
      { label: "Regulatory Compliance", value: "EU REACH (PFOA-free)" },
    ],
    applications: [
      "Automatic and manual transmission housings in passenger and commercial vehicles",
      "Front and rear differential housings",
      "Transfer case assemblies in 4WD and AWD systems",
      "E-drivetrain gearboxes and e-axle housings in BEV and PHEV",
      "Electric motor housings exposed to internal oil mist",
      "Industrial and off-highway vehicle gearboxes",
    ],
    faq: [
      {
        q: "Why does a powertrain housing need a vent at all?",
        a: "As a transmission or differential heats up during operation, the air and vapor inside expand and must have somewhere to go — otherwise pressure builds until it escapes past seals. When the housing cools, negative pressure can draw external air or water back in the same way. A Gore vent provides a controlled path for this pressure exchange while blocking contaminant ingress through the vent.",
      },
      {
        q: "What is the tube-mount vent and when should I specify it?",
        a: "The tube-mount variant (AVS 41) attaches to the housing via a flexible tube rather than directly to the housing port. This allows the vent itself to be positioned away from the hottest parts of the powertrain and away from the highest concentration of oil aerosols inside the housing. It is also field-replaceable without opening the gearbox. Specify the tube-mount version when direct-mounting location is thermally or contamination-adverse, or when serviceability is a requirement.",
      },
      {
        q: "Can the Gore powertrain vent handle full water immersion during wading?",
        a: "Gore powertrain vents are designed to comply with OEM wading test standards, which involve specific immersion depths and durations. The vent rapidly equalizes the external pressure surge from immersion, reducing the pressure load on housing seals to within their design tolerance. Contact RSTECH Electronics for specific wading depth and duration parameters for the variant you are considering.",
      },
      {
        q: "Is the integrated pre-filter a separate serviceable component?",
        a: "No — the pre-filter is integrated into the vent assembly and is not a separately serviceable element. The entire vent assembly (pre-filter + membrane + housing) is replaced as a unit. In applications where oil aerosol loading is very high, the tube-mount variant is often preferred because it can be replaced in the field without disturbing the main housing.",
      },
    ],
  };

  const gradient = "from-slate-100 to-slate-50";
  const glowColor = "bg-slate-500/10";
  const catHref = "/companies/gore/products?cat=vents";

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-auto-powertrain" url={"https://www.rstech.co.il/en/companies/gore/products/vent-auto-powertrain"} />
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

        <GorePartNumbers id="vent-auto-powertrain" />

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
