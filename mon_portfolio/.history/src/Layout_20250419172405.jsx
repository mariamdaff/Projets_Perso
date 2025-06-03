import React from 'react';
import NavbarElement from './component/navBar/NavBarComponent';
import Projets from './components/Projets'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <NavbarElement />
      <main className="p-6">
        <Outlet /> {/* ← Ici s'affichera la page sélectionnée */}
      </main>
    </div>
  );
};

export default Layout;
