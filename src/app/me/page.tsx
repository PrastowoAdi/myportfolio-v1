import React, { cache } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { prisma } from "@/lib/db/prisma";
import { env } from "@/lib/env";
import MeSection from "@/modules/me";
import { METADATA } from "@/common/constant/metadata";

const getDetailAboutMe = cache(async (id: string) => {
  const detailAboutMe = await prisma.me.findUnique({ where: { id } });
  if (!detailAboutMe) notFound();
  return detailAboutMe;
});

export async function generateMetadata(): Promise<Metadata> {
  const aboutMe = await getDetailAboutMe(env.ID);

  return {
    title: `${aboutMe.name} | Personal Website`,
    description: METADATA.description,
    openGraph: {
      images: [{ url: METADATA.openGraph.img }],
    },
    keywords:
      "frontend developer, software engineer, react js, javascript, typescript, nextjs, web portfolio",
    alternates: {
      canonical: `${env.DOMAIN}/me`,
    },
  };
}

export default async function AboutMePage() {
  const aboutMe = await getDetailAboutMe(env.ID);

  return <MeSection data={aboutMe} />;
}
