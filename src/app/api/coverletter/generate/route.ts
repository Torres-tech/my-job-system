import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/apiAuth";

export async function POST(req: NextRequest) {
  const auth = requireAuth(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { jd, resume } = await req.json();
  if (!jd || !resume) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  const cover = `Dear Hiring Manager,\n\nI am excited to apply...\n\nSincerely,\nYour Candidate`;
  return NextResponse.json({ cover_letter: cover });
}


