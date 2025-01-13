import React from 'react';
import './style.css';
import technologies from './skills.json';
import { ReactComponent as LaptopIcon } from '../../assets/icons/laptop.svg';

function Skills() {
  return (
    <div id='skills' className='skills-container'>
      <p className='skills-title'>{<LaptopIcon />} Skills & <span className='skills-abilities'>Abilities</span></p>
      <div className="skills-items-container">
        {technologies.map((tech, index) => (
          <div key={index} className="skills-item">
            <img src={tech.icon} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
