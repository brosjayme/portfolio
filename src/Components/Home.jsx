import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import Profile from "../assets/profile.png"; 


     const Home = () => {
        return (
         <div name='home' className='w-full h-screen bg-gradient-to-b
          from-black to-gray-800'>
       {/* container */}
    <div className='max-w-screen-lg mx-auto px-4 flex flex-col items-center justify-center h-full'>
     <p className='text-pink-600'>Hi, my name is</p>
      <h1  className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Okoro John</h1>
      <h2  className='text-xl sm:text-4xl font-bold text-[#8892b0]'>I'm a Front-End Web Developer</h2>
      <p  className='text-[#8892b0] py-4 max-w-[700px]'>  I’m focused on building responsive front-end web applications.</p>
    <div className='flex flex-col justify-center'>
      <div>
        <img src={Profile} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
      </div>
       <div>
          <button className='text-white group border-1 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            Hire Me
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
    </div>
   </div>
  </div>
  )
}

export default Home;
