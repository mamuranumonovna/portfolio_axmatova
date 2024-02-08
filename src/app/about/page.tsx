import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

export default function About() {
  return (
    <div>
      <h1 className='text-center text-5xl pt-16'>About me</h1>
      <div className='flex gap-2 items-center text-pink-500  justify-center mt-8'>
      <HiDotsHorizontal />
      <HiDotsHorizontal />
      <HiDotsHorizontal />
      <HiDotsHorizontal />
      <IoMdArrowDropdown className='text-6xl' />
      <HiDotsHorizontal />
      <HiDotsHorizontal />
      <HiDotsHorizontal />
      <HiDotsHorizontal />
      </div>
    </div>
  )
}
