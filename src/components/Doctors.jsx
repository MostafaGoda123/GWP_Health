import React from 'react'
import Title from './Title'
import profile1 from '../Assets/profile-1.png'
import profile2 from '../Assets/profile-2.png'
import profile3 from '../Assets/profile-3.png'
import profile4 from '../Assets/profile-4.png'
import { FaStar } from 'react-icons/fa'

const Doctors = () => {

   let allDoctors = [
      { id:1 , image:profile1 , name:"Dr. Kathryn Murphy" , specialty:"General Surgeons" , rate:"4.9" , review:"1800" },
      { id:2 , image:profile2 , name:"Dr. Jacob Jones" , specialty:"Hematologists" , rate:"4.8" , review:"700" },
      { id:3 , image:profile3 , name:"Dr. Jenny Wilson" , specialty:"Endocrinologists" , rate:"4.7" , review:"450" },
      { id:4 , image:profile4 , name:"Dr. Albert Flores" , specialty:"Hematologists" , rate:"4.8" , review:"500" },
   ]

   return (
      <section id='doctors' className='py-14'>
         <div className='container flex flex-col gap-10 items-center'>
            <Title name={'Meet Our Doctors'}  />
            <p className='text-neutral-600 text-xl text-center'>Meet our exceptional team of specialist doctors, dedicated to providing top-notch healthcare services at Health Plus. Trust in their knowledge and experience to lead you towards a healthier and happier life.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xl font-bold'>
               {allDoctors.map((doctor) => (
                  <div key={doctor.id} className=''>
                     <img src={doctor.image} alt={doctor.name} className='w-full p-5 pb-0 rounded-3xl h-72 bg-blue-100 mb-2' />
                     <h2>{doctor.name}</h2>
                     <h3 className='font-semibold text-neutral-600 mb-1'>{doctor.specialty}</h3>
                     <p className='flex items-center gap-1'>
                        <FaStar className='text-yellow-500' />
                        {doctor.rate + " "}  
                        <span className='text-neutral-600'>({doctor.review}+ Reviews)</span>
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Doctors
