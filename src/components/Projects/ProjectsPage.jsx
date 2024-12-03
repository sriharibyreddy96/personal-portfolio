import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import ProjectDetails from './ProjectDetails'

const ProjectsPage = () => {
  return (
    <div>
        <Navbar />
        <ProjectDetails />
        <Contact/>
        <Footer />
    </div>
  )
}

export default ProjectsPage