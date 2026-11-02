import { NextResponse } from "next/server";
import { fetchCmsQuickCallApi } from "@/lib/cms";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  if (!process.env.CMS_API_KEY) {
    return NextResponse.json(
      { error: "Quick call service is not configured" },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (
    !isRecord(body) ||
    typeof body.name !== "string" ||
    body.name.trim().length === 0 ||
    body.name.trim().length > 120 ||
    typeof body.phone_number !== "string" ||
    body.phone_number.trim().length < 7 ||
    body.phone_number.trim().length > 20 ||
    !/^\+?[0-9\s()-]+$/.test(body.phone_number.trim()) ||
    typeof body.page_url !== "string" ||
    body.page_url.trim().length === 0 ||
    body.page_url.trim().length > 2048
  ) {
    return NextResponse.json(
      { error: "Name, valid phone number, and page URL are required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetchCmsQuickCallApi({
      method: "POST",
      body: JSON.stringify({
        name: body.name.trim(),
        phone_number: body.phone_number.trim(),
        page_url: body.page_url.trim(),
      }),
    });
    const result: unknown = await response.json();
    return NextResponse.json(result, { status: response.status });
  } catch (error) {
    console.error("[api/quick-calls] submission failed:", error);
    return NextResponse.json(
      { error: "Unable to submit your callback request right now" },
      { status: 502 }
    );
  }
}
