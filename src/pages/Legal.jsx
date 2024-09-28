import React from 'react'
import { Link } from 'react-router-dom'

const Legal = () => {
  return (
    <main>
      <Link to={'/'} className='font-bold text-2xl md:text-4xl text-blue-500 flex justify-center p-5'>Health <span className='text-green-500'>+</span></Link>

      <section className='bg-blue-100 py-10'>
      <ul className='container flex flex-col gap-8'>
        <li>
          <h1 className='font-bold text-3xl border-b-2 border-neutral-400 pb-1 mb-2 '>General Info</h1>
          <p className='text-xl'>Welcome to Health Plus, your trusted online healthcare platform. Our mission is to provide accessible and personalized healthcare services to individuals seeking expert medical advice and treatment. By using our platform, you agree to the terms outlined in our Privacy Policy and Terms of Service.</p>
        </li>
        <li>
          <h1 className='font-bold text-3xl border-b-2 border-neutral-400 pb-1 mb-2 '>Privacy Policy</h1>
          <p className='text-xl'>Your privacy is paramount to us. Our Privacy Policy outlines how we collect, use, and protect your personal and medical information. We ensure secure data handling, and you can trust that your information is treated with the utmost confidentiality.</p>
        </li>
        <li>
          <h1 className='font-bold text-3xl border-b-2 border-neutral-400 pb-1 mb-2 '>Terms of Service</h1>
          <p className='text-xl'>When using Health Plus, you agree to our Terms of Service. This includes guidelines for using our platform, interacting with doctors, and the responsibilities of both parties. It's essential to understand these terms to ensure a smooth experience for all users.</p>
        </li>
        <li>
          <h1 className='font-bold text-3xl border-b-2 border-neutral-400 pb-1 mb-2 '>Consultations</h1>
          <p className='text-xl'>Our platform connects you with expert doctors who provide online consultations. These consultations are not a replacement for in-person medical visits but serve as a convenient option for medical advice, prescriptions, and guidance. It's crucial to provide accurate and complete information to receive the best possible care.</p>
        </li>
        <li>
          <h1 className='font-bold text-3xl border-b-2 border-neutral-400 pb-1 mb-2 '>How it Works</h1>
          <p className='text-xl'>Health Plus is designed to simplify healthcare access. You can choose a specialist, schedule an appointment, and engage in a virtual consultation. Our specialists offer personalized advice and treatment plans tailored to your needs. Please remember that emergencies require immediate medical attention and should be directed to your local medical facility.</p>
        </li>
      </ul>
      </section>

      <footer className="bg-blue-950 text-neutral-400 border-t border-neutral-600 text-center h-20 flex justify-center items-center text-xl ">
        &copy; 2024 Health+ . All rights reserved.<span className='font-semibold ms-1 text-white'>Eng\ Mostafa ElSayed</span>.
      </footer>
    </main>
  )
}

export default Legal
