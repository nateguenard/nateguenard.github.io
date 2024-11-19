import connectMongoDB from "../../../../lib/mongodb";
import Item from "../../../../models/item.model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectMongoDB();
  if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }
  const item = await Item.findById(id);
  if (!item) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }
  return NextResponse.json(item, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { title, description, image } = await request.json();
  await connectMongoDB();

  if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const updatedItem = await Item.findByIdAndUpdate(
      id,
      { title, description, image },
      { new: true, runValidators: true }
  );
  if (!updatedItem) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }
  return NextResponse.json(updatedItem, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectMongoDB();
  if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }
  const deletedItem = await Item.findByIdAndDelete(id);
  if (!deletedItem) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Item deleted successfully" }, { status: 200 });
}

