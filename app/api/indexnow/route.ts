import { NextRequest, NextResponse } from "next/server";

// IndexNow API endpoint key (should be stored in environment variable)
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "7e5f8a9c-4d2b-11ee-be56-0242ac120002";
const SITE_HOST = "rstech.co.il";
const INDEXNOW_API = "https://api.indexnow.org/indexnow";

interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation?: string;
  urlList: string[];
}

/**
 * POST /api/indexnow
 * Submit URLs to IndexNow for Bing, Yandex, and Naver indexing
 *
 * Body: { urlList: string[] }
 * Example: { urlList: ["https://rstech.co.il/en/knowledge-base/article-slug"] }
 */
export async function POST(request: NextRequest) {
  try {
    const { urlList } = await request.json();

    if (!urlList || !Array.isArray(urlList) || urlList.length === 0) {
      return NextResponse.json(
        { error: "urlList must be a non-empty array" },
        { status: 400 }
      );
    }

    // Validate URLs
    const validUrls = urlList.filter((url) => {
      try {
        new URL(url);
        return url.includes(SITE_HOST);
      } catch {
        return false;
      }
    });

    if (validUrls.length === 0) {
      return NextResponse.json(
        { error: "No valid URLs provided" },
        { status: 400 }
      );
    }

    // Prepare IndexNow payload
    const payload: IndexNowPayload = {
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: validUrls,
    };

    // Submit to IndexNow
    const response = await fetch(INDEXNOW_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("IndexNow API error:", response.status, response.statusText);
      return NextResponse.json(
        { error: "Failed to submit to IndexNow" },
        { status: response.status }
      );
    }

    return NextResponse.json(
      {
        success: true,
        submitted: validUrls.length,
        message: `${validUrls.length} URL(s) submitted to IndexNow`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("IndexNow endpoint error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/indexnow
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "IndexNow",
    host: SITE_HOST,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
  });
}
