"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { ReactNode, useEffect } from "react";

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50
    });
  }, []);

  return (
    <div className='flex flex-col justify-center lg:flex-row py-10 px-5 lg:gap-5 lg:py-10'>
      <div className='flex flex-col lg:flex-row w-full justify-center lg:gap-5'>
        <main className='lg:max-w-[854px] transition-all duration-300 w-full lg:min-h-screen overflow-y-auto no-scrollbar'>
          {children}
        </main>
      </div>
    </div>
  );
}
