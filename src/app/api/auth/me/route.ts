import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import { getBearerToken, verifyJwt } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = getBearerToken(req.headers.get("authorization"));
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const payload = verifyJwt(token);
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();
  const user = await User.findById(payload.sub).lean();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ id: user._id, email: user.email, role: user.role, name: user.name });
}


