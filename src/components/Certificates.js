import React from 'react';
import './Certificates.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Navbar from './Navbar';
const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Learn Java Course",
      issuer: "Codecademy",
      date: "DECEMBER 18, 2024",
      description: "Completed comprehensive Java programming fundamentals",
      image: "/Screenshot 2025-04-08 110213.png",
      details:"Java is a powerful, object-oriented programming language known for its portability across platforms. It features strong memory management, multithreading capabilities, and is widely used for enterprise applications, Android development, and large-scale systems"
    },
    {
      id: 2,
      title: "git",
      issuer: "Codecademy",
      date: "January 7, 2025",
      description: "Version control and collaborative development workflows",
      image: "/git.png",
      details:"Bootstrap is a front-end framework for developing responsive, mobile-first websites. It provides pre-designed components, a grid system, and JavaScript plugins to streamline web development while ensuring cross-browser compatibility."
    },
    {
      id: 3,
      title: "Learn HTML Course",
      issuer: "Codecademy",
      date: "January 17, 2025",
      description: "Mastered HyperText Markup Language fundamentals",
      image: "/HTML.png",
      details:"HTML is the standard markup language for creating web pages. It provides the structure of websites through elements and tags, working with CSS for styling and JavaScript for functionality to create interactive web experiences"

    },
    {
      id: 4,
      title: "Learn CSS Course",
      issuer: "Codecademy",
      date: "January 21, 2025",
      description: "Fundamentals of Cascading Style Sheets",
      image: "/css.png",
      details:"CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of HTML documents. It enables responsive design, animations, and consistent styling across web pages through selectors, properties, and media queries"
    },
    {
      id: 5,
      title: "Learn Bootstrap Course",
      issuer: "Codecademy",
      date: "January 24, 2025",
      description: "Front-end framework for responsive web design",
      image: "/bootstrap.png",
      details:"Bootstrap is a front-end framework for developing responsive, mobile-first websites. It provides pre-designed components, a grid system, and JavaScript plugins to streamline web development while ensuring cross-browser compatibility."
    },
    {
      id: 6,
      title: "Learn JavaScript Course",
      issuer: "Codecademy",
      date: "February 10, 2025",
      description: "Gained proficiency in JavaScript programming language",
      image: "/js.png",
      details:"JavaScript is a versatile scripting language that enables interactive web pages. As the core technology of web development alongside HTML and CSS, it supports event-driven programming, asynchronous operations, and works across all modern browsers."
    },
     {
          id: 7,
          title: "Learn SQL Course",
          issuer: "Codecademy",
          date: "February 20, 2025",
          description: "Gained knowledge to store data in data base",
          image: "/sql.png",
          details:"SQL is the relational databases. It allows for efficient data storage, retrieval, manipulation, and analysis through queries, joins, and transactions in database systems like MySQL and PostgreSQL"
        },
    {
      id: 8,
      title: "Learn React Course",
      issuer: "Codecademy",
      date: "March 16, 2025",
      description: "Mastered fundamental React concepts and component-based architecture",
      image: "/react.png",
      details:"React simplifies front-end development with its component-based architecture and declarative programming model. It's supported by a rich ecosystem including hooks, context API, and React Router"
    },
    {
      id: 9,
      title: "Learn Spring Course",
      issuer: "Codecademy",
      date: "MARCH 22, 2025",
      description: "Successfully completed all course material in the Learn Spring Course",
      details: "In Java, Spring is a popular framework for building scalable applications. It offers dependency injection, modular architecture, and simplifies enterprise-level application development.",
      image: "/spring.png"
    }
  ];


  // Group certificates by issuer for subtitles
  const groupedCertificates = certificates.reduce((acc, cert) => {
    if (!acc[cert.issuer]) {
      acc[cert.issuer] = [];
    }
    acc[cert.issuer].push(cert);
    return acc;
  }, {});

  return (
 <div className="bg">

   <Navbar/>
   <div className="certificates-page">
    <div className="certificates-container">
      <header className="certificates-header">
        <h1>My Certifications</h1>
        <p className="subtitle">A collection of my professional achievements and completed courses</p>
      </header>
      {Object.entries(groupedCertificates).map(([issuer, certs]) => (
        <div key={issuer} className="certificate-group">
          <h2 className="issuer-subtitle">{issuer}</h2>

          <div className="certificates-grid">
            {certs.map((cert) => (
              <div key={cert.id} className="certificate-card">
                <div className="certificate-image-container">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="certificate-image"
                    onError={(e) => {
                      e.target.src = '/certificate-placeholder.jpg';
                    }}
                  />
                </div>

                <div className="certificate-content">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <div className="certificate-meta">
                    <span className="certificate-date">{cert.date}</span>
                  </div>
                  <p className="certificate-description">{cert.description}</p>
                  {cert.details && (
                    <div className="certificate-details">
                      <p>{cert.details}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
    </div>
</div>
  );
};

export default Certificates;