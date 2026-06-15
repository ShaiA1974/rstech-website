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
    title: "SpaceWire Cables — Gore via RSTECH Electronics Israel",
    description: "Gore SpaceWire cables: ECSS-E-50-12 compliant, 200 Mbit/s, EMI shielded for high-speed on-board spacecraft data networks. Authorized Gore distributor in Israel — RSTECH Electronics.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/space-spacewire`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/space-spacewire`,
        he: `https://www.rstech.co.il/he/companies/gore/products/space-spacewire`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/space-spacewire`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/space-spacewire.jpg";

  const product = {
    name: "SpaceWire Cables",
    tagline: "ECSS-E-50-12 Compliant On-Board Spacecraft Data Networks",
    headline: "SpaceWire Cables: 200 Mbit/s On-Board Data Networks for Spacecraft",
    subheadline: "Gore SpaceWire cables comply with the ESA SpaceWire standard (ECSS-E-50-12), enabling reliable 200 Mbit/s high-speed data networks that connect spacecraft processors, instruments, mass memory, and telemetry systems through EMI-shielded, space-qualified interconnects.",
    description: "ESA SpaceWire standard-compliant cables for high-speed on-board data handling networks in spacecraft, enabling reliable 200 Mbit/s communication. Gore SpaceWire cables combine the electrical performance required by the ECSS-E-50-12 standard with the environmental qualification demanded by space programs — radiation tolerance, low outgassing, and extreme thermal performance.",
    industries: ["Space", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/spacewire",
    benefits: [
      {
        title: "Full ECSS-E-50-12 Standard Compliance",
        body: "The SpaceWire standard defines detailed cable electrical requirements including characteristic impedance (100 Ω differential), signal rise time, propagation delay, and EMI shielding effectiveness. Gore SpaceWire cables are designed and characterized to meet these specifications, simplifying the compliance verification process for system integrators and reducing the risk of SpaceWire link margin failures during system testing.",
      },
      {
        title: "EMI Shielding for Clean Data in Noisy Spacecraft",
        body: "Spacecraft are electrically noisy environments — switching power converters, reaction wheel motors, and RF transmitters all generate electromagnetic interference that can corrupt high-speed serial data. Gore SpaceWire cables provide high-effectiveness EMI shielding that maintains signal integrity at 200 Mbit/s even when routed alongside power cables in dense harness bundles.",
      },
      {
        title: "Space-Grade Environmental Qualification",
        body: "Standard SpaceWire cables designed for ground use lack the radiation tolerance, low outgassing, and thermal cycling capability required for flight. Gore SpaceWire cables add full space environmental qualification to the SpaceWire electrical performance — covering radiation hardening, ECSS outgassing compliance, and the -180°C to +200°C operating temperature range of orbital environments.",
      },
    ],
    specs: [
      { label: "Standard Compliance", value: "ECSS-E-50-12 (SpaceWire)" },
      { label: "Data Rate", value: "Up to 200 Mbit/s" },
      { label: "Characteristic Impedance", value: "100 Ω differential" },
      { label: "EMI Shielding", value: "High-effectiveness braid + foil" },
      { label: "Insulation", value: "Radiation-tolerant ePTFE" },
      { label: "Operating Temperature", value: "-180°C to +200°C" },
      { label: "Outgassing", value: "ECSS-Q-ST-70-02 compliant" },
    ],
    applications: [
      "On-board data handling (OBDH) computer network interconnects",
      "Science instrument to mass memory data buses",
      "Image data routing from Earth observation cameras",
      "Star tracker and AOCS sensor data links",
      "Remote terminal unit (RTU) data collection networks",
      "Spacecraft avionics cross-strapping and redundancy buses",
    ],
    faq: [
      {
        q: "What is the SpaceWire standard and why does it matter for cable selection?",
        a: "SpaceWire (ECSS-E-50-12) is an ESA-developed standard for high-speed serial links in spacecraft. It specifies point-to-point links at up to 200 Mbit/s using Low Voltage Differential Signaling (LVDS). The cable must meet specific impedance, attenuation, and shielding requirements to achieve reliable link operation — making cable specification a direct factor in system performance.",
      },
      {
        q: "Can Gore SpaceWire cables be used with commercial SpaceWire router ASICs?",
        a: "Yes. Gore SpaceWire cables are compatible with all commercial SpaceWire router and endpoint ASICs (including those from Aeroflex/Gaisler, STAR-Dundee, and others) when used within the cable length limits specified by the standard for the chosen data rate.",
      },
      {
        q: "What is the maximum cable length for SpaceWire at 200 Mbit/s?",
        a: "The ECSS-E-50-12 standard recommends maximum cable lengths that depend on the cable's electrical characteristics. Gore SpaceWire cables' low attenuation and controlled impedance support links at the maximum data rates and typical spacecraft internal lengths. Contact RSTECH for link budget analysis support for your specific topology.",
      },
      {
        q: "Does RSTECH stock SpaceWire cable or is it made-to-order?",
        a: "SpaceWire cable for space programs is typically procured on a project basis due to the documentation and traceability requirements. RSTECH Electronics manages the ordering and documentation process from Gore's production facilities. Contact us early in your program planning to ensure cable availability aligns with your integration schedule.",
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
