import { env } from "@/lib/env";

export const METADATA = {
  creator: "Prastowo Adi",
  description:
    "Frontend development enthusiast and highly experienced software engineer. Using NextJS and TypeScript as the technology, I am currently a Frontend Engineer. Collaboration-focused team members are dedicated to creating online apps that are useful, scalable, and aesthetically beautiful.",
  keyword: "prastowoadi, prastowo adi, programming, nextjs, frontend developer, react, software engineer",
  authors: {
    name: "Prastowo Adi",
    url: env.DOMAIN
  },
  openGraph: {
    url: env.DOMAIN,
    siteName: "Prastowo Adi",
    locale: "id-ID",
    img: "https://res.cloudinary.com/dlwlhvdms/image/upload/v1695431649/portfolio/opengraph-img_snkzag.png"
  },
  exTitle: "| Prastowo Adi",
  profile: "https://res.cloudinary.com/dlwlhvdms/image/upload/v1695014265/profile_sldxu7.webp"
};
