
import React from 'react';
import LiensDeNavigation from './NavBarLiens.jsx';
import Description from './NavBarDescriptionPost.jsx';
import MonNom from './NavBarNom.jsx';


const NavbarElement = () => {
  return (
    <header className="bg-black text-gray-200 px-8 py-4 ">
      <nav className=" flex justify-between items-center sticky top-0 z-50 bg-black px-4 py-3 shadow-md">
        <div className='text-center'>
        <MonNom/>
        <Description/>
        </div>
        <LiensDeNavigation />
      </nav>
    </header>
  );
};

export default NavbarElement;