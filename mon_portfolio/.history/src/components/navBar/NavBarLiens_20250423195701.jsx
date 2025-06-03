import React from 'react'; 
import { Link } from 'react-scroll';

//  import { Link } from 'react-router-dom';



const LiensDeNavigation = ({ onLinkClick }) => {
  return (
    <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
      <li>
        <a
          href="/monCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-nav hover:text-gray-400 transition"
          onClick={onLinkClick}
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
          onClick={onLinkClick}
        >
          LinkedIn
        </a>
      </li>

      {/* Idem pour les Link scroll */}
      <Link
        to="A_Propos"
        smooth={true}
        duration={500}
        offset={-70}
        className="cursor-pointer hover:text-gray-400 transition"
        onClick={onLinkClick}
      >
        About
      </Link>
      {/* ...les autres liens pareil */}
    </ul>
  );
};
