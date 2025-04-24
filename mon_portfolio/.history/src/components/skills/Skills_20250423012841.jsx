import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiPhp, DiGit} from 'react-icons/di';
import { SiTailwindcss, SiVuedotjs } from 'react-icons/si';
import { FaGithub, FaDocker } from 'react-icons/fa';
import { SiLaravel } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="py-10 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Technologies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
    <DiHtml5 className="text-6xl text-orange-500 mb-2" />
    <span className="text-white text-sm mt-1">HTML5</span>
  </div>
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
    <DiCss3 className="text-6xl text-blue-500 mb-2" />
    <span className="text-white text-sm mt-1">CSS3</span>
  </div>
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
    <DiJavascript1 className="text-6xl text-yellow-300 mb-2" />
    <span className="text-white text-sm mt-1">JavaScript</span>
  </div>
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
    <DiReact className="text-6xl text-cyan-400 mb-2" />
    <span className="text-white text-sm mt-1">React</span>
  </div>
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
    <DiPhp className="text-6xl text-indigo-400 mb-2" />
    <span className="text-white text-sm mt-1">PHP</span>
  </div>
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
    <SiLaravel className="text-6xl text-red-600 mb-2" />
    <span className="text-white text-sm mt-1">Laravel</span>
  </div>
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
    <DiGit className="text-6xl text-orange-400 mb-2" />
    <span className="text-white text-sm mt-1">Git</span>
  </div>
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
    <FaGithub className="text-6xl text-gray-300 mb-2" />
    <span className="text-white text-sm mt-1">GitHub</span>
  </div>
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
    <FaDocker className="text-6xl text-blue-300 mb-2" />
    <span className="text-white text-sm mt-1">Docker</span>
  </div>
</div>


    </section>
  );
};

export default Skills;
