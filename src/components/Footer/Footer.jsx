import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const styles = {
    footer: {
      padding: "50px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "50px",
    },

    icons: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px",
      color: "#e50914",
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <hr
        style={{
          height: "1px",
          margin: "20px 0",
        }}
      />
      <footer className="footer" style={styles.footer} data-aos="zoom-in">
        <div className="links">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Projects</Link>
          <Link>HireMe</Link>
        </div>
        <div className="icons" style={styles.icons}>
          <CiLinkedin size={30} className="icon" />
          <FaInstagram size={30} className="icon" />
          <FaGithub size={30} className="icon" />
          <FaXTwitter size={30} className="icon" />
        </div>
        <p>Copyright {currentYear}. Inc. All rights reserved</p>
      </footer>
    </>
  );
};

export default Footer;
