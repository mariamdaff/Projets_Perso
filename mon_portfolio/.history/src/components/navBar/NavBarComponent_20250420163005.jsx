
import React from 'react';
import LiensDeNavigation from './NavBarLiens.jsx';
import Description from './NavBarDescriptionPost.jsx';
import MonNom from './NavBarNom.jsx';


const NavbarElement = () => {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <nav className="text-gray-200 px-8 py-4 flex justify-between items-center">
        <div className="text-center">
          <MonNom />
          <Description />
        </div>
        <LiensDeNavigation />
      </nav>
    </header>
  );
};

export default NavbarElement;