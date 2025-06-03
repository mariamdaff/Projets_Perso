import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavbarElement from './component/navBar/NavBarComponent';
import Projets from './components/projets/Projets';
import Contact from './components/contact/Contact';
import APropos from './components/a-propos/APropos';
import Skills from './components/skills/Skills';
import Layout from './Layout';


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="projets" element={<Projets />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skills />} />
        <Route path="a-propos" element={<APropos />} />
        </Route>
      </Routes>
      
    </Router>
  );
};

export default App;

