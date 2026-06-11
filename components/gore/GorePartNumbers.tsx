import { GORE_PRODUCTS, type GorePartNumberEntry } from "@/data/gore-products";
import { Link } from "@/i18n/navigation";
import { Hash } from "lucide-react";

interface Props {
  id: string;
}

/**
 * Renders the Part Numbers section for a Gore vent product page.
 * Reads part numbers from gore-products.ts by product id.
 * Groups entries by model when present.
 */
export default function GorePartNumbers({ id }: Props) {
  const product = GORE_PRODUCTS.find((p) => p.id === id);
  const entries: GorePartNumberEntry[] = product?.partNumbers ?? [];

  if (entries.length === 0) return null;

  // Group by model (undefined model → "Other")
  const groups = new Map<string, GorePartNumberEntry[]>();
  for (const entry of entries) {
    const key = entry.model ?? "";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(entry);
  }

  const hasModels = Array.from(groups.keys()).some((k) => k !== "");

  return (
    <div className="bg-[#f8fafc] py-16 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Hash className="w-5 h-5 text-[#CC1C1C]" />
            <h2 className="text-2xl font-bold text-[#1a202c]">Part Numbers</h2>
          </div>
          <div className="h-1 w-12 bg-[#CC1C1C] rounded-full mb-4" />
          <p className="text-sm text-[#7A8A99] max-w-xl">
            Reference these part numbers when requesting a quote. Contact{" "}
            <span className="font-semibold text-[#334155]">RSTECH Electronics</span> for
            pricing, availability, and samples in Israel.
          </p>
        </div>

        {hasModels ? (
          /* Grouped layout */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {Array.from(groups.entries()).map(([model, items]) => (
              <div
                key={model || "__ungrouped__"}
                className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden"
              >
                {model && (
                  <div className="bg-[#f0f4f8] border-b border-[#e2e8f0] px-4 py-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#334155]">
                      {model}
                    </span>
                  </div>
                )}
                <div className="divide-y divide-[#f0f4f8]">
                  {items.map((entry) => (
                    <Link
                      key={entry.number}
                      href={`/companies/gore/parts/${encodeURIComponent(entry.number)}`}
                      className="flex items-center justify-between px-4 py-2.5 hover:bg-[#f0f4f8] transition-colors group"
                    >
                      <code className="text-sm font-mono font-semibold text-[#1a202c] group-hover:text-[#CC1C1C] tracking-wide transition-colors">
                        {entry.number}
                      </code>
                      {entry.variant && (
                        <span className="text-xs text-[#7A8A99] bg-[#f0f4f8] px-2 py-0.5 rounded-full">
                          {entry.variant}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Flat grid — no model labels */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
            {entries.map((entry) => (
              <Link
                key={entry.number}
                href={`/companies/gore/parts/${encodeURIComponent(entry.number)}`}
                className="group bg-white hover:bg-[#CC1C1C] border border-[#e2e8f0] hover:border-[#CC1C1C] rounded-lg px-4 py-3 flex flex-col gap-0.5 transition-colors"
              >
                <code className="text-sm font-mono font-semibold text-[#1a202c] group-hover:text-white tracking-wide transition-colors">
                  {entry.number}
                </code>
                {entry.variant && (
                  <span className="text-[11px] text-[#7A8A99] group-hover:text-red-100 transition-colors">{entry.variant}</span>
                )}
              </Link>
            ))}
          </div>
        )}

        <p className="mt-6 text-xs text-[#7A8A99]">
          Part numbers sourced from{" "}
          <a
            href="https://www.gore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#334155] transition-colors"
          >
            gore.com
          </a>
          . Custom configurations and additional variants may be available — contact RSTECH for
          details.
        </p>
      </div>
    </div>
  );
}
