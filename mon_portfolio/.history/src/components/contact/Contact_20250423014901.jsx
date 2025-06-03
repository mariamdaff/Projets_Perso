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
    <section className="bg-gray-100 py-8 px-4 flex justify-center">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      {/* Ton formulaire ici */}
      <form>
        <label className="block mb-2 font-medium">Nom :</label>
        <input type="text" className="w-full border p-2 mb-4 rounded" />
  
        <label className="block mb-2 font-medium">Email :</label>
        <input type="email" className="w-full border p-2 mb-4 rounded" />
  
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Envoyer
        </button>
      </form>
    </div>
  </section>
  
  );
};

export default Contact;
