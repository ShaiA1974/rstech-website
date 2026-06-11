import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a202c] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.svg"
              alt="RSTECH Electronics"
              width={140}
              height={48}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm text-gray-400 max-w-xs">{t("tagline")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: nav("home") },
                { href: "/companies", label: nav("companies") },
                { href: "/about", label: nav("about") },
                { href: "/contact", label: nav("contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              {t("contactUs")}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="mailto:info@rstech.co.il" className="hover:text-white transition-colors" suppressHydrationWarning>
                  info@rstech.co.il
                </a>
              </li>
              <li>
                <a href="tel:+97236490454" className="hover:text-white transition-colors" suppressHydrationWarning>
                  03-6490-454
                </a>
              </li>
              <li className="text-gray-400 leading-snug">{t("address")}</li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Our Partners
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {["W.L. Gore & Associates", "Tsubaki Kabelschlepp", "JAE"].map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {year} RSTECH Electronics Ltd. {t("rights")}</span>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-gray-300 transition-colors underline underline-offset-2"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-gray-300 transition-colors underline underline-offset-2"
            >
              {t("accessibility")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
