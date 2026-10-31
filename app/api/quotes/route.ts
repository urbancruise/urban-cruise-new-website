import { NextResponse } from "next/server";
import { fetchCmsQuoteApi } from "@/lib/cms";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  if (!process.env.CMS_API_KEY) {
    return NextResponse.json(
      { error: "Quote service is not configured" },
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
    typeof body.full_name !== "string" ||
    typeof body.phone_number !== "string" ||
    (body.city_name !== undefined &&
      (typeof body.city_name !== "string" ||
        body.city_name.trim().length === 0 ||
        body.city_name.length > 100))
  ) {
    return NextResponse.json(
          {
            error:
              "Full name and phone number are required; city name must be valid when provided",
          },
          { status: 400 }
        );
  }

  try {
    const response = await fetchCmsQuoteApi("", {
      method: "POST",
      body: JSON.stringify({
        full_name: body.full_name,
        phone_number: body.phone_number,
        ...(typeof body.city_name === "string"
          ? { city: body.city_name.trim() }
          : {}),
      }),
    });
    const result: unknown = await response.json();
    return NextResponse.json(result, { status: response.status });
  } catch (error) {
    console.error("[api/quotes] contact save failed:", error);
    return NextResponse.json(
      { error: "Unable to save contact details right now" },
      { status: 502 }
    );
  }
}
