"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
}

export default function Container({ children, className = "", ...others }: ContainerProps) {
  return (
    <div className={`mb-10 lg:mt-0 p-8 ${className} `} {...others}>
      {children}
    </div>
  );
}
