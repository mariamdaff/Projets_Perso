
import React from 'react';
import AProposTexte from './AProposTexte';
import AProposImage from './AProposImage';

const AProposSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 max-w-5xl mx-auto px-4">
      <div className="flex-shrink-0">
        <AProposImage />
      </div>
      <div className="flex-1">
        <AProposTexte />
      </div>
    </section>
  );
};

export default AProposSection;


