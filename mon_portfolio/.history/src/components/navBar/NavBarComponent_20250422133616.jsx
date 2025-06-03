
import React from 'react';
import LiensDeNavigation from './NavBarLiens.jsx';
import Description from './NavBarDescriptionPost.jsx';
import MonNom from './NavBarNom.jsx';


const NavbarElement = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-md">
      <nav className="text-gray-200 px-8 py-4 flex justify-between items-center">
        <div className="text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <MonNom />
          <Description />
        </div>
        <LiensDeNavigation />
      </nav>
    </header>
  );
};

export default NavbarElement;