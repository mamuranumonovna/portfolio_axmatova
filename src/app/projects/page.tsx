import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import Image from 'next/image';
import Link from 'next/link';




export default function Projects() {
  return (
    <div>
      <h1 className='text-center text-5xl pt-16'>My Projects</h1>
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
      <div className='flex items-center justify-between  space-x-4 mt-8'>
      <div className='w-[500px] h-[300px] bg-pink-500  transition-transform transform hover:scale-105  duration-300 ease-in-out hover:bg-pink-600 cursor-pointer'>
        <Link href='https://64a81b90d6e7100eec1ac83e--zesty-flan-3e2490.netlify.app/'>
        <Image
        src='/country.jpg'
        width={300}
        height={300}
        alt='Country'
        className='w-full h-[185px]'
        />
        </Link>
        <p className='text-white text-3xl text-center'>Restcountries</p>
        
       </div>
       <div className='w-[500px] h-[300px] bg-pink-500 transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-pink-600 cursor-pointer'>
        <Link href='https://glittering-crostata-c7f323.netlify.app/'>
        <Image
        src='/crappo.svg'
        width={100}
        height={100}
        alt='Crappo'
        className='w-full'
        />
        </Link>
        <p className='text-white text-3xl text-center'>Figma Design</p>

       </div>
       <div className='w-[500px] h-[300px] bg-pink-500   transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-pink-600 cursor-pointer'>
        <Link href='https://6491aa2b8152e10081cf841c--curious-khapse-3d854e.netlify.app/'>
        <Image
        src='/calc.png'
        width={300}
        height={100}
        alt='Designer'
        className='w-full h-[185px] '
        />
        </Link>
        <p className='text-white text-3xl text-center'>Calculator</p>

       </div>
       <div className='w-[500px] h-[300px] bg-pink-500   transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-pink-600 cursor-pointer'>
        <Link href='https://646bc1de38c4a7256a1882f3--creative-fudge-233d18.netlify.app/'>
        <Image
        src='/bootstrap.svg'
        width={100}
        height={100}
        alt='Designer'
        className='w-full'
        />
        </Link>
        <p className='text-white text-3xl text-center'>Bootsrap Design</p>

       </div>
       <div className='w-[500px] h-[300px] bg-pink-500   transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-pink-600 cursor-pointer'>
        <Link href='https://ecomerce-uz.netlify.app/'>
        <Image
        src='/food.jpeg'
        width={300}
        height={300}
        alt='Designer'
        className='w-full h-[185px]'
        />
        </Link>
        <p className='text-white text-3xl text-center'>Online Shop</p>

       </div>
       
       
      </div>

      </div>
    </div>
  )
}
