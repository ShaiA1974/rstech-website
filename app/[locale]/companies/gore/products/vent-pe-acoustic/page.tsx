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
    title: "Portable Electronic Acoustic Vents — Gore Vents via RSTECH Electronics Israel | GAW111, GAW112, GAW333, GAW337",
    description: "Gore ultra-thin ePTFE acoustic vent membranes for smartphones, wearables & hearables. IP67/IP68 compliant, sub-0.3 mm thick, minimal acoustic loss. RSTECH Electronics Israel. Part numbers: GAW111, GAW112, GAW333, GAW334, GAW337, GAW342, GAW344, GAW346, GAW348, GAW350.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/vent-pe-acoustic`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/vent-pe-acoustic`,
        he: `https://www.rstech.co.il/he/companies/gore/products/vent-pe-acoustic`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/vent-pe-acoustic`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-pe-acoustic.jpg";

  const product = {
    name: "Portable Electronic Acoustic Vents",
    tagline: "Waterproof Audio — Without the Trade-Off",
    headline: "Protect Microphones and Speakers Without Muffling the Sound",
    subheadline: "Gore acoustic ePTFE vent membranes provide IP67/IP68 liquid and dust protection for smartphone microphones, hearable speakers, and wearable audio ports — at under 0.3 mm thickness and with acoustic transparency that rivals an open aperture.",
    description: "Ultra-thin acoustic ePTFE vent membranes protecting microphones and speakers in smartphones, wearables, and hearables from liquid and dust without compromising sound. At less than 0.3 mm thick, Gore acoustic vents occupy minimal Z-height in ultra-thin device stacks, while the ePTFE membrane's open microporous structure transmits sound pressure waves with negligible insertion loss across the human hearing range. Available in adhesive-backed formats for automated pick-and-place assembly, and in reel-format supply for volume SMT-compatible lines.",
    industries: ["Electronics"],
    goreUrl: "https://www.gore.com/products/portable-electronics-acoustic-vents",
    benefits: [
      {
        title: "Sub-0.3 mm Thickness for Ultra-Slim Devices",
        body: "Modern smartphones and wearables operate with Z-height budgets measured in tenths of a millimeter. Gore acoustic vent membranes at under 0.3 mm thickness fit within even the tightest acoustic port stacks without requiring port depth increases or PCB layout changes, enabling IP67/IP68 protection in devices where competing membrane solutions add unacceptable thickness.",
      },
      {
        title: "Minimal Acoustic Insertion Loss",
        body: "The ePTFE microporous structure transmits sound pressure with insertion loss typically below 1–2 dB across 100 Hz–10 kHz, preserving voice clarity for microphones and full-range frequency response for speakers. High-resolution audio playback and voice pickup quality are maintained even with IP68-rated waterproofing in place.",
      },
      {
        title: "IP67/IP68 Liquid and Dust Exclusion",
        body: "The hydrophobic ePTFE membrane surface tension prevents liquid water penetration even under 1 metre / 30-minute immersion (IP67) and 1.5 metre / 30-minute (IP68) conditions. Particle filtration rejects dust and debris down to sub-micron sizes, protecting microphone capsule diaphragms and speaker driver cones from contamination that causes progressive acoustic degradation.",
      },
    ],
    specs: [
      { label: "Membrane Thickness", value: "< 0.3 mm" },
      { label: "Ingress Protection", value: "IP67 / IP68 compliant" },
      { label: "Acoustic Insertion Loss", value: "< 2 dB typical (100 Hz – 10 kHz)" },
      { label: "Membrane Material", value: "Expanded PTFE (ePTFE)" },
      { label: "Mounting Method", value: "Pressure-sensitive adhesive (peel-and-place)" },
      { label: "Supply Format", value: "Roll / reel for automated assembly" },
      { label: "Particle Filtration", value: "Sub-micron particulate exclusion" },
      { label: "Available Sizes", value: "Custom die-cut (round, slot, custom)" },
    ],
    applications: [
      "Smartphone primary and secondary microphone acoustic ports",
      "TWS (True Wireless Stereo) earbud speaker and microphone ports",
      "Smartwatch and fitness tracker microphone protection",
      "Hearing aid and hearable acoustic vent ports",
      "Rugged tablet and handheld device speaker grilles",
      "10 ATM-rated smartwatch acoustic and pressure vent apertures",
    ],
    faq: [
      {
        q: "How does Gore acoustic vent thickness compare to competitive membranes?",
        a: "Gore acoustic vents at under 0.3 mm are among the thinnest available for IP67/IP68-rated applications. Competing solutions using foam or woven mesh elements typically add 0.5–1.0 mm or more. This difference is significant in devices where the acoustic port depth is the limiting factor for overall device thickness.",
      },
      {
        q: "Do acoustic vents affect microphone sensitivity?",
        a: "The ePTFE membrane introduces minimal acoustic impedance. Sensitivity reduction is typically less than 1–2 dB for microphone capsules, which is within the calibration tolerance of most MEMS microphone designs. Gore provides acoustic insertion loss data in the form of transfer function curves for engineering evaluation.",
      },
      {
        q: "What is the difference between acoustic vents and pressure vents for portable electronics?",
        a: "Acoustic vents are optimized for sound transmission — maximizing membrane area and minimizing acoustic impedance to pass audio frequencies with minimal loss. Pressure vents are optimized for slow gas equalization — used for barometers and altitude sensors. The two serve different functions and should not be interchanged.",
      },
      {
        q: "Can RSTECH supply acoustic vents in reel format for SMT assembly lines?",
        a: "Yes. Gore acoustic vents are available in reel and strip formats compatible with automated pick-and-place equipment. Contact RSTECH Electronics for reel dimensions, pitch specifications, and minimum order quantities for your production program.",
      },
    ],
  };

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-pe-acoustic" url={"https://www.rstech.co.il/en/companies/gore/products/vent-pe-acoustic"} />
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

        <GorePartNumbers id="vent-pe-acoustic" />

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
