import {
  Open_Sans,
  Iceberg,
  JetBrains_Mono,
  Inter,
  Raleway,
} from "next/font/google";
import { Providers } from "./providers";
import Meta from "@/components/Meta";

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const iceberg = Iceberg({
  subsets: ["latin"],
  variable: "--font-iceberg",
  weight: "400",
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-brains-mono",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

// const brunoAceSc = Bruno_Ace_SC({
//   subsets: ["latin"],
//   variable: "--font-bruce-ace-sc",
//   weight: "400",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${iceberg.variable} ${openSans.className}  font-sans`}>
        <Meta />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
