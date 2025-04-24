import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/meogqawe", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setIsSubmitted(true);
      form.reset();
    } else {
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section className="py-12 text-center bg-black text-white px-4">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
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
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-500 px-6 py-2 rounded w-full transition"
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
