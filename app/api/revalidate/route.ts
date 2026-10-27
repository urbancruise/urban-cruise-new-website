// urban-cruise/app/api/revalidate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const payload = body as { tags?: unknown; paths?: unknown };
  const tags = payload.tags === undefined ? [] : payload.tags;
  const paths = payload.paths === undefined ? [] : payload.paths;
  const isStringArray = (value: unknown): value is string[] =>
    Array.isArray(value) &&
    value.every((item) => typeof item === "string" && item.trim().length > 0);

  if (
    !isStringArray(tags) ||
    !isStringArray(paths) ||
    paths.some((path) => path.length > 1024) ||
    (tags.length === 0 && paths.length === 0)
  ) {
    return NextResponse.json(
      { error: "Expected non-empty string tags or paths" },
      { status: 400 }
    );
  }

  try {
    for (const tag of tags) revalidateTag(tag, "default");
    for (const path of paths) revalidatePath(path);

    return NextResponse.json({
      revalidated: true,
      tags,
      paths,
      now: Date.now(),
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Revalidation failed" },
      { status: 500 }
    );
  }
}
