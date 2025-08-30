import { NextResponse } from "next/server"; // or NextApiResponse for pages/api
import { dbConnect } from "@/app/lib/mongodb";
import { Item } from "@/app/models/item";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json(); // get data from client
    const newItem = new Item(body);

    await newItem.save();

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create item" }, { status: 400 });
  }
}
