import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import GetInTouch from '../containers/GetInTouch'
import Loader from '../components/Loader'
import { useEffect } from 'react'
import { useState } from 'react'

const ContactUs = () => {
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    document.title = "Ndah studios | Contact us"
    setTimeout(()=>{
      setIsLoading(false)
    },4000)
  })
  return (
    <>
    {
      isLoading?
      <Loader/>:
      <div>
        <NavBar/>
    <Intro title='Contact Us'/>
    <GetInTouch/>
    <Footer/>
      </div>
    }
    </>
  );
}

export default ContactUs