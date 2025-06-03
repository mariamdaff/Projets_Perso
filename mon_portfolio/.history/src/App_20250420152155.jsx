import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavbarElement from './component/navBar/NavBarComponent';
import Layout from './Layout';


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
      
    </Router>
  );
};

export default App;

