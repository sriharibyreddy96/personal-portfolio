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

  // Neon colors for each arrow
  const neonColors = [
    "#FF5733", // Orange-Red
    "#33C3FF", // Light Blue
    "#FFB833", // Yellow-Orange
    "#33FF57", // Green
    "#FF33A1"  // Pink
  ];

  return (
    <div className="experience-container">
      <h2 className="experience-heading">EXPERIENCE</h2>
      <ul className="experience-list">
        {experiences.map((experience, index) => (
          <li key={index} className="experience-item">
            <IoIosArrowDropright 
              className="arrow-icon" 
              style={{
                color: neonColors[index],
                boxShadow: `0 0 10px ${neonColors[index]}, 0 0 20px ${neonColors[index]}, 0 0 30px ${neonColors[index]}`,
              }}
              onMouseEnter={(e) => {
                e.target.classList.add('arrow-icon-hover');
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove('arrow-icon-hover');
              }}
            />
            <span className="experience-text">{experience}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
