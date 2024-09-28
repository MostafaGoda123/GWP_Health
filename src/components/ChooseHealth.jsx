import React from 'react'
import availableDoctor from '../Assets/doctor-book-appointment.png'
import Title from './Title'
import { FaCheckCircle } from 'react-icons/fa'
import { BsCalendarCheckFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const ChooseHealth = () => {

   let navigate = useNavigate("")

   return (
      <section className='py-14'>
         <div className='container flex items-center lg:flex-row flex-col'>
            <div className='flex-1 md:px-10 px-0'>
               <img src={availableDoctor} alt="Doctors" className='w-full' />
            </div>
            <article className='flex-1 flex flex-col md:gap-10 gap-7'>
               <Title name={'Why Choose Health'} />
               <p className='text-neutral-600 text-xl'>Discover the reasons to choose Health Plus for your healthcare needs. Experience expert care, convenience, and personalized solutions, making your well-being our top priority. Join us on a journey to better health and a happier life.</p>
               <ul className='flex flex-col gap-5'>
                  <li className='flex gap-2 items-center'> 
                     <FaCheckCircle className='text-2xl text-blue-500' />
                        <p className='text-xl font-bold'>Best Professional Doctors</p>
                  </li>
                  <li className='flex gap-2 items-center'> 
                     <FaCheckCircle className='text-2xl text-blue-500' />
                        <p className='text-xl font-bold'>Emergency Care</p>
                  </li>
                  <li className='flex gap-2 items-center'> 
                     <FaCheckCircle className='text-2xl text-blue-500' />
                        <p className='text-xl font-bold'> 24/7 Support Live Chat</p>
                  </li>
                  <li className='flex gap-2 items-center'> 
                     <FaCheckCircle className='text-2xl text-blue-500' />
                        <p className='text-xl font-bold'>Enrollment Easy and Quick</p>
                  </li>
               </ul>
               <button onClick={()=>navigate("/appointment")} className='flex gap-2 items-center btn'><BsCalendarCheckFill />Book Appointment</button>
            </article>
         </div>
      </section>
   )
}

export default ChooseHealth
