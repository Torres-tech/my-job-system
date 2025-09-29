import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/apiAuth";

export async function POST(req: NextRequest) {
  const auth = requireAuth(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { resume, jd } = await req.json();
  if (!resume || !jd) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  // Placeholder: prepend a targeted summary
  const tailored = `Summary: Tailored for this JD.\n\n${resume}`;
  return NextResponse.json({ resume: tailored });
}


