import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <footer className='bg-blue-950 text-neutral-400'>
         <div className="py-8">
         <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xl font-semibold">
            <section className='flex flex-col gap-5'>
               <Link to={'/'} className='font-bold text-2xl md:text-4xl text-blue-500'>Health <span className='text-green-500'>+</span></Link>
               <p>Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.</p>
               <h3 className='text-white'>Stay Update to our Newsletter</h3>
               <form>
                  <input type="text" placeholder='Enter your email' className='bg-neutral-600 bg-opacity-25 outline-none border-none p-3 w-full'/>
                  <button className='btn ' style={{width:'100%' , borderRadius:'0'}}>Subscribe</button>
               </form>
            </section>
            <ul className='flex items-center flex-col gap-4'>
               <li className='text-white font-bold mb-2'>Services</li>
               <li><a href="#services" className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>Emergency Care</a></li>
               <li><a href="#services" className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>Heart Disease</a></li>
               <li><a href="#services" className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>Dental Care</a></li>
               <li><a href="#services" className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>Prescription</a></li>
               <li><a href="#services" className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>Insights for doctors</a></li>
            </ul>
            <ul className='flex items-center flex-col gap-4'>
               <li className='text-white font-bold mb-2'>Legal</li>
               <li><Link to={'/legal'} className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>General Info</Link></li>
               <li><Link to={'/legal'} className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>Privacy Policy</Link></li>
               <li><Link to={'/legal'} className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>Terms of Services</Link></li>
               <li><Link to={'/legal'} className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>Consultations</Link></li>
               <li><Link to={'/legal'} className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>How it Works</Link></li>
            </ul>
            <ul className='flex items-center flex-col gap-4'>
               <li className='text-white font-bold mb-2'>Talk To Us</li>
               <li><a href="#!" className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>support@health.com</a></li>
               <li><a href="#!" className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>appointment@health.com</a></li>
               <li><a href="#!" className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>+022 8888 7982</a></li>
               <li><a href="#!" className='hover:border-b-4 border-dotted border-neutral-300 duration-100 pb-1'>+022 7798 1234</a></li>
            </ul>
         </div>
         </div>
      <p className="border-t border-neutral-600 text-center h-20 flex justify-center items-center text-xl ">
         &copy; 2024 Health+ . All rights reserved.<span className='font-semibold ms-1 text-white'>Eng\ Mostafa ElSayed</span>.
      </p>
      </footer>
   )
}

export default Footer
