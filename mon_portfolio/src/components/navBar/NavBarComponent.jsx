import React, { useState } from 'react';
import LiensDeNavigation from './NavBarLiens.jsx';
import Logo from './NavBarLogo.jsx';

const NavbarElement = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-md">
      <nav className="text-gray-200 px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Menu burger (mobile uniquement) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden"
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
        <div
          className={`
            ${menuOpen ? 'block' : 'hidden'}
            sm:flex sm:items-center sm:space-x-6
            absolute sm:static top-full left-0 w-full sm:w-auto bg-gray-800 sm:bg-transparent px-6 sm:px-0 pb-4 sm:pb-0
          `}
        >
          <LiensDeNavigation onLinkClick={() => setMenuOpen(false)} />
        </div>
      </nav>
    </header>
  );
};

export default NavbarElement;
