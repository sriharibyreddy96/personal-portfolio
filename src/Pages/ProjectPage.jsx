import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Projects from '../components/Projects/Projects'
import { useLocation } from 'react-router-dom'

const ProjectPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location]);
  return (
    <div>
        <Navbar />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default ProjectPage