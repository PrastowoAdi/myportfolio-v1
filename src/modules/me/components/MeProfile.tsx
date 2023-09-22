import Image from "next/image";
import React from "react";

interface IProps {
  data: any;
}
export const MeProfile = (props: IProps) => {
  const { data } = props;
  return (
    <div
      className="flex flex-col items-center space-y-2 mt-6"
      data-aos="zoom-in-down"
    >
      <div className="rounded-full p-2 border border-neutral-200">
        <div className="overflow-hidden rounded-full">
          <Image
            src={data.image}
            alt={data.name}
            width={80}
            height={80}
            className="rounded-full hover:scale-105 transition-all duration-300"
            priority
          />
        </div>
      </div>
      <div className="flex gap-2 items-center mt-1 lg:mt-4">
        <h1 className="flex-grow text-lg lg:text-xl font-sora font-medium">
          {data.name}
        </h1>
      </div>
      <p className="leading-[1.8] md:leading-loose text-sm text-center text-neutral-800">
        {data.role}
      </p>
    </div>
  );
};
