import React from 'react';
import NavbarElement from './components/navBar/NavBarComponent';
import Projets from './components/projets/Projets';
import Contact from './components/contact/Contact';
import APropos from './components/A_Propos/APropos';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import { Element } from 'react-scroll';

const Layout = () => {
  return (
    <div className="bg-black min-h-screen text-white scroll-smooth">
      <NavbarElement />
      <main className="p-6 space-y-16">
      <Element name="A_Propos">
          <APropos />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projets">
          <Projets />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
