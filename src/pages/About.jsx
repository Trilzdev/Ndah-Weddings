import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import AboutUs from '../containers/AboutUs'
import Loader from '../components/Loader'
import { useState } from 'react'
import { useEffect } from 'react'

const About = () => {
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      document.title = "Ndah studios | About Ndah studios"
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
    <Intro title='About'/>
    <AboutUs/>
    <Footer/>
      </div>
    }
    </>
  );
}

export default About