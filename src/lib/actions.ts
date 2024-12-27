"use server";

import Certificate from "@/models/recipients";
import { redirect } from "next/navigation";
import dbConnect from "./dbConnect";

export type FormState =
  | {
      error?: string;
      message?: string;
    }
  | undefined;

export async function submitAction(
  state: FormState,
  formdata: FormData
): Promise<FormState> {
  const recipientId = formdata.get("recipientId");

  console.log(recipientId);

  if (!recipientId) {
    return {
      error: "Invalid ID!",
    };
  }

  await dbConnect();

  const recipientData = await Certificate.findOne({ recipientId }).exec();

  //   const listCollections = async () => {
  //     const collections = await dbConnect.db("DB_NAME_HERE").listCollections().toArray();
  //     console.log(collections);
  // }

  // listCollections();

  // for in await listC...

  if (recipientData) {
    redirect(`/certificate/${recipientId}`);
  } else {
    return {
      error: "No Recipient under this ID found!",
    };
  }
}
