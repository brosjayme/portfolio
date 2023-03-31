import React from 'react';
import NavBar from '../Components/Navbar';
import SocialLinks from '../Components/SocialLinks';

const About = () => {
  return (
     <>
     <NavBar/>
     <SocialLinks/>
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Okoro John, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Welcome to my Front End Development portfolio! I am a passionate and experienced front end developer with a focus on building visually stunning, user-friendly, and responsive websites. I specialize in crafting unique and memorable user experiences through creative design and intuitive functionality.

Throughout my career, I have worked with a wide range of clients, from small startups to large corporations, and have gained expertise in front end development technologies such as HTML, CSS, JavaScript, jQuery, and React.</p>



<div className=''> I am committed to staying up-to-date with the latest trends and technologies in the field, ensuring that the websites I build are modern, efficient, and effective.

In my portfolio, you will find examples of my work that showcase my skills and expertise in front end development. Each project has been carefully selected to demonstrate my ability to create beautiful and functional websites that meet the unique needs and goals of each client. From e-commerce sites to landing pages, my portfolio showcases my versatility and ability to create websites for a variety of industries.

Thank you for taking the time to view my portfolio. If you have any questions or would like to discuss a project, please don't hesitate to contact me. I look forward to the opportunity to work with you!

</div>  
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default About;
