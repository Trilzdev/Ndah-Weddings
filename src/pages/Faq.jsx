import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import FAQsection from '../containers/FAQsection'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from '../components/Loader'

const Faq = () => {
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      document.title = "Ndah studios | Frequently Asked Questions"
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
          <Intro title="FAQ"/>
          <FAQsection/>
          <Footer/>
      </div>
    }
    </>
  );
}

export default Faq