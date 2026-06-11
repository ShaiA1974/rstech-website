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
    title: "Ethernet Cables — Gore Cables via RSTECH Electronics Israel",
    description: "Gore Ethernet cables rated for extreme environments — 10GbE+, superior EMI shielding, fine-wire construction. For industrial, medical & aerospace. Distributed by RSTECH Israel.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/gore/products/data-ethernet`,
      languages: {
        en: `https://rstech.co.il/en/companies/gore/products/data-ethernet`,
        he: `https://rstech.co.il/he/companies/gore/products/data-ethernet`,
        "x-default": `https://rstech.co.il/en/companies/gore/products/data-ethernet`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/data-ethernet.jpg";

  const product = {
    name: "Ethernet Cables",
    tagline: "10GbE Networking Built for Environments That Demand More",
    headline: "High-Speed Ethernet Cables Engineered for Extreme Conditions",
    subheadline: "Gore Ethernet Cables bring 10GbE and beyond to environments where standard Cat6/Cat6A cables cannot survive. Fine-wire construction, superior EMI shielding, and exceptional flex life make them the specification of choice for industrial, medical, and aerospace networking.",
    description: "High-speed Ethernet cables rated for extreme environments. Support 10GbE+ with superior EMI shielding, fine-wire construction, and exceptional flex life.",
    industries: ["Industrial", "Medical", "Semiconductor", "Electronics", "Aerospace & Defense"],
    goreUrl: "https://www.gore.com/products/ethernet-cables-aerospace-defense-air-land",
    features: [
      "Supports 10GBASE-T and higher Ethernet standards",
      "Fine-wire conductors reduce weight by up to 70% vs. standard Cat6",
      "Superior crosstalk isolation (NEXT/FEXT) for noise-dense environments",
      "Rated for millions of flex cycles without performance degradation",
      "Operating temperature from -65°C to +165°C",
      "Chemical and fluid resistant jacket options available",
    ],
    benefits: [
      {
        title: "Network Speed Without Compromise in Harsh Environments",
        body: "Standard industrial Ethernet cables sacrifice speed for ruggedness. Gore's engineering achieves both simultaneously — 10GbE data rates with EMC performance that exceeds Cat6A requirements, even when routing cables through electrically noisy environments with motors, drives, and power electronics.",
      },
      {
        title: "Dramatic Weight Reduction for Mobile Systems",
        body: "In robotic arms, autonomous vehicles, and airborne platforms, network cable weight accumulates quickly across an entire system. Gore's fine-wire Ethernet cables can reduce cabling weight by up to 70% compared to conventional Cat6, delivering measurable payload or efficiency benefits.",
      },
      {
        title: "Reliability That Eliminates Network Downtime",
        body: "An Ethernet cable failure in an automated production line or medical device can cause costly downtime or patient safety risks. Gore cables are tested to millions of flex cycles and rated for decades of service in continuous-motion applications — replacing cables becomes a scheduled event, not an emergency.",
      },
    ],
    specs: [
      { label: "Ethernet Standard", value: "10BASE-T to 10GBASE-T" },
      { label: "Category", value: "Cat 6A equivalent" },
      { label: "Operating Temperature", value: "-65°C to +165°C" },
      { label: "Conductor AWG", value: "26–30 AWG" },
      { label: "Shielding", value: "Individual pair foil + overall braid" },
      { label: "Flex Life", value: ">10 million cycles" },
    ],
    applications: [
      "Industrial robot arm Ethernet connections in continuous-flex applications",
      "Medical imaging equipment internal and external data links",
      "Semiconductor fab equipment high-speed process data networks",
      "Avionics Ethernet backbone (ARINC 664 / AFDX)",
      "Autonomous vehicle sensor and compute network cabling",
      "Military ground vehicle C4ISR Ethernet backbones",
    ],
    faq: [
      {
        q: "What Ethernet speeds do Gore industrial Ethernet cables support?",
        a: "Gore Ethernet cables support the full range from 10BASE-T through 10GBASE-T. The specific speed achievable over a given length depends on the cable specification selected. For 10GbE over extended distances, contact RSTECH to identify the appropriate Gore product for your run length.",
      },
      {
        q: "Can these cables handle continuous flexing without losing network connectivity?",
        a: "Yes — this is a primary design requirement for Gore Ethernet cables. They are rated for millions of flex cycles and are specifically designed for continuous-motion applications such as robot arms, cable carrier chains, and pan/tilt camera mounts.",
      },
      {
        q: "How do these compare to standard Cat6A patch cables?",
        a: "Gore Ethernet cables offer similar or superior electrical performance to Cat6A but in a package that is significantly lighter, more flexible, and rated for far wider temperature ranges and harsher environmental conditions. Standard Cat6A cables are not designed for continuous flex, high temperature, or chemical exposure.",
      },
      {
        q: "Are these cables PoE (Power over Ethernet) compatible?",
        a: "Gore Ethernet cables can support PoE and PoE+ (802.3af/at) applications. For high-power PoE++ (802.3bt) applications requiring up to 90W, contact RSTECH to confirm the appropriate gauge and construction for your thermal requirements.",
      },
    ],
  };

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <div className="relative bg-[#0F172A] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 flex-wrap">
              <Link href="/companies" className="hover:text-white transition-colors cursor-pointer">Companies</Link>
              <span>/</span>
              <Link href="/companies/gore" className="hover:text-white transition-colors cursor-pointer">W.L. Gore</Link>
              <span>/</span>
              <Link href="/companies/gore/products?cat=cables" className="hover:text-white transition-colors cursor-pointer">Data Cables</Link>
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
              <div className="rounded-2xl overflow-hidden h-64 lg:h-80 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
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

        <div className="bg-white border-b border-[#e2e8f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <FadeUp>
              <p className="text-xl text-[#4a5568] max-w-3xl leading-relaxed">{product.description}</p>
            </FadeUp>
          </div>
        </div>

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

        <div className="bg-[#f0f4f8] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="text-xl font-bold text-[#1a202c] mb-6">Industries Served</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {product.industries.map((ind) => (
                  <span key={ind} className="text-sm font-medium text-[#334155] bg-white border border-[#e2e8f0] px-4 py-2 rounded-full shadow-sm">
                    {ind}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

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

        <div className="bg-[#0F172A] py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to source {product.name} in Israel?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Contact RSTECH Electronics — your local authorized Gore representative — for pricing, availability, and technical support.</p>
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
