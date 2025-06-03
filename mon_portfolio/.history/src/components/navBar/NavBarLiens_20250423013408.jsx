// import React from 'react'; 
// import { Link } from 'react-scroll';

// //  import { Link } from 'react-router-dom';



// const LiensDeNavigation = () =>{
// return (
//     <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
//       <li> <a
//             href="/monCV.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn-nav hover:text-gray-400 transition"
//             >
//              View CV
//         </a></li>
        
//       <li><a href="https://www.linkedin.com/in/mariama-daff" 
//             target="_blank"
//             rel="noopener noreferrer"
//             className="nav-btn  hover:text-gray-400 transition"
//             >
//             LinkedIn
//         </a></li>

//         <Link
//   to="A_Propos"
//   smooth={true}
//   duration={500}
//   offset={-70}
//   className="cursor-pointer hover:text-gray-400 transition"
// >
//   About
// </Link>

// <Link
//   to="skills"
//   smooth={true}
//   duration={500}
//   offset={-70}
//   className="cursor-pointer hover:text-gray-400 transition"
// >
//   Skills
// </Link>

//         <Link
//   to="projets"
//   smooth={true}
//   duration={500}
//   offset={-70} // décale pour prendre en compte ta navbar
//   className="cursor-pointer hover:text-gray-400 transition"
// >
//   Projects
// </Link>

// <Link
//   to="contact"
//   smooth={true}
//   duration={500}
//   offset={-70}
//   className="cursor-pointer hover:text-gray-400 transition"
// >
//   Contact
// </Link>


      
//     </ul>
//   );
// };

// export default LiensDeNavigation;

import React, { useState } from 'react';
import { Link } from 'react-scroll';

const LiensDeNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false); // état pour contrôler l'ouverture du menu

  // Fonction pour changer l'état du menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative">
      {/* Bouton burger pour les écrans mobiles */}
      <div className="sm:hidden flex items-center justify-between p-4">
        <button onClick={toggleMenu} className="text-2xl">
          {/* Icône hamburger */}
          {menuOpen ? (
            <span className="text-gray-600">X</span> // 'X' pour fermer le menu
          ) : (
            <span className="text-gray-600">☰</span> // '☰' pour ouvrir le menu
          )}
        </button>
      </div>

      {/* Menu de navigation */}
      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center absolute sm:relative top-16 left-0 right-0 bg-white sm:bg-transparent p-4 sm:p-0`}
      >
        <li>
          <a
            href="/monCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav hover:text-gray-400 transition"
          >
            View CV
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/mariama-daff"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn hover:text-gray-400 transition"
          >
            LinkedIn
          </a>
        </li>

        <Link
          to="A_Propos"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer hover:text-gray-400 transition"
        >
          About
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer hover:text-gray-400 transition"
        >
          Skills
        </Link>

        <Link
          to="projets"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer hover:text-gray-400 transition"
        >
          Projects
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer hover:text-gray-400 transition"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default LiensDeNavigation;
