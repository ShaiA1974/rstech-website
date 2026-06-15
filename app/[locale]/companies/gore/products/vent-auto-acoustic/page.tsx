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
    title: "Automotive Acoustic Vents — Gore via RSTECH Electronics Israel",
    description:
      "Gore ePTFE acoustic vents for automotive microphones and ADAS sensors. IP6K8-rated, −40°C to +105°C, life-of-vehicle protection. Authorized distributor in Israel — RSTECH Electronics. Part numbers: AAV10307, AAV10307-R.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/vent-auto-acoustic`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/vent-auto-acoustic`,
        he: `https://www.rstech.co.il/he/companies/gore/products/vent-auto-acoustic`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/vent-auto-acoustic`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-auto-acoustic.jpg";

  const product = {
    name: "Automotive Acoustic Vents",
    tagline: "Life-of-Vehicle Acoustic Protection for Microphones & ADAS",
    headline: "Crystal-Clear Sound with IP6K8 Protection — From −40°C to +105°C",
    subheadline:
      "Gore automotive acoustic vents deliver minimal insertion loss across the critical frequency range while keeping dust, water, and automotive fluids out of externally-mounted microphone and sound-monitoring assemblies throughout the vehicle's service life.",
    description:
      "As vehicles become rolling computing platforms, the quality and reliability of acoustic sensing has become mission-critical. ADAS noise-cancellation systems, emergency siren detection for autonomous vehicles, and Mobility-as-a-Service (MaaS) sound-monitoring all depend on microphones that stay clean, responsive, and sealed — for the full life of the vehicle. Gore automotive acoustic vents use hydrophobic and oleophobic ePTFE membranes to block liquid water ingress to 2 meters/1 hour (IP6K8) while maintaining less than 2 dB insertion loss up to 1.5 kHz and less than 3 dB up to 5 kHz. Available as pressure-sensitive adhesive patches (AVS 700 and AVS 701) for direct PCB or housing application, these vents are IATF-certified and PPAP-documented for automotive supply chain integration.",
    industries: ["Automotive", "Autonomous Vehicles", "ADAS & Sensing"],
    goreUrl: "https://www.gore.com/products/automotive-vents-acoustic",
    benefits: [
      {
        title: "Minimal Acoustic Insertion Loss",
        body: "The Gore ePTFE membrane is acoustically transparent to the frequencies that matter most. With less than 2 dB insertion loss through 1.5 kHz and less than 3 dB through 5 kHz, ADAS sound-processing algorithms receive clean, unattenuated audio — critical for accurate siren detection, noise cancellation, and voice command systems.",
      },
      {
        title: "IP6K8 Water & Dust Ingress Protection",
        body: "Externally-mounted vehicle microphones face rain, car washes, and road spray throughout their service life. Gore's hydrophobic and oleophobic membrane blocks water ingress at 2 meters depth for 1 hour and provides complete dust exclusion — all without degrading acoustic transmission.",
      },
      {
        title: "Life-of-Vehicle Durability",
        body: "Automotive microphone assemblies are not serviceable components — they must perform reliably from day one through the full vehicle service life. Gore acoustic vents are validated through thermal shock, fluid exposure, salt spray, and vibration testing per IATF standards, ensuring consistent protection without maintenance.",
      },
    ],
    specs: [
      { label: "Models", value: "AVS 700 (AAV10307), AVS 701 (AAV10307-R)" },
      { label: "Mounting Type", value: "Pressure-sensitive adhesive (PSA)" },
      { label: "Acoustic Opening Diameter", value: "Up to 2.5 mm" },
      { label: "IP Rating", value: "IP6K8 per ISO 20653" },
      { label: "Insertion Loss", value: "<2 dB to 1.5 kHz; <3 dB to 5 kHz" },
      { label: "Operating Temperature", value: "−40°C to +105°C" },
      { label: "Fluid Resistance", value: "Automotive fluids and oils" },
      { label: "Quality Certification", value: "IATF16949, PPAP documented" },
      { label: "Regulatory Compliance", value: "EU REACH (PFOA-free)" },
    ],
    applications: [
      "External sound-monitoring microphones for Advanced Driver-Assistance Systems (ADAS)",
      "Emergency vehicle siren detection arrays in autonomous and semi-autonomous vehicles",
      "Mobility-as-a-Service (MaaS) acoustic sensing modules",
      "In-vehicle noise cancellation microphone assemblies",
      "Active Road Noise Cancellation (RNC) sensors",
      "Hands-free and voice command microphone housings",
    ],
    faq: [
      {
        q: "How does the Gore acoustic vent maintain IP6K8 while allowing sound through?",
        a: "The ePTFE membrane has a pore structure that is permeable to pressure waves (sound) but impermeable to liquid water. The hydrophobic surface treatment causes water to bead and run off rather than penetrating the membrane, while the acoustic opening remains transparent to airborne sound at the frequencies used by automotive microphones.",
      },
      {
        q: "What is the difference between the AVS 700 and AVS 701?",
        a: "Both are pressure-sensitive adhesive acoustic vents with the same acoustic and IP performance. The AVS 701 is the reel-compatible variant designed for automated pick-and-place manufacturing processes, while the AVS 700 is configured for manual installation. Contact RSTECH Electronics to determine which format suits your production line.",
      },
      {
        q: "Are these vents suitable for exterior-mounted ADAS microphones exposed to high-pressure washing?",
        a: "The IP6K8 rating covers immersion to 2 meters for 1 hour, which addresses most water exposure scenarios. For applications exposed to direct high-pressure washing (IP6K9K requirements), Gore's automotive electronics vent series may be more appropriate — contact RSTECH to discuss your specific IP requirement.",
      },
      {
        q: "Can RSTECH Electronics provide PPAP documentation for these parts?",
        a: "Yes. As Gore's authorized representative in Israel, RSTECH Electronics can supply the full PPAP documentation package required by automotive tier-1 and OEM quality systems, including dimensional reports, material certifications, and process capability data.",
      },
    ],
  };

  const gradient = "from-slate-100 to-slate-50";
  const glowColor = "bg-slate-500/10";
  const catHref = "/companies/gore/products?cat=vents";

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-auto-acoustic" url={"https://www.rstech.co.il/en/companies/gore/products/vent-auto-acoustic"} />
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        <GorePartNumbers id="vent-auto-acoustic" />

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
