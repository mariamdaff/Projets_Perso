import React from 'react'; 
// import { Link } from 'react-router-dom';



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
      <li><a href="/Projets.jsx"
       target="_blank"
       rel="noopener noreferrer"
       className="btn-nav hover:text-gray-400 transition"
            >
              Projets
              </a></li>
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