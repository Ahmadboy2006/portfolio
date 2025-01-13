import React, { useEffect, useRef } from 'react';
import './style.css';
import Typed from 'typed.js';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down-circle.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as TwitterX } from '../../assets/icons/twitter-x.svg';
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as TikTok } from '../../assets/icons/tiktok.svg';
const linkedin = 'https://www.linkedin.com/in/ahmad-hasanboyev-a5322732a/';
const github = 'https://github.com/Ahmadboy2006';
const twitterX = 'https://twitter.com';
const telegram = 'https://t.me/Prosta_ahmad';
const instagram = 'https://www.instagram.com/prosta_axmad/';
const tiktok = 'https://www.tiktok.com/@hukmdor__usmon';

export { linkedin, github, twitterX, telegram, Linkedin, Github, TwitterX, Telegram}

function Home() {

  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ["frontend development"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
      });

      return () => {
        typed.destroy()
      };
    };
  }, []);


  return (
    <div id='home' className="home-container">
      <div className="home-title">
        <p className='home-bold'>Hi There,</p>
        <p className='home-bold'>I'm <span className='home-orange'>Khasanboyev Ahmad</span></p>
        <p className='home-semi-bold'>I Am Into <span ref={el} className='typing-text'></span></p>
        <a href='#about' className="home-btn">About Me <ArrowDownIcon className='home-down-icon' /></a>
        <div className="home-sm-container">
          <div className='home-sm-linkedin'>
            <a href={linkedin} rel='noopener noreferrer' target='_blank'><Linkedin /></a>
          </div>
          <div>
            <a href={github} rel='noopener noreferrer' target='_blank'><Github /></a>
          </div>
          <div>
            <a href={twitterX} rel='noopener noreferrer' target='_blank'><TwitterX /></a>
          </div>
          <div className='home-sm-telegram'>
            <a href={telegram} rel='noopener noreferrer' target='_blank'><Telegram /></a>
          </div>
          <div className='home-sm-instagram'>
            <a href={instagram} rel='noopener noreferrer' target='_blank'><Instagram /></a>
          </div>
          <div>
            <a href={tiktok} rel='noopener noreferrer' target='_blank'><TikTok /></a>
          </div>
        </div>
      </div>
      <div className="home-img">

      </div>
    </div>
  )
}

export default Home;
