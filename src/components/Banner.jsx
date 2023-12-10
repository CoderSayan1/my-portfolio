import React, {Component} from 'react'
import myImage from '../images/Sayan.jpg'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {TypeAnimation} from 'react-type-animation'


export default function Banner() {
  return (
    <div >
      <div className="w-4/5 md:w-3/5 mx-auto mt-20 md:mt-32 md:flex md:justify-between" id='banner'>
        <div className='md:w-1/2 '>
            <div className='flex-1 text-center md:text-left'>
                <h1  className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#F2994A] to-[#F2C94C] inline-block text-transparent bg-clip-text'>SAYAN DAS</h1>
                <div className='text-2xl md:text-4xl font-semibold uppercase'>
                  <span className='text-white'>I am a </span> 
                  <TypeAnimation 
                    sequence={[
                      'Developer',
                      2000,
                      'SW Engineer',
                      2000,
                      'Programmer',
                      2000,
                    ]}
                    speed={50}
                    className='bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-transparent bg-clip-text font-bold'
                    wrapper='span'
                    repeat={Infinity}
                  />
                </div>
            </div>
            <div className='my-6'>
                <p className='text-lg md:text-2xl text-cyan-200 font-medium'>"There is always one more bug to fix."</p>
            </div>
            <div className='w-4/5 mt-5 flex items-center mx-auto md:mx-0 max-w-max'>
                <a href='tel:+919832920149'><div className='border-2 border-[#03e9f4] text-sm md:text-xl bg-gradient-to-r from-violet-500 to-blue-500 rounded-full px-3 py-2 md:px-4 md:py-2 text-white font-semibold cursor-pointer hover:box-shadow mr-8'>Contact me</div></a>
                <a href='https://codersayan1.github.io/my-portfolio/'><div className='bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] inline-block text-transparent bg-clip-text text-lg md:text-2xl font-semibold'>My Portfolio</div></a>
            </div>
            {/* icon portion */}
            <div className='flex mx-auto md:mx-0 max-w-max gap-x-10 mt-10 text-white/50 text-2xl'>
                <a href="https://github.com/CoderSayan1" target='_blank' className='hover:text-white'><FaGithub/></a>
                <a href="https://www.linkedin.com/in/sayan-das-179b93226/" target='_blank' className='hover:text-white'><FaLinkedin/></a>
                <a href="mailto:sayan17102002@gmail.com" className='hover:text-white'><FaEnvelope/></a>
            </div>
        </div>
        <div className='md:w-1/2 hidden md:flex'>
          <img src={myImage} alt="Not found" className='w-auto h-auto rounded-2xl mx-8'/>
        </div>
      </div>
    </div>
  )
}


