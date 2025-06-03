import React from 'react'; 
import { Link } from 'react-scroll';

//  import { Link } from 'react-router-dom';



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
  to="skills"
  smooth={true}
  duration={500}
  offset={-70}
  className="cursor-pointer hover:text-gray-400 transition"
>
  Skills
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
<Link
  to="A_Propos"
  smooth={true}
  duration={500}
  offset={-70}
  className="cursor-pointer hover:text-gray-400 transition"
>
  About
</Link>

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