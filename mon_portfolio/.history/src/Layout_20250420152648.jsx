import React from 'react';
import NavbarElement from './components/navBar/NavBarComponent';
import Projets from './components/projets/Projets';
import Contact from './components/contact/Contact';
import APropos from './components/A_Propos/APropos';
import Skills from './components/skills/Skills';
// import Projets from './components/Projets'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-black min-h-screen text-white scroll-smooth">
      <NavbarElement />
      <main className="p-6">
        <section id="a-propos">
          <APropos />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projets">
          <Projets />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Layout;
