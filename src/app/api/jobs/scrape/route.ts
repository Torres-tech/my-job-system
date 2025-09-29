import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Job } from "@/models/Job";
import { requireRole } from "@/lib/apiAuth";

export async function POST(req: NextRequest) {
  const auth = requireRole(req, ["admin", "mentor"]);
  if (auth instanceof Response) return auth;
  await connectToDatabase();

  // Placeholder scrape: insert a sample job
  const created = await Job.create({
    title: "Software Engineer Intern",
    company: "Contoso",
    jd_text: "Assist in building web applications. Familiarity with JS/TS required.",
    source: "manual",
  });

  return NextResponse.json({ created: { id: created._id } });
}


