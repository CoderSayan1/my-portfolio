import React from 'react'

export default function Contact() {
  return (
    <div className='mx-auto my-32 w-4/5 md:w-3/5 md:flex md:justify-between' id='contact'>
      <div className='md:w-1/2'>
        <h2 className='bg-gradient-to-r from-[#F7971E] to-[#FFD200] text-transparent bg-clip-text md:text-4xl text-2xl font-bold mb-6 uppercase'>Contact me</h2>
        <h1 className='text-3xl font-medium text-white uppercase'>Let's work <br/> together</h1>
      </div>
      <div className='md:w-3/5 mt-14 md:mt-0'>
        <form className='border rounded-2xl gap-y-6 pb-24 p-6 items-start'>
            <input type="text" id='name' className='text-white border-b-2 bg-transparent py-3 outline-none w-full placeholder:text-white focus:border-amber-500 transition-all' placeholder='Your name'/>
            <input type="email" id='email' className='text-white border-b-2 bg-transparent py-3 outline-none w-full placeholder:text-white focus:border-amber-500 transition-all' placeholder='Your email'/>
            <textarea className='text-white border-b-2 bg-transparent py-3 outline-none w-full placeholder:text-white focus:border-amber-500 transition-all resize-none mb-12' placeholder='Write your message' id='message'></textarea>
            <input className='border-2 border-[#03e9f4] text-sm md:text-lg bg-gradient-to-r from-violet-500 to-blue-500 rounded-full p-2 md:p-2 w-2/5 text-white font-semibold cursor-pointer hover:box-shadow' type="submit" name="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}
