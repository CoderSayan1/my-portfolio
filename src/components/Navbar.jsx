import React from 'react'
import { Link } from 'react-scroll'
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsBriefcase, BsChatSquare} from 'react-icons/bs'


export default function Navbar() {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        <div className='w-full bg-black/20 h-[70px] md:h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
            <Link to='banner' smooth={true} spy={true} className='cursor-pointer h-[60] w-[60] flex justify-center items-center hover:text-white'><BiHomeAlt/></Link>
            <Link to='about' smooth={true} spy={true} className='cursor-pointer h-[60] w-[60] flex justify-center items-center hover:text-white'><BiUser/></Link>
            <Link to='work' smooth={true} spy={true} className='cursor-pointer h-[60] w-[60] flex justify-center items-center hover:text-white'><BsBriefcase/></Link>
            <Link to='contact' smooth={true} spy={true} className='cursor-pointer h-[60] w-[60] flex justify-center items-center hover:text-white'><BsChatSquare/></Link>
        </div>
      </div>
    </nav>
  )
}
