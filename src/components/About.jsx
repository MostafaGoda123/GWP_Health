import React from 'react'
import doctors from '../Assets/doctor-group.png'
import Title from './Title'
import { FaChevronCircleDown } from 'react-icons/fa'

const About = () => {
   return (
      <section id='about' className='bg-blue-100 py-14'>
         <div className='container flex items-center lg:flex-row flex-col'>
            <div className='flex-1 md:px-10 px-0'>
               <img src={doctors} alt="Doctors" className='w-full' />
            </div>
            <article className='flex-1 flex flex-col gap-5'>
               <Title name={'About US'} />
               <p className='text-neutral-600 text-xl'>Welcome to Health Plus, your trusted partner for accessible and personalized healthcare. Our expert doctors offer online consultations and specialized services, prioritizing your well-being. Join us on this journey towards a healthier you.</p>
               <h2 className='font-bold text-3xl text-neutral-700'>Your Solutions</h2>
               <ul className='flex flex-col gap-3'>
                  <li className='flex gap-2'> 
                     <FaChevronCircleDown className='text-3xl text-red-700' />
                     <div>
                        <h5 className='font-bold text-lg'>Choose a Specialist</h5>
                        <p className='text-neutral-600 text-lg'>Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care.</p>
                     </div>
                  </li>
                  <li className='flex gap-2'> 
                     <FaChevronCircleDown className='text-3xl text-red-700' />
                     <div>
                        <h5 className='font-bold text-lg'>Make a Schedule</h5>
                        <p className='text-neutral-600 text-lg'>Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care.</p>
                     </div>
                  </li>
                  <li className='flex gap-2'> 
                     <FaChevronCircleDown className='text-3xl text-red-700' />
                     <div>
                        <h5 className='font-bold text-lg'>Get Your Solutions</h5>
                        <p className='text-neutral-600 text-lg'>Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health.</p>
                     </div>
                  </li>
               </ul>
            </article>
         </div>
      </section>
   )
}

export default About
