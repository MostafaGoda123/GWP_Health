/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoChatbubbleEllipses, IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {

   const [openMenu, setOpenMenu] = useState(false)

   return (
      <nav className='container h-[10vh] flex justify-between items-center'>
         <Link to={'/'} className='font-bold text-2xl md:text-4xl text-blue-500'>Health <span className='text-green-500'>+</span></Link>
         <ul className='md:flex hidden items-center gap-5 text-xl font-semibold'>
            <li><a className='duration-300 hover:text-blue-500' href="/">Home</a></li>
            <li><a className='duration-300 hover:text-blue-500' href="#services">Services</a></li>
            <li><a className='duration-300 hover:text-blue-500' href="#about">About</a></li>
            <li><a className='duration-300 hover:text-blue-500' href="#reviews">Reviews</a></li>
            <li><a className='duration-300 hover:text-blue-500' href="#doctors">Doctors</a></li>
         </ul>
         <button className='md:flex hidden gap-2 items-center btn'><IoChatbubbleEllipses />Live Chat</button>
         <div className='md:hidden flex'>
            <FaBars className='text-2xl cursor-pointer' onClick={()=>setOpenMenu(true)}/>
            {openMenu &&
               <ul className='flex flex-col justify-center items-center gap-5 text-3xl font-semibold absolute top-0 left-0 w-full h-full bg-white'>
                  <IoClose onClick={()=>setOpenMenu(false)} className='absolute top-10 right-10 text-4xl text-red-600' />
                  <li><a onClick={()=>setOpenMenu(false)} className='duration-300 hover:text-blue-500' href="/">Home</a></li>
                  <li><a onClick={()=>setOpenMenu(false)} className='duration-300 hover:text-blue-500' href="#services">Services</a></li>
                  <li><a onClick={()=>setOpenMenu(false)} className='duration-300 hover:text-blue-500' href="#about">About</a></li>
                  <li><a onClick={()=>setOpenMenu(false)} className='duration-300 hover:text-blue-500' href="#reviews">Reviews</a></li>
                  <li><a onClick={()=>setOpenMenu(false)} className='duration-300 hover:text-blue-500' href="#doctors">Doctors</a></li>
                  <li><a onClick={()=>setOpenMenu(false)} className='duration-300 hover:text-blue-500' href="#contact">Contact</a></li>
               </ul>
            }
         </div>
      </nav>
   )
}

export default Navbar
