import React from 'react'
import Title from './Title'
import { FaAmbulance, FaHeartbeat, FaTooth } from 'react-icons/fa'

const Services = () => {
   return (
      <section id='services' className='py-14'>
         <div className='container flex items-center justify-center flex-col gap-10'>
            <Title name={'What We Do'} />
            <p className='text-xl text-neutral-600 text-center md:px-14'>We bring healthcare to your convenience, offering a comprehensive range of on-demand medical services tailored to your needs. Our platform allows you to connect with experienced online doctors who provide expert medical advice, issue online prescriptions, and offer quick refills whenever you require them.</p>

            <article className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               <div className='p-5 rounded-3xl border-2 border-neutral-400 text-center relative'>
                  <FaAmbulance className='absolute top-0 left-2/4 -translate-x-2/4 -translate-y-2/4 text-blue-500 bg-blue-200 rounded-full p-2 text-5xl' />
                  <h2 className='font-bold text-3xl mb-5 mt-2'>Emergency Care</h2>
                  <p className='text-lg text-neutral-700'>Our Emergency Care service is designed to be your reliable support in critical situations. Whether it's a sudden illness, injury, or any medical concern that requires immediate attention, our team of dedicated healthcare professionals is available 24/7 to provide prompt and efficient care.</p>
               </div>
               <div className='p-5 rounded-3xl border-2 border-neutral-400 text-center relative'>
                  <FaHeartbeat className='absolute top-0 left-2/4 -translate-x-2/4 -translate-y-2/4 text-blue-500 bg-blue-200 rounded-full p-2 text-5xl' />
                  <h2 className='font-bold text-3xl mb-5 mt-2'>Heart Disease</h2>
                  <p className='text-lg text-neutral-700'>Our team of experienced cardiologists and medical experts use state-of-the-art technology to assess your cardiovascular health and design personalized treatment plans. From comprehensive screenings to advanced interventions, we are committed to helping you maintain a healthy heart and lead a fulfilling life.</p>
               </div>
               <div className='p-5 rounded-3xl border-2 border-neutral-400 text-center relative'>
                  <FaTooth className='absolute top-0 left-2/4 -translate-x-2/4 -translate-y-2/4 text-blue-500 bg-blue-200 rounded-full p-2 text-5xl' />
                  <h2 className='font-bold text-3xl mb-5 mt-2npm '>Dental Care</h2>
                  <p className='text-lg text-neutral-700'>Smile with confidence as our Dental Care services cater to all your oral health needs. Our skilled dentists provide a wide range of treatments, from routine check-ups and cleanings to cosmetic procedures and restorative treatments.</p>
               </div>
            </article>

         </div>
      </section>
   )
}

export default Services
