import React from 'react'; 
import { Link } from 'react-scroll';

//  import { Link } from 'react-router-dom';



const LiensDeNavigation = () =>{
return (
    <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
      <li> <a
            href="/monCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav hover:text-gray-400 transition"
            >
             View CV
        </a></li>
        
      <li><a href="https://www.linkedin.com/in/mariama-daff" 
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn  hover:text-gray-400 transition"
            >
            LinkedIn
        </a></li>

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
  offset={-70} // décale pour prendre en compte ta navbar
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
  );
};

export default LiensDeNavigation;