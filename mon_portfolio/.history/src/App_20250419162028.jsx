import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarElement from './component/navBar/NavBarComponent';
import Projets from './pages/Projets';
import Layout from './Layaout';


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="projets" element={<Projets />} />
        </Route>
      </Routes>
      
    </Router>
  );
};

export default App;

