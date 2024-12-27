import IdSubmissionForm from "@/components/IdSubmissionForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Background Section */}
      <div className="relative w-full h-screen">
        {/* Background Color */}
        <div className="absolute inset-0 bg-[#082832]"></div>
        {/* Background SVG */}
        <div className="absolute inset-0 bg-[url('/background.svg')] bg-center bg-cover opacity-30"></div>

        <div className="relative z-10 flex flex-col gap-8 items-center justify-center h-full px-4 sm:px-8">
          {/* Hero Text */}
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-4 leading-tight">
              Welcome to BUCC Certification Corner
            </h1>

            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
              Access and download certificates for events and accomplishments
              with ease. Enter your student ID below to retrieve your
              certificates securely. Celebrate your achievements in just a few
              clicks!
            </p>
          </div>

          {/* Submission Form Section */}
          <div className="bg-[#1b2b34]/30 backdrop-blur-sm p-8 sm:p-10 w-full max-w-lg rounded-lg shadow-lg flex flex-col items-center gap-4">
            <IdSubmissionForm />
          </div>

          {/* Contact Section */}
          <div className="text-center mt-6">
            <p className="text-gray-300 font-medium">
              Need help? We&apos;re here to assist you.
            </p>
            <Link
              className="text-[#1CB488] font-semibold underline hover:text-[#30BA92]/50"
              href="/contact"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// #1CB488
// #30BA92
