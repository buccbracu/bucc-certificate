import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "BUCC Certificate Corner",
  description: "Get Certificate for your achievements",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
