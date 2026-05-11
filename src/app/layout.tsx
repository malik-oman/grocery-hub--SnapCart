import type { Metadata } from "next";

import "./globals.css";
import Providers from "@/Providers";




export const metadata: Metadata = {
  title: "SnapCart-Grocery | Delivery",
  description: "10 minutes grocery Delivery App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className=" w-full min-h-screen bg-linear-to-b from-green-100 " >
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}
