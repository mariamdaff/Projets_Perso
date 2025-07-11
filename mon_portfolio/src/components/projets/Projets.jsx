import React from 'react';
import meteoApp from '../../assets/img/meteo-app.png';
import quizGame from '../../assets/img/quizgame.png';
import pushMyCode from '../../assets/img/pushmycode.png';
import littoralPropre from '../../assets/img/littoral.png';
import mobile from '../../assets/img/mobile.png';
import mahinLaGuinee from '../../assets/img/mahinLaGuinee.png';

const Projets = () => {
  const projets = [
    {
      id: 1,
      titre: 'Quiz Game',
      description: 'Projet de quiz interactif avec 5 séries de 4 questions. Tu peux choisir ton thème parmi 3.',
      image: quizGame,
      technos: 'HTML CSS JS',
      link: 'https://github.com/mariamdaff/Projet-Guiz_Game'
    },
    {
      id: 2,
      titre: 'Dataviz & API',
      description: 'Application météo avec animations visuelles et informations météo fournit en tepms réel',
      image:  meteoApp,
      technos: 'HTML CSS JS',
      link: 'https://github.com/tanguyjo/Projet_Dataviz'
    },
    {
      id: 3,
      titre: 'Littoral Propre',
      description: 'Back-Office pour une association qui collecte des déchets sur la plage.',
      image: littoralPropre,
      technos: 'Php Taiwind Sql',
      link: 'https://github.com/alex-adkl/projet_cleanSquad'
    },
    {
      id: 4,
      titre: 'PushMyCode',
      description: 'Microblogging pour les devs avec partage d’astuces.',
      image: pushMyCode ,
      technos: 'Laravel Vue.js Tailwind',
      link: 'https://github.com/Evan69007/Microblogging'
    },
    {
      id: 5,
      titre: 'Mobile',
      description: 'App mobile qui reference les meilleures spots de surf au monde.',
      image: mobile,
      technos: 'Java Golang ',
      link: 'https://github.com/Evan69007/Mobile'
    },
    {
      id: 6,
      titre: 'Mahin Guinee',
      description: 'Plateforme locale pour projets sociaux.',
      image: mahinLaGuinee,
      technos: 'Java Spring Boot',
      link: 'https://github.com/mariamdaff/mahinLaGuinee'
    },
  ];

  return (
    <section className="py-12 px-4 bg-black text-white m-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {projets.map((projet) => (
  <div
    key={projet.id}
    className="relative group  bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl flex flex-col h-60"
  >
    {/* Image en fond */}
    <img
      src={projet.image}
      alt={projet.titre}
      className="w-full h-full object-cover"
    />

    {/* Overlay au survol */}
    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <div className="text-center">
        <h3 className="text-white text-2xl font-bold mb-2">{projet.titre}</h3>
        <h4 className="text-white text-xl font-bold mb-2">{projet.technos}</h4>
        <p className="pb-4" >{projet.description}</p>
        <a
          href={projet.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-400 rounded-lg bg-blue-100 text-blue-700 text-sm p-2 ">
          Voir le projet
        </a>
      </div>
    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default Projets;
