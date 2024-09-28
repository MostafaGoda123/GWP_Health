import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import ChooseHealth from '../components/ChooseHealth'
import Reviews from '../components/Reviews'
import Doctors from '../components/Doctors'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

const Home = () => {

   return (
      <div>
         <Navbar />
         <Hero />
         <Services />
         <About />
         <ChooseHealth />
         <Reviews />
         <Doctors />
         <Footer />
         <ScrollTop />
      </div>
   )
}


export default Home
