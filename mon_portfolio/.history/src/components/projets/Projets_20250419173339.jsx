import React from 'react'; 
const Projets =()=>{
    return (
        <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Project 1</h3>
            <p className="text-lg mt-2">Short description of the project.</p>
            <div className="mt-4 space-x-4">
              <button className="bg-teal-600 px-4 py-2 rounded text-sm">
                GitHub
              </button>
              <button className="bg-teal-600 px-4 py-2 rounded text-sm">
                Live Demo
              </button>
            </div>
          </div>
          {/* Add more project cards here */}
        </div>
      </section>
    );
};
 export default Projets