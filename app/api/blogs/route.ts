import { NextRequest, NextResponse } from "next/server";

interface BlogHeroContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundImagePublicId?: string;
  vehiclesImage?: string;
  vehiclesImageAlt?: string;
  vehiclesImagePublicId?: string;
}

const CMS_URL = (process.env.CMS_API_URL || "http://localhost:5000").replace(
  /\/$/,
  ""
);
const CMS_API_KEY = process.env.CMS_API_KEY || "";

export async function GET(request: NextRequest) {
  if (!CMS_API_KEY) {
    return NextResponse.json(
      { error: "Blog service is not configured" },
      { status: 503 }
    );
  }

  try {
    const citySlug = request.nextUrl.searchParams.get("city");
    const cmsUrl = new URL(`${CMS_URL}/api/public/blogs`);
    if (citySlug) cmsUrl.searchParams.set("city", citySlug);

    const response = await fetch(cmsUrl, {
      headers: {
        "x-api-key": CMS_API_KEY,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`CMS blog request failed with status ${response.status}`);
    }

    const data = (await response.json()) as {
      hero?: BlogHeroContent | null;
      blogs?: unknown[];
      categories?: string[];
    };

    return NextResponse.json(
      {
        hero: data.hero || null,
        blogs: data.blogs || [],
        categories: data.categories || [],
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("[/api/blogs] CMS request failed:", error);
    return NextResponse.json(
      { error: "Could not load blog posts" },
      { status: 502 }
    );
  }
}
