"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  const backTomain = () => {
    router.push("/");
    setActive(false);
  };

  const toggleShowAll = () => {
    setActive(!active);
    if (active) {
      router.push("/");
    } else {
      router.push("/map");
    }
  };

  return (
    <div className="bg-black h-24">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div
          className="flex items-center gap-4 text-2xl font-bold text-white p-4 mt-2 underline-offset-1 cursor-pointer"
          onClick={backTomain}
        >
          <img src="/logo.png" className="h-12 w-20" />
          <p className="hidden md:inline-block">loc finder</p>
        </div>
        <p className="text-sm font-bold text-red-500 animate-pulse">
          Training purpose only
        </p>
        <h1
          className="text-[12px] md:text-xl font-bold text-white bg-rose-400 hover:bg-rose-600 px-4 py-2 rounded-lg cursor-pointer"
          onClick={toggleShowAll}
        >
          {active ? "Back" : "Show All"}
        </h1>
      </div>
    </div>
  );
};

export default Header;
