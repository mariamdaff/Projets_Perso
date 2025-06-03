import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <section className="py-12 text-center bg-black text-white px-4">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      {!isSubmitted ? (
        <form
          action="https://formspree.io/f/meogqawe"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 rounded transition"
          >
            Envoyer
          </button>
        </form>
      ) : (
        <div className="max-w-lg mx-auto bg-green-600 p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">Merci pour votre message !</h3>
          <p>Je vous répondrai bientôt.</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
