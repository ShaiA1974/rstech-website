"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { useState, useRef } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";

const PRODUCTS_MENU = [
  {
    company: "W.L. Gore & Associates",
    href: "/companies/gore",
    categories: [
      { label: "Cables & Assemblies", href: "/companies/gore/products?cat=cables" },
      { label: "SKYFLEX® Sealant", href: "/companies/gore/products?cat=sealants" },
      { label: "Vents", href: "/companies/gore/products?cat=vents" },
    ],
    viewAll: "/companies/gore/products",
  },
  {
    company: "Tsubaki Kabelschlepp",
    href: "/companies/tsubaki",
    categories: [
      { label: "Cable Carriers", href: "/companies/tsubaki/carriers" },
      { label: "TRAXLINE® Cables", href: "/companies/tsubaki/cables" },
      { label: "Systems & Protection", href: "/companies/tsubaki/products?cat=systems" },
    ],
    viewAll: "/companies/tsubaki/products",
  },
  {
    company: "JAE",
    href: "/companies/jae",
    categories: [
      { label: "Board-to-Board", href: "/companies/jae/products?cat=board-to-board" },
      { label: "FPC / FFC", href: "/companies/jae/products?cat=fpc-ffc" },
      { label: "Circular Connectors", href: "/companies/jae/products?cat=circular" },
      { label: "Automotive", href: "/companies/jae/products?cat=automotive" },
    ],
    viewAll: "/companies/jae/products",
  },
];

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isRtl = locale === "he";
  const otherLocale = locale === "en" ? "he" : "en";
  const otherLocaleLabel = locale === "en" ? "עברית" : "English";

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale });
  }

  function navClass(href: string) {
    const active = pathname === href || pathname.startsWith(href + "/");
    return `text-sm font-medium transition-colors ${
      active ? "text-[#CC1C1C]" : "text-[#4a5568] hover:text-[#CC1C1C]"
    }`;
  }

  const productsActive =
    pathname.startsWith("/companies/gore/products") ||
    pathname.startsWith("/companies/tsubaki/products") ||
    pathname.startsWith("/companies/jae/products");

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 150);
  }

  return (
    <header className="bg-white border-b border-[#e2e8f0] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="RSTECH Electronics"
              width={140}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={navClass("/")}>
              {t("home")}
            </Link>
            <Link href="/companies" className={navClass("/companies")}>
              {t("companies")}
            </Link>

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                  productsActive ? "text-[#CC1C1C]" : "text-[#4a5568] hover:text-[#CC1C1C]"
                }`}
                aria-expanded={productsOpen}
                aria-haspopup="true"
                onClick={() => setProductsOpen((v) => !v)}
              >
                {t("products")}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Mega-menu panel */}
              {productsOpen && (
                <div
                  className="absolute top-full mt-2 bg-white border border-[#e2e8f0] rounded-2xl shadow-xl p-6 z-50 min-w-[680px]"
                  style={isRtl ? { right: 0 } : { left: "50%", transform: "translateX(-50%)" }}
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {PRODUCTS_MENU.map(({ company, href, categories, viewAll }) => (
                      <div key={company}>
                        <Link
                          href={href}
                          className="block text-xs font-bold uppercase tracking-wider text-[#7A8A99] hover:text-[#CC1C1C] transition-colors mb-3 cursor-pointer"
                          onClick={() => setProductsOpen(false)}
                        >
                          {company}
                        </Link>
                        <ul className="space-y-1.5 mb-3">
                          {categories.map(({ label, href: catHref }) => (
                            <li key={label}>
                              <Link
                                href={catHref}
                                className="flex items-center gap-1.5 text-sm text-[#334155] hover:text-[#CC1C1C] transition-colors cursor-pointer group"
                                onClick={() => setProductsOpen(false)}
                              >
                                <ChevronRight className="w-3 h-3 text-[#e2e8f0] group-hover:text-[#CC1C1C] transition-colors" />
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={viewAll}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#CC1C1C] hover:text-[#A01515] transition-colors cursor-pointer"
                          onClick={() => setProductsOpen(false)}
                        >
                          {company === "W.L. Gore & Associates" ? t("viewAllProducts") : "View Products"}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className={navClass("/about")}>
              {t("about")}
            </Link>
            <Link href="/contact" className={navClass("/contact")}>
              {t("contact")}
            </Link>
          </nav>

          {/* Right: language + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={switchLocale}
              className="text-sm font-medium text-[#CC1C1C] hover:text-[#A01515] border border-[#CC1C1C] rounded px-3 py-1.5 transition-colors hover:bg-red-50 cursor-pointer"
              aria-label={`Switch to ${otherLocaleLabel}`}
            >
              {otherLocaleLabel}
            </button>
            <Link
              href="/contact"
              className="bg-[#CC1C1C] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#A01515] transition-colors cursor-pointer"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-[#4a5568] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#e2e8f0] bg-white">
          <div className="px-4 py-4 flex flex-col gap-1">
            <Link
              href="/"
              className="text-sm font-medium text-[#4a5568] hover:text-[#CC1C1C] px-2 py-2 rounded-lg hover:bg-red-50 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              href="/companies"
              className="text-sm font-medium text-[#4a5568] hover:text-[#CC1C1C] px-2 py-2 rounded-lg hover:bg-red-50 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t("companies")}
            </Link>

            {/* Mobile Products accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between text-sm font-medium text-[#4a5568] hover:text-[#CC1C1C] px-2 py-2 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                onClick={() => setMobileProductsOpen((v) => !v)}
              >
                <span>{t("products")}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileProductsOpen && (
                <div className="ms-4 mt-1 space-y-3 pb-2">
                  {PRODUCTS_MENU.map(({ company, categories, viewAll }) => (
                    <div key={company}>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#7A8A99] px-2 mb-1.5">
                        {company}
                      </p>
                      <ul className="space-y-1">
                        {categories.map(({ label, href }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              className="flex items-center gap-1.5 text-sm text-[#334155] hover:text-[#CC1C1C] px-2 py-1 rounded transition-colors cursor-pointer"
                              onClick={() => { setMenuOpen(false); setMobileProductsOpen(false); }}
                            >
                              <ChevronRight className="w-3 h-3 text-[#cbd5e0]" />
                              {label}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href={viewAll}
                            className="flex items-center gap-1 text-xs font-semibold text-[#CC1C1C] px-2 py-1 cursor-pointer"
                            onClick={() => { setMenuOpen(false); setMobileProductsOpen(false); }}
                          >
                            View all
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-sm font-medium text-[#4a5568] hover:text-[#CC1C1C] px-2 py-2 rounded-lg hover:bg-red-50 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#4a5568] hover:text-[#CC1C1C] px-2 py-2 rounded-lg hover:bg-red-50 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t("contact")}
            </Link>

            <div className="pt-2 border-t border-[#e2e8f0] mt-1">
              <button
                onClick={() => { switchLocale(); setMenuOpen(false); }}
                className="text-sm font-medium text-[#CC1C1C] border border-[#CC1C1C] rounded px-3 py-1.5 cursor-pointer"
              >
                {otherLocaleLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
