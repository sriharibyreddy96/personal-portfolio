import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Home/Hero";
import Experience from "../components/Home/Experience";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";
import { useLocation } from "react-router-dom";

const HompPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location]);
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default HompPage;
