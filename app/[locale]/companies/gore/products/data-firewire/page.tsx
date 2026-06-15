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
    title: "FireWire Cables — Gore Cables via RSTECH Electronics Israel",
    description: "Gore FireWire (IEEE 1394) cables with exceptional flex performance and signal integrity for industrial imaging and data acquisition. Distributed by RSTECH Electronics Israel.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/data-firewire`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/data-firewire`,
        he: `https://www.rstech.co.il/he/companies/gore/products/data-firewire`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/data-firewire`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/data-firewire.jpg";

  const product = {
    name: "FireWire Cables",
    tagline: "IEEE 1394 Performance Built for Industrial Duty Cycles",
    headline: "FireWire Cables With the Flex Life That Demanding Imaging Systems Require",
    subheadline: "Gore FireWire (IEEE 1394) Cables deliver consistent isochronous data transfer and signal integrity through millions of flex cycles — critical for machine vision systems, industrial cameras, and data acquisition equipment that move continuously in operation.",
    description: "High-speed FireWire (IEEE 1394) cables offering exceptional flex performance and signal integrity for industrial imaging and data acquisition systems.",
    industries: ["Industrial", "Medical", "Electronics"],
    goreUrl: "https://www.gore.com/products/firewire-cables-aerospace-defense-air-land",
    features: [
      "IEEE 1394a (400 Mbps) and 1394b (800 Mbps) support",
      "Rated for millions of flex cycles in cable track applications",
      "Low skew between signal pairs for reliable isochronous transfer",
      "Lightweight construction reduces camera and arm payload",
      "EMI shielded to prevent interference in industrial environments",
      "Available with 4-pin, 6-pin, and 9-pin connector configurations",
    ],
    benefits: [
      {
        title: "Continuous-Flex Performance Without Frame Drops",
        body: "Machine vision cameras mounted on robotic arms, gantry systems, and conveyor-tracking platforms must maintain uninterrupted image streams through constant motion. Gore FireWire cables are engineered for continuous-flex environments, maintaining full electrical performance through millions of bend cycles without signal dropouts.",
      },
      {
        title: "Isochronous Transfer Integrity for Real-Time Data",
        body: "FireWire's isochronous transfer mode guarantees bandwidth reservation for time-sensitive data streams — but only if the cable maintains electrical integrity. Gore cables preserve the tight differential pair skew and impedance matching that isochronous FireWire transfer requires, preventing the timing errors that corrupt image data.",
      },
      {
        title: "Weight Savings That Improve Machine Performance",
        body: "In robotic camera mounts and scanning systems, cable weight affects acceleration, repeatability, and motor sizing. Gore's fine-wire FireWire cables weigh significantly less than standard versions, improving dynamic performance and reducing mechanical stress on mounting hardware.",
      },
    ],
    specs: [
      { label: "Standard", value: "IEEE 1394a / 1394b" },
      { label: "Data Rate", value: "400 Mbps / 800 Mbps" },
      { label: "Operating Temperature", value: "-55°C to +105°C" },
      { label: "Minimum Bend Radius", value: "20 mm" },
      { label: "Shielding", value: "Individual pair foil + overall braid" },
      { label: "Connector Options", value: "4-pin, 6-pin, 9-pin" },
    ],
    applications: [
      "Industrial machine vision camera links on robotic arms",
      "Conveyor-mounted inspection system image transfer",
      "Medical endoscope and surgical camera data connections",
      "Scientific instrument high-speed data acquisition",
      "Motion-capture studio camera link cabling",
      "Semiconductor wafer inspection system imaging buses",
    ],
    faq: [
      {
        q: "What data rates do Gore FireWire cables support?",
        a: "Gore FireWire cables support IEEE 1394a at 400 Mbps and IEEE 1394b (FireWire 800) at 800 Mbps. The appropriate standard depends on your camera or device interface.",
      },
      {
        q: "Are these cables rated for cable carrier (energy chain) applications?",
        a: "Yes. Gore FireWire cables are specifically engineered for continuous-flex applications including cable carriers, festoon systems, and robotic arm installations where the cable is in constant motion.",
      },
      {
        q: "Can I get custom lengths for integration into existing equipment?",
        a: "Custom lengths are available through RSTECH Electronics. Provide your required length and connector specifications and we will source the appropriate Gore cable assembly.",
      },
      {
        q: "Is FireWire still relevant for new industrial designs?",
        a: "Yes — FireWire remains widely used in industrial machine vision, scientific imaging, and certain medical device applications where its isochronous transfer capabilities and device power delivery (6-pin) are valuable. Gore continues to support these applications with current cable solutions.",
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
