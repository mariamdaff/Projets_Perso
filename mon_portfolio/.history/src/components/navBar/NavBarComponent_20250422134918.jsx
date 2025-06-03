import React from 'react';
import LiensDeNavigation from './NavBarLiens.jsx';
import Description from './NavBarDescriptionPost.jsx';
import MonNom from './NavBarNom.jsx';

const NavbarElement = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-md">
      <nav className="text-gray-200 px-8 py-4 flex flex-col sm:flex-row sm:justify-between items-center">
        
        {/* Partie Nom + Description */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-0">
          <MonNom />
          <Description />
        </div>

        {/* Liens de navigation */}
        <LiensDeNavigation />
      </nav>
    </header>
  );
};

export default NavbarElement;
