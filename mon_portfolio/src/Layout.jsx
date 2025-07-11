import React from 'react';
import NavbarElement from './components/navBar/NavBarComponent';
import Projets from './components/projets/Projets';
import Contact from './components/contact/Contact';
import APropos from './components/A_Propos/APropos';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Accueil from './components/accueil/Accueil';
import AProposImage from './components/A_Propos/AProposImage';
import { Element } from 'react-scroll';

const Layout = () => {
  return (
    <div className="bg-black min-h-screen min-w-screen text-white scroll-smooth">
      <NavbarElement />
      <Element name="accueil">
          <Accueil />
      </Element>
      <main className="p-0 space-y-2">
      {/* <Element name="A_Propos">
          <AProposImage />
        </Element> */}
      
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
