import React from 'react'
import myImage from '../images/img1.jpg'
import myResume from '../assets/SAYAN_124.pdf'
import {TypeAnimation} from 'react-type-animation'

export default function About() {
  return (
    <div className='mx-auto my-20 md:mt-32 md:mb-0 w-4/5 md:w-3/5 md:flex md:justify-between' id='about'>
      <div className='md:w-1/2 md:mt-8'>
        <img src={myImage} alt="" className='md:w-auto md:h-4/5 h-[420px] w-full rounded-2xl'/>
      </div>
      <div className='w-full md:w-1/2 md:ml-20 mt-10 md:mt-0 '>
        <h1 className='bg-gradient-to-r from-[#F7971E] to-[#FFD200] text-transparent bg-clip-text md:text-4xl text-2xl font-bold md:my-5 my-3'>ABOUT ME</h1>
        <h2 className='md:text-2xl text-xl text-white font-medium'>
          <TypeAnimation 
            sequence={[
                'Hi, I am Sayan Das',
                2000,
                'Hi,',
                2000,
              ]}
              speed={50}
              wrapper='span'
              repeat={Infinity}
          />
        </h2>
        <div className='mt-6 text-lg md:text-xl font-bold bg-gradient-to-r from-[#e8e873] to-[#ff9c63] text-transparent bg-clip-text rounded-lg text-justify'>
          <p >I am a B.Tech student in Computer Science at Brainware University. My proficiency lies in programming languages such as Java and JavaScript. Additionally, I excel in front-end development, with a focus on React. I have utilized my skills to create various websites, showcasing my capabilities as a front-end developer.</p>
        </div>
        <a href={myResume} target='_blank'>
            <button className='mt-10 border-2 border-[#03e9f4] text-sm md:text-lg bg-gradient-to-r from-violet-500 to-blue-500 rounded-full p-2 md:p-2 w-2/5 text-white font-semibold cursor-pointer hover:box-shadow'>My CV</button>
        </a>
      </div>
    </div>
  )
}
