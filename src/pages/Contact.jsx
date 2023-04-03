import React, { useRef } from 'react';
import NavBar from '../Components/Navbar';
import SocialLinks from '../Components/SocialLinks';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bbg6oui', 'template_vm445e4', e.target, 'mVDiOfpW5fQu4iGI9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>
      <NavBar/>
     <SocialLinks/>
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-1'>
    <form ref={form} onSubmit={sendEmail}  className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-6'>
                <p className='text-3xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-1'> Submit the form below or shoot me an email - okorojohn.ag@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-1' type="text" placeholder='Name' name='name' required/>
            <input className='my-2 p-1 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] p-1' name="message" rows="7" placeholder='Message' required></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
   
    </form>
   </div> 
   
   </>
  );
};
export default ContactUs