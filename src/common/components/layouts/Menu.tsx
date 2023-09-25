"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Tooltip from "@/common/components/elements/Tooltip";
import { MenuItemProps } from "@/common/types/menu";

type MenyProps = {
  items: MenuItemProps[];
};

export default function Menu({ items }: MenyProps) {
  const pathname = usePathname();

  return (
    <div className='flex flex-col space-y-1'>
      <div className='flex px-5 pt-3 space-x-4'>
        {items?.map((item: MenuItemProps, index: number) => (
          <Link key={index} href={item?.href} data-umami-event={item?.eventName} aria-label={item?.title}>
            <Tooltip title={item?.title}>
              <div
                className={`text-neutral-700 hover:text-neutral-900 lg:hover:scale-110 transition duration-300 p-1 rounded-full ${
                  pathname === item.href
                    ? "bg-neutral-200 dark:bg-white dark:text-neutral-700 hover:dark:text-neutral-500"
                    : "dark:text-neutral-200"
                } `}
              >
                {item?.icon}
              </div>
            </Tooltip>
          </Link>
        ))}
      </div>
    </div>
  );
}
