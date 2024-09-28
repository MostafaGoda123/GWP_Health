import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io';

const ScrollTop = () => {

   const [showArrow, setShowArrow] = useState(false)
   useEffect(() => {
      function scroll() {
         if (window.scrollY > 700) {
            setShowArrow(true)
         }else {
            setShowArrow(false)
         } 
      }
      window.addEventListener("scroll" , scroll)
      return () => {
         window.removeEventListener("scroll" , scroll)
      }
   }, [])
   let handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   }

   return (
      <>
      {showArrow && 
         <div onClick={handleClick} className='w-12 h-12 flex justify-center items-center bg-blue-500 border-2 border-white rounded-full text-3xl text-white cursor-pointer fixed bottom-8 right-8 hover:bg-blue-600 duration-300'>
            <IoIosArrowUp />
         </div>
      }
      </>
   )
}

export default ScrollTop
