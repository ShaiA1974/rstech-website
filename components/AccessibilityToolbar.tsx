"use client";

import { useState, useEffect } from "react";
import {
  Accessibility,
  X,
  Plus,
  Minus,
  Sun,
  Moon,
  Palette,
  Link,
  PauseCircle,
  Type,
  RotateCcw,
} from "lucide-react";
import { useLocale } from "next-intl";

type A11yState = {
  fontSize: number;
  highContrast: boolean;
  invertedColors: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  noAnimations: boolean;
  readableFont: boolean;
};

const DEFAULT_STATE: A11yState = {
  fontSize: 0,
  highContrast: false,
  invertedColors: false,
  grayscale: false,
  highlightLinks: false,
  noAnimations: false,
  readableFont: false,
};

const LABELS = {
  en: {
    toggle: "Accessibility Menu",
    title: "Accessibility",
    close: "Close accessibility menu",
    fontSize: "Font Size",
    normal: "Normal",
    large: "Large",
    xlarge: "X-Large",
    highContrast: "High Contrast",
    invertedColors: "Invert Colors",
    grayscale: "Grayscale",
    highlightLinks: "Highlight Links",
    noAnimations: "Stop Animations",
    readableFont: "Readable Font",
    reset: "Reset All",
  },
  he: {
    toggle: "תפריט נגישות",
    title: "נגישות",
    close: "סגור תפריט נגישות",
    fontSize: "גודל גופן",
    normal: "רגיל",
    large: "גדול",
    xlarge: "גדול מאוד",
    highContrast: "ניגודיות גבוהה",
    invertedColors: "צבעים הפוכים",
    grayscale: "גווני אפור",
    highlightLinks: "הדגש קישורים",
    noAnimations: "עצור אנימציות",
    readableFont: "גופן קריא",
    reset: "אפס הכל",
  },
};

const STORAGE_KEY = "rstech-a11y";

export default function AccessibilityToolbar() {
  const locale = useLocale();
  const L = LABELS[locale as keyof typeof LABELS] ?? LABELS.en;

  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(DEFAULT_STATE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setState(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;

    if (state.fontSize > 0) {
      html.setAttribute("data-a11y-font", String(state.fontSize));
    } else {
      html.removeAttribute("data-a11y-font");
    }

    const filters: string[] = [];
    if (state.grayscale) filters.push("grayscale(100%)");
    if (state.highContrast) filters.push("contrast(175%) brightness(1.05)");
    if (state.invertedColors) filters.push("invert(1) hue-rotate(180deg)");
    html.style.filter = filters.join(" ");

    state.highlightLinks
      ? html.setAttribute("data-a11y-links", "")
      : html.removeAttribute("data-a11y-links");

    state.noAnimations
      ? html.setAttribute("data-a11y-no-anim", "")
      : html.removeAttribute("data-a11y-no-anim");

    state.readableFont
      ? html.setAttribute("data-a11y-readable", "")
      : html.removeAttribute("data-a11y-readable");

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state, mounted]);

  function update(patch: Partial<A11yState>) {
    setState((prev) => ({ ...prev, ...patch }));
  }

  function reset() {
    setState(DEFAULT_STATE);
  }

  const fontLabel =
    state.fontSize === 0 ? L.normal : state.fontSize === 1 ? L.large : L.xlarge;

  const toggles: {
    key: keyof A11yState;
    label: string;
    icon: React.ElementType;
  }[] = [
    { key: "highContrast", label: L.highContrast, icon: Sun },
    { key: "invertedColors", label: L.invertedColors, icon: Moon },
    { key: "grayscale", label: L.grayscale, icon: Palette },
    { key: "highlightLinks", label: L.highlightLinks, icon: Link },
    { key: "noAnimations", label: L.noAnimations, icon: PauseCircle },
    { key: "readableFont", label: L.readableFont, icon: Type },
  ];

  const activeCount = [
    state.fontSize > 0,
    state.highContrast,
    state.invertedColors,
    state.grayscale,
    state.highlightLinks,
    state.noAnimations,
    state.readableFont,
  ].filter(Boolean).length;

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={L.toggle}
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-[#CC1C1C] hover:bg-[#A01515] text-white w-11 h-14 rounded-e-xl shadow-xl flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer"
      >
        <Accessibility className="w-5 h-5" />
        {activeCount > 0 && (
          <span className="text-[10px] font-bold bg-white text-[#CC1C1C] rounded-full w-4 h-4 flex items-center justify-center leading-none">
            {activeCount}
          </span>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        id="a11y-panel"
        role="dialog"
        aria-label={L.title}
        aria-modal="true"
        className={`fixed left-11 top-1/2 -translate-y-1/2 z-50 bg-[#0F172A] border border-slate-700 rounded-2xl shadow-2xl w-72 transition-all duration-200 origin-left ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <Accessibility className="w-5 h-5 text-red-400" />
            <span className="text-white font-bold text-sm">{L.title}</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label={L.close}
            className="text-slate-500 hover:text-white transition-colors cursor-pointer p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 space-y-3">
          <div className="bg-white/5 rounded-xl p-3">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
              {L.fontSize}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => update({ fontSize: Math.max(0, state.fontSize - 1) })}
                disabled={state.fontSize === 0}
                aria-label="Decrease font size"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg flex items-center justify-center text-white cursor-pointer transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <div className="flex-1 text-center text-sm font-semibold text-white">
                {fontLabel}
              </div>
              <button
                onClick={() => update({ fontSize: Math.min(2, state.fontSize + 1) })}
                disabled={state.fontSize === 2}
                aria-label="Increase font size"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg flex items-center justify-center text-white cursor-pointer transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {toggles.map(({ key, label, icon: Icon }) => {
            const active = state[key] as boolean;
            return (
              <button
                key={key}
                role="switch"
                aria-checked={active}
                onClick={() => update({ [key]: !active })}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all cursor-pointer ${
                  active
                    ? "bg-[#CC1C1C]/20 border-[#CC1C1C]/50 text-white"
                    : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
                <div
                  className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-colors shrink-0 ${
                    active ? "bg-[#CC1C1C]" : "bg-white/20"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                      active ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </div>
              </button>
            );
          })}

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-white py-2.5 border border-white/10 hover:border-white/20 rounded-xl transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {L.reset}
          </button>
        </div>
      </div>
    </>
  );
}
