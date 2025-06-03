import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiPhp, DiGit } from 'react-icons/di';
import { FaGithub, FaDocker } from 'react-icons/fa';
import { SiLaravel } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="py-10 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Technologies</h2>
      <div className="flex justify-center flex-wrap gap-10 text-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DiHtml5 title="HTML5" className="hover:text-orange-500 transition" />
        <DiCss3 title="CSS3" className="hover:text-blue-500 transition" />
        <DiJavascript1 title="JavaScript" className="hover:text-yellow-400 transition" />
        <DiReact title="React" className="hover:text-cyan-400 transition" />
        <DiPhp title="PHP" className="hover:text-indigo-400 transition" />
        <SiLaravel title="Laravel" className="hover:text-red-600 transition" />
        <DiGit title="Git" className="hover:text-orange-400 transition" />
        <FaGithub title="GitHub" className="hover:text-gray-300 transition" />
        <FaDocker title="Docker" className="hover:text-blue-300 transition" />
      </div>
    </section>
  );
};

export default Skills;
