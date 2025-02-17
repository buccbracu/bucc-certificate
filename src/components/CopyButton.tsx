"use client";

import { useState } from "react";
import { TbCopy, TbCopyCheck } from "react-icons/tb";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.origin + window.location.pathname
      );
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };
  return (
    <div
      onClick={handleCopy}
      className="p-4 bg-[rgba(36,97,61,0.4)] w-full md:w-[50%] flex items-center justify-center gap-4 backdrop-blur-md font-bold text-white rounded-lg text-center cursor-pointer hover:bg-[#24613D] duration-100"
    >
      {copied ? (
        <>
          <TbCopyCheck size={24} /> Copied{" "}
        </>
      ) : (
        <>
          <TbCopy size={24} /> Copy
        </>
      )}
    </div>
  );
}
