import React, {useState} from 'react'
import {FaBars, FaTimes ,FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import { Link } from 'react-scroll'


const Navbar = () => {
  const[nav,setNav] = useState(false)
  const handleClick =() => setNav(!nav)
  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f]  text-gray-300'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '65px' }} />
      </div>
{/* main menu */}
  <ul className='hidden md:flex'>
    <li className='px-4 cursor text-gray-350 hover:scale-95'> <Link to="home" smooth={true} duration={500}>
      Home </Link></li>

    <li  className='px-4 cursor text-gray-350 hover:scale-95'>  <Link to="about" smooth={true} duration={500}>
      About</Link></li>

      <li  className='px-4 cursor text-gray-350 hover:scale-95'>  <Link to="skills" smooth={true} duration={500}>
      Skills</Link></li>

      <li  className='px-4 cursor text-gray-350 hover:scale-95'>  <Link to="portfolio" smooth={true} duration={500}>
      Portfolio</Link></li>
      
      <li  className='px-4 cursor text-gray-350 hover:scale-95'>  <Link to="contact" smooth={true} duration={500}>
      Contact</Link></li>
  </ul>

{/* mini v */}
<div onClick={handleClick} className='md:hidden z-10'>
  {!nav ? <FaBars/> : <FaTimes/>}
</div>
{/* moblile menu */}

  <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
    <li className='py-6 text-4xl'>
       <Link onClick={handleClick} to="home" smooth={true} duration={500}>
      Home </Link></li>
    <li className='py-6 text-4xl'>
       <Link  onClick={handleClick} to="about" smooth={true} duration={500}>
      About</Link></li>
    <li className='py-6 text-4xl'>
       <Link  onClick={handleClick} to="skills" smooth={true} duration={500}>
      Skills</Link></li>
    <li className='py-6 text-4xl'>
       <Link  onClick={handleClick} to="portfolio" smooth={true} duration={500}>
      Portfolio</Link></li>
    <li className='py-6 text-4xl'> 
     <Link  onClick={handleClick}  to="contact" smooth={true} duration={500}>
      Contact</Link></li> 
  </ul>
{/* social icons */} 
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
  <ul>
    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
      <a className='flex justify-between items-center w-full text-gray-300'
       href="/">
        Linkdin <FaLinkedin  size={30}/>
      </a>
    </li>
  
  <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
      <a className='flex justify-between items-center w-full text-gray-300'
       href="/">
        Github <FaGithub  size={30}/>
      </a>
    </li>
    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
      <a className='flex justify-between items-center w-full text-gray-300'
       href="/">
        Email <HiOutlineMail  size={30}/>
      </a>
    </li>
    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
      <a className='flex justify-between items-center w-full text-gray-300'
       href="/">
        Resume <BsFillPersonLinesFill  size={30}/>
        </a>
      </li>
    </ul>
  </div>   
</div>
  );
}

export default Navbar