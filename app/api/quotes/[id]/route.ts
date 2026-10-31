import { NextResponse } from "next/server";
import { fetchCmsQuoteApi } from "@/lib/cms";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!process.env.CMS_API_KEY) {
    return NextResponse.json(
      { error: "Quote service is not configured" },
      { status: 503 }
    );
  }

  const { id } = await params;
  if (!/^[1-9]\d*$/.test(id)) {
    return NextResponse.json({ error: "Invalid quote ID" }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!isRecord(body) || typeof body.quote_token !== "string") {
    return NextResponse.json(
      { error: "Quote token is required" },
      { status: 400 }
    );
  }

  const { quote_token, ...quote } = body;

  try {
    const response = await fetchCmsQuoteApi(`/${id}`, {
      method: "PUT",
      headers: { "x-quote-token": quote_token },
      body: JSON.stringify(quote),
    });
    const result: unknown = await response.json();
    return NextResponse.json(result, { status: response.status });
  } catch (error) {
    console.error("[api/quotes] submission failed:", error);
    return NextResponse.json(
      { error: "Unable to submit your quote right now" },
      { status: 502 }
    );
  }
}
