import React from 'react';
import './style.css'
import { linkedin, github, twitterX, telegram, Linkedin, Github, TwitterX, Telegram } from '../Home/Index';
const gmail = "mailto:ahmadhasanboyev@gmail.com"

const Footer = () => {

  const data = [
    { name: "home" },
    { name: "about" },
    { name: "skills" },
    { name: "education" },
    { name: "work" }
  ]

  return (
    <div id='footer' className='footer'>
      <div className="content">
        <div>
          <h2>Akhmad's Portfolio</h2>
          <p>Thank you for visiting my personal portfolio website. Connect with me over socials. </p>
        </div>
        <div>
          <h2>Quick Links</h2>
          {data.map(({ name }, index) => (
            <a href={`#${name}`} key={index}><i className='fa-solid fa-circle-arrow-right'></i> {name}</a>
          ))}
        </div>
        <div>
          <h2>Contact Info</h2>
          <p><i className="fa-solid fa-phone"></i> +998 94-410-91-21</p>
          <p><i className="fa-solid fa-envelope"></i> ahmadhasanboyev@gmail.com</p>
          <p><i className="fa-solid fa-map-location-dot"></i> Tashkent, Uzbekistan-111900</p>
          <div className='social-box'>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <div><Linkedin /></div>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <div><Github /></div>
            </a>
            <a href={gmail} target="_blank" rel="noopener noreferrer">
              <div><i className="fa-solid fa-envelope"></i></div>
            </a>
            <a href={twitterX} target="_blank" rel="noopener noreferrer">
              <div><TwitterX /></div>
            </a>
            <a href={telegram} target="_blank" rel="noopener noreferrer">
              <div><Telegram /></div>
            </a>

          </div>
        </div>
      </div>
      <p>Designed With 💖 By <span><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/ahmad-hasanboyev-a5322732a/">Ahmad Khasanboyev</a></span></p>
    </div>
  )
}

export default Footer
