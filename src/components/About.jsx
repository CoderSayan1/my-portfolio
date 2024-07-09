import React from 'react'
import myImage from '../images/img1.jpg'
import myResume from '../assets/SAYAN_DAS_Resume.pdf'
import {TypeAnimation} from 'react-type-animation'

export default function About() {
  return (
    <div className='mx-auto my-12 md:my-10 w-4/5 md:w-3/5 p-4 md:flex md:justify-between' id='about'>
      <div className='md:w-1/2 md:my-8 hidden md:flex'>
        <img src={myImage} alt="" className='md:w-[60%] md:h-auto rounded-2xl'/>
      </div>
      <div className='w-full md:w-1/2 my-6'>
        <h1 className='bg-gradient-to-r from-[#F7971E] to-[#FFD200] text-transparent bg-clip-text md:text-4xl text-2xl font-bold '>ABOUT ME</h1>
        <h2 className='md:text-2xl text-xl text-white font-medium'>
          <TypeAnimation 
            sequence={[
                'Hi, I am Sayan Das' ,
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
            <button className='mt-10 border-2 border-[#03e9f4] text-sm md:text-lg bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg md:rounded-2xl px-4 py-2 md:px-7 text-white font-semibold cursor-pointer hover:box-shadow'>My CV</button>
        </a>
      </div>
    </div>
  )
}
