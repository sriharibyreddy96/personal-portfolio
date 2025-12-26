import React from 'react';
import './ProjectsCard.css';
import { Link } from 'react-router-dom';
import projects from './ProjectsData';

const ProjectsCard = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">PROJECTS</h2>
      <div className="projects-cards">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imageUrl} alt={project.title} className="card-image" />
            <h3 className="card-title">{project.title}</h3>
            <div className="card-buttons">
              {project.buttons.map((button, idx) => (
                <button className="card-button" key={idx}>{button}</button>
              ))}
            </div>
            <Link
              to={`/project-details/${project.id}`} 
              className="details-button"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
