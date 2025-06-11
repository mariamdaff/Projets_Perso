import React from 'react';
import profil from '../../assets/img/profil.JPG';
const Accueil = () =>{
    return(
        <div>
        <section className="text-center py-12 max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4 text-gray-300">MARIAMA DAFF</h1>
       <p className="text-lg text-gray-300 mb-8 text-justify">Développeuse Fullstack.</p>
      </section>

      <img src="{profile}" alt="photo de moi" />
      </div>
    

    );

};
export default Accueil;