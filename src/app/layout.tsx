import type { Metadata } from "next";
import {  Open_Sans, Raleway } from "next/font/google";
import { Providers } from "./providers";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

// const brunoAceSc = Bruno_Ace_SC({
//   subsets: ["latin"],
//   variable: "--font-bruce-ace-sc",
//   weight: "400",
// });

export const metadata: Metadata = {
  title: "Modern Logistics Services Limited",
  description: "We simply add quality to your business by giving you the best service you could ever get",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${raleway.variable} ${openSans.className}  font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
