import React, { useState } from 'react'; 

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la soumission par défaut pour pouvoir gérer l'état
    setIsSubmitted(true); // Marque le formulaire comme soumis
  };

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      {!isSubmitted ? (
      <form action="https://formspree.io/f/meogqawe" method="POST">
      <input type="email" name="email" placeholder="Ton email" />
      <textarea name="message" placeholder="Ton message"></textarea>
      <button type="submit">Envoyer</button>
    </form>
    
      ) : (
        <div className="bg-gray-800 text-white px-4 py-2 rounded">
          Merci pour votre message ! Je reviendrais vers vous sous peu.
        </div>
      )}
    </section>
  );
};

export default Contact;
