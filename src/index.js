import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
Aos.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
