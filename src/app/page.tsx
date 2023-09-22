import { METADATA } from "@/common/constant/metadata";
import { env } from "@/lib/env";
import Home from "@/modules/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: env.DOMAIN,
  },
};

export default function HomePage() {
  return (
    <>
      <div data-aos="fade-up">
        <Home />
      </div>
    </>
  );
}
