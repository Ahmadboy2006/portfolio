import React from 'react';
import './style.css';
import { ReactComponent as LaptopIcon } from '../../assets/icons/laptop.svg';
import data from './dataProjects';

function Work() {
  
  return (
    <div id='work' className='work'>
      <div className="title">{<LaptopIcon />} Projects <span>Made</span></div>
      <div className="container">
        {data[1].map((item, index) => (
          <div
            key={index}
            className="card"
          >
            <img src={item.img} alt={item.name} />
            <div className="content">
              <div className="name">
                <h2>{item.name}</h2>
              </div>
              <div className="box">
                <p>{item.description}</p>
                <div>
                  <a target='_blank' rel="noopener noreferrer" href={item.linkView}><i className="fa-solid fa-eye"></i> View</a>
                  <a target='_blank' rel="noopener noreferrer" href={item.linkCode}>Code <i className="fa-solid fa-code"></i></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
       <a href='/projects' className='btn'>View All <i className="arrow-right fa-solid fa-arrow-right"></i></a>
    </div>
  )
}

export default Work;
