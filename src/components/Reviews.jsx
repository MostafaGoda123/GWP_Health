import React, { useState } from 'react'
import { CgQuote } from 'react-icons/cg';
import { customerReviews } from '../Scripts/reviews';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const Reviews = () => {

   let allReviewsNumber = customerReviews.length;
   const [currentReview, setCurrentReview] = useState(0)
   function handleArrowLeft() {
      if (currentReview > 0) {
         setCurrentReview(currentReview - 1)
      }else{
         setCurrentReview(customerReviews.length-1)
      }
   }
   function handleArrowRight() {
      if (currentReview < customerReviews.length-1) {
         setCurrentReview(currentReview + 1)
      }else{
         setCurrentReview(0)
      }
   }

   return (
      <section id='reviews' className='bg-blue-100 py-14'>
         <div className="container">
            <h1 className='md:text-4xl text-2xl font-bold text-blue-500 mb-5'><span className="text-neutral-600">More over</span> 1500+ Customers</h1>
            <h1 className='md:text-4xl text-2xl font-bold mb-14'>Don't believe us, Check clients word</h1>
            <article className='w-full'>
               <div className='w-full flex text-2xl font-semibold text-neutral-700 mb-5'><CgQuote className='text-blue-500 text-5xl'/>{customerReviews[currentReview].message}<CgQuote className='text-blue-500 text-5xl' /></div>
               <h1 className='font-bold text-3xl mb-1'>{customerReviews[currentReview].name}</h1>
               <h2 className='font-semibold text-2xl text-neutral-500'>{customerReviews[currentReview].location}</h2>
            </article>
            <div className="arrows flex items-center justify-between text-blue-500 mt-4 text-3xl">
               <FaArrowAltCircleLeft  className='cursor-pointer' onClick={()=>handleArrowLeft()}/>
               <FaArrowAltCircleRight className='cursor-pointer' onClick={()=>handleArrowRight()}/>
            </div>
         </div>
      </section>
   )
}

export default Reviews
