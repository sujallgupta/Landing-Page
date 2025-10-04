import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Banner from './components/Banner';
import DoctorProfile from './components/DoctorProfile';
import WhyChoose from './components/WhyChoose';
import Faq from './components/Faq';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Successstories from './components/Successstories';
import ConsultationPopup from './components/ConsultationPopup';
const App = () => {
  return (

    <div>
      <ConsultationPopup/>
      <Navbar/>
      <Main/>
      <Banner/>
      <DoctorProfile/>
      <Successstories/>
      <WhyChoose/>
      <Faq/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default App
