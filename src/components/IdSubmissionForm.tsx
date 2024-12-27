"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
      return toast.error("Something went w");
    }

    router.push(`/certificate/${id}`);
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
          <Button
            className="w-[30%] bg-blue-600 rounded-l-none rounded-r-lg font-semibold text-white flex items-center justify-center hover:bg-blue-500"
            disabled={pending}
          >
            {pending ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
}
