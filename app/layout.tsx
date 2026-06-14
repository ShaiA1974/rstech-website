import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RSTECH Electronics Ltd",
    "description": "Authorized Israeli representative of W.L. Gore, Tsubaki Kabelschlepp, and JAE",
    "url": "https://rstech.co.il",
    "logo": "https://rstech.co.il/logo.svg",
    "sameAs": [
      "https://www.linkedin.com/company/rstech-electronics",
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://rstech.co.il/contact"
    }
  };

  return (
    <html suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
