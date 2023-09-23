import type { Metadata } from "next";
import { Sora } from "next/font/google";

import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { Analytics } from "@vercel/analytics/react";

import Layouts from "@/common/components/layouts";
import { METADATA } from "@/common/constant/metadata";

import ThemeProviderContext from "../context/theme";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(METADATA.authors.url),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url
  },
  openGraph: {
    title: `${METADATA.creator} | Personal Website`,
    description: METADATA.description,
    images: METADATA.openGraph.img,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={`${sora.className}`}>
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>

        {process.env.NODE_ENV === "production" && <Analytics />}
        <GoogleAnalytics measurementId={process.env.GTM_ID || ""} />
      </body>
    </html>
  );
}
