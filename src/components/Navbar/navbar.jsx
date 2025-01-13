import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import './style.css';

function Navbar() {
  const [mobile, setMobile] = useState(window.innerWidth <= 1024);
  const [state, setState] = useState(window.innerWidth > 1024);
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({}); // `useRef` obyekt yaratamiz

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 1024);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  useEffect(() => {
    setState(!mobile)
  }, [mobile]);

  const onMenu = () => {
    setState(!state)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% ko'rinadigan qismi kuzatiladi
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: 'home', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'skills', label: 'skills' },
    { id: 'education', label: 'education' },
    { id: 'work', label: 'work' },
    { id: 'contact', label: 'contact' },
  ];

  return (
    <>
      <div className="navbar-container">
        <div className="logo">Logo</div>
        {state && <div className="nav-item-box">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? 'selected' : ''}
            >
              {section.label}
            </a>
          ))}
        </div>}
        {!state && <i onClick={onMenu} className="icon fa-solid fa-bars"></i>}
        {state && <i onClick={onMenu} className="icon fa-solid fa-xmark"></i>}
      </div>
      {/* `sectionRefs`ni Outlet orqali `Main` komponentiga uzatamiz */}
      <Outlet context={sectionRefs} />
    </>
  );
}

export default Navbar;
