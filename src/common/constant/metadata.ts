import { env } from "@/lib/env";

export const METADATA = {
  creator: "Prastowo Adi",
  description: "Personal website, portfolio software engineer",
  keyword:
    "prastowoadi, prastowo adi, programming, nextjs, frontend developer, react",
  authors: {
    name: "Prastowo Adi",
    url: env.DOMAIN,
  },
  openGraph: {
    url: env.DOMAIN,
    siteName: "Prastowo Adi",
    locale: "id-ID",
  },
  exTitle: "| Prastowo Adi",
  profile:
    "https://res.cloudinary.com/dlwlhvdms/image/upload/v1695014265/profile_sldxu7.webp",
};
