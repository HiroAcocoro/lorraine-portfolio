import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Lorraine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
