import React, { useState } from 'react';
import LiensDeNavigation from './NavBarLiens.jsx';
import Logo from './NavBarLogo.jsx';

const NavbarElement = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-md">
      <nav className="text-gray-200 px-8 py-4 flex flex-col sm:flex-row sm:justify-between items-center">
        
        {/* Partie Nom + Description */}
        <div className="flex flex-col items-center text-center mb-1 sm:mb-0">
          <Logo />
        </div>

        {/* Menu burger bouton (visible uniquement sur mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden absolute top-4 right-6"
          aria-label="Ouvrir le menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        

        {/* Liens de navigation */}
        <div className={`${menuOpen ? 'block' : 'hidden'} sm:block`}>
        <LiensDeNavigation onLinkClick={() => setMenuOpen(false)} />
          {/* <LiensDeNavigation /> */}
        </div>
      </nav>
    </header>
  );
};

export default NavbarElement;
