import Link from 'next/link'
import Header from '../components/Header'

import React, {useEffect, useState} from 'react'

import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    }
    window.addEventListener('scroll', handleShadow);
}, [])


    return (

        <div
        style={{ backgroundColor: `${navBg}` }}
        className={
            shadow
            ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
            : 'fixed w-full h-20 z-[100]'
        } >

            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <p>Home</p>
                
                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/#about">
                            <li className='ml-10 text-sm hover:border-b'>About</li>
                        </Link>

                        <Link href="/">
                            <li className='ml-10 text-sm hover:border-b'>Projects</li>
                        </Link>
                        <Link href="/">
                            <li className='ml-10 text-sm hover:border-b'>Skills</li>
                        </Link>
                        <Link href="/#contact">
                            <li className='ml-10 text-sm hover:border-b'>Contact</li>
                        </Link>

                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>

            </div>      

            {/* Side Drawer Menu */}
            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/90' : ''}>
               
                <div 
                className={
                    nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-white p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                    <div>

                        {/* Logo and close  button */}
                        <div className='flex w-full items-center justify-between'>
                            Ramon's Portfolio Test
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        
                            
                        </div>

                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Redirectory</p>
                        </div>
                    <div className='py-4 flex flex-col'>
                        <ul>
                            <Link href="/#home">
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href="/#about">
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href="/">
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                        </ul>
                    </div>
                        <div className='pt-40 '>
                            <p className='tracking-widest text-blue'>Let's connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            
                                <a
                                    href='https://linkedin.com/in/ramvilsil'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />  
                                    </div>
                                </a>    

                                <a
                                    href='https://github.com/ramvilsil'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />  
                                    </div>
                                </a>
                                <Link href='/#contact'>
                                <div
                                    onClick={() => setNav(!nav)}
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                >
                                    <AiOutlineMail />
                                </div>
                                </Link>
    
                                
                            </div>
                        </div>
                    </div>
                </div>   
            </div>  
        </div>
    )

    
}

export default Navbar