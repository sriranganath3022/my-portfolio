import React from 'react';
import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5' },
    { name: 'CSS3'},
    { name: 'JavaScript'},
    { name: 'React.js' },
    { name: 'Responsive Design' }
  ];

  const backendSkills = [
    { name: 'Node.js'},
    { name: 'SQL'},
    { name: 'RESTful APIs' },
    { name: 'Spring boot'},
  ];

  const otherSkills = [
    { name: 'Git/GitHub' },
    { name: 'Testing' },
    { name: 'UI/UX Design' }
  ];

  const SkillBar = ({ skill }) => (
    <div className="skill">
      <div className="skill-name">{skill.name}</div>
      <div className="skill-bar">

      </div>
    </div>
  );

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-container">
          <div className="skills-category">
            <h3>Frontend Development</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend Development</h3>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Other Skills</h3>
            <div className="skills-list">
              {otherSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;