import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { RiCloseFill, RiMenu4Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const NavLinks = (props) => {
    return (
        <>
            <a href={props.path} className='py-4 px-4 font-medium focus:bg-silver-platium md:hover:bg-silver-platium cursor-pointer duration-200 ease-in-out focus:text-ghost-white md:hover:text-ghost-white active:bg-neutral-900 active:text-silver-platium tracking-wider'>{props.text}</a>
        </>
    )
}
const NavBar = () => {
    const [isSideMenuShown, setIsSideMenuShown] = useState(false)
    if(isSideMenuShown === true){
        document.body.style.overflowY='hidden'
    }else{
        document.body.style.overflowY='scroll'
    }
    const MobileNavLinks = () => {
        return (
            <div className='w-full md:hidden'>
                <div className='w-full h-screen backdrop-blur-sm backdrop-brightness-50 sidebaroverlay' onClick={() => { setIsSideMenuShown(false) }}>

                    <div className='flex flex-col w-3/4 h-screen border text-sm bg-ghost-white text-eerie-black float-right relative sidebar'>
                        <div>

                        </div>
                        <NavLinks text='HOME' path='/' />
                        <NavLinks text='GALLERY' path='/gallery' />
                        <NavLinks text='ABOUT' path='/about' />
                        <NavLinks text='FAQ' path='/faq' />
                        <NavLinks text='BOOK AN APPOINTMENT' path='/booking' />
                    </div>
                </div>
                <div className=' flex flex-col gap-y-4'>
                    <p>Suite 17, 1st Floor, Hilltop Plaza, By Elitor Junction, Trans Woji Elelenwo Road, Port Harcourt, Rivers, Nigeria,</p>
                    <p>+234 812 321 9127</p>
                    <p>support@ndahstudios.com</p>
                </div>
            </div>
        )
    }
    return (
        <>
            <header className=' sticky top-0 z-10 w-full'>
                <nav className='flex items-center justify-between h-20 px-16  max-lg:px-16 max-md:px-8 bg-ghost-white text-eerie-black shadow-sm shadow-neutral-900'>
                    <div>
                        <img src={logo} alt="logo" className='w-16 h-16 filter grayscale brightness-0' />
                    </div>
                    <div className='flex gap-x-4 max-md:hidden'>
                        <NavLinks text='HOME' path='/' />
                        <NavLinks text='GALLERY' path='/gallery' />
                        <NavLinks text='ABOUT' path='/about' />
                        <NavLinks text='FAQ' path='/faq' />
                        {/* <NavLinks text='CONTACT US' path='/contact-us'/> */}
                        <NavLinks text='BOOK AN APPOINTMENT' path='/booking' />
                    </div>
                    {isSideMenuShown ?
                        <div className='text-2xl md:hidden p-4 focus:bg-silver-platium md:hover:bg-silver-platium bg-silver-platium cursor-pointer duration-200 ease-in-out focus:text-ghost-white md:hover:text-ghost-white active:bg-neutral-900 active:text-silver-platium' onClick={() => { setIsSideMenuShown(false) }}>
                            <RiCloseFill />
                        </div>
                        :
                        <div className='text-2xl md:hidden p-4 focus:bg-silver-platium md:hover:bg-silver-platium cursor-pointer duration-200 ease-in-out focus:text-ghost-white md:hover:text-ghost-white active:bg-neutral-900 active:text-silver-platium' onClick={() => { setIsSideMenuShown(true) }}>
                            <RiMenu4Fill />
                        </div>
                    }
                </nav>
                {isSideMenuShown && <MobileNavLinks />}
            </header>
        </>
    )
}

export default NavBar