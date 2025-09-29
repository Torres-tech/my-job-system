import { NextRequest, NextResponse } from "next/server";
import { requireRole } from "@/lib/apiAuth";
import { connectToDatabase } from "@/lib/db";
import { Application } from "@/models/Application";

export async function GET(req: NextRequest) {
  const auth = requireRole(req, ["mentor", "admin"]);
  if (auth instanceof Response) return auth;
  await connectToDatabase();

  const total = await Application.countDocuments({});
  const submitted = await Application.countDocuments({ status: "submitted" });
  const interview = await Application.countDocuments({ status: "interview" });
  const offer = await Application.countDocuments({ status: "offer" });

  return NextResponse.json({ total, submitted, interview, offer });
}


