import React, { useState,useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import adnaj from '../assets/adnaj.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Check if window scroll is greater than 100px
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full h-[80px] flex justify-between items-center px-4  text-gray-300 z-10 ${scrolled ? 'bg-transparent backdrop-blur-sm' : 'bg-transparent' }`}>
      <div>
        <img src={adnaj} alt="Logo-image" className='rounded-full' style={{ width: '50px' }} />
      </div>
      {/* menu */}

      <ul className='hidden md:flex text-white'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>


      {/* humburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>


      {/* social icons */}
      <div className='hidden lg:flex lg:h-[100vh] lg:justify-center fixed flex-col top-0 left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300' target="_blank"
              href='https://www.linkedin.com/in/adnaj/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300' target="_blank"
              href='https://github.com/Adnaj'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="mailto:adnajemail@gmail.com"
            >
              Email <HiOutlineMail size={30} />

            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300' target="_blank"
              href='/muhammed_Adnaj.pdf' download={true}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default Navbar
