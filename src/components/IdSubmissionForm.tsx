"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

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
      return alert("Certificate not found");
    }

    router.push(`/certificate/${id}`);
  };
  return (
    <form className="flex flex-row" onSubmit={handleSubmit}>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        name="recipient-id"
        placeholder="Write your ID"
        type="text"
        className="focus-within:outline-none px-4 py-2 w-[70%] rounded-l-lg"
      />
      <Button
        className="w-[30%] bg-blue-600 rounded-l-none rounded-r-lg font-semibold text-white flex items-center justify-center hover:bg-blue-500"
        disabled={pending}
      >
        {pending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
