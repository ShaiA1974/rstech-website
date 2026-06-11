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
    title: "GORE® SKYFLEX® Aerospace Materials — Gore via RSTECH Electronics Israel",
    description:
      "Non-curing ePTFE sealant tapes and gaskets for aircraft panels, cowlings, and fairings. Approved by Airbus, Boeing, Bombardier, COMAC, Embraer. Authorized in Israel — RSTECH Electronics.",
    alternates: {
      canonical: `https://rstech.co.il/${locale}/companies/gore/products/seal-skyflex`,
      languages: {
        en: `https://rstech.co.il/en/companies/gore/products/seal-skyflex`,
        he: `https://rstech.co.il/he/companies/gore/products/seal-skyflex`,
        "x-default": `https://rstech.co.il/en/companies/gore/products/seal-skyflex`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const imageUrl = "/products/gore/seal-skyflex.jpg";

  const product = {
    name: "GORE® SKYFLEX® Aerospace Materials",
    tagline: "OEM-Approved Aerospace Sealants & Gaskets",
    headline: "Reduce Aircraft Maintenance Time by Up to 55% with Non-Curing ePTFE Sealants",
    subheadline:
      "GORE® SKYFLEX® Aerospace Materials are chemically inert, non-curing ePTFE sealant tapes and gaskets trusted by the world's leading aircraft manufacturers. No mixing, no masking, no cure time — just install and fly.",
    description:
      "GORE® SKYFLEX® Aerospace Materials represent a paradigm shift in aircraft sealing technology. Traditional sealants require mixing, application, cure time, and careful masking — all of which slow down MRO operations and add labor cost. SKYFLEX materials eliminate every one of those steps. The fully cured ePTFE construction is chemically inert, non-hazardous, and reusable across multiple open-and-close maintenance cycles. One major OEM documented a reduction from 9 installation steps to 3, translating to a 55% reduction in recurring operating costs. Approved by Airbus, Boeing, Bombardier, COMAC, and Embraer, SKYFLEX is the qualified choice for access panels, engine cowlings, fairings, fuselage joints, and military platforms including the F-16, F-35, and V-22.",
    industries: ["Aerospace & Defense", "MRO & Maintenance", "Defense & Military"],
    goreUrl: "https://www.gore.com/products/skyflex-aircraft-sealants-tapes-gaskets-aerospace-defense",
    benefits: [
      {
        title: "No Cure Time — Fly Faster",
        body: "Conventional polysulfide and silicone sealants require hours or days of cure time before an aircraft can return to service. SKYFLEX materials are fully cured at installation. Open an access panel, reseal with SKYFLEX, and close — no waiting. For high-utilization fleets and tight MRO windows, this directly reduces aircraft on ground (AOG) time.",
      },
      {
        title: "Reusable Across Maintenance Cycles",
        body: "SKYFLEX tapes and gaskets can be removed and reinstalled multiple times without degrading their sealing performance. This eliminates the consumable cost of replacing compound sealants at every inspection interval — a significant saving across large fleets with frequent scheduled maintenance.",
      },
      {
        title: "Five-OEM Approval — No Qualification Risk",
        body: "SKYFLEX materials hold approved-product-list (APL) status with Airbus, Boeing, Bombardier, COMAC, and Embraer, as well as SAE AMS3255 compliance and T.O. qualifications for the F-16, F-35, and V-22. Purchasing SKYFLEX through RSTECH Electronics in Israel means you receive the same fully qualified material — no re-approval required.",
      },
      {
        title: "Wide Series Coverage for Any Joint",
        body: "Ten product series cover everything from large-gap access panels (100/200 Series) to fuel-exposed sealing applications (520/720 Series) to load-bearing permanent interfays (PX1 Series). One supplier, one qualified material family, for virtually every aircraft sealing requirement.",
      },
      {
        title: "Chemical Inertness & Safety",
        body: "ePTFE is non-reactive with aviation fuels, hydraulic fluids, oils, and cleaning agents. No off-gassing during installation, no hazardous waste disposal requirements, and no special PPE for applicators. This simplifies hangar safety compliance and reduces the hazardous materials footprint in MRO facilities.",
      },
      {
        title: "Proven on Military & Next-Gen Platforms",
        body: "Beyond commercial aviation, SKYFLEX holds Technical Order qualifications for the F-16 and F-35 fighter jets and the V-22 Osprey tiltrotor. It is also being certified for eVTOL programs — demonstrating Gore's commitment to qualifying SKYFLEX on every generation of air vehicle.",
      },
    ],
    specs: [
      { label: "Material", value: "Expanded PTFE (ePTFE)" },
      { label: "Temperature Range", value: "−65°C to +260°C" },
      { label: "Cure Time", value: "None — ready at installation" },
      { label: "Reusability", value: "Multiple open/close cycles" },
      { label: "Chemical Resistance", value: "Fuels, oils, hydraulic fluids, solvents" },
      { label: "Compliance", value: "SAE AMS3255" },
      { label: "OEM Approvals", value: "Airbus, Boeing, Bombardier, COMAC, Embraer" },
      { label: "Military T.O. Qualifications", value: "F-16, F-35, V-22" },
      {
        label: "Available Series",
        value: "100, 110, 200, 500, 520, 700, 720, 730, 1600, PX1",
      },
    ],
    applications: [
      "Access panels, doors, and quick-opening fasteners on commercial and military aircraft",
      "Engine cowlings and nacelle fairings requiring repeatable sealing",
      "Fuselage joints, ribs, stringers, and wing D-Noses",
      "Fuel bladder cavities and fuel-wetted areas (520/720 Series)",
      "Helicopter tail boom covers and rotor pylon interfaces",
      "Exterior lighting assemblies and avionics bay gaskets",
      "Load-bearing permanent interfays on primary structures (PX1 Series)",
      "eVTOL airframe sealing applications",
    ],
    faq: [
      {
        q: "Is SKYFLEX approved for my aircraft type?",
        a: "GORE® SKYFLEX® holds approved-product-list status with Airbus, Boeing, Bombardier, COMAC, and Embraer for commercial aviation, plus Technical Order qualifications for the F-16, F-35, and V-22 in military service. If your platform is not listed, contact RSTECH Electronics — Gore may have additional qualifications or a qualification path for your aircraft type.",
      },
      {
        q: "Which SKYFLEX series should I use for fuel-exposed applications?",
        a: "The 520 Series gasket and 720 Series tape/gasket are specifically engineered for continuous fuel and oil exposure. The 700 Series provides combined environmental sealing plus hydraulic/engine oil resistance. For pure fuel sealing, 520 is the primary recommendation. RSTECH can assist with series selection based on your specific application requirements.",
      },
      {
        q: "How does SKYFLEX handle the extreme temperature range of aircraft operations?",
        a: "ePTFE is intrinsically stable across the full −65°C to +260°C range, which covers both high-altitude cold-soak conditions and sustained proximity to jet engine heat zones. Unlike silicone or polysulfide sealants, ePTFE does not become brittle at low temperatures or degrade at high temperatures within this range.",
      },
      {
        q: "Can RSTECH Electronics supply SKYFLEX with the necessary airworthiness documentation?",
        a: "Yes. RSTECH Electronics is the authorized Gore representative in Israel and supplies SKYFLEX materials with full material certifications and conformance documentation. We can support your procurement team with the paperwork required for quality-assurance and airworthiness record-keeping.",
      },
      {
        q: "What is the PX1 Series and when is it used?",
        a: "The PX1 Series is Gore's load-bearing, corrosion-protective interfay material for permanent aircraft structures. Unlike the tape and gasket series used on removable panels, PX1 is designed for primary structural joints where both corrosion isolation and structural load transfer are required. It is distinct from the maintenance-access products in the SKYFLEX family.",
      },
    ],
  };

  const gradient = "from-orange-100 to-orange-50";
  const glowColor = "bg-orange-500/10";
  const catHref = "/companies/gore/products?cat=sealants";

  return (
    <>
      <Header locale={locale} />
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
                    <div className="text-6xl font-black text-orange-200 mb-2">
                      GORE
                    </div>
                    <div className="text-orange-400 font-semibold">
                      {product.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* OEM Approval Banner */}
        <div className="bg-[#CC1C1C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white text-sm font-semibold">
              <span className="opacity-70 uppercase tracking-wider text-xs">
                OEM Approved By:
              </span>
              {["Airbus", "Boeing", "Bombardier", "COMAC", "Embraer"].map(
                (oem) => (
                  <span
                    key={oem}
                    className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                  >
                    {oem}
                  </span>
                )
              )}
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
                Why Choose GORE® SKYFLEX®?
              </h2>
              <div className="mt-3 h-1 w-12 bg-[#CC1C1C] mx-auto rounded-full" />
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.benefits.map((b, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
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
              Ready to source GORE® SKYFLEX® in Israel?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Contact RSTECH Electronics — your authorized Gore representative
              in Israel — for pricing, material certifications, and technical
              support.
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
