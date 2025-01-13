import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Home from '../Home/Index';
import About from '../About/Index';
import Skills from '../Skills/Index';
import Education from '../Education/Index';
import Work from '../Work/Index';
import Contact from '../Contact/Index';
import Footer from '../Footer/Index';

function Main() {
  const sectionRefs = useOutletContext(); // `sectionRefs`ni olamiz

  return (
    <div>
      <section id="home" ref={(el) => (sectionRefs.current["home"] = el)}>
        <Home />
      </section>
      <section id="about" ref={(el) => (sectionRefs.current["about"] = el)}>
        <About />
      </section>
      <section id="skills" ref={(el) => (sectionRefs.current["skills"] = el)}>
        <Skills />
      </section>
      <section id="education" ref={(el) => (sectionRefs.current["education"] = el)}>
        <Education />
      </section>
      <section id="work" ref={(el) => (sectionRefs.current["work"] = el)}>
        <Work />
      </section>
      <section id="contact" ref={(el) => (sectionRefs.current["contact"] = el)}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default Main;
