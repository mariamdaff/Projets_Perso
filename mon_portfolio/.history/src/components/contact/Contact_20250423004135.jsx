import React, { useState } from 'react'; 

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      {!isSubmitted ? (
        <form 
          action="https://formspree.io/f/meogqawe" 
          method="POST" 
          className="max-w-lg mx-auto"
          onSubmit={() => setIsSubmitted(true)} // Plus de preventDefault ici
        >
          <input
            type="text"
            name="name"
            placeholder="Nom"
            required
            className="bg-gray-700 text-white px-4 py-2 rounded mb-4 w-full"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-gray-700 text-white px-4 py-2 rounded mb-4 w-full"
          />
          
          <textarea
            name="message"
            placeholder="Message"
            required
            className="bg-gray-700 text-white px-4 py-2 rounded mb-4 w-full"
          />
          
          <button type="submit" className="bg-teal-600 px-6 py-2 rounded w-full">Envoyer</button>
        </form>
      ) : (
        <div className="bg-green-500 text-white px-4 py-2 rounded">
          Merci pour votre message ! Je vous recontacterai très vite.
        </div>
      )}
    </section>
  );
};

export default Contact;
