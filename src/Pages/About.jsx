import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Abouthero from '../components/About/Abouthero'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Skills from '../components/About/Skills'
import { useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location]);
  return (
    <div>
        <Navbar />
        <Abouthero />
        <Skills />
        <Contact />
        <Footer />
        
    </div>
  )
}

export default About