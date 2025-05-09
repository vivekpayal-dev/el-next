import { Rubik, Sora, Jost } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import BgWrapper from "@/components/BgWrapper";

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};

const jost = Jost({
  subsets: ["latin"], 
  display: "swap", 
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} antialiased`}>
        <div className="relative h-screen">
          <BgWrapper />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
