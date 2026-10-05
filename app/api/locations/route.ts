// urban-cruise/app/api/locations/route.ts
import { NextResponse } from "next/server";

const CMS_URL = (process.env.CMS_API_URL || "http://localhost:5000").replace(
  /\/$/,
  ""
);
const CMS_API_KEY = process.env.CMS_API_KEY || "";

export const revalidate = 300;

export async function GET() {
  try {
    if (!CMS_API_KEY) {
      return NextResponse.json({ cities: [] }, { status: 200 });
    }

    const res = await fetch(`${CMS_URL}/api/public/cities`, {
      headers: {
        "x-api-key": CMS_API_KEY,
        Accept: "application/json",
      },
      next: { revalidate: 300, tags: ["cities"] },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as {
      cities?: Array<{
        id: number;
        name: string;
        slug: string;
        image_url?: string | null;
      }>;
    };

    const cleaned = (data.cities || [])
      .filter(
        (c) =>
          c.slug?.toLowerCase() !== "global" &&
          c.name?.toLowerCase() !== "global"
      )
      .map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        image_url: c.image_url || null,
      }));

    return NextResponse.json(
      { cities: cleaned },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (err) {
    console.error("[/api/locations] error:", err);
    return NextResponse.json({ cities: [] }, { status: 200 });
  }
}