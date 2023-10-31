import React from 'react'
import coverage from './assets/coverage.jpg'
import events from './assets/events.jpg'
import photography from './assets/photography.jpg'
const WhatWeDo = () => {
    const Card = ({image,title,subtitle}) => {
      return (
        <div className='max-md:w-full w-96 min-w-[200px] flex flex-col gap-2'>
                        <div className='w-full aspect-[16/11] overflow-hidden'>
                            <img src={image} alt="" className='h-full w-full object-cover'/>
                        </div>
                        <div className='flex flex-col text-center gap-1'>
                            <p className='text-silver-platium text-2xl font-bold'>{title}</p>
                            <p>{subtitle}</p>
                        </div>
                    </div>
      )
    }
    
  return (
    <>
        <div className='h-fit bg-antiflash-white py-16 px-16 max-lg:px-16 tracking-wider max-md:px-8'>
            <div className='flex flex-col justify-center gap-8'>
                <div className='justify-center text-center flex flex-col gap-y-4'>
                    <h1 className=' text-4xl font-bold'>What We Do</h1>
                    <p>With our team of intelligent and forward-thinking professionals, we pride <br /> ourselves in delivering top-notch services.</p>
                </div>
                <div className='flex justify-between max-md:flex-col gap-8'>
                    <Card image={photography} title={'Photography'} subtitle={'Indoor & Outdoor'} />
                    <Card image={events} title={'Event Coverage'} subtitle={'Weddings | Concerts | Corporate Events'} />
                    <Card image={coverage} title={'Content Production'} subtitle={'Film making | Advertorials | Entertainment Content'} />
                </div>
            </div>
        </div>
    </>
  )
}

export default WhatWeDo