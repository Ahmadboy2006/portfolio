import React from 'react';
import './style.css';
import { ReactComponent as LaptopIcon } from '../../../assets/icons/laptop.svg';
import data from '../dataProjects';

const AllProjects = () => {
    return (
        <div className='projects'>
            <div className="title">{<LaptopIcon />} Projects <span>Made</span></div>
            <div className="container">
                {data[0].map((item, index) => (
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
            <a href='/' className='btn'><i className="arrow-right fa-solid fa-arrow-left"></i> Back To Home </a>
        </div>
    )
}

export default AllProjects;
