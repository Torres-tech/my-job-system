import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import { hashPassword } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { name, email, password, role } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  await connectToDatabase();

  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json({ error: "Email already in use" }, { status: 409 });
  }

  const passwordHash = await hashPassword(password);
  const user = await User.create({ name, email, passwordHash, role: role || "mentee" });

  return NextResponse.json({ id: user._id, email: user.email, role: user.role });
}


