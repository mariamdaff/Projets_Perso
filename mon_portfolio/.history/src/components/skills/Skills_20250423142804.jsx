import React from 'react';
import { 
  DiHtml5, DiCss3, DiJavascript1, DiReact, 
  DiPhp, DiGit 
} from 'react-icons/di';
import { 
  SiTailwindcss, SiVuedotjs, SiLaravel 
} from 'react-icons/si';
import { FaGithub, FaDocker } from 'react-icons/fa';

const technologies = [
  { name: 'HTML5', icon: <DiHtml5 className="text-orange-500" />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <DiCss3 className="text-blue-500" />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <DiJavascript1 className="text-yellow-300" />, color: 'text-yellow-300' },
  { name: 'React', icon: <DiReact className="text-cyan-400" />, color: 'text-cyan-400' },
  { name: 'PHP', icon: <DiPhp className="text-indigo-400" />, color: 'text-indigo-400' },
  { name: 'Laravel', icon: <SiLaravel className="text-red-600" />, color: 'text-red-600' },
  { name: 'Git', icon: <DiGit className="text-orange-400" />, color: 'text-orange-400' },
  { name: 'GitHub', icon: <FaGithub className="text-gray-300" />, color: 'text-gray-300' },
  { name: 'Docker', icon: <FaDocker className="text-blue-300" />, color: 'text-blue-300' },
];

const Skills = () => {
  return (
    <section className="py-10 px-4 bg-black text-white" aria-labelledby="skills-title">
      <div className="max-w-5xl mx-auto text-center">
        <h2 id="skills-title" className="text-3xl font-bold mb-6">
          Technologies
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <li 
              key={index} 
              className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
              aria-label={`Technologie : ${tech.name}`}
            >
              <div className="text-6xl mb-2" aria-hidden="true">
                {tech.icon}
              </div>
              <span className="text-sm mt-1">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
