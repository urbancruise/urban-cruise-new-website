// urban-cruise/app/api/revalidate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { tags?: string[]; paths?: string[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { tags = [], paths = [] } = body;

  try {
    tags.forEach((tag) => revalidateTag(tag));
    paths.forEach((path) => revalidatePath(path));

    return NextResponse.json({
      revalidated: true,
      tags,
      paths,
      now: Date.now(),
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Revalidation failed" },
      { status: 500 }
    );
  }
}
