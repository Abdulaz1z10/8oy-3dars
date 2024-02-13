"use client"
import React, { useState } from 'react'
import Link from "next/link";
export default function Option1() {
  return (
    <div className='flex bg-white  w-[100%] h-[100vh] justify-center pt-[10%] gap-[20px]'>
      <div className='flex flex-col gap-[5px]'>
      <Link className="text-black w-[300px] p-[20px] rounded-xl border-[2px]" href="/home">Home</Link>
      <Link className="text-black w-[300px] p-[20px] rounded-xl border-[2px]" href="/option1">Option 1</Link>
      <Link className="text-black w-[300px] p-[20px] rounded-xl border-[2px]" href="/option2">Option 2</Link>
      <Link className='text-black w-[300px] p-[20px] rounded-xl border-[2px]' href="/option3">Option 3</Link>
      <Link className='text-black w-[300px] p-[20px] rounded-xl border-[2px]' href="/option4">Option 4</Link>
      <Link className='text-black w-[300px] p-[20px] rounded-xl border-[2px]' href="/option5">Option 5</Link>
      </div>
      <div>
        <img className='w-[300px] h-[400px]' src="https://www.befunky.com/images/prismic/c2db63d7-9f8c-4f66-84da-28ff72594b36_features-poly-art.png?auto=avif,webp&format=jpg&width=581" alt="" />
      </div>
    </div>
  )
}
