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
    title: "Tube-Mount Outdoor Electronics Vents — Gore Vents via RSTECH Electronics Israel",
    description: "Gore tube-mount ePTFE vents route pressure equalization to a remote location in sealed enclosures. Ideal for electronics and gearbox applications. RSTECH Electronics Israel. Part number: PMF100570.",
    alternates: {
      canonical: `https://www.rstech.co.il/${locale}/companies/gore/products/vent-oe-tube-mount`,
      languages: {
        en: `https://www.rstech.co.il/en/companies/gore/products/vent-oe-tube-mount`,
        he: `https://www.rstech.co.il/he/companies/gore/products/vent-oe-tube-mount`,
        "x-default": `https://www.rstech.co.il/en/companies/gore/products/vent-oe-tube-mount`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/vent-oe-tube-mount.jpg";

  const product = {
    name: "Tube-Mount Outdoor Electronics Vents",
    tagline: "Remote-Located Pressure Equalization for Sealed Enclosures",
    headline: "Vent Where You Need It — Not Where It's Convenient",
    subheadline: "Gore tube-mount vents decouple the ePTFE membrane from the enclosure wall, routing pressure equalization through a flexible tube to a protected location — solving venting challenges in enclosures where surface mounting is geometrically impossible or thermally impractical.",
    description: "Tube-mounted vents routing pressure equalization to a remote location, ideal for sealed enclosures where surface mounting is impossible. The ePTFE membrane is housed in a separate body connected via a silicone or PTFE tube to the sealed enclosure. This configuration allows the vent to be placed in a sheltered or accessible location while the enclosure itself remains fully sealed against liquid and particulate ingress. Used in gearboxes, densely packaged electronics housings, and enclosures with complex internal geometry where a wall-mount vent would be obstructed or exposed to direct fluid impingement.",
    industries: ["Telecommunications", "Industrial"],
    goreUrl: "https://www.gore.com/products/tube-mount-vents-electronics-gearbox",
    benefits: [
      {
        title: "Vent Placement Freedom",
        body: "When enclosure geometry, internal component density, or thermal management layouts prevent conventional wall-mounting, the tube-mount configuration routes the venting function to any accessible location. The flexible tube can be routed around components, through bulkheads, or into a sheltered cavity — giving engineers freedom unavailable with adhesive or screw-in designs.",
      },
      {
        title: "Protection of the Membrane from Direct Fluid Exposure",
        body: "In applications where the enclosure surface is subject to direct high-velocity liquid impingement — submerged gearboxes, wash-down equipment, or marine electronics — positioning the vent body remotely via tube prevents membrane saturation and maintains full airflow. The membrane sees only the pressure differential, not the fluid.",
      },
      {
        title: "Compatible With Gearbox and High-Contamination Environments",
        body: "Gearboxes and industrial drives generate significant internal pressure swings from thermal cycling and fluid agitation. Tube-mount vents tolerate the oil-mist and particulate environment of the gearbox interior while venting to atmosphere at a remote, clean point — preventing shaft seal failure caused by excess internal pressure.",
      },
    ],
    specs: [
      { label: "Membrane Material", value: "Expanded PTFE (ePTFE)" },
      { label: "Mounting Method", value: "Remote tube — membrane body separate from enclosure" },
      { label: "Tube Material", value: "Silicone or PTFE (application dependent)" },
      { label: "Tube Length", value: "Application-specific (custom lengths available)" },
      { label: "Operating Temperature", value: "-40°C to +125°C (membrane body)" },
      { label: "Fluid Resistance", value: "Hydrocarbon oils, water, cleaning agents" },
      { label: "Ingress Protection", value: "IP67/IP68 (enclosure-dependent installation)" },
      { label: "Typical Applications", value: "Gearboxes, sealed electronics, marine housings" },
    ],
    applications: [
      "Industrial gearbox and drive unit housings requiring pressure relief without oil mist egress",
      "Sealed outdoor electronics enclosures with no accessible flat mounting surface",
      "Marine electronics enclosures subject to direct wave and spray impingement",
      "Dense PCB assemblies in sealed housings where wall space is fully occupied",
      "EV drivetrain and power electronics modules requiring internal pressure management",
      "Ruggedized military and defense electronics in submersible housings",
    ],
    faq: [
      {
        q: "What is the maximum tube length that maintains effective pressure equalization?",
        a: "Effective tube length depends on tube inner diameter, membrane airflow resistance, and the pressure differential cycle rate of the application. Gore provides application engineering guidance for tube length selection. For most electronics applications, lengths up to 500 mm are practical. Contact RSTECH for application-specific analysis.",
      },
      {
        q: "Can tube-mount vents handle oil mist from gearbox interiors?",
        a: "Yes. The ePTFE membrane is chemically inert and hydrophobic, resisting oil wetting. Oil mist contacting the membrane from the gearbox side does not block airflow — the membrane surface tension prevents liquid oil from passing through while allowing air pressure equalization. This is a primary application for tube-mount vents.",
      },
      {
        q: "How is the tube connected to the enclosure?",
        a: "The tube connects via a barbed or compression fitting integrated into the enclosure wall. Gore and RSTECH can provide guidance on fitting selection and enclosure modification requirements. For new designs, tube routing and fitting specifications should be determined during early enclosure design.",
      },
      {
        q: "Are tube-mount vents available through RSTECH Electronics in Israel?",
        a: "Yes. RSTECH Electronics supplies the full range of Gore outdoor electronics vents including tube-mount configurations. We provide application selection support and can arrange Gore technical consultation for complex geometries. Contact us for availability and pricing.",
      },
    ],
  };

  return (
    <>
      <Header locale={locale} />
        <GoreProductSchema id="vent-oe-tube-mount" url={"https://www.rstech.co.il/en/companies/gore/products/vent-oe-tube-mount"} />
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

        <GorePartNumbers id="vent-oe-tube-mount" />

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
