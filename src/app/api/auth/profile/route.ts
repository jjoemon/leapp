// src/app/api/profile/route.ts
import { NextResponse } from "next/server";
import { updateUser } from "@/app/services/authService";

export async function POST(req: Request) {
  const { id, name, phone } = await req.json();

  if (!id) return NextResponse.json({ error: "User ID required" }, { status: 400 });

  await updateUser(id, {
    name,
    phone,
    profileCompleted: true,
  });

  return NextResponse.json({ success: true });
}
