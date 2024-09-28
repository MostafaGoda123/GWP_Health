import React from 'react'

const Title = ({name}) => {
   return (
      <div className='w-fit relative'>
         <h1 className='font-bold text-4xl w-fit pb-5'>
            {name}
         </h1>
         <hr className='absolute bottom-0 left-0 w-[75%] border-[2.5px] border-red-700 rounded-3xl' />
      </div>
   )
}

export default Title
