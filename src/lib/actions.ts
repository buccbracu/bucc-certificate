"use server";

import { redirect } from "next/navigation";
import dbConnect from "./dbConnect";
import Certificate from "@/models/recipients";

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
  const recipientId = formdata.get("recipient-id");

  console.log(recipientId);

  if (!recipientId) {
    return {
      error: "Invalid ID!",
    };
  }

  await dbConnect();

  const recipientData = await Certificate.findOne({ recipientId }).exec();

  if (recipientData) {
    redirect(`/certificate/${recipientId}`);
  } else {
    return {
      error: "No Recipient under this ID found!",
    };
  }
}
