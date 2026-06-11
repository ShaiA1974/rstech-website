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
    title: "Automotive Electronics Vents — Gore via RSTECH Electronics Israel",
    description:
      "Gore ePTFE vents for ECUs, inverters, sensors, and automotive electronics housings. IP6K9K, −40°C to +160°C, multiple mounting styles. Authorized in Israel — RSTECH Electronics. Key part numbers: AMF301190, AMF301191, AMF300114, AMF300070, AMF300200.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/gore/products/vent-auto-electronics`,
      languages: {
        en: `https://rstech.co.il/en/companies/gore/products/vent-auto-electronics`,
        he: `https://rstech.co.il/he/companies/gore/products/vent-auto-electronics`,
        "x-default": `https://rstech.co.il/en/companies/gore/products/vent-auto-electronics`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-auto-electronics.jpg";

  const product = {
    name: "Automotive Electronics Vents",
    tagline: "Pressure Equalization for ECUs, Inverters & Sensors",
    headline: "Prevent Condensation and Seal Failure in Automotive Electronics Housings",
    subheadline:
      "Gore automotive electronics vents rapidly equalize pressure differentials caused by thermal cycling inside ECUs, control modules, and sensors — blocking water, particulates, and automotive fluids while complying with IP6K9K and IATF16949 requirements.",
    description:
      "Every sealed automotive electronics housing faces the same physics problem: temperature changes inside the enclosure create pressure differentials relative to the outside environment. Without equalization, these forces stress gaskets and seals, eventually leading to ingress failures that cause costly electronic damage. Gore's automotive electronics vents solve this with ePTFE membranes whose pores are 20,000 times smaller than a water droplet — permeable to air pressure but impervious to liquid water, dust, and automotive fluids. Available in four mounting configurations (screw-in, snap-fit, adhesive, and weldable), with performance tiers ranging from traditional to Cleanliness Protected (CP) and High Severity (ISO 16232 / VDA 19.1), these vents serve the full spectrum of automotive electronics from ICE engine control units to high-voltage EV inverters and ADAS sensor housings.",
    industries: ["Automotive", "Electric Vehicles (EV)", "ADAS & Sensing"],
    goreUrl: "https://www.gore.com/products/vents-automotive-electronics-protection",
    benefits: [
      {
        title: "Four Mounting Styles — One Qualified Supplier",
        body: "Screw-in vents for removable access on power control units and inverters; snap-fit for permanent integration into controllers and sensors; adhesive patches for low-profile high-density PCB assemblies; weldable vents for PA and PP plastic housings. All four types use the same Gore ePTFE membrane and meet the same IP performance requirements.",
      },
      {
        title: "IP6K9K Protection — Blocks Water at High Pressure",
        body: "The IP6K9K rating (high-temperature, high-pressure spray from multiple angles) is the gold standard for automotive electronics exposed to underhood washing and road spray. Gore's screw-in and snap-fit vents achieve this rating with UL94 V-0 flame-retardant housings, meeting both ingress and fire-resistance requirements in one component.",
      },
      {
        title: "Cleanliness-Protected Variants for ADAS & EV",
        body: "ISO 16232 and VDA 19.1 cleanliness standards are mandatory for ADAS cameras, radar modules, and high-voltage EV electronics. Gore's CP variants incorporate membrane protection to prevent particulate contamination of the vent path during assembly — certified to the cleanliness levels demanded by these applications.",
      },
      {
        title: "High Airflow for Large Electronics Housings",
        body: "The High Airflow screw-in variant provides 8× the airflow of the standard screw-in vent, and the High Airflow snap-fit provides 5× standard capacity. For high-power electronics such as traction inverters and onboard chargers that generate significant internal pressure transients, higher airflow capacity prevents over-pressure events that would otherwise force-open seals.",
      },
      {
        title: "Extended Temperature Range: −40°C to +160°C",
        body: "Adhesive and weldable ePTFE vent patches withstand operating temperatures from −40°C to +160°C — covering the thermal extremes of automotive underhood electronics including those in close proximity to exhaust systems. Laminate and ePTFE construction options accommodate different substrate materials and sealing requirements.",
      },
      {
        title: "20+ Years of OEM Partnership & IATF Certification",
        body: "Gore has been qualified by automotive OEMs for over 20 years. IATF16949 manufacturing certification, PPAP documentation, DFMEA compliance for High Severity variants, and EU REACH conformance (PFOA-free) are standard deliverables — supporting your supplier qualification and APQP processes without additional qualification burden.",
      },
    ],
    specs: [
      { label: "Mounting Styles", value: "Screw-in, Snap-fit, Adhesive, Weldable" },
      { label: "IP Rating (Screw-in/Snap-fit)", value: "IP6K9K, UL94 V-0" },
      { label: "Operating Temperature (Adhesive/Weldable)", value: "−40°C to +160°C" },
      { label: "Screw-in Standard Max Temp", value: "+125°C continuous" },
      { label: "Snap-fit High Temp variant", value: "+150°C, mineral oil resistant" },
      { label: "High Airflow (Screw-in)", value: "8× standard airflow" },
      { label: "High Airflow (Snap-fit)", value: "5× standard airflow" },
      { label: "Cleanliness Standard", value: "ISO 16232 / VDA 19.1 (CP variants)" },
      { label: "Quality Certification", value: "IATF16949, PPAP documented" },
    ],
    applications: [
      "Engine Control Units (ECU) and transmission control modules",
      "High-voltage traction inverters and onboard chargers in BEV/PHEV",
      "Electronic power steering (EPS) control units",
      "ADAS radar, LiDAR, and camera housings",
      "Electric motor controllers and actuator drives",
      "Hybrid and EV junction boxes and PDUs",
    ],
    faq: [
      {
        q: "Which mounting style is best for an ECU with a threaded port?",
        a: "The screw-in vent is designed for applications with a threaded boss in the housing. It is removable for serviceability and available in Standard, High Airflow, and Cleanliness Protected variants. For permanent integration without a threaded port, the snap-fit or weldable options are more appropriate. RSTECH Electronics can help match the mounting style to your housing design.",
      },
      {
        q: "What does 'Cleanliness Protected' mean and when is it required?",
        a: "CP (Cleanliness Protected) variants add a protective membrane cover over the vent path that prevents particulate contamination during component handling and assembly. This is required by ISO 16232 and VDA 19.1 for electronics in direct contact with hydraulic or cooling circuits, and is increasingly specified for ADAS and high-voltage EV electronics where contamination-induced failures carry significant safety consequences.",
      },
      {
        q: "Can Gore electronics vents be used in close proximity to exhaust components?",
        a: "The adhesive and weldable ePTFE patch formats are rated to +160°C continuous, which covers most underhood locations near exhaust systems. For direct proximity to exhaust heat, confirm the specific local temperature with your thermal analysis before selecting a vent variant. Gore and RSTECH can assist with application-specific validation.",
      },
      {
        q: "How does Gore's ePTFE membrane prevent water ingress while allowing air through?",
        a: "ePTFE has a microporous structure where individual pores are approximately 20,000 times smaller than the smallest liquid water droplet, but large enough to allow air molecules to pass freely. The surface is also hydrophobic — water beads up and runs off rather than being drawn into the pores by capillary action. This combination provides waterproofing without restricting airflow or pressure equalization.",
      },
    ],
  };

  const gradient = "from-slate-100 to-slate-50";
  const glowColor = "bg-slate-500/10";
  const catHref = "/companies/gore/products?cat=vents";

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-auto-electronics" url={"https://rstech.co.il/en/companies/gore/products/vent-auto-electronics"} />
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

        <GorePartNumbers id="vent-auto-electronics" />

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
