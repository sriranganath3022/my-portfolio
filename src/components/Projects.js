import React, { useState } from 'react';
import './Projects.css';


const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
          id: 1,
          title: "Skill Loop",
          duration: "02/2025 - Present",
          description: "A peer-to-peer learning platform aimed at solving education and training problems.",
          technologies: ["React", "Java", "Spring Boot", "SQL"]
        },
        {
          id: 2,
          title: "University Admit Eligibility Prediction",
          description: "A prediction system that helps students determine their eligibility for university admission.",
          technologies: ["Machine Learning", "Python", "Data Analysis"]
        },
        {
          id: 3,
          title: "Early Chronic Kidney Disease Prediction",
          description: "Predicts kidney disease based on patient dataset, determining whether patients are affected or not.",
          technologies: ["Machine Learning", "Healthcare", "Data Science", "Python"]
        }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="project-filters">


        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">

                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



