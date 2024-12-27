import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "BUCC Certificate Corner - BRAC University Computer Club | Upgrade Yourself",
  description:
    "A simple web application to verify the authenticity of certificates issued by the BRAC University Computer Club.",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/assets/bucc-favicon.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/assets/bucc-favicon-light.ico",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Toaster closeButton richColors duration={1000} />
        {children}
      </body>
    </html>
  );
}
