import React from "react";
import NavBar from "../components/NavBar";
import CTA1 from "../containers/CTA1";
import AboutUs from "../containers/AboutUs";
import Footer from "../components/Footer";
import GallerryForHome from "../containers/GallerryForHome";
// import GetInTouch from "../containers/GetInTouch";
import WhatWeDo from "../containers/WhatWeDo";
import Testimonies from "../containers/Testimonies";
import ServiceBundles from "../containers/ServiceBundles";
import Loader from "../components/Loader";
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      document.title = "Ndah studios | Home"
      setIsLoading(false)
    },4000)
  })
  return (
    <>
    {
      isLoading?
      <Loader/>:
      <div>
        <NavBar />
        <CTA1 />
        <AboutUs/>
        <WhatWeDo/>
        <GallerryForHome/>
        <ServiceBundles/>
        <Testimonies/>
        <Footer/>
      </div>
    }
    </>
  );
};

export default Home;
