import React from 'react';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import clientBackground from '../assets/client_background1.jpg';

const Client = () => {
  return (
    <section className="w-full">
      {/* 1) Awesome Brands / Our Clients */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-sm font-semibold text-gray-400 uppercase">
            Awesome Brands
          </h2>
          <h3 className="mt-2 text-3xl font-bold text-gray-800">
            Our Clients
          </h3>

          {/* Client Logos */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            <img src={client1} alt="Client 1" className="h-12 object-contain" />
            <img src={client2} alt="Client 2" className="h-12 object-contain" />
            <img src={client3} alt="Client 3" className="h-12 object-contain" />
            <img src={client4} alt="Client 4" className="h-12 object-contain" />
            <img src={client5} alt="Client 5" className="h-12 object-contain" />
          </div>
        </div>
      </div>

      {/* 2) Collaborate Section with Background Image */}
      <div
        className="relative bg-center bg-cover bg-no-repeat h-[600px]"
        style={{ backgroundImage: `url(${clientBackground})` }}
      >
        {/* Hazy overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-7xl mx-auto px-4 text-center space-y-4">
          <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-widest">
            Collaborate
          </h4>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Interested in working with TheBuilt?
          </h3>
          <div>
            <a
              href="/services"
              className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-md transition transform duration-300 hover:scale-105 hover:bg-primary-dark"
            >
              All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
