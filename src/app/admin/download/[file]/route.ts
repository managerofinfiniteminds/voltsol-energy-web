import { isWhitelistedAdmin } from "@/lib/admin-auth";
import { readFileSync } from "fs";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED_FILES = [
  "SEO_DOMINATION_PLAN_VoltSol_2026.md",
  "CITY_PAGE_TEMPLATE.md",
  "LINK_BUILDING_PLAYBOOK.md",
  "QUICK_START_CHECKLIST.md",
  "README.md"
];

export async function GET(
  req: NextRequest,
  { params }: { params: { file: string } }
) {
  try {
    // Auth check
    const email = req.headers.get("x-admin-email") || "";
    const authenticated = await isWhitelistedAdmin(email);
    
    if (!authenticated) {
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

    // Return as markdown file download
    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
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
