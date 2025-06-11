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
    <section className="py-10 px-4 bg-black text-white text-center" aria-labelledby="contact-title">
    <div className="max-w-xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 id="contact-title" className="text-3xl font-semibold mb-6">Contact</h2>
  
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            required
            className="bg-gray-700 text-white px-4 py-2 rounded w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-gray-700 text-white px-4 py-2 rounded w-full"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="bg-gray-700 text-white px-4 py-2 rounded w-full"
          />
          <button
            type="submit"
            className="bg-[#cea553] hover:bg-[#F5C76D] px-6 py-2 rounded w-full transition"
          > 
            Envoyer
          </button>
        </form>
      ) : (
        <div className="bg-[#F5C76D] p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">Merci pour votre message !</h3>
          <p>Je vous répondrai bientôt.</p>
        </div>
      )}
    </div>
  </section>
  
  );
};

export default Contact;
