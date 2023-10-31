import React from 'react'
import { RiFacebookFill, RiInstagramFill, RiPhoneFill, RiYoutubeFill } from 'react-icons/ri'

const GetInTouch = () => {
  const SocialLinks = ()=>{
    return(
      <>
      <a className='flex gap-4 items-center hover:translate-x-4 duration-200 ease-in-out hover:scale-105 hover:bg-orange-500' href='https://www.instagram.com/ndah_studios/'><RiInstagramFill className='cursor-pointer'/><p className='text-4xl max-lg:text-2xl duration-200 cursor-pointer ease-in-out'>@ndahstudios</p></a>
      <a className='flex gap-4 items-center hover:translate-x-4 duration-200 ease-in-out hover:scale-105 hover:bg-blue-700' href='https://www.instagram.com/ndah_studios/'><RiFacebookFill className='cursor-pointer'/><p className='text-4xl max-lg:text-2xl duration-200 cursor-pointer ease-in-out'>Ndah Studios</p></a>
      <a className='flex gap-4 items-center hover:translate-x-4 duration-200 ease-in-out hover:scale-105 hover:bg-red-600' href='https://www.youtube.com/@Ndah_experience'><RiYoutubeFill className='cursor-pointer'/><p className='text-4xl max-lg:text-2xl duration-200 cursor-pointer ease-in-out'>@ndahstudios</p></a>
      <a className='flex gap-4 items-center hover:translate-x-4 duration-200 ease-in-out hover:scale-105 hover:bg-green-600' href='https://wa.me/08123219127'><RiPhoneFill className='cursor-pointer'/><p className='text-4xl max-lg:text-2xl duration-200 cursor-pointer ease-in-out'>08123219127</p></a>
      </>
    )
  }
  return (
    <>
      <div className='h-fit py-16 max-lg:px-16 max-md:px-8 px-16  bg-antiflash-white bg-fixed '>
        <div className='flex flex-col gap-y-16'>
          <div className='flex-[2] font-light text-eerie-black'>
              <p className=' text-6xl max-lg:text-4xl'>GET IN TOUCH<br />  WITH NDAH <span className='underline '> STUDIOS</span> </p>
          </div>
          <div className='flex-1 h-full bg-eerie-black text-4xl flex flex-col py-4 rounded-3xl font-light hover:rounded-none duration-200 ease-in-out gap-8 max-lg:text-6xl px-4 text-ghost-white'>
            <SocialLinks/>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetInTouch