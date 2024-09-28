import React from 'react'
import nurse from '../Assets/doctor-picture.png'
import { FaHeart } from 'react-icons/fa'
import { BsCalendarCheckFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

   let navigate = useNavigate("")

   return (
      <div className='bg-blue-100 py-14'>
         <div className='container flex items-center'>
            <article className='flex-1 flex flex-col gap-8'>
               <h5 className='flex items-center gap-2 text-2xl font-semibold text-neutral-700'><FaHeart className='text-red-600 shadow-sm' /> Health comes first</h5>
               <h1 className='text-2xl sm:text-4xl font-bold'>Find your Doctor and <br />make an Appointments</h1>
               <p className='text-xl text-neutral-600 md:pe-20 lg:pe-60'>Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.</p>
               <button onClick={()=>navigate("/appointment")} className='btn flex gap-5 items-center'><BsCalendarCheckFill />Book Appointment</button>
               <div className='flex gap-5'>
                  <p className='text-xl sm:text-2xl text-center text-neutral-700'><span className='block font-bold text-blue-500'>145k+</span>Receive Patients</p>
                  <p className='text-xl sm:text-2xl text-center text-neutral-700'><span className='block font-bold text-blue-500'>50+</span>Expert Doctors</p>
                  <p className='text-xl sm:text-2xl text-center text-neutral-700'><span className='block font-bold text-blue-500'>10+</span>Years of Experience</p>
               </div>
            </article>
            <img src={nurse} alt="nurse" className='w-96 lg:w-[500px] md:block hidden' />
         </div>
      </div>
   )
}

export default Hero