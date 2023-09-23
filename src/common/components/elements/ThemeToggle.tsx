"use client";

import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <button
      className='p-2 bg-neutral-600 dark:bg-white rounded-md text-white dark:text-neutral-800'
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
    </button>
  );
}
