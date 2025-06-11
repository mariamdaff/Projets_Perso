import React from 'react';
import profil from '../../assets/img/profil.JPG';
const Accueil = () =>{
    return(
        <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: `url('/images/dev-background.jpg')` }}
      >
        <h1 className="text-6xl font-extrabold font-title mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          MARIAMA DAFF
        </h1>
        <p className="text-2xl italic tracking-wide">Développeuse Fullstack</p>
        <button className="mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
          En savoir plus ↓
        </button>
      </div>
      
    

    );

};
export default Accueil;