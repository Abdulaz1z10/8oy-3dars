"use client"
import React, { useState } from 'react'
import Link from 'next/link'
export default function option5() {
  return (
    <div className='flex bg-white  w-[100%] h-[100vh] justify-center pt-[10%] gap-[20px]'>
        <div className='flex flex-col gap-[5px]'>
        <Link className="text-black w-[300px] p-[20px] rounded-xl border-[2px]" href="/home">Home</Link>
      <Link className="text-black w-[300px] p-[20px] rounded-xl border-[2px]" href="/option1">Option 1</Link>
      <Link className="text-black w-[300px] p-[20px] rounded-xl border-[2px]" href="/option2">Option 2</Link>
      <Link className="text-black w-[300px] p-[20px] rounded-xl border-[2px]" href="/option3">Option 3</Link>
      <Link className="text-black w-[300px] p-[20px] rounded-xl border-[2px]" href="/option4">Option 4</Link>
      <Link className="text-black w-[300px] p-[20px] rounded-xl border-[2px]" href="/option5">Option 5</Link>
        </div>
        <div>
          <img className='w-[300px] h-[400px]' src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFydHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
    </div>
  )
}