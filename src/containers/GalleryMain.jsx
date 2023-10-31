import React, { useRef } from 'react';
import Modal from 'react-modal';
import { RiArrowLeftFill, RiArrowLeftLine, RiArrowRightLine, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Slider from 'react-slick';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GallerryForHome from './GallerryForHome';
const importAll = (r) => r.keys().map(r);
const GalleryMain = () => {
  const images = importAll(require.context('./assets/galleryimages', false, /\.(png|jpe?g|svg)$/));
  const imagelist=images
  const gallerySize = Math.ceil(images.length / 3)
  const galleryItems1 = imagelist.slice(0, gallerySize);
  const galleryItems2 = imagelist.slice(gallerySize, gallerySize * 2);
  const galleryItems3 = imagelist.slice(gallerySize * 2);
  const [selectedImage,setSelectedImage] = useState(null)
  const [selectedImageIndex,setSelectedImageIndex] = useState(0)
  const [modalIsOpen,setModalIsOpen] = useState(false)
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setSelectedImageIndex(imagelist.indexOf(imageUrl))
    console.log("Index of image :",imagelist.indexOf(selectedImage),"Index of selected image:",selectedImageIndex)
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };
  const bodyElement = document.body
  modalIsOpen === true ? bodyElement.style.overflowY = 'hidden' : bodyElement.style.overflowY = 'scroll'
  // const handleDrag = (event, info) => {
  //   closeModal()
  //   console.log('Dragged to:', info.offset.y);
  // };
  const [currentSlideIindex,setCurrentSlideIndex] = useState(selectedImageIndex)
  
  const carouselSettings = {
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      // autoplay:true,
      // autoplaySpeed:8000,
      draggable:false,
      touchMove:true,
      arrows:true,
      swipe:true,
      swipeToSlide: true,
      variableWidth:true,
      easing:'ease-in-out',
      initialSlide:selectedImageIndex,
      lazyLoading:true,
      afterChange: function(index) {
        setSelectedImageIndex(index)
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );  
    }
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const sliderRef = useRef(null);

  return (
    <div className="py-16 h-fit">
      <div className="mx-auto px-4 sm:px-16 lg:px-16">
        <h2 className="text-4xl  text-gray-900 mb-8 text-center font-light ">Ndah Studios Gallery</h2>
        <div className="flex justify-center gap-8 max-xl:gap-1 max-sm:px-16 items-start max-md:flex-col max-sm:items-center ">
          <div className=' max-md:w-96 w-[700px] flex flex-col gap-y-8 max-xl:gap-y-1 max-sm:gap-8'>
          {galleryItems1.map((imageUrl, index) => (
              <img
                src={imageUrl}
                alt={`Imagess ${index + 1}`}
                data-aos="fade-up"
                className="w-full object-cover cursor-pointer hover:brightness-90 duration-200 ease-in-out "
                onClick={() => openModal(imageUrl)}
              />
          ))}
          </div>
          <div className=' max-md:w-96 w-[700px]  flex flex-col gap-y-8 max-xl:gap-y-1 max-sm:gap-8'>
          {galleryItems2.map((imageUrl, index) => (
              <img
                src={imageUrl}
                alt={`Imagess ${index + 1}`}
                data-aos="fade-up"
                className="w-full object-cover cursor-pointer hover:brightness-90 duration-200 ease-in-out "
                onClick={() => openModal(imageUrl)}
              />
          ))}
          </div>
          <div className=' max-md:w-96 w-[700px] flex flex-col gap-y-8 max-xl:gap-y-1 max-sm:gap-8'>
          {galleryItems3.map((imageUrl, index) => (
              <img
                src={imageUrl}
                alt={`Imagess ${index + 1}`}
                data-aos="fade-up"
                className="w-full object-cover cursor-pointer hover:brightness-90 duration-200 ease-in-out "
                onClick={() => openModal(imageUrl)}
              />
          ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className=" overflow-hidden backdrop-blur-sm h-full w-full"
        overlayClassName="fixed  z-50 flex h-screen w-screen inset-0 justify-center items-center backdrop-brightness-[0.25]"
      >
<div className="w-screen relative h-full flex justify-center items-center">
      <Slider className='h-fit backdrop-blur-sm flex justify-center items-center' {...carouselSettings} ref={sliderRef}>
        {
          imagelist.map((image,index)=>(
            <div className={` flex items-center justify-center h-[calc(100vh)]  px-4 `}>
              <div className={`flex items-center justify-center h-full w-full duration-200 ease-in-out ${selectedImageIndex===index?'scale-110':'cursor-pointer brightness-50'}`}>
                <img src={image} alt={`Picture ${index + 1}`} className=' object-scale-down  max-md:w-96 md:h-[90%] ' />
              </div>
            </div>
          ))
        }
      </Slider>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 bg-ghost-white text-eerie-black text-4xl hover:text-ghost-white duration-200 ease-in-out  hover:bg-eerie-black"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FiArrowLeft/>
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 bg-ghost-white text-eerie-black text-4xl hover:text-ghost-white duration-200 ease-in-out  hover:bg-eerie-black"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FiArrowRight/>
      </button>
      <button className='absolute top-0 right-0  p-4 bg-ghost-white text-eerie-black text-4xl hover:text-ghost-white duration-200 ease-in-out  hover:bg-eerie-black'
      onClick={()=>{closeModal()}}
      >
        <RiCloseLine/>
      </button>
    </div>
      </Modal>
    </div>
  );
};

export default GalleryMain;

