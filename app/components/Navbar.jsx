'use client';
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'


const Navbar = ({isdarkMode, setIsDarkMode}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
    })},[])
return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
            <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
            ${isScrolled ? 'bg-white backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white/20' : ''}`} 
            style={{ backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.6)' : 'transparent' }}>
            <a href="#top">
                    <Image src={isdarkMode ? assets.logo_dark : assets.logo} alt='' 
                    className='w-28 cursor-pointer mr-14'/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
                ${isScrolled ? "" :
                "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent "}`}>
                    <li> <a href="#top">Home</a> </li>
                    <li> <a href="#about">About me</a> </li>
                    <li> <a href="#services">Services</a> </li>
                    <li> <a href="#work">My work</a> </li>  
                    <li> <a href="#contact">Contact me</a> </li>
            </ul>
            <div className='flex items-center gap-4'>
                    <button onClick={()=> setIsDarkMode(pre=>!pre)}>
                            <Image src={ isdarkMode ? assets.sun_icon : assets.moon_icon} alt='' 
                            className='w-6'/>
                    </button>
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 
                    border border-gray-500 rounded-full ml-4'>
                    Contact <Image src={assets.arrow_icon} alt='' className='w-3'/></a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>   
                            <Image src={assets.menu_black} alt='' className='w-6'/>
                    </button>
            </div>

                                     {/*  mobile menu */}


            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 
            top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    <div className='absolute top-6 right-6' onClick={closeMenu}>
                            <button> <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/></button>
                    </div>
                    <li> <a href="#top" onClick={closeMenu}>Home</a> </li>
                    <li> <a href="#about" onClick={closeMenu}>About me</a> </li>
                    <li> <a href="#services" onClick={closeMenu}>Services</a> </li>
                    <li> <a href="#work" onClick={closeMenu}>My work</a> </li>  
                    <li> <a href="#contact" onClick={closeMenu}>Contact me</a> </li>
            </ul>
        </nav>
    </>
)
}

export default Navbar
