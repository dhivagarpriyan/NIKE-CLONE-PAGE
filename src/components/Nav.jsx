import React, { useState } from 'react'
import { headerLogo } from '../assets/images'
import {AiOutlineClose} from "react-icons/ai"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosContact } from "react-icons/io";
import { Link } from 'react-scroll';
const Nav = () => {
    const[sidenav,setSideNav]=useState(false);
    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about-us", label: "About Us" },
        { href: "#products", label: "Products" },
        { href: "#contact-us", label: "Contact Us" },
    ];

  return (
    <header className=' w-full  max-w-[1440px] '>
        <nav className=' mx-8 md:mx-16 flex justify-between items-center h-16'>
        
            <a href='/'>
                <img 
                  src={headerLogo}
                  alt='logo'
                />
            </a>
                
            
            <ul className='hidden  lg:flex justify-center gap-x-8 '>
                {navLinks.map((item)=>(
                    <li key={item.href} className=' font-semibold hover:text-coral-red '>
                         <Link to={item.label} smooth duration={500} > {item.label}
                        </Link>   
                        
                    </li>
                ))}
            </ul>
            <div className='hidden  lg:flex '>
            
    
         
            <p className=' font-semibold border text-white bg-coral-red p-1 rounded-xl flex items-center'>
                <IoIosContact size={20}
                 className=' mr-1'
                />
                SIGN IN</p>
            </div>
            <button onClick={()=>setSideNav(!sidenav)} className=' flex lg:hidden absolute top-5 right-5'>
            <RxHamburgerMenu 
               size={25}
               className='text-coral-red '
              
            />
            </button>  
            {sidenav?(<div className=' bg-black/60 w-full h-full top-0 right-0 fixed' onClick={()=>setSideNav(!sidenav)}></div>):("")}
            
        </nav>
            <div className={sidenav?' bg-white w-[300px] top-0 right-0 fixed h-screen z-20 duration-300':
            ' bg-white w-[300px] top-0 right-[-600px] fixed h-screen z-20 duration-300'}>
                <div>
                <AiOutlineClose onClick={()=>setSideNav(!sidenav)} size={25}
                 className=' absolute top-4 right-4 cursor-pointer text-coral-red'
                />
                <a href='/'>
                <img 
                  src={headerLogo}
                  alt='logo'
                  className=' mx-2 mt-3'
                />
                </a>
                </div>
                  <nav className='mt-16'>
                  <ul className='flex flex-col items-center gap-x-8 '>
                {navLinks.map((item)=>(
                    <li key={item.href} className=' font-bold text-xl hover:text-coral-red py-4 '>
                    <Link to={item.label} smooth duration={500} onClick={()=>setSideNav(!sidenav)}> {item.label}
                        </Link>   
                        
                   </li>
                ))}
            </ul>
                  </nav>
            </div>
    </header>
  )
}

export default Nav