import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Appointment from './pages/Appointment';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
