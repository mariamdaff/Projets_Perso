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
             View CV
        </a></li>
        <a href="#a-propos" className="hover:text-gray-400 transition">About</a>
<a href="#skills" className="hover:text-gray-400 transition">Skills</a>
<a href="#projets" className="hover:text-gray-400 transition">Projects</a>
<a href="#contact" className="hover:text-gray-400 transition">Contact</a>
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