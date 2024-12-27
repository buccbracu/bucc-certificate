import CopyButton from "@/components/CopyButton";
import ShareDialogue from "@/components/ShareDialogue";
import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ recipientId: string }>;
}) {
  await dbConnect();

  const recipientId = (await params).recipientId;

  const recipientData = await mongoose.connections[0].db
    ?.collection("certificates")
    .findOne({ recipientId });

  if (!recipientData?.recipientId) {
    return (
      <div className="flex items-center justify-center h-[100vh] text-2xl">
        Invalid Recipient ID!
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-[#082832]"></div>
      <div className="absolute inset-0 bg-[url('/background-certificate-page.svg')] bg-center bg-cover opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full h-auto lg:h-[100vh] items-center p-4 lg:p-8 gap-6">
        {/* Certificate Preview */}
        <div className="w-full lg:w-[50%] h-auto lg:h-full flex items-center justify-center">
          {recipientData && (
            // Show a placeholder loading div while the image is loading
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={recipientData.previewLink}
                alt={"certificate"}
                width={700}
                height={700}
                className="object-contain rounded-lg max-w-full"
              />
            </div>
          )}
        </div>

        {/* Recipient Info */}
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start rounded-lg">
          <div className="bg-[rgba(36,97,61,0.1)] gap-4 backdrop-blur-md mb-8 rounded-lg w-full">
            <div className="text-white py-4 px-6 rounded-lg mb-4">
              <h1 className="text-white text-xl md:text-2xl text-center font-bold mb-4">
                Certificate Recipient
              </h1>

              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between border-b border-white pb-2 font-bold">
                  <p>Recipient Name</p>
                  <p>{recipientData ? recipientData.recipientName : "N/A"}</p>
                </div>
                <div className="flex items-start justify-between border-b border-white pb-2 font-bold">
                  <p>Certificate ID</p>
                  <p>{recipientData ? recipientData.recipientId : "N/A"}</p>
                </div>
                <div className="flex items-start justify-between border-b border-white pb-2 font-bold">
                  <p>Issue Date</p>
                  <p>
                    {recipientData
                      ? new Date(recipientData.issueDate).toLocaleDateString(
                          "en-US",
                          {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          }
                        )
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <Link
              target="_blank"
              href={recipientData.downloadLink}
              className="w-full block p-4 bg-[#24613D] font-bold text-white rounded-b-lg text-center cursor-pointer hover:bg-[#24613D]/80"
            >
              Download
            </Link>
          </div>

          {/* Share Section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <ShareDialogue
              trigger={
                <div className="p-4 bg-[rgba(36,97,61,0.1)] w-full md:w-[50%] flex items-center justify-center gap-4 backdrop-blur-md font-bold text-white rounded-lg text-center cursor-pointer hover:bg-[#24613D] duration-100">
                  <IoShareSocialOutline size={24} /> Share
                </div>
              }
            >
              <div className="flex items-center justify-center w-full gap-6 pt-6">
                <Link
                  href={recipientData.fbShare}
                  className="p-2 bg-[#24613D] rounded-lg"
                >
                  <FaFacebookF size={30} color="white" />
                </Link>
                <Link
                  href={recipientData.linkedinShare}
                  className="p-2 bg-[#24613D] rounded-lg"
                >
                  <FaLinkedinIn size={30} color="white" />
                </Link>
              </div>
            </ShareDialogue>
            <CopyButton />
          </div>
        </div>
      </div>
    </div>
  );
}
