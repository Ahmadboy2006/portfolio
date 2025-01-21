import React, { useState } from 'react';
import './style.css';
import img from '../../assets/images/contact1.png';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((pervData) => ({
      ...pervData,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_26dxmdb',
      'template_vplqw3o',
      e.target,
      'UO9TyOUBN-HY1p9zx'
    )
    .then(
      (result) => {
        console.log('Email:', result.text);
      },
      (error) => {
        console.log('Error sending email:', error.text);
      }
    );

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div id='contact' className='contact'>
      <p className='title'><i className="fa-solid fa-headset"></i> Get In <span>Touch</span></p>
      <div className="container">
        <img src={img} alt="" />
        <div className='content-box'>
          <form onSubmit={sendEmail}>
            <div className="content">
              <div><input type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} required /><i className="fa-solid fa-user"></i></div>
              <div><input type="text" placeholder='Email' name='email' value={formData.email} onChange={handleChange} required /><i className="fa-solid fa-envelope"></i></div>
              <div><input type="text" placeholder='Phone' name='phone' value={formData.phone} onChange={handleChange} required /><i className="fa-solid fa-phone"></i></div>
              <div className='textarea'><textarea placeholder="Message" value={formData.message} onChange={handleChange} required name="message"></textarea><i className="fa-solid fa-comment-dots"></i></div>
            </div>
            <button type='submit' className='btn'>Submit <i className="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
