import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import { FaAsterisk, FaCheckCircle } from 'react-icons/fa'
import { useFormik } from 'formik'

const Appointment = () => {

  let navigate = useNavigate("")
  const [submitted, setSubmitted] = useState(false)
  let formik = useFormik({
    initialValues : {
      name: '',
      phone: '',
      gender: '',
      time: '',
      mode: ''
    },validate:handleValidate
    ,onSubmit:handleSubmit
  })
  function handleSubmit( { resetForm }) {
    setSubmitted(true)
    window.scrollTo({top:0 , behavior:'smooth'})
    setTimeout(() => {
      setSubmitted(false)
      navigate('/')
    },3000);
  }
  function handleValidate(values) {
    let errors = {}
    if (!values.name) errors.name = 'Name is required'
    else if (values.name.length < 8) errors.name = 'Min length : 8'
    if (!values.phone) errors.phone = 'Phone is required'
    else if (values.phone.length !== 11) errors.phone = 'Phone length : 11'
    if (!values.gender) errors.gender = 'Gender is required'
    if (!values.time) errors.time = 'Time is required'
    if (!values.mode) errors.mode = 'Mode is required'
    
    return errors
  }
  

  return (
    <main>
      <Link to={'/'} className='font-bold text-2xl md:text-4xl text-blue-500 flex justify-center p-5'>Health <span className='text-green-500'>+</span></Link>

      <section className='bg-blue-100 py-10'>
          <form onSubmit={formik.handleSubmit} className='container flex flex-col gap-10 text-xl'>
              <Title name={'Book Appointment Online'} />
              <div className="inp relative">
                <label className='pb-2 text-2xl font-semibold flex items-center gap-1' htmlFor="name"><FaAsterisk className='text-red-500 text-[8px]' />Patient Full Name:</label>
                <input value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="name" id="name" className='border-none outline-none w-full p-2 bg-blue-200 rounded-lg' />
                <p className='text-red-600 text-lg absolute -bottom-6'>{formik.errors.name && formik.touched.name ? formik.errors.name : null }</p>
              </div>
              <div className=" relative">
                <label className='pb-2 text-2xl font-semibold flex items-center gap-1' htmlFor="phone"><FaAsterisk className='text-red-500 text-[8px]' />Patient Phone Number:</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" name="phone" id="phone" className='border-none outline-none w-full p-2 bg-blue-200 rounded-lg' />
                <p className='text-red-600 text-lg absolute -bottom-6'>{formik.errors.phone  && formik.touched.phone ? formik.errors.phone : null }</p>
              </div>
              <div className="inp relative">
                <label className='pb-2 text-2xl font-semibold flex items-center gap-1' htmlFor="gender"><FaAsterisk className='text-red-500 text-[8px]' />Patient Gender:</label>
                <select onBlur={formik.handleBlur} onChange={formik.handleChange} name="gender" id="gender" className='border-none outline-none w-full p-2 bg-blue-200 rounded-lg'>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="I will inform Doctor only">I will inform Doctor only</option>
                </select>
                <p className='text-red-600 text-lg absolute -bottom-6'>{formik.errors.gender  && formik.touched.gender ? formik.errors.gender : null }</p>
              </div>
              <div className="inp relative">
                <label className='pb-2 text-2xl font-semibold flex items-center gap-1' htmlFor="time"><FaAsterisk className='text-red-500 text-[8px]' />Preferred Appointment Time:</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="datetime-local" name="time" id="time" className='border-none outline-none w-full p-2 bg-blue-200 rounded-lg' />
                <p className='text-red-600 text-lg absolute -bottom-6'>{formik.errors.time && formik.touched.time ? formik.errors.time : null }</p>
              </div>
              <div className="inp relative">
                <label className='pb-2 text-2xl font-semibold flex items-center gap-1' htmlFor="mode"><FaAsterisk className='text-red-500 text-[8px]' />Preferred Mode:</label>
                <select onBlur={formik.handleBlur} onChange={formik.handleChange} name="mode" id="mode" className='border-none outline-none w-full p-2 bg-blue-200 rounded-lg'>
                  <option value="">Select</option>
                  <option value="Voice">Voice Call</option>
                  <option value="Video">Video Call</option>
                </select>
                <p className='text-red-600 text-lg absolute -bottom-6'>{formik.errors.mode && formik.touched.mode ? formik.errors.mode : null }</p>
              </div>
              <button type='submit' className='btn flex gap-5 items-center'>Confirm Appointment</button>
          </form>
      </section>

      <footer className="bg-blue-950 text-neutral-400 border-t border-neutral-600 text-center h-20 flex justify-center items-center text-xl ">
        &copy; 2024 Health+ . All rights reserved.<span className='font-semibold ms-1 text-white'>Eng\ Mostafa ElSayed</span>.
      </footer>
      {submitted && <div className={`alert fixed top-6 duration-300 left-1/2 -translate-x-1/2 bg-white shadow-md p-5  flex items-center gap-2 rounded-md text-neutral-500 text-xl`}><FaCheckCircle className='text-green-500 text-xl' />Appointment Scheduled!</div>}
    </main>
  )
}

export default Appointment
