import { getAdminSession } from "@/lib/admin-auth";
import { readFileSync } from "fs";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED_FILES = [
  "SEO_DOMINATION_PLAN_VoltSol_2026.md",
  "CITY_PAGE_TEMPLATE.md",
  "LINK_BUILDING_PLAYBOOK.md",
  "QUICK_START_CHECKLIST.md",
  "README.md",
  "JOSH-OROZCO-CALL-TRANSCRIPT.md",
  "JOSH-BROKERAGE-STRATEGY-SUMMARY.md",
  "VOLTSOL-VISION-STATEMENT.md",
  "VOLTSOL-VISION-STATEMENT.html",
  "VOLTSOL-SOLAR-AI-STRATEGY.md",
];

// Files that should render inline in the browser (e.g. an iframe) instead
// of forcing a download prompt. Everything else defaults to attachment.
const INLINE_FILES = new Set(["VOLTSOL-VISION-STATEMENT.html"]);

export async function GET(
  req: NextRequest,
  { params }: { params: { file: string } }
) {
  try {
    // Auth check — real session validation (token vs DB), same pattern as
    // other /admin pages. (Previously checked an `x-admin-email` header
    // that plain browser link-clicks never send, which made downloads
    //401 for everyone; fixed to use the actual session cookie.)
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const filename = decodeURIComponent(params.file);

    // Validate filename
    if (!ALLOWED_FILES.includes(filename)) {
      return NextResponse.json(
        { error: "File not found" },
        { status: 404 }
      );
    }

    // Read file from workspace
    const filePath = join(
      process.cwd(),
      "../..",
      ".openclaw",
      "workspace-voltsol",
      "deliverables",
      filename
    );

    let content: string;
    try {
      content = readFileSync(filePath, "utf-8");
    } catch (err) {
      console.error("File read error:", err);
      return NextResponse.json(
        { error: "File not accessible" },
        { status: 500 }
      );
    }

    // Render HTML inline (e.g. the vision-statement pitch doc); everything
    // else downloads as a markdown attachment.
    const isHtml = filename.toLowerCase().endsWith(".html");
    const contentType = isHtml
      ? "text/html; charset=utf-8"
      : "text/markdown; charset=utf-8";
    const disposition = INLINE_FILES.has(filename)
      ? "inline"
      : `attachment; filename="${filename}"`;

    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": disposition,
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Download failed" },
      { status: 500 }
    );
  }
}
