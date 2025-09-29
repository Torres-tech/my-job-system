import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/apiAuth";

function simpleMatchScore(resume: string, jd: string): number {
  const r = resume.toLowerCase();
  const j = jd.toLowerCase();
  let score = 0;
  const keywords = ["typescript", "react", "node", "python", "data", "cloud"];
  for (const k of keywords) {
    if (r.includes(k) && j.includes(k)) score += 1;
  }
  return Math.round((score / keywords.length) * 100);
}

export async function POST(req: NextRequest) {
  const auth = requireAuth(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { resume, jd } = await req.json();
  if (!resume || !jd) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  const match = simpleMatchScore(resume, jd);
  return NextResponse.json({ match });
}


