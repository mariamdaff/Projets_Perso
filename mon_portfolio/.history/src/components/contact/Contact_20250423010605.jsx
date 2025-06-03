import React, { useState } from 'react'; 

const Contact = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <form
        action="https://formspree.io/f/meogqawe"
        method="POST"
        className="max-w-lg mx-auto"
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
        <button type="submit" className="bg-gray-800 px-6 py-2 rounded w-full">
          Envoyer
        </button>
      </form>
    </section>
  );
};


export default Contact;
