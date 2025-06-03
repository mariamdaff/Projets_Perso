import React from 'react'; 
const Contact =()=>{
    return(
        <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-700 text-white px-4 py-2 rounded mb-4 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-700 text-white px-4 py-2 rounded mb-4 w-full"
          />
          <textarea
            placeholder="Message"
            className="bg-gray-700 text-white px-4 py-2 rounded mb-4 w-full"
          />
          <button className="bg-teal-600 px-6 py-2 rounded w-full">Send</button>
        </form>
      </section>
    );
};

export default Contact;