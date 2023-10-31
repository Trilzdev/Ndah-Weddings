import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import CtaButton from '../components/CtaButton';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
const sessions = [
      {
        "session_name": "Regular Session",
        "session_type": "Studio",
        "price": "₦1,200",
        "number_of_outfits": "1",
        "softcopies_included": "2 edited Soft Copies"
      },
      {
        "session_name": "30 Minutes Photo Session",
        "session_type": "Studio",
        "price": "₦10,000",
        "number_of_outfits": "1-3",
        "softcopies_included": "6 edited Soft Copies"
      },
      {
        "session_name": "1 Hour Photo Session",
        "session_type": "Studio",
        "price": "₦20,000",
        "number_of_outfits": "1-6",
        "softcopies_included": "12 edited Soft Copies"
      },
      {
        "session_name": "Pre-Wedding & Couple Studio Session",
        "session_type": "Studio",
        "price": "₦10,000",
        "number_of_outfits": "1-3",
        "softcopies_included": "7 edited Soft Copies"
      },
      {
        "session_name": "Outdoor Session",
        "session_type": "Outdoor",
        "price": "₦25,000",
        "number_of_outfits": "1-4",
        "softcopies_included": "10 edited Soft Copies"
      },
      {
        "session_name": "Pre-Wedding & Couple Outdoor Session",
        "session_type": "Outdoor",
        "price": "₦25,000",
        "number_of_outfits": "1-3",
        "softcopies_included": "10 edited Soft Copies"
      }
    ]
const Services =({session_name,session_type,price,number_of_outfits,softcopies_included,extra_style})=>{
  const [selectedOption, setSelectedOption] = useState('');
  // const location = useLocation()
  // const locatedOptions = new URLSearchParams(location.search).get('selectedOption');
    // setSelectedOption(locatedOptions)
    // useEffect(() => {
    //   if (locatedOptions) {
    //     setSelectedOption(locatedOptions);
    //     console.log('log' + locatedOptions)
    //   }
    // }, [locatedOptions]);
  const handleButtonClick = (option) => {
    setSelectedOption(option);
    console.log(selectedOption)
  };
    return(
      <div className=''>

        <div className={`justify-between h-96 items-center p-8 flex flex-col text-eerie-black bg-white-alablaster aspect-square duration-200 ease-in-out ${extra_style}`}>
        <div className=" text-2xl font-bold">
            <h1>{session_name}</h1>
        </div>
        <div className="flex flex-col gap-2">
            <p><strong className=''>Session Type:</strong> {session_type}</p>
            <p><strong className=''>Price:</strong> {price}</p>
            <p><strong className=''>Number of Outfits:</strong> {number_of_outfits}</p>
            <p><strong className=''>Softcopies Included:</strong> {softcopies_included}</p>
        </div>
        <CtaButton path={`/booking?selectedOption=${selectedOption}`} text={'BOOK NOW'} onClick={()=>{handleButtonClick(session_name)}}/>
    </div>
      </div>
    )    
}
const ServiceBundles = () => {
  const [currentSlideIindex,setCurrentSlideIndex] = useState(0)
  const carouselSettings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay:true,
    autoplaySpeed:8000,
    arrows:true,
    variableWidth:true,
    easing:'ease-in-out',
    initialSlide:0,
    adaptiveHeight:true,
    afterChange: function(index) {
      setCurrentSlideIndex(index)
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  }
}
const sliderRef = useRef(null);
  // Configure carousel settings
  return (
    <div className='bg-eerie-black'>
    <div className='  text-ghost-white py-16 text-center flex flex-col gap-4'>
        <p className='text-4xl font-bold'>Our Services</p>
        <p className=''>Check out our amazing service bundles below</p>
    </div>
    <div className='overflow-hidden pb-8'>
    <Slider className='' {...carouselSettings}
      ref={sliderRef}
      >
        {sessions.map((session, index) => (
            <Services
            extra_style={currentSlideIindex === index ? '':' scale-[0.8]'}
              session_name={session.session_name}
              session_type={session.session_type}
              price={session.price}
              softcopies_included={session.softcopies_included}
              number_of_outfits={session.number_of_outfits}
            />
        ))}
      </Slider>

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
  );
};

export default ServiceBundles