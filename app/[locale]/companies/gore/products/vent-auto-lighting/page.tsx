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
    title: "Exterior Lighting Vents — Gore via RSTECH Electronics Israel | VE2122, VE2068, VE2113, VE2084, VE2100",
    description:
      "Gore ePTFE vents for automotive headlamps, tail lamps, and LED assemblies. IP6K/IPX9K, prevents fogging, UV-stable membrane. Authorized distributor in Israel — RSTECH Electronics. Key part numbers: VE2122, VE2068, VE2113, VE2084, VE2051, VE2100, VE2110, VE2117.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/gore/products/vent-auto-lighting`,
      languages: {
        en: `https://rstech.co.il/en/companies/gore/products/vent-auto-lighting`,
        he: `https://rstech.co.il/he/companies/gore/products/vent-auto-lighting`,
        "x-default": `https://rstech.co.il/en/companies/gore/products/vent-auto-lighting`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-auto-lighting.jpg";

  const product = {
    name: "Exterior Lighting Vents",
    tagline: "Clear Lenses for the Life of the Vehicle",
    headline: "Eliminate Lamp Fogging and Moisture Damage — IP6K/IPX9K Protected",
    subheadline:
      "Gore adhesive vents for automotive headlamps, rear lamps, fog lamps, and LED assemblies continuously diffuse moisture and equalize pressure — preventing lens fogging and seal failure whether the vehicle is moving or parked.",
    description:
      "Lens fogging in automotive lighting is not just an aesthetic issue — it degrades light output, triggers warranty claims, and in LED assemblies, can accelerate LED degradation from thermal cycling in the presence of moisture. The root cause is straightforward: sealed lamp housings experience temperature and pressure changes that draw moist air in past gaskets and seals if there is no compliant pressure equalization path. Gore's adhesive lighting vents provide that path with a UV-stable ePTFE membrane that is waterproof, dustproof, and breathable. The membrane continuously diffuses moisture out of the lamp housing — whether the vehicle is parked overnight or driving at highway speed — and prevents the pressure differentials that stress seals. Products are rated to IP6K (full dust exclusion), IPX7 (immersion), and up to IPX6K/IPX9K (high-pressure spray) depending on the model selected. IATF16949-certified manufacturing and EU REACH compliance are standard.",
    industries: ["Automotive", "Automotive Lighting", "LED & Optoelectronics"],
    goreUrl: "https://www.gore.com/products/automotive-vents-exterior-lighting-moisture-protection",
    benefits: [
      {
        title: "Continuous Moisture Diffusion — Parked or Moving",
        body: "Unlike one-way check valves that only open under positive pressure, Gore's breathable ePTFE membrane is always active. Moisture vapor diffuses outward through the membrane continuously, even when the vehicle is parked overnight. This prevents the gradual moisture accumulation that eventually results in visible condensation on the inside of the lens.",
      },
      {
        title: "IP6K/IPX7/IPX9K Ingress Protection",
        body: "Full dust exclusion (IP6K), immersion protection to 1 meter (IPX7), and high-pressure spray resistance (up to IPX9K depending on model) ensure that the vent path itself does not become a weakness in the lamp's IP rating. Gore's proprietary membrane materials and IATF16949 manufacturing process deliver consistent IP compliance across production volumes.",
      },
      {
        title: "Higher Moisture Vapor Transmission Than Competing Solutions",
        body: "Gore's AVS 120 delivers 14% greater moisture vapor transmission rate (MVTR) than the industry-reference AVS 9 with identical outer dimensions. The AVS 113 variant showed 25–28% faster condensation clearing in comparative testing. Higher MVTR translates directly to fewer warranty claims and faster lamp recovery after temperature cycling.",
      },
      {
        title: "UV-Stable ePTFE Membrane",
        body: "Automotive exterior lighting is exposed to direct sunlight throughout the vehicle's service life. Gore's ePTFE membrane is intrinsically UV-stable — it does not degrade, discolor, or lose water-repellency under prolonged UV exposure. This is critical for forward-facing assemblies where competing hydrophobic surface treatments can degrade over time.",
      },
      {
        title: "Smallest-Footprint Options for Compact LED Assemblies",
        body: "Modern LED headlamp and tail lamp designs are often constrained by the optical and thermal management packaging, leaving minimal space for accessory components. The AVS 118/119 series offers the smallest footprint in Gore's automotive lighting vent range while maintaining full IP protection and moisture diffusion performance.",
      },
      {
        title: "Seal Pressure Relief — Extends Gasket Life",
        body: "Without pressure equalization, each thermal cycle forces the lamp housing seal to flex against internal/external pressure differentials. Over thousands of cycles, this degrades the seal and eventually allows bulk water ingress. Gore vents eliminate this pressure load on the seal, extending gasket and seal service life and reducing the leak failure rate over the vehicle lifetime.",
      },
    ],
    specs: [
      { label: "Headlamp Models", value: "AVS 120, AVS 113, AVS 9" },
      { label: "Rear Lamp Models", value: "AVS 600, AVS 601, AVS 602" },
      { label: "Fog/Accessory Models", value: "AVS 118, AVS 119" },
      { label: "IP Rating", value: "IP6K, IPX7, up to IPX6K/IPX9K" },
      { label: "Mounting Type", value: "Pressure-sensitive adhesive (PSA)" },
      { label: "MVTR (AVS 120 vs AVS 9)", value: "14% greater with identical dimensions" },
      { label: "Condensation Clearing (AVS 113)", value: "25–28% faster than reference" },
      { label: "Membrane UV Stability", value: "Life-of-vehicle rated" },
      { label: "Quality Certification", value: "IATF16949:2016, EU REACH (PFOA-free)" },
    ],
    applications: [
      "Bi-function LED headlamp assemblies in passenger vehicles",
      "Matrix LED and laser headlight modules",
      "LED tail lamps, stop lamps, and reverse light clusters",
      "Daytime Running Lights (DRL) and indicator assemblies",
      "Front fog lamps and rear fog lamp housings",
      "Auxiliary and aftermarket lighting assemblies",
    ],
    faq: [
      {
        q: "Does the Gore lighting vent affect the IP rating of my lamp housing?",
        a: "Gore lighting vents are tested and rated to IP6K (dust), IPX7 (immersion), and up to IPX9K (high-pressure spray) depending on the model. The vent is designed to preserve or enhance the lamp's overall IP rating — not reduce it. Gore provides IP test data for each model to support your lamp-level IP qualification testing.",
      },
      {
        q: "Which model is right for a compact LED DRL with very limited space?",
        a: "The AVS 118 and AVS 119 series offer the smallest footprint in Gore's lighting vent range and are designed specifically for space-constrained accessory and fog lamp applications. For headlamp modules where space is slightly less constrained, the AVS 120 provides the highest MVTR in the range. Contact RSTECH Electronics with your available footprint dimensions for a specific recommendation.",
      },
      {
        q: "Can Gore lighting vents be applied in automated assembly processes?",
        a: "All Gore adhesive lighting vents are available in reel formats compatible with automated pick-and-place and tape-and-reel assembly processes. Manual application formats are also available for lower-volume or prototype builds. Specify your production process when ordering through RSTECH Electronics.",
      },
      {
        q: "Will the membrane saturate or lose effectiveness over time in a high-humidity climate?",
        a: "Gore's ePTFE membrane does not saturate. It is hydrophobic — water cannot be absorbed into or retained within the membrane structure. Moisture vapor passes through the membrane by diffusion, not by liquid absorption, so the membrane's performance is unaffected by prolonged exposure to humid environments or repeated wetting.",
      },
    ],
  };

  const gradient = "from-slate-100 to-slate-50";
  const glowColor = "bg-slate-500/10";
  const catHref = "/companies/gore/products?cat=vents";

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-auto-lighting" url={"https://rstech.co.il/en/companies/gore/products/vent-auto-lighting"} />
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

        <GorePartNumbers id="vent-auto-lighting" />

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
