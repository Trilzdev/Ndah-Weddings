import React from 'react'
import { RiFacebookBoxFill, RiInstagramFill, RiPinterestFill, RiTwitterFill, RiUserLocationFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <>
        <div className='flex bg-silver-platinum-grey h-fit py-16 px-16 flex-wrap max-lg:px-16 max-md:px-8 text-ghost-white justify-between items-center gap-y-16'>
            <div className='flex flex-col gap-y-8 w-[460px]'>
                <p className=' text-4xl max-md:text-2xl font-bold'>Ndah Studios</p>
                <div className=' flex flex-col gap-y-4'>
                    <p>NDAH STUDIOS is a modern multimedia company headquartered in Port Harcourt, south of Nigeria. We offer all kinds of indoor and outdoor photography services as well as multi-format content production and more.</p>
                    <p>
                        All Rights Reserved.<br/>Copyright ⓒ Ndah Studios 2023.
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-y-8 w-[460px]'>
                <p className='text-4xl max-md:text-2xl font-bold'>Contact Info</p>
                <div className=' flex flex-col gap-y-4'>
                    <p>Suite 17, 1st Floor, Hilltop Plaza, By Elitor Junction, Trans Woji Elelenwo Road, Port Harcourt, Rivers, Nigeria,</p>
                    <p>+234 812 321 9127</p>
                    <p>support@ndahstudios.com</p>
                    <div className='flex gap-x-4 text-silver-platium text-2xl'>
                        <a className=' hover:text-eerie-black' href="https://www.facebook.com/ndahstudios/">
                            <RiFacebookBoxFill/>
                        </a>
                        <a className=' hover:text-eerie-black' href="https://www.instagram.com/ndah_studios/">
                            <RiInstagramFill/>
                        </a>
                        <a className=' hover:text-eerie-black' href="https://www.youtube.com/@Ndah_experience">
                            <RiYoutubeFill/>
                        </a>
                        <a className=' hover:text-eerie-black' href="">
                            <RiWhatsappFill/>
                        </a>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className=' bg-eerie-black text-ghost-white text-center  font-light py-2'>© 2023 Ndah Studios. All Rights Reserved</div>
    </>
  )
}

export default Footer