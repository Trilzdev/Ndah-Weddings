import React from 'react'
import CtaButton from '../components/CtaButton'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'
import { useRef } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
const importAll = (r) => r.keys().map(r);
const GallerryForHome = () => {
    const images = importAll(require.context('./assets/galleryslider', false, /\.(png|jpe?g|svg)$/));
    const [currentSlideIindex,setCurrentSlideIndex] = useState(0)
    const carouselSettings = {
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        autoplay:true,
        autoplaySpeed:10000,
        arrows:true,
        variableWidth:true,
        easing:'ease-in-out',
        swipeToSlide:true,
        swipe:true,
        initialSlide:0,
        adaptiveHeight:true,
        lazyLoading:true,
        afterChange: function(index) {
            setCurrentSlideIndex(index)
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
    }
    const sliderRef = useRef(null);
  return (
    <>  
        <div className=' bg-silver-platinum-grey'>

            <div className='  text-ghost-white py-16 text-center flex flex-col gap-2'>
                <p className='text-4xl font-bold'>OUR PROJECTS</p>
                <p className=''>Here are a few of our best projects</p>
            </div>
            <div className='overflow-hidden pb-8'>
                <Slider {...carouselSettings} className='' ref={sliderRef}>
                    {
                        images.map((item,index)=>(
                            <div className=''>
                                <div className='mx-4 w-96 h-[480px] flex items-center justify-center'>
                                    <div>
                                        <img src={item} alt="pictureee" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </Slider>
            </div>
            <div className=' flex justify-center'>
                <CtaButton path='/gallery' text={'View the gallery'}/>
            </div>
            <div className=' flex justify-between sticky bottom-0'>
                <button
                    className=" p-4 bg-ghost-white text-eerie-black text-4xl hover:text-ghost-white duration-200 ease-in-out  hover:bg-eerie-black"
                    onClick={() => sliderRef.current.slickPrev()}
                >
                    <FiArrowLeft/>
                </button>
                <button
                    className=" p-4 bg-ghost-white text-eerie-black text-4xl hover:text-ghost-white duration-200 ease-in-out  hover:bg-eerie-black"
                    onClick={() => sliderRef.current.slickNext()}
                >
                    <FiArrowRight/>
                </button>
            </div>
        </div>
    </>
  )
}

export default GallerryForHome