import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <section className="py-12 px-4 text-center bg-gradient-to-br from-sky-900 to-cyan-900 text-white">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>

      {!isSubmitted ? (
        <form
          action="https://formspree.io/f/meogqawe"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            required
            className="w-full p-3 h-32 rounded bg-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 hover:bg-teal-400 rounded font-semibold transition"
          >
            Envoyer
          </button>
        </form>
      ) : (
        <div className="max-w-xl mx-auto bg-green-600 p-6 rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Merci pour votre message !</h3>
          <p>Je vous reviens très vite ✉️</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
