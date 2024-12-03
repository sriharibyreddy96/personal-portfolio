import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img from "../../Assets/hari_hero.png";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "./Home.css";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      " Front-End Developer",
      " Back-End Developer",
      " Full-Stack Web Developer",
      " Mobile App Developer",
    ],
    loop: 0,
  });
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 }); // Set default animation duration to 1000ms (1 second)
  }, []);

  return (
    <section className="hero" data-aos="fade-up">
      <div className="hero-right-tab">
        <img src={img} alt="" />
      </div>
      <div className="hero-left">
        <h1 className="heading">I'm Sriari Byreddy</h1>
        <h1>
          I'm a
          <span style={{ fontWeight: "bold", Color: "blue" }}>
            {text} <Cursor />
          </span>
        </h1>
        <div className="icons">
          <CiLinkedin size={30} className="icon" />
          <FaInstagram size={30} className="icon" />
          <FaGithub size={30} className="icon" />
          <FaXTwitter size={30} className="icon" />
        </div>
        <button>
          <Link to={"/about"}>More About Hari</Link>
        </button>
      </div>
      <div className="hero-right">
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
