import React from 'react'; 
 import { Link } from 'react-router-dom';



const LiensDeNavigation = () =>{
return (
    <ul className="flex space-x-6">
      <li> <a
            href="/monCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav hover:text-gray-400 transition"
            >
             Voir CV
        </a></li>
      <li><Link to="/projets" className="hover:text-gray-400 transition">
              Projets
            </Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 transition">
              Contact
            </Link></li>
            <li><Link to="/skills" className="hover:text-gray-400 transition">
              Skills
            </Link></li>
      <li><a href="https://www.linkedin.com/in/mariama-daff" 
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn  hover:text-gray-400 transition"
            >
            LinkedIn
        </a></li>
      
    </ul>
  );
};

export default LiensDeNavigation;