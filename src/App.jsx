// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import ServiceCards from './components/ServiceCards';
import Productive from './components/Productive';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-[#0B1524] h-[100%]'>
      <Header/>
      <HeroSection/>
      <ServiceCards/>
      <Productive/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
