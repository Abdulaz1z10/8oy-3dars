"use client";
import React, { useState } from "react";
import Link from "next/link";
export default function Home() {
return (
  <div className="flex bg-white  w-[100%] h-[100vh] justify-center pt-[10%] gap-[20px]">
    <div className="flex flex-col gap-[5px]">
      <Link
        className="text-black w-[300px] p-[20px] rounded-xl border-[2px]"
        href="/home"
      >
        Home
      </Link>
      <Link
        className="text-black w-[300px] p-[20px] rounded-xl border-[2px]"
        href="/option1"
      >
        Option 1
      </Link>
      <Link
        className="text-black w-[300px] p-[20px] rounded-xl border-[2px]"
        href="/option2"
      >
        Option 2
      </Link>
      <Link
        className="text-black w-[300px] p-[20px] rounded-xl border-[2px]"
        href="/option3"
      >
        Option 3
      </Link>
      <Link
        className="text-black w-[300px] p-[20px] rounded-xl border-[2px]"
        href="/option4"
      >
        Option 4
      </Link>
      <Link
        className="text-black w-[300px] p-[20px] rounded-xl border-[2px]"
        href="/option5"
      >
        Option 5
      </Link>
    </div>
    <div>
      <img
        className="w-[300px] h-[400px]"
        src="https://cdn.britannica.com/32/2832-050-9DD1D041/The-Scream-casein-cardboard-Edvard-Munch-National-1893.jpg"
        alt=""
      />
    </div>
  </div>
);
}
