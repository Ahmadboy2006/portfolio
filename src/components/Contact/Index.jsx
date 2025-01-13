import React from 'react';
import './style.css';
import img from '../../assets/images/contact1.png';

function Contact() {
  return (
    <div id='contact' className='contact'>
      <p className='title'><i className="fa-solid fa-headset"></i> Get In <span>Touch</span></p>
      <div className="container">
        <img src={img} alt="" />
        <div className='content-box'>
          <div className="content">
            <div><input type="text" placeholder='Name' name='name' /><i className="fa-solid fa-user"></i></div>
            <div><input type="text" placeholder='Email' name='email' /><i className="fa-solid fa-envelope"></i></div>
            <div><input type="text" placeholder='Phone' name='phone' /><i className="fa-solid fa-phone"></i></div>
            <div className='textarea'><textarea placeholder="Message" name="message"></textarea><i className="fa-solid fa-comment-dots"></i></div>
          </div>
          <button className='btn'>Submit <i className="fa-solid fa-paper-plane"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Contact;
