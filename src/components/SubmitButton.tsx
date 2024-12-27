"use client";

import { useFormStatus } from "react-dom";
import { LoadingButton } from "./ui/loading-button";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <LoadingButton
      loading={pending}
      className="px-4 py-3 bg-[#30BA92]/30 text-white/80 font-semibold rounded-md hover:bg-[#24613D]/80 focus:ring-2 focus:ring-[#24613D]/70"
    >
      Submit
    </LoadingButton>
  );
}
