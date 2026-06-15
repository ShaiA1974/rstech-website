import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.rstech.co.il/#organization",
        "name": "RSTECH Electronics Ltd",
        "alternateName": "RSTECH אלקטרוניקס",
        "url": "https://www.rstech.co.il",
        "description": "Authorized Israeli representative of W.L. Gore, Tsubaki Kabelschlepp, and JAE",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.rstech.co.il/logo.svg",
          "width": 140,
          "height": 48
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "64 Ashkenazy St.",
          "addressLocality": "Tel Aviv",
          "postalCode": "6986928",
          "addressCountry": "IL"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "telephone": "+972-3-6490454",
          "email": "info@rstech.co.il",
          "url": "https://www.rstech.co.il/contact"
        },
        "sameAs": [
          "https://www.linkedin.com/company/rstech-electronics"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.rstech.co.il/#website",
        "url": "https://www.rstech.co.il",
        "name": "RSTECH Electronics",
        "description": "Authorized Technology Representative in Israel",
        "publisher": {
          "@id": "https://www.rstech.co.il/#organization"
        },
        "inLanguage": ["en", "he"]
      }
    ]
  };

  return (
    <html suppressHydrationWarning lang="en">
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
