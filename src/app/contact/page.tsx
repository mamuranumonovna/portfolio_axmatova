import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
    <h1 className='text-center text-5xl pt-16'>Contacts</h1>
    <div className='flex gap-2 items-center text-pink-500  justify-center my-8'>
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
      <form action="">
        <input type="text" />
        <input type="text" />
      </form>
    </div>
    <div className='flex items-center justify-around text-3xl'>
      <div className='flex flex-col items-center w-[500px]'>
      <div className='flex items-center gap-4 pb-4'>
      <MdOutlineMail className='text-pink-950 text-4xl'/>
      <h1>E-mail</h1>
      </div>
      <Link href={'https://axmatovamamura0203@gmail.com'} >
        axmatovamamura0203@gmail.com
      </Link>
      </div>
      <div className='flex flex-col items-center w-[500px] '>
      <div className='flex items-center gap-4 pb-4'>
      <FiPhone className='text-pink-950 text-4xl'/>
      <h1>Telephone number</h1>
      </div>
      <h1>+99 890 021 74 42</h1>
      </div>
      <div className='flex flex-col items-center w-[500px]'>
      <div className='flex items-center gap-4 pb-4'>
      <IoShareSocialOutline className='text-pink-950 '/>
      <h1>Social media</h1>
      </div>
      <div className='flex items-center'>
      <Link href={'https://www.linkedin.com/in/ma-mura-axmatova-2b37512a6'}>
      <AiOutlineLinkedin className='text-pink-950 '/>
      </Link>
      <Link href={'https://t.me/numonovna_m'}>
      <RiTelegramLine className='text-pink-950 text-4xl'/>
      </Link>
      </div>
      </div>
    </div>
  </div>
  )
}
