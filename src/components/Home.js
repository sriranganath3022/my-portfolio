import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1>Hi, I'm <span className="highlight">Sriranganath</span></h1>
          <h2>Full Stack Web Developer</h2>
          <p>
            I build modern, responsive websites and applications with React, Node.js, and more.
            Passionate about creating intuitive user experiences and scalable backend solutions.
          </p>
          <div className="home-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="profile-image-container">
            <div className="profile-image"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;