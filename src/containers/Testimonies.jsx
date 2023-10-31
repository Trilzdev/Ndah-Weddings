import React, { useRef } from 'react'
import profile1 from './assets/author-1.jpg'
import profile2 from './assets/author-2.jpg'
import profile3 from './assets/author-3.jpg'
import profile4 from './assets/author-3.jpg'
import profile5 from './assets/author-3.jpg'
import profile6 from './assets/author-3.jpg'
import profile7 from './assets/author-3.jpg'
import profile8 from './assets/author-3.jpg'
import profile9 from './assets/author-3.jpg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
const Testimonies = () => {
  const carouselItems = [
    {
          profile:profile2 ,
          name: 'Chinwe Okonkwo',
          title: 'Amazing Experience!',
          testimony: "I had an incredible experience with this service. The quality of work and professionalism displayed by the team was outstanding. I highly recommend them to anyone looking for top-notch service."
        },
        {
          profile:profile2 ,
          name: 'Emeka Nwosu',
          title: 'Exceptional Service!',
          testimony: "I can't express how impressed I am with the service I received. From start to finish, everything was handled with care and attention to detail. I will definitely be a repeat customer!"
        },
        {
          profile:profile2 ,
          name: 'Amina Mohammed',
          title: 'Highly Recommend!',
          testimony: "I was pleasantly surprised by the level of professionalism and dedication exhibited by the team. They went above and beyond to meet my expectations. I would recommend them without hesitation."
        },
        {
          profile:profile2 ,
          name: 'Tunde Adekunle',
          title: 'Outstanding Work!',
          testimony: "The service provided by this team is nothing short of outstanding. They exceeded my expectations, and I couldn't be happier with the results. I will definitely be a loyal customer."
        },
        {
          profile:profile2 ,
          name: 'Nkechi Eze',
          title: 'Impressive Service!',
          testimony: "I'm truly impressed with the professionalism and attention to detail shown by this company. They made the entire process seamless, and the results were beyond my expectations."
        },
        {
          profile:profile2 ,
          name: 'Chukwudi Okafor',
          title: 'Top-Notch Quality!',
          testimony: "The quality of work delivered by this team is top-notch. They were efficient, reliable, and provided excellent service. I highly recommend them to anyone in need of their services."
        },
        {
          profile:profile2 ,
          name: 'Fatima Ibrahim',
          title: 'Exceptional Team!',
          testimony: "I had a wonderful experience working with this team. Their attention to detail and commitment to delivering high-quality work is truly exceptional. I'm a satisfied customer."
        },
        {
          profile:profile2 ,
          name: 'Oluwaseun Adeleke',
          title: 'Highly Professional!',
          testimony: "I can't say enough good things about this company. They are highly professional, responsive, and dedicated to providing excellent service. I will definitely be a repeat client."
        },
        {
          profile:profile2 ,
          name: 'Chidinma Egbuonu',
          title: 'Fantastic Results!',
          testimony: "I am thrilled with the results I achieved with this service. The team's expertise and dedication are truly commendable. I would recommend them to anyone in a heartbeat."
        },
        {
          profile:profile2 ,
          name: 'Yusuf Bello',
          title: 'Great Experience!',
          testimony: "Working with this team was a great experience. They were professional, efficient, and delivered exactly what I needed. I'm a happy customer and will definitely use their services again."
        }
      ];
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
  return (
    <div className=' bgpic'>
    <div className='py-16 overflow-hidden'>

        <Slider {...carouselSettings} className='' ref={sliderRef}>
            {
                carouselItems.map((item,index)=>(
                    <div>
                        <div className={`mx-2 text-ghost-white backdrop-brightness-50 hover:backdrop-brightness-[.25] duration-200 delay-100 ease-in-out backdrop-blur-sm px-8 py-8 border border-black flex flex-col gap-8 w-96 h-96 aspect-square justify-center text-center items-center ${currentSlideIindex === index ? 'backdrop-brightness-[.25]':' sm:scale-75'}`}>
                            <div className='w-24 h-24 rounded-full overflow-hidden'>
                                <img src={item.profile} className="object-cover " alt="Profile"  />
                            </div>
                            <div className=' flex flex-col gap-2'>
                                <h1 className='text-silver-platium font-bold'>{item.name}</h1>
                                <h1 className='text-ghost-white font-medium'>{item.title}</h1>
                                <blockquote className=' font-semibold'>{item.testimony}</blockquote>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    </div>
    <div className=' flex justify-between sticky'>
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
  )
}

export default Testimonies