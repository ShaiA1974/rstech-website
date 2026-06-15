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
    title: "HDMI Cables — Gore Cables via RSTECH Electronics Israel",
    description: "Gore ultra-thin, flexible HDMI cables delivering uncompromised 4K video over long distances. For medical, industrial & electronics applications. Distributed by RSTECH Israel.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/data-hdmi`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/data-hdmi`,
        he: `https://www.rstech.co.il/he/companies/gore/products/data-hdmi`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/data-hdmi`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/data-hdmi.jpg";

  const product = {
    name: "HDMI Cables",
    tagline: "4K Video Over Distance — Without Compromise",
    headline: "Ultra-Thin HDMI Cables That Deliver 4K Where Standard Cables Fail",
    subheadline: "Gore HDMI Cables maintain full 4K/UHD signal integrity at run lengths and in dynamic routing scenarios where standard HDMI cables produce signal dropouts, artifacts, and HDCP handshake failures. Engineered for professional, medical, and industrial display applications.",
    description: "Ultra-thin, flexible HDMI cables that deliver uncompromised 4K video over distances where standard cables suffer signal degradation.",
    industries: ["Electronics", "Medical", "Industrial"],
    goreUrl: "https://www.gore.com/products/hdmi-cables-aerospace-defense-air-land",
    features: [
      "HDMI 2.0 specification support for 4K/60Hz and HDR",
      "Ultra-thin diameter enables flexible routing in tight spaces",
      "Low-skew TMD S pairs for pixel-perfect display output",
      "Rated for continuous flex in motorized and articulating installations",
      "Comprehensive EMI shielding for clean signal in interference-rich environments",
      "Available in standard and locking connector variants",
    ],
    benefits: [
      {
        title: "4K Signal Integrity at Extended Lengths",
        body: "Consumer HDMI cables degrade 4K/60Hz signals beyond 5–7 meters due to increasing capacitance and loss. Gore's low-loss dielectric and controlled differential pair geometry maintain eye-diagram compliance at significantly longer runs, eliminating expensive active HDMI extenders in most professional installations.",
      },
      {
        title: "Flex Life for Articulating Displays and Camera Arms",
        body: "Surgical booms, robotic camera mounts, and articulating monitor arms flex their HDMI connections thousands of times per year. Standard HDMI cables fail within months in these applications. Gore's rated flex-life construction keeps video streams running through years of dynamic use.",
      },
      {
        title: "Slim Profile for Challenging Routing",
        body: "Gore's ultra-thin HDMI cable diameter — often less than half that of consumer HDMI — makes it practical to route video through cable conduits, behind displays, and through wall penetrations that standard cable cannot navigate. This simplifies installation and improves aesthetics in professional installations.",
      },
    ],
    specs: [
      { label: "HDMI Version", value: "HDMI 2.0 (4K/60Hz, HDR)" },
      { label: "Max Bandwidth", value: "18 Gbps" },
      { label: "Max Resolution", value: "4K UHD (3840×2160) @ 60Hz" },
      { label: "Cable OD", value: "~4.0 mm (ultra-thin)" },
      { label: "Operating Temperature", value: "-40°C to +85°C" },
      { label: "Shielding", value: "Individual pair foil + overall braid" },
    ],
    applications: [
      "Surgical suite display boom and monitor arm connections",
      "Medical imaging system display output cabling",
      "Industrial HMI panel and operator station video links",
      "Broadcast camera and production monitor cabling",
      "Simulation and training system display networks",
      "Conference room and control room display installations",
    ],
    faq: [
      {
        q: "Do Gore HDMI cables support HDCP 2.2 for 4K content protection?",
        a: "Yes. Gore HDMI cables faithfully pass all HDMI data signals including the HDCP 2.2 authentication traffic required for 4K protected content. The controlled impedance construction ensures the handshake completes reliably even at extended lengths.",
      },
      {
        q: "What is the maximum length available for 4K/60Hz operation?",
        a: "Maximum length for 4K/60Hz operation depends on the specific Gore cable construction. Achievable lengths typically exceed standard cable specifications. Contact RSTECH Electronics with your required length and resolution and we will recommend the appropriate product.",
      },
      {
        q: "Are these cables suitable for use in medical environments?",
        a: "Yes. Gore HDMI cables are specified in surgical suite display installations and medical imaging workstation connections. Their reliable signal performance reduces the risk of display dropouts during critical procedures.",
      },
      {
        q: "Can these cables handle audio return channel (ARC) and CEC signals?",
        a: "Yes. Gore HDMI cables support all HDMI feature signals including ARC, eARC, CEC, and HPD in addition to the video and audio data channels.",
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
