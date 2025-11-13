import React from 'react';
import bgImage from '../../assets/img/backgroundImage.jpg';

const Accueil = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative text-white flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Bloc texte */}
      <div
        className="
          px-6
          sm:px-10
          md:px-20
          max-w-[90%]
          md:max-w-[50%]
          animate-fadeInUp
        "
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-title mb-4 bg-clip-text text-transparent bg-gradient-to-r
         from-[#B57E50] to-[#F5C76D] drop-shadow-lg transition-transform duration-700 hover:scale-110">
          MARIAMA DAFF
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl italic tracking-wide bg-clip-text text-transparent bg-gradient-to-r 
        from-[#d2a64c] to-[#F5C76D] drop-shadow-md transition-opacity duration-700 hover:opacity-80 mb-4">
          Développeuse Fullstack
        </p>

        <p className="text-sm sm:text-lg md:text-xl italic tracking-wide bg-clip-text text-transparent bg-gradient-to-r 
        from-[#d2a64c] to-[#F5C76D]">
          Bonjour, je suis Mariama, développeuse web curieuse et enthousiaste, prête 
          à apprendre et à collaborer pour créer de belles choses.
        </p>
      </div>
    </div>
  );
};

export default Accueil;
