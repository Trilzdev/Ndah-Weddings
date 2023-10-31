import React from 'react'
const Intro = ({title}) => {
  return (
    <>
    <div className='h-[40vh] bg-eerie-black bgpic'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-4 backdrop-brightness-50 text-ghost-white'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-2xl'><a href='/' className='md:hover:text-silver-platium duration-200'>Home</a> / {title}</p>
        </div>
    </div>
    </>
  )
}

export default Intro