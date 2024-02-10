import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

export default function About() {
  return (
    <div>
      <h1 className='text-center text-5xl pt-11'>About me</h1>
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
      <div>
        <div>
          <p></p>
        </div>
        {/* <div className='p-4'>
        <h1 className='text-4xl text-pink-900 text-center pb-4 font-bold'>Education</h1>
        <div className='text-center'>
        <p className='text-xl text-white '>September 2021- Present</p>
        <h1 className='text-3xl text-pink-800'>Tashkent University of Information Technologies,Tashkent,Uzbekistan <span>-Bachelor's Degree</span></h1>
        <p className='text-2xl text-pink-600'>Telecommunication Technologies, General Diploma</p>
        </div>
        <div className='text-center'>
        <p className='text-xl text-white '>September 2019- June 2021</p>
        <h1 className='text-3xl text-pink-800 font-light'>Academic Lyceum of NSPI,Navoi,Uzbekistan <span>-Associate's Degree</span></h1>
        <p className='text-2xl text-pink-600'>Exast sciences Technology</p>
        </div>
        </div> */}
        <div className='text-center p-4'>
          <h1 className='text-4xl text-pink-900 pb-4 font-bold'>Skills</h1>
          <div className='flex gap-4 items-center justify-center'>
           <button className='rounded-full px-2.5 py-5 bg-pink-950 text-white'>HTML</button>
           <button className='rounded-full px-4 py-5 bg-pink-950 text-white'>CSS</button>
           <button className='rounded-full px-3 py-5 bg-pink-950 text-white'>SASS</button>
           <button className='rounded-full px-6 py-5 bg-pink-950 text-white'>JS</button>
           <button className='rounded-full px-5 py-5 bg-pink-950 text-white'>GIT</button>
           <button className='rounded-full px-3 py-5 bg-pink-950 text-white'>React</button>
           <button className='rounded-full px-2.5 py-5 bg-pink-950 text-white'>Redux</button>
           <button className='rounded-full px-6 py-5 bg-pink-950 text-white'>TS</button>
           <button className='rounded-full px-2.5 py-5 bg-pink-950 text-white'>NextJs</button>
          </div>
        </div>
        {/* <div className='text-center p-2'>
          <h1 className='text-4xl text-pink-900 pb-2 font-bold'>Language</h1>
          
          <div className='text-pink-950 text-xl'>
          <p>Uzbek(Native or Bilingual)</p>
          <p>Russian(Limited Working)</p>
          <p>Turkish(Limited Working)</p>
          <p>English(Limited Working)</p>
          </div>
          
        </div> */}
      </div>
    </div>
  )
}
