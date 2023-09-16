import React from 'react';

const CaseStudy = () => {
  return (
    <div className="">
      {/* Banner */}
      <section className="text-white py-16 bg-cover w-full h-full" >
        <div className="container mx-auto text-center ">
        
          <h1 className="text-4xl font-semibold mb-4">Project Title</h1>
          <p className="text-lg">A brief project description in one sentence.</p>
        </div>
      </section>

      {/* Scope and Role */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Scope */}
            <div className="p-4 bg-white bg-opacity-10 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Project Scope</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>

            {/* Role */}
            <div className="p-4 bg-white bg-opacity-10 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Our Role</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-12 bg-white bg-opacity-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">Technologies Used</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <li>Technology 1</li>
            <li>Technology 2</li>
            <li>Technology 3</li>
            <li>Technology 4</li>
          </ul>
        </div>
      </section>

      {/* Site Map */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">Site Map</h2>
          {/* <img src="/images/sitemap.png" alt="Site Map" className="mx-auto" /> */}
        </div>
      </section>

      {/* User Flow */}
      <section className="py-12 bg-gray-200 bg-opacity-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">User Flow</h2>
          {/* User flow images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {/* <img src="/images/user-flow-1.png" alt="User Flow 1" /> */}
              <p className="text-center">User Flow 1 Description</p>
            </div>
            <div>
              {/* <img src="/images/user-flow-2.png" alt="User Flow 2" /> */}
              <p className="text-center">User Flow 2 Description</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">Wireframes</h2>
          {/* Wireframe images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {/* <img src="/images/wireframe-1.png" alt="Wireframe 1" /> */}
              <p className="text-center">Wireframe 1 Description</p>
            </div>
            <div>
              {/* <img src="/images/wireframe-2.png" alt="Wireframe 2" /> */}
              <p className="text-center">Wireframe 2 Description</p>
            </div>
          </div>
        </div>
      </section>

      {/* Web Interfaces */}
      <section className="py-12 bg-gray-200 bg-opacity-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">Web Interfaces</h2>
          {/* Web interface images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {/* <img src="/images/web-interface-1.png" alt="Web Interface 1" /> */}
              <p className="text-center">Web Interface 1 Description</p>
            </div>
            <div>
              {/* <img src="/images/web-interface-2.png" alt="Web Interface 2" /> */}
              <p className="text-center">Web Interface 2 Description</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Interfaces */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">Mobile Interfaces</h2>
          {/* Mobile interface images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {/* <img src="/images/mobile-interface-1.png" alt="Mobile Interface 1" /> */}
              <p className="text-center">Mobile Interface 1 Description</p>
            </div>
            <div>
              {/* <img src="/images/mobile-interface-2.png" alt="Mobile Interface 2" /> */}
              <p className="text-center">Mobile Interface 2 Description</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Home Page */}
      <section className="py-12 bg-gray-200 bg-opacity-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">Project Home Page</h2>
          {/* <img src="/images/project-home.png" alt="Project Home Page" className="mx-auto" /> */}
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
