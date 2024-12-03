import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { useLocation } from 'react-router-dom'

const HireMe = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location]);
  return (
    <div>
        <Navbar />
        <Contact />
        <Footer />
    </div>
  )
}

export default HireMe