import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/apiAuth";
import { connectToDatabase } from "@/lib/db";
import { Application } from "@/models/Application";
import { Job } from "@/models/Job";

export async function GET(req: NextRequest) {
  const auth = requireAuth(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();

  const apps = await Application.find({ userId: auth.sub })
    .sort({ createdAt: -1 })
    .limit(100)
    .lean();
  const jobIds = apps.map((a) => a.jobId);
  const jobs = await Job.find({ _id: { $in: jobIds } }).lean();
  const jobMap = new Map(jobs.map((j) => [String(j._id), j]));

  const history = apps.map((a) => ({
    id: a._id,
    status: a.status,
    dateSubmitted: a.dateSubmitted,
    job: jobMap.get(String(a.jobId)) || null,
  }));
  return NextResponse.json({ history });
}


