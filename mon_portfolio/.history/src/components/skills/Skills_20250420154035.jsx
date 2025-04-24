import React from 'react';

const Projets = () => {
  const projets = [
    { id: 1, titre: 'Projet 1', description: 'Description du projet 1' },
    { id: 2, titre: 'Projet 2', description: 'Description du projet 2' },
    { id: 3, titre: 'Projet 3', description: 'Description du projet 3' },
    { id: 4, titre: 'Projet 4', description: 'Description du projet 4' },
    { id: 5, titre: 'Projet 5', description: 'Description du projet 5' },
    { id: 6, titre: 'Projet 6', description: 'Description du projet 6' },
  ];

  return (
    <section className="py-12 px-4 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projets.map((projet) => (
          <div
            key={projet.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{projet.titre}</h3>
            <p className="text-gray-400">{projet.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projets;
