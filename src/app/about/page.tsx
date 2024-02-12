import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

export default function About() {
  return (
    <div>
      <h1 className='text-center text-5xl pt-8'>About me</h1>
      <div className='flex gap-2 items-center text-pink-500  justify-center mt-2'>
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
       <div className='text-pink-950 w-[1600px] mx-auto px-20'>
        <p className='text-3xl py-1 leading-normal '>
        My name is Ma'mura, I am 21 years old. 
        </p>
        
        <p className='text-3xl py-1 leading-normal '>
        I got interested in programming after entering university and started learning programming with C++ programming language.
        </p>
        <p className='text-3xl py-1 leading-normal '>
        Currently, I am studying  at Tashkent University of Information Technologies in third year.
        </p>
        <p className='text-3xl py-1 leading-normal '>
        My specialty is Telecommunication technologies.
        </p>
        <p className='text-3xl py-1 leading-normal'>  After I became interested in programming, I started learning HTML CSS on my own, and in order to further improve my knowledge, I took lessons from qualified mentors in the Frontend ReactJs (Standard) course at Najot Ta'lim
        IT Center.</p>
       </div>
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
