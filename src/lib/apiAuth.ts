import { NextRequest, NextResponse } from "next/server";
import { getBearerToken, verifyJwt } from "@/lib/auth";

export function requireAuth(req: NextRequest) {
  const token = getBearerToken(req.headers.get("authorization"));
  if (!token) return null;
  const payload = verifyJwt(token);
  return payload;
}

export function requireRole(req: NextRequest, roles: string[]) {
  const payload = requireAuth(req);
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!roles.includes(payload.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  return payload;
}


