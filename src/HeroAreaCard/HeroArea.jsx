import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const HeroArea = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const handlePrev = () => {
    const prev = currentIndex - cardsPerPage;
    setCurrentIndex(prev < 0 ? Math.max(cards.length - cardsPerPage, 0) : prev);
  };

  const handleNext = () => {
    const next = currentIndex + cardsPerPage;
    setCurrentIndex(next >= cards.length ? 0 : next);
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div className="w-full bg-blue-700 text-white py-10 px-4 relative mt-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Find the best restaurant ratings below</h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            className="absolute left-0 z-10 bg-white text-black p-2 rounded-full shadow-md"
            onClick={handlePrev}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full px-10">
            {visibleCards.map((card) => (
              <div key={card.id} className="bg-white text-black rounded-lg shadow-md overflow-hidden">
                <img src={card.image} alt={card.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{card.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{card.description}</p>
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                    <span className="text-sm font-semibold ml-2">
                      {card.rating.toFixed(1)} ({card.reviews})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 bg-white text-black p-2 rounded-full shadow-md"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * cardsPerPage)}
              className={`w-3 h-3 rounded-full ${
                index * cardsPerPage === currentIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    name: 'Bottega',
    image: '/img.png',
    description: 'The lorem ipsum is in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: 5.0,
    reviews: 876,
  },
  {
    id: 2,
    name: 'Bottega',
    image: '/img1.png',
    description: 'The lorem ipsum is in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: 5.0,
    reviews: 876,
  },
  {
    id: 3,
    name: 'Bottega',
    image: '/img2.png',
    description: 'The lorem ipsum is in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: 5.0,
    reviews: 876,
  },
  {
    id: 4,
    name: 'Bottega',
    image: '/img3.png',
    description: 'The lorem ipsum is in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: 5.0,
    reviews: 876,
  },
  {
    id: 5,
    name: 'Bottega',
    image: '/Rectangle 1269.png.png',
    description: 'The lorem ipsum is in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: 5.0,
    reviews: 876,
  },
];

export default HeroArea;
