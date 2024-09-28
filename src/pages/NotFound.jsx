import React from 'react'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'

const NotFound = () => {
  let location = useLocation();


  return (
    <div className='container text-xl flex flex-col gap-3 justify-center items-center h-80'>
      <h1>Page Not Found</h1>
      <p>The requested URL [ {location.pathname.split("").slice(1).join("")} ] was not found on this server.</p>
      <Link to={'/'} className='text-blue-500'>Return to home page</Link>
    </div>
  )
}

export default NotFound
