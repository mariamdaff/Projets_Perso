import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-center py-6 mt-12 border-t border-gray-700">
      <p className="text-sm mb-2">© 2025 Mariama Daff. Tous droits réservés.</p>

      <div className="flex justify-center space-x-4 text-2xl mb-2">
        <a
          href="https://github.com/ton-github" // ← change avec ton lien GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ton-linkedin" // ← change avec ton lien LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="text-xs">Merci de votre visite 💻✨</p>
    </footer>
  );
};

export default Footer;
