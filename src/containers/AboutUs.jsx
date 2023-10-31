import React from 'react'
import sideImage from './assets/AboutIMG.jpg'
import { RiFacebookBoxFill, RiInstagramFill, RiTwitterFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri'
const AboutUs = () => {    
    const StatusBar = ({ percentage }) => {
        const progressStyle = {
          width: `${percentage}%`,
        };
      
        return (
          <div className='bg-antiflash-white overflow-hidden h-3 w-full rounded-xl'>
            <div data-aos='fade-right' data-aos-delay='200' className='h-full bg-eerie-black' style={progressStyle}></div>
          </div>
        );
      };
  return (
    <>
        <div className='h-fit text-eerie-black'>
            <div className='flex flex-wrap max-lg:flex-col gap-y-8 justify-between max-lg:px-16 max-md:px-8 px-16 py-16'>
                <div className='flex-1 md:px-8'>
                    <div className=' w-full overflow-hidden'>
                        <img src={sideImage} alt="About us images" />
                    </div>
                </div>
                <div className='flex flex-col flex-1 gap-8 md:px-8'>
                    <h1 className='text-4xl font-bold'>ABOUT US</h1>
                    <p>NDAH STUDIOS is a modern multimedia company headquartered in Port Harcourt, south of Nigeria. We offer all kinds of indoor and outdoor photography services as well as multi-format content production and more. With our team of intelligent and forward-thinking professionals, we pride ourselves in delivering top-notch services at an astonishingly modest cost because our core values is “people before profit”.</p>
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold text-lg text-silver-platium'>Our Service Skills</p>
                        <div className='w-full flex flex-col gap-4'>
                            <div className='flex justify-between'>
                                <p>Photography</p>
                                <p>92%</p>
                            </div>
                            <StatusBar percentage={92}/>
                            <div className='flex justify-between'>
                                <p>Event Coverage</p>
                                <p>85%</p>
                            </div>
                            <StatusBar percentage={85}/>
                            <div className='flex justify-between'>
                                <p>Content Production</p>
                                <p>92%</p>
                            </div>
                            <StatusBar percentage={87}/>
                        </div>
                    </div>
                    <div className='flex gap-x-4 text-silver-platium text-2xl'>
                        <a className=' hover:text-eerie-black p-2 duration-200 ease-in-out bg-white-alablaster rounded-xl' href="https://www.facebook.com/ndahstudios/">
                            <RiFacebookBoxFill/>
                        </a>
                        <a className=' hover:text-eerie-black p-2 duration-200 ease-in-out bg-white-alablaster rounded-xl' href="https://www.instagram.com/ndah_studios/">
                            <RiInstagramFill/>
                        </a>
                        <a className=' hover:text-eerie-black p-2 duration-200 ease-in-out bg-white-alablaster rounded-xl' href="https://www.youtube.com/@Ndah_experience">
                            <RiYoutubeFill/>
                        </a>
                        <a className=' hover:text-eerie-black p-2 duration-200 ease-in-out bg-white-alablaster rounded-xl' href="">
                            <RiWhatsappFill/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs