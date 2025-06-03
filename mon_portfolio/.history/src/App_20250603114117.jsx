import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavbarElement from './component/navBar/NavBarComponent';
import Layout from './Layout';


const App = () => {
  return (
    <BrowserRouter basename="/Projets_Perso">
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

