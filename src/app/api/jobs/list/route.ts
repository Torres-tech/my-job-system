import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Job } from "@/models/Job";
import { requireAuth } from "@/lib/apiAuth";

export async function GET(req: NextRequest) {
  const auth = requireAuth(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();

  const q = (req.nextUrl.searchParams.get("q") || "").trim();
  const filter = q ? { $or: [{ title: { $regex: q, $options: "i" } }, { company: { $regex: q, $options: "i" } }] } : {};
  const jobs = await Job.find(filter).sort({ createdAt: -1 }).limit(50).lean();
  return NextResponse.json({ jobs });
}


