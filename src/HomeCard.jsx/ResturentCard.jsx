import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStars = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStars ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}

      {hasHalfStars && <FaStarHalfAlt className="text-yellow-500" />}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FaStar key={`empty-${index}`} />
        ))}
      <span className="ml-1 text-sm text-gray-600">({rating})</span>
    </div>
  );
};

const RestaurantCard = ({ id, name, rating, reviewCount, description, image }) => {
  const navigate = useNavigate(); 


  const handleClick = () => {
    navigate(`/endArea/${id}`);
  };

  return (
    <div
      className="bg-white rounded-md shadow-md p-4 hover:translate-y-2 transition-all hover:bg-slate-900 hover:text-[white]"
      onClick={handleClick}
    >
      <img src={image} alt={name} className="w-full h-32 object-cover rounded-md mb-2" />
      <h3 className="text-lg font-semibold mb-1 hover:text-white">{name}</h3>
      <p className="text-gray-500 text-sm mb-2 hover:text-white">{description}</p>
      <div className="flex items-center gap-2">
        <StarRating rating={rating} />
        <span className="text-sm text-[#7A7A7A] font-Roboto hover:text-white">{reviewCount}</span>
      </div>
    </div>
  );
};

const ResCard = () => {
  const restaurants = [
    {
      name: 'Bella Italia',
      rating: 4.8,
      reviewCount: "(34 reviews)",
      description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      image: '/Rectangle 22 (1).png',
    },
    {
      name: 'Little Shucker',
      rating:5.0,
      reviewCount: " (34 reviews)",
      description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      image: '/Rectangle 22 (2).png',
    },
    {
      name: 'Marafuku Ramen',
      rating: 3.5,
      reviewCount: " (253 reviews)",
      description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      image: '/Rectangle 22 (3).png',
    },
    {
      name: 'Bottega',
      rating: 5.0,
      reviewCount: "(87 reviews)",
      description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      image: '/Rectangle 22 (4).png',
    },
    {
        name: 'Arabia Nights',
        rating: 3.5,
        reviewCount: " (876 reviews)",
        description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        image: '/Rectangle 22 (5).png',
      }, {
        name: 'Lokma',
        rating: 5.0,
        reviewCount: " (334 reviews)",
        description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        image: '/Rectangle 22 (6).png',
      }, {
        name: 'The snug',
        rating: 4.5,
        reviewCount: " (253 reviews)",
        description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        image: '/Rectangle 22 (7).png',
      }, {
        name: 'Starbelly',
        rating: 5.0,
        reviewCount: " (654 reviews)",
        description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        image: '/Rectangle 22 (8).png',
      }, {
        name: 'Iori',
        rating: 3.5,
        reviewCount: " (876 reviews)",
        description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        image: '/Rectangle 22 (9).png',
      }, {
        name: 'Ngalley',
        rating: 5.0,
        reviewCount: " (334 reviews)",
        description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        image: '/Rectangle 22 (10).png',
      }, {
        name: 'diogonal',
        rating: 4.5,
        reviewCount: " (654 reviews)",
        description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        image: '/Rectangle 22 (11).png',
      },
      {
        name: 'Kitoko',
        rating: 5.0,
        reviewCount:" (876 reviews)",
        description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
        image: '/Rectangle 22 (12).png',
      },
  ];

  return (
    <div>
      <h1 className="text-[#1E1E1E] font-Lexend font-bold text-[32px] ml-8">The latest trends</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default ResCard;
