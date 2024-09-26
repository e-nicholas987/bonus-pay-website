import type { Metadata } from "next";
import { Jost, Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import paths from "@/constants/paths";
import Footer from "@/components/Footer";

const jost = Jost({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: "Bonuspay",
  description: "Earn a Bonus for every time you trade crypto.",
  openGraph: {
    type: "website",
    url: paths.website,
    title: "Bonuspay",
    description: "Earn a Bonus for every time you trade crypto.",

    images: [
      {
        url: "https://bonuspay-mvp.vercel.app/slide.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonuspay",
    site: paths.website,
    description: "Earn a Bonus for every time you trade crypto.",
    images: "https://bonuspay-mvp.vercel.app/slide.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-16 lg:scroll-pt-20">
      <body className={`${jost.className} ${lexend.variable} antialiased`}>
        <Navbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
