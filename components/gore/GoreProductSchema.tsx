import { GORE_PRODUCTS } from "@/data/gore-products";

interface Props {
  id: string;
  /** The canonical URL for this product page */
  url: string;
}

/**
 * Injects JSON-LD structured data (schema.org) for a Gore product page.
 *
 * Uses Product + hasVariant pattern so every individual part number is
 * indexed by Google as a distinct MPN (Manufacturer Part Number), which
 * is what triggers your page to appear for exact part-number searches.
 *
 * Google's rich-results crawler specifically looks for:
 *   - @type: "Product"
 *   - mpn: "<part number>"
 *   - brand.name
 *   - offers (with seller and areaServed)
 */
export default function GoreProductSchema({ id, url }: Props) {
  const product = GORE_PRODUCTS.find((p) => p.id === id);
  if (!product || !product.partNumbers || product.partNumbers.length === 0) return null;

  const baseProduct = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    name: product.name,
    description: product.description,
    url,
    brand: {
      "@type": "Brand",
      name: "W.L. Gore & Associates",
    },
    manufacturer: {
      "@type": "Organization",
      name: "W.L. Gore & Associates",
      url: "https://www.gore.com",
    },
    ...(product.imageUrl
      ? { image: `https://www.rstech.co.il${product.imageUrl}` }
      : {}),
    hasVariant: product.partNumbers.map((pn) => ({
      "@type": "Product",
      name: pn.model
        ? `${product.name} — ${pn.model}`
        : product.name,
      sku: pn.number,
      mpn: pn.number,
      ...(pn.variant ? { color: pn.variant } : {}),
      brand: {
        "@type": "Brand",
        name: "W.L. Gore & Associates",
      },
      offers: {
        "@type": "Offer",
        seller: {
          "@type": "Organization",
          name: "RSTECH Electronics Ltd",
          url: "https://www.rstech.co.il",
        },
        url,
        availability: "https://schema.org/InStock",
        areaServed: {
          "@type": "Country",
          name: "Israel",
        },
        businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
      },
    })),
    // Also add an Offer at the group level for Google Shopping
    offers: {
      "@type": "AggregateOffer",
      seller: {
        "@type": "Organization",
        name: "RSTECH Electronics Ltd",
        url: "https://www.rstech.co.il",
      },
      availability: "https://schema.org/InStock",
      areaServed: {
        "@type": "Country",
        name: "Israel",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseProduct) }}
    />
  );
}
