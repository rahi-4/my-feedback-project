import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

function RestaurantInfo() {
  return (
  <div>
    <h1 className='text-[#232323] font-bold font-Roboto text-center lg:ml-20 mb-5 mt-5'>Home / BellaItalia</h1>
      <div className="relative bg-cover bg-center bg-no-repeat w-full h-full py-12 px-6 md:px-12 lg:px-20 text-white mb-10" style={{ backgroundImage: "url('/bg.png')" }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

     
      <div className="relative max-w-3xl mx-auto z-10">
        <h1 className="text-4xl font-extrabold mb-4">Bella Italia</h1>

        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400 mr-1" />
          ))}
          <span className="ml-3 text-gray-200">5.0 (834 reviews)</span>
        </div>

        <p className="text-gray-300 mb-2">
          The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
        </p>
        <p className="text-gray-300 mb-4">
          The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
        </p>

        <div className="flex items-center text-gray-200 mb-2">
          <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
          <span>Singapore, Bishan-Ang Mo Kio Park</span>
        </div>

        <div className="flex items-center text-gray-200">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <span>7/7, 08:00 - 22:00</span>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center -mt-24 z-[100] relative">
  <img src="/Ellipse 26 (1).png" alt="Restaurant Logo" className="w-32 h-32 rounded-full shadow-lg object-cover" />
</div>
  </div>
  );
}

export default RestaurantInfo;
