import { Metadata } from "next";

import { env } from "@/lib/env";

import Container from "@/common/components/elements/Container";
import { METADATA } from "@/common/constant/metadata";

import Home from "@/modules/home";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: env.DOMAIN
  }
};

export default function HomePage() {
  return (
    <>
      <Container data-aos='fade-up'>
        <Home />
      </Container>
    </>
  );
}
