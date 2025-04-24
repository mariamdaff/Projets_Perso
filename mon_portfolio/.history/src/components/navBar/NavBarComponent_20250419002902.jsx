
import React from 'react';
import LiensDeNavigation from './NavBarLiens.jsx';
import Description from './NavBarDescriptionPost.jsx';
import MonNom from './NavBarNom.jsx';


const NavbarElement = () => {
  return (
    <header className="bg-black text-gray-200 px-8 py-4 ">
      <nav className=" flex justify-between items-center">
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