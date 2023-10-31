import React from 'react'
import NavBar from '../components/NavBar'
import GallerryForHome from '../containers/GallerryForHome'
import GetInTouch from '../containers/GetInTouch'
import Footer from '../components/Footer'
import GalleryMain from '../containers/GalleryMain'
import Intro from '../components/Intro'
import Loader from '../components/Loader'
import { useState } from 'react'
import { useEffect } from 'react'
const Gallery = () => {
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      document.title = "Ndah studios | Gallery"
      setIsLoading(false)
    },4000)
  })
  return (
    <>
    {
      isLoading?
      <Loader/>:
      <div>
        <div>
          <NavBar/>
          <Intro title='Gallery' />
        </div>
          <GalleryMain/>
          {/* <GetInTouch/> */}
          <Footer/>
      </div>
    }
    </>
  );
}

export default Gallery