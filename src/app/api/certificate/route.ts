import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

// Submit ID handler / Get Certificate from Id
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.recipientId) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  // console.log(body.recipientId, typeof body.recipientId);

  await dbConnect();

  // const data = await mongoose.connections[0].db
  //   ?.collection("certificates")
  //   .find({})
  //   .toArray();
  // console.log(data);

  const recipientData = await mongoose.connections[0].db
    ?.collection("certificates")
    .findOne({ recipientId: body.recipientId });

  console.log(recipientData);

  if (recipientData) {
    return NextResponse.redirect(
      new URL(`/${recipientData.recipientId}`, request.nextUrl)
    );
  } else {
    return NextResponse.json(
      { error: "No Recipient under this ID found!" },
      { status: 400 }
    );
  }
}
