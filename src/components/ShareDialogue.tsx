import React, { PropsWithChildren } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ShareDialogueProps extends PropsWithChildren {
  trigger: React.JSX.Element;
  open?: boolean;
}

export default function ShareDialogue({
  trigger,
  children,
}: ShareDialogueProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-[#082832] rounded-lg shadow-lg p-6 border border-[#1B4D3E]">
        <DialogHeader>
          <DialogTitle className="text-white text-center text-2xl font-semibold mb-4">
            Share Your Certificate
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 text-white">
          {children}
          <div className="text-sm text-center text-gray-300">
            Share your certificate to showcase your achievements with friends
            and colleagues. Choose from the options below:
          </div>
          <ul className="text-sm text-gray-300 list-disc pl-4">
            <li>Share on social media platforms like Facebook or LinkedIn.</li>
            <li>Copy the direct link to send via email or chat.</li>
          </ul>
          <div className="text-gray-400 text-xs mt-4">
            Ensure that your certificate details are correct before sharing. For
            any discrepancies, contact support.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
