import connectMongoDB from "../../../lib/mongodb";
import Item from "../../../models/item.model";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // Handle GET requests
    await connectMongoDB();
    const items = await Item.find();
    return NextResponse.json(items, { status: 200 });
}

export async function POST(request: NextRequest) {
    // Handle POST requests
    const { title, description, image } = await request.json();
    await connectMongoDB();
    await Item.create({ title, description, image });
    return NextResponse.json({ message: "item added successfully"}, {status: 201});
}



