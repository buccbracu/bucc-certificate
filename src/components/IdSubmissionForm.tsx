"use client";

import { submitAction } from "@/lib/actions";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import SubmitButton from "./SubmitButton";

export default function IdSubmissionForm() {
  const [state, action] = useFormState(submitAction, undefined);

  if (state?.error) {
    toast.error(state.error);
  }

  return (
    <form className="flex flex-row" action={action}>
      <div className="flex flex-col items-center gap-4">
        <label htmlFor="recipientId" className="text-white text-lg font-medium">
          Enter your Recipient ID
        </label>
        <div className="flex w-full gap-2">
          <input
            name="recipientId"
            type="text"
            id="recipientId"
            placeholder="Write your ID"
            className="w-full px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#082832]"
          />
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}
