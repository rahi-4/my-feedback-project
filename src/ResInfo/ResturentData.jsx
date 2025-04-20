import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const restaurantData = [
  {
    name: 'The melt',
    image: '/Rectangle 22 (1).png',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: 3.5,
    reviews: 334,
  },
  {
    name: 'Lokma',
    image: '/Rectangle 22 (9).png',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: 5.0,
    reviews: 253,
  },
  {
    name: 'The snug',
    image: '/bg.png',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: 4.5,
    reviews: 654,
  },
];

function Rating({ rating, reviews }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={`full-${index}`} icon={faStar} className="text-yellow-500 mr-1" />
      ))}
      {hasHalfStar && (
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 opacity-50" />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon key={`empty-${index}`} icon={faStar} className="text-gray-300 mr-1" />
      ))}
      <span className="text-sm text-gray-600 ml-2">{rating} ({reviews} reviews)</span>
    </div>
  );
}

function RestaurantCard({ restaurant }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{restaurant.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{restaurant.description}</p>
        <Rating rating={restaurant.rating} reviews={restaurant.reviews} />
      </div>
    </div>
  );
}

function DiscoverSection() {
  return (
    <div className="py-8 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" font-bold font-Lexend text-[32px] mb-4">Also discover...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantData.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection;
