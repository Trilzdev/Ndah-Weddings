import React from "react";
import NavBar from "./components/NavBar";
import CTA1 from "./containers/CTA1";
import Footer from "./components/Footer";
import AboutUs from "./containers/AboutUs";
import WhatWeDo from "./containers/WhatWeDo";
import GallerryForHome from "./containers/GallerryForHome";
import GetInTouch from "./containers/GetInTouch";
const App = () => {
  return (
    <div>
      <NavBar />
      <CTA1 />
      <AboutUs />
      <WhatWeDo />
      <GallerryForHome />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default App;
