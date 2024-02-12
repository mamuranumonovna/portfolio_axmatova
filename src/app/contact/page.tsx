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
    <h1 className='text-center text-5xl pt-11'>Contacts</h1>
    <div className='flex gap-2 items-center text-pink-500  justify-center my-4'>
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
    <div className='w-[1000px] mx-auto p-8'>
      <form action="">
        <div className='flex items-center justify-between'>
      <div className='py-8'>
      <label htmlFor="name" className='block text-pink-900'>Your name *</label>
       <input
       id='name'
        placeholder='Enter your name '
        type="text" 
        className='block w-[400px]  py-2  border-b-2 bg-pink-200 focus:outline-none placeholder:text-pink-900 border-b-pink-900'
        />
      </div>
        <div className='py-8'>
        <label htmlFor="email" className='block text-pink-900'>Your email *</label>
        <input 
        id='email'
        placeholder='Enter your email'
        type="text" 
        className='block w-[400px]  py-2  border-b-2 bg-pink-200 focus:outline-none placeholder:text-pink-900 border-b-pink-900'
        />
        </div>
        </div>
        <label htmlFor="message" className='block text-pink-900'>Your Message *</label>
        <input 
        id='message'
        placeholder='Enter your needs'
        type="text" 
        className='block w-full  py-2 border-b-2 bg-pink-200 mb-4 focus:outline-none placeholder:text-pink-900 border-b-pink-900'
        />
        
        <button className=" block mx-auto px-4 py-4 bg-pink-800 text-white rounded-lg hover:bg-transparent  hover:text-pink-800 border-[1px] hover:border-pink-800 focus:outline-none focus:ring focus:ring-pink-800 my-8">Send Message</button>
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
