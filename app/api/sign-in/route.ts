// app/api/sign-in/route.ts
import { NextResponse } from "next/server";
import { setSessionCookie } from "@/lib/actions/auth.action";

export async function POST(req: Request) {
  const { idToken } = await req.json();

  if (!idToken) {
    return NextResponse.json({ success: false, message: "Missing token" }, { status: 400 });
  }

  await setSessionCookie(idToken);

  return NextResponse.json({ success: true });
}
