import React from 'react';
import './style.css';
import imgUniversity from '../../assets/images/university.jpg';
import imgTutor from '../../assets/images/tutor.jpg';

function Education() {

  const data = [
    {
      img: imgUniversity,
      specialty: 'Bachelor Of Software Engineering',
      title: 'Tashkent University of Information Technologies | TUIT',
      date: '2024-2029 | Pursuing'
    },
    {
      img: imgTutor,
      specialty: 'HSC Science | Frontend Development',
      title: 'IT Center Parkent | IT Park',
      date: '2023-2024 | Completed'
    }
  ]

  return (
    <div id='education' className='education'>
      <div className="title"><i className='fas fa-graduation-cap'></i> My <span>Education</span></div>
      <p className='description'>Education is not the learning of facts, but the training of the mind to think.</p>
      {data.map((item, index) => (
        <div key={index} className="card">
          <img src={item.img} alt="" />
          <div>
            <p>{item.specialty}</p>
            <p>{item.title}</p>
            <p>{item.date}</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Education;
