import React from 'react';
import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-container">
              <div className="about-profile-image"></div>
            </div>
          </div>
          <div className="about-text">
            <h3>Full Stack Developer with a passion for creating elegant solutions</h3>

            <p>
              I have a background in Information Technology. My expertise spans from frontend development with React and modern CSS
              to backend development with Node.js, Express, and various database technologies.
            </p>
            <div className="about-details">
              <div className="about-detail">
                <h4>Education</h4>
                <p>B.Tech Information Technology, Kgisl Institute of Technology</p>
              </div>
              <div className="about-detail">
                <h4>Experience</h4>
                <p>Junior Full stack developer At TATA Strive</p>
              </div>
              <div className="about-detail">
                <h4>Location</h4>
                <p>Bangalore, KA</p>
              </div>
            </div>
            <a href="https://drive.google.com/file/d/1_Sh9KXhC1gdabZItyDB4T01ZiCKWZ1ks/view?usp=drive_link" className="btn btn-primary" download>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;