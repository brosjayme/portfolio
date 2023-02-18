import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';


     const Home = () => {
        return (
         <div name='home' className='w-full h-screen bg-[#0a192f]'>
       {/* container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
     <p className='text-pink-600'>Hi, my name is</p>
      <h1  className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Okoro John</h1>
      <h2  className='text-4xl sm:text-7xl font-small text-[#8892b0]'>I'm a Front-End Web Developer</h2>
      <p  className='text-[#8892b0] py-4 max-w-[700px]'>  I’m focused on building responsive front-end web applications.</p>
    <div>
    <div>
          <button className='text-white group border-radius-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            Hire Me
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      {/* <button 
         className='w-[160px] h-[50px] fixed justify-between items-center ml-[-100px] hover:ml-[-10px]
         duration-300 bg-blue-600'>hire me
      </button> */}
    </div>
   </div>
  </div>
  )
}

export default Home;