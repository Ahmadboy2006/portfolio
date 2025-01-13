import React from 'react';
import './style.css';
import { ReactComponent as AboutIcon } from '../../assets/icons/about.svg';
import { ReactComponent as ChevronRigtIcon } from '../../assets/icons/chevron-right.svg';
import profileImg from '../../assets/images/about-profile.jpg';

function About() {

  const email = 'ahmadhasanboyev@gmail.com';
  const place = 'Tashkent, Uzbekistan - 111900';
  const resume = 'https://drive.google.com/file/d/1M3zEwiMKljhIuY1xTUK4qtaOrTy3kmEG/view?usp=drive_link';

  return (
    <div id='about' className='about-container'>
      <div className="about-title">
        <AboutIcon className='about-icon' />About <span>Me</span>
      </div>
      <div className="about-main">
        <img className='about-main-img' src={profileImg} alt="" />
        <div className="about-main-title">
          <p className='about-name'>I'm Akhmad</p>
          <p className='about-job'>Frontend Developer</p>
          <p className='about-text'>I am a Frontend Developer based in Tashkent, Uzbekistan. I am a student in the Software Engineering faculty at TUIT ("TATU"). I am very passionate about improving my coding skills and developing websites. I am working independently to enhance my skills. Besides coding, I also have experience in sales, with over 5 years in this field. I enjoy building websites for sales</p>
          <p className='about-font'><span>Email :</span> {email}</p>
          <p className='about-font'><span>Place :</span> {place}</p>
          <a className='about-btn' rel='noopener noreferrer' target='_blank' href={resume}>Resume{<ChevronRigtIcon className='about-chevron' />}</a>
        </div>
      </div>
    </div>
  )
}

export default About;
