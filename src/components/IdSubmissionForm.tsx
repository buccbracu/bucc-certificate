"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { LoadingButton } from "./ui/loading-button";

export default function IdSubmissionForm() {
  const [id, setId] = useState("");
  const [pending, setPending] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const response = await fetch("/api/certificate/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipientId: id }),
    });

    if (!response.ok) {
      setPending(false);
      return toast.error("Something went wrong");
    }

    router.push(`/${id}`);
  };
  return (
    <form className="flex flex-row" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-4">
        <label htmlFor="recipientId" className="text-white text-lg font-medium">
          Enter your Recipient ID
        </label>
        <div className="flex w-full gap-2">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            name="recipientId"
            type="text"
            id="recipientId"
            placeholder="Write your ID"
            className="w-full px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#082832]"
          />
          <LoadingButton
            className="px-4 py-3 bg-[#30BA92]/30 text-white/80 font-semibold rounded-md hover:bg-[#24613D]/80 focus:ring-2 focus:ring-[#24613D]/70"
            loading={pending}
          >
            Submit
          </LoadingButton>
        </div>
      </div>
    </form>
  );
}
