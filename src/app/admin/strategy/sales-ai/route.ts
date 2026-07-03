import { getAdminSession } from "@/lib/admin-auth";
import { readFileSync } from "fs";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";

// Dedicated page route for the VoltSol Sales AI strategy doc — a real,
// human-readable webpage, not a file download. Deliberately does NOT go
// through /admin/download/[file] (which sets Content-Disposition headers
// intended for actual file downloads); this route returns plain HTML with
// no Content-Disposition at all, so browsers always render it inline as a
// normal page, mobile Safari included.
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.redirect(
      new URL("/admin/login?next=/admin/strategy/sales-ai", req.url)
    );
  }

  // Read from the repo's own deliverables/ directory so this works from
  // Vercel's serverless functions in production, not just on a dev machine.
  const filePath = join(process.cwd(), "deliverables", "VOLTSOL-SOLAR-AI-STRATEGY.html");

  let content: string;
  try {
    content = readFileSync(filePath, "utf-8");
  } catch (err) {
    console.error("Strategy doc read error:", err);
    return NextResponse.json({ error: "Document not accessible" }, { status: 500 });
  }

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
