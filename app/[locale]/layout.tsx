import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";
import "../globals.css";

const SITE_NAME = "RSTECH Electronics";
const SITE_URL = "https://rstech.co.il";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RSTECH Electronics — Authorized Technology Representative in Israel",
    template: "%s | RSTECH Electronics",
  },
  description:
    "RSTECH Electronics Ltd is the authorized Israeli representative of W.L. Gore, Tsubaki Kabelschlepp, and JAE — bringing world-class technology to Israeli industries.",
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "RSTECH Electronics — Authorized Technology Representative in Israel",
    description:
      "RSTECH Electronics Ltd is the authorized Israeli representative of W.L. Gore, Tsubaki Kabelschlepp, and JAE.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "RSTECH Electronics — Authorized Technology Representative in Israel",
    description:
      "Authorized Israeli representative of W.L. Gore, Tsubaki Kabelschlepp, and JAE.",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const isRtl = locale === "he";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          "Authorized Israeli representative of W.L. Gore, Tsubaki Kabelschlepp, and JAE.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["en", "he"],
      },
      {
        "@type": ["LocalBusiness", "Organization"],
        "@id": `${SITE_URL}/#organization`,
        name: "RSTECH Electronics Ltd",
        alternateName: "RSTECH אלקטרוניקס",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        image: `${SITE_URL}/logo.svg`,
        description:
          "Authorized Israeli distributor of W.L. Gore, Tsubaki Kabelschlepp, and JAE. Serving Israeli companies in medical, semiconductor, defense, and industrial sectors.",
        email: "info@rstech.co.il",
        telephone: "+972-3-6490454",
        address: {
          "@type": "PostalAddress",
          streetAddress: "64 Ashkenazy St.",
          addressLocality: "Tel Aviv",
          postalCode: "6986928",
          addressCountry: "IL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 32.0853,
          longitude: 34.7818,
        },
        areaServed: {
          "@type": "Country",
          name: "Israel",
        },
      },
    ],
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang = '${locale}';`
      }} />
      <div className="min-h-screen flex flex-col" dir={isRtl ? "rtl" : "ltr"}>
        <NextIntlClientProvider messages={messages}>
          <AccessibilityToolbar />
          {children}
        </NextIntlClientProvider>
      </div>
    </>
  );
}
