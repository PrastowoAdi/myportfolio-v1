import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Sora } from "next/font/google";

import GoogleAnalytics from "@bradgarropy/next-google-analytics";

import Layouts from "@/common/components/layouts";
import { METADATA } from "@/common/constant/metadata";

import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${sora.className}`}>
        <Layouts>{children}</Layouts>
        {process.env.NODE_ENV === "production" && <Analytics />}
        <GoogleAnalytics measurementId={process.env.GTM_ID || ""} />
      </body>
    </html>
  );
}
