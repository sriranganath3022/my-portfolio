import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">Portfolio</Link>
          </div>

          <div className="footer-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-social">
            <a href="https://github.com/sriranganath3022" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sriranganath-murugesan-a38506246/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>

          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sriranganath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;