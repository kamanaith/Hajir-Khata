import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import { Menu , X } from 'lucide-react'
import LogoImage from '../assets/images/LogoImage.png'

function Navbar() {
    const [isOpen,setIsOpen] = useState(false)
    const toggleNavBar = () => {
      setIsOpen(!isOpen);
    }
  return (
    <>
        <nav className='flex justify-between md:items-center  lg:items-center xl:items-center  '>
        <div className=' py-2 cursor-pointer '>
          <a href="#">
            <img src={LogoImage} className='  w-auto h-16 md:h-15 ' alt="logoimg"/>
          </a>
        </div>
        <button className='flex flex-col ml-10 mr-8 text-green-800 justify-center md:hidden z-30' onClick={toggleNavBar}>
          {isOpen ? <X /> : <Menu />}
            </button> 
            {isOpen &&(
              <div className='flex flex-col gap-3 items-center text-green-800 absolute z-20 md:hidden w-screen bg-white'>
                <img src={LogoImage} className='  w-auto h-16 md:h-15  pr-10' alt="logoimg"/>
                 <Link to="/" className='text-xl hover:text-[#329BD5]'>Home</Link>
                 <Link to="/about" className='text-xl hover:text-[#329BD5]'>About</Link>
                 <Link to="/contact"  className='text-lg hover:text-[#329BD5]'>Contact</Link>  
              </div>
            )}
            
          <ul className='hidden md:flex md:flex-row font-semibold md:gap-3 lg:gap-10 md:mr-5 lg:mr-50 text-gray-800   '>
            <li className='mx-2  my-6 md:my-0'>
              <Link to="/" className='text-xl hover:text-[#329BD5]'>Home</Link>
            </li>
            <li  className='mx-2  my-6 md:my-0'>
              <Link to="/about"  className='text-lg hover:text-green-800'>AboutUs</Link>
            </li>
            <li  className='mx-2  my-6 md:my-0'>
            <Link to="/contact"  className='text-lg hover:text-green-800'>ContactUs</Link>
            </li>
          </ul>
    </nav>
    </>
  )
}

export default Navbar