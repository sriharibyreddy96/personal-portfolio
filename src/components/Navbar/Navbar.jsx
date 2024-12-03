import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false); // Track the state of the hamburger menu

  const handleClick = () => {
    setClick(!click); // Toggle the menu visibility
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>Developer</h1>
        </div>
        <div className={click ? "links active" : "links"}> {/* Links container that toggles visibility */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/hire-me" className="hire-me">Hire Me</Link>
        </div>
        {/* Hamburger icon to toggle menu */}
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={25} />
          ) : (
            <FaBars size={25} />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
