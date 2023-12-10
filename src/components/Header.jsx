import React from 'react'
import logo from '../images/logo1.png'

export default function Header() {
  return (
    <div className='w-4/5 md:w-3/5 mx-auto my-5' id='banner'>
      <div className='flex justify-between items-center'>
        <div className='text-xl md:text-4xl font-bold'>
            <p className='h-7 md:h-11 bg-gradient-to-r from-[#f8f35c] to-[#a7f9df] inline-block text-transparent bg-clip-text'>Sayan</p>
            <p className='text-white'>Das</p>
        </div>
        <img src={logo} alt="" className='h-16 w-16 md:h-20 md:w-20 rounded-full'/>
      </div>
    </div>
  )
}
