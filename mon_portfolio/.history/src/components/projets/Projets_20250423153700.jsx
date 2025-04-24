import React from 'react';
import meteoApp from '../../assets/img/meteo-app.png';
import quizGame from '../../assets/img/quizgame.png';
import meteoApp from '../../assets/img/meteo-app.png';

const Projets = () => {
  const projets = [
    {
      id: 1,
      titre: 'Quiz Game',
      description: 'Projet de quiz interactif avec 5 séries de 4 questions. Tu peux choisir ton thème parmi 3.',
      image: quizGame,
      link: 'https://github.com/tonprofil/quiz-game'
    },
    {
      id: 2,
      titre: 'Dataviz & API',
      description: 'Application météo avec animations visuelles.',
      image:  meteoApp,
      link: 'https://github.com/tanguyjo/Projet_Dataviz'
    },
    {
      id: 3,
      titre: 'Littoral Propre',
      description: 'Back-Office pour une association qui collecte des déchets sur la plage.',
      image: '/assets/img/littoral.png',
      link: 'https://github.com/tonprofil/littoral-propre'
    },
    {
      id: 4,
      titre: 'PushMyCode',
      description: 'Microblogging pour les devs avec partage d’astuces.',
      image: '/assets/img/pushmycode.png',
      link: 'https://github.com/tonprofil/pushmycode'
    },
    {
      id: 5,
      titre: 'Mobile-front',
      description: 'App mobile front-end responsive.',
      image: '/assets/img/mobile-front.png',
      link: 'https://github.com/tonprofil/mobile-front'
    },
    {
      id: 6,
      titre: 'Nafa Guessa',
      description: 'Plateforme locale pour projets sociaux.',
      image: '/assets/img/nafa-guessa.png',
      link: 'https://github.com/tonprofil/nafa-guessa'
    },
  ];

  return (
    <section className="py-12 px-4 bg-black text-white m-10">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projets.map((projet) => (
          <div
            key={projet.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img
              src={projet.image}
              alt={projet.titre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{projet.titre}</h3>
              <p className="text-gray-400 mb-4">{projet.description}</p>
              <a
                href={projet.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projets;
