import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/apiAuth";
import { connectToDatabase } from "@/lib/db";
import { Application } from "@/models/Application";

export async function POST(req: NextRequest) {
  const auth = requireAuth(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { jobId, resume_version, cover_letter } = await req.json();
  if (!jobId) return NextResponse.json({ error: "Missing jobId" }, { status: 400 });

  await connectToDatabase();
  const application = await Application.create({
    userId: auth.sub,
    jobId,
    resume_version,
    cover_letter,
    status: "submitted",
    dateSubmitted: new Date(),
  });
  return NextResponse.json({ id: application._id });
}


