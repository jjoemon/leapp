// app/test/route.tsx
import { NextResponse } from "next/server";
import { dbConnect } from "@/app/lib/mongodb";
import { Item } from "@/app/models/item";

export async function GET() {
  try {
    await dbConnect();
    const items = await Item.find();
    return NextResponse.json({ success: true, data: items }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const newItem = new Item(body);
    await newItem.save();
    return NextResponse.json({ success: true, data: newItem }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
