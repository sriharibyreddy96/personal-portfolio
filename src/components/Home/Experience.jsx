import React from 'react';
import { IoIosArrowDropright } from "react-icons/io"; // Arrow icon from react-icons
import './Experience.css'; // Import the external CSS file

const Experience = () => {
  const experiences = [
    "Developed responsive websites using HTML, CSS, and JavaScript.",
    "Worked with React.js to build interactive user interfaces.",
    "Implemented RESTful APIs and integrated with front-end applications.",
    "Optimized website performance and load times.",
    "Collaborated with cross-functional teams for agile development."
  ];
  return (
    <div className="experience-container">
      <h2 className="experience-heading">EXPERIENCE</h2>
      <ul className="experience-list">
        {experiences.map((experience, index) => (
          <li key={index} className="experience-item">
            <IoIosArrowDropright 
              className="arrow-icon" 
            />
            <span className="experience-text">{experience}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;