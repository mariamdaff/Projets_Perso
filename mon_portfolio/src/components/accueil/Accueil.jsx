import React from 'react';
import bgImage from '../../assets/img/backgroundImage.jpg';
const Accueil = () =>{
    return(
      <div
      className="min-h-screen bg-contain bg-no-repeat bg-top relative text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute left-5 top-1/2 -translate-y-1/2 p-10 text-left animate-fadeInUp">
        <h1 className="text-6xl font-extrabold font-title mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#B57E50] to-[#F5C76D] drop-shadow-lg transition-transform duration-700 hover:scale-110">
          MARIAMA DAFF
        </h1>
        <p className=" absolute object-center text-2xl italic tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#B57E50] to-[#F5C76D] drop-shadow-md transition-opacity duration-700 hover:opacity-80">
          Développeuse Fullstack
        </p>
      </div>
    </div>
    
    
    );
};
export default Accueil;