/**
 * IndexNow utility for submitting URLs for instant indexing
 * Submits to Bing, Yandex, and Naver via IndexNow protocol
 */

const SITE_URL = "https://www.rstech.co.il";
const INDEXNOW_ENDPOINT = `${SITE_URL}/api/indexnow`;

interface SubmitOptions {
  onSuccess?: (count: number) => void;
  onError?: (error: Error) => void;
}

/**
 * Submit URLs to IndexNow for instant indexing
 * @param urls - Array of absolute URLs to submit
 * @param options - Optional callbacks for success/error
 */
export async function submitToIndexNow(
  urls: string[],
  options?: SubmitOptions
): Promise<boolean> {
  if (!urls || urls.length === 0) {
    console.warn("submitToIndexNow: No URLs provided");
    return false;
  }

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ urlList: urls }),
    });

    if (!response.ok) {
      throw new Error(`IndexNow API returned ${response.status}`);
    }

    const data = await response.json();
    console.log(`✓ IndexNow: ${data.submitted} URL(s) submitted for indexing`);

    if (options?.onSuccess) {
      options.onSuccess(data.submitted);
    }

    return true;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error("✗ IndexNow submission failed:", err.message);

    if (options?.onError) {
      options.onError(err);
    }

    return false;
  }
}

/**
 * Generate IndexNow URLs for all articles and key pages
 */
export function generateIndexNowUrls(locale: string = "en"): string[] {
  const baseUrl = SITE_URL;
  const localePrefix = `/${locale}`;

  return [
    // Key pages
    `${baseUrl}${localePrefix}`,
    `${baseUrl}${localePrefix}/companies`,
    `${baseUrl}${localePrefix}/companies/gore`,
    `${baseUrl}${localePrefix}/companies/tsubaki`,
    `${baseUrl}${localePrefix}/companies/jae`,
    `${baseUrl}${localePrefix}/knowledge-base`,

    // Articles (add more as they're published)
    `${baseUrl}${localePrefix}/knowledge-base/cable-carrier-selection-guide`,
  ];
}

/**
 * Submit all key pages for both EN and HE
 */
export async function submitAllKeyPages(): Promise<void> {
  const enUrls = generateIndexNowUrls("en");
  const heUrls = generateIndexNowUrls("he");
  const allUrls = [...enUrls, ...heUrls];

  console.log(`Submitting ${allUrls.length} URLs to IndexNow...`);
  await submitToIndexNow(allUrls);
}

/**
 * Submit a newly published article to IndexNow
 */
export async function submitArticle(slug: string): Promise<void> {
  const urls = [
    `${SITE_URL}/en/knowledge-base/${slug}`,
    `${SITE_URL}/he/knowledge-base/${slug}`,
  ];

  console.log(`Submitting article "${slug}" to IndexNow...`);
  await submitToIndexNow(urls);
}
