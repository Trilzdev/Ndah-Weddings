import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Form } from 'react-router-dom'
import BookingForm from '../containers/BookingForm'
import GetInTouch from '../containers/GetInTouch'
import Intro from '../components/Intro'
import Loader from '../components/Loader'
import { useEffect } from 'react'
import { useState } from 'react'
import NotAvailable from '../containers/NotAvailable'

const Booking = () => {
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    document.title = "Ndah studios | Book an appointment"
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
    <Intro title='Book an appointment'/>
    {/* <BookingForm/> */}
    <NotAvailable/>
    <Footer/>
      </div>
    }
    </>
  );
}

export default Booking