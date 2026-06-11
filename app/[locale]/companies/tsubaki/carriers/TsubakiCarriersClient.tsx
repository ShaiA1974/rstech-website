"use client";

import { useState, useMemo } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight, Layers } from "lucide-react";
import {
  TSUBAKI_CARRIERS,
  CARRIER_MATERIALS,
  CARRIER_OPENINGS,
  type CarrierMaterial,
  type CarrierOpening,
  type CarrierMaterialFilter,
  type CarrierOpeningFilter,
} from "@/data/tsubaki-carriers";

const MATERIAL_BADGE: Record<CarrierMaterial, string> = {
  plastic:   "bg-orange-100 text-orange-700 border-orange-200",
  steel:     "bg-slate-100 text-slate-700 border-slate-200",
  hybrid:    "bg-amber-100 text-amber-700 border-amber-200",
  aluminium: "bg-sky-100 text-sky-700 border-sky-200",
};

const OPENING_LABEL: Record<CarrierOpening, string> = {
  open:   "Open",
  closed: "Closed",
  both:   "Open & Closed",
};

function CarrierImage({ src, alt }: { src: string | undefined; alt: string }) {
  const [errored, setErrored] = useState(false);
  if (!src || errored) {
    return (
      <div className="w-full h-72 bg-gradient-to-br from-orange-50 to-slate-100 flex items-center justify-center">
        <Layers className="w-12 h-12 text-orange-300 opacity-50" />
      </div>
    );
  }
  return (
    <div className="relative w-full h-72">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

export default function TsubakiCarriersClient() {
  const [activeMaterial, setActiveMaterial] = useState<CarrierMaterialFilter>("all");
  const [activeOpening, setActiveOpening]   = useState<CarrierOpeningFilter>("all");

  const filtered = useMemo(() => {
    return TSUBAKI_CARRIERS.filter((c) => {
      const matMatch = activeMaterial === "all" || c.material === activeMaterial;
      const opMatch  = activeOpening  === "all" || c.opening  === activeOpening;
      return matMatch && opMatch;
    });
  }, [activeMaterial, activeOpening]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ── Filter bar ──────────────────────────────────────────────────── */}
      <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 mb-8 space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#7A8A99] mb-3">Material</p>
          <div className="flex flex-wrap gap-2">
            {CARRIER_MATERIALS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveMaterial(key)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  activeMaterial === key
                    ? "bg-orange-500 text-white"
                    : "bg-[#f0f4f8] text-[#334155] hover:bg-[#e2e8f0]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#7A8A99] mb-3">Opening Style</p>
          <div className="flex flex-wrap gap-2">
            {CARRIER_OPENINGS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveOpening(key)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  activeOpening === key
                    ? "bg-orange-500 text-white"
                    : "bg-[#f0f4f8] text-[#334155] hover:bg-[#e2e8f0]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#1a202c]">Cable Carriers</span>
          <span className="text-xs font-medium bg-[#e2e8f0] text-[#334155] px-2 py-0.5 rounded-full">
            {filtered.length} series
          </span>
        </div>
      </div>

      {/* ── Card grid ────────────────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#7A8A99]">
          <p className="text-lg font-medium">No carriers match this filter.</p>
          <p className="text-sm mt-1">Try selecting a different material or opening style.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((carrier) => (
            <div
              key={carrier.id}
              className="group border border-[#e2e8f0] rounded-xl hover:shadow-md hover:border-orange-500/30 transition-all duration-200 flex flex-col bg-white overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <CarrierImage src={carrier.imageUrl} alt={carrier.name} />
                <span className={`absolute top-3 end-3 text-[10px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full capitalize ${MATERIAL_BADGE[carrier.material]}`}>
                  {carrier.material}
                </span>
              </div>

              {/* Name + tagline */}
              <div className="px-5 pt-4 pb-3">
                <h2 className="font-bold text-[#1a202c] text-base leading-snug group-hover:text-orange-600 transition-colors">
                  {carrier.name}
                </h2>
                <p className="text-sm text-[#4a5568] leading-snug mt-0.5">{carrier.tagline}</p>
                {carrier.variantCount && (
                  <p className="text-xs text-[#7A8A99] mt-1">{carrier.variantCount} type(s)</p>
                )}
              </div>

              {/* Spec table */}
              <dl className="border-t border-[#e2e8f0] mx-5 divide-y divide-[#f0f4f8] flex-1">
                <div className="flex items-center justify-between py-2">
                  <dt className="text-xs text-[#7A8A99] w-32 shrink-0">Inner heights :</dt>
                  <dd className="text-xs font-medium text-[#1a202c]">{carrier.innerHeights}</dd>
                </div>
                <div className="flex items-center justify-between py-2">
                  <dt className="text-xs text-[#7A8A99] w-32 shrink-0">Inner widths :</dt>
                  <dd className="text-xs font-medium text-[#1a202c]">{carrier.innerWidths}</dd>
                </div>
                <div className="flex items-center justify-between py-2">
                  <dt className="text-xs text-[#7A8A99] w-32 shrink-0">Pitch :</dt>
                  <dd className="text-xs font-medium text-[#1a202c]">{carrier.pitch}</dd>
                </div>
                {carrier.travelLength && (
                  <div className="flex items-center justify-between py-2">
                    <dt className="text-xs text-[#7A8A99] w-32 shrink-0">Travel length :</dt>
                    <dd className="text-xs font-medium text-[#1a202c]">{carrier.travelLength}</dd>
                  </div>
                )}
                <div className="flex items-center justify-between py-2">
                  <dt className="text-xs text-[#7A8A99] w-32 shrink-0">Opening :</dt>
                  <dd className="text-xs font-medium text-[#1a202c]">{OPENING_LABEL[carrier.opening]}</dd>
                </div>
              </dl>

              {/* Footer */}
              <div className="px-5 py-4 border-t border-[#f0f4f8]">
                <Link
                  href={`/companies/tsubaki/carriers/${carrier.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
