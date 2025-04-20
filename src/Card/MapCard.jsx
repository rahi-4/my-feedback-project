import React,{useState} from 'react';

import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Button } from "@heroui/button"; 
import Sort from '../SortItem/Sort'

const StarRating = ({ rating }) => {
  const fullStar = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStar = 5 - fullStar - (hasHalfStar ? 1 : 0);

  return (
    <div className='flex items-center'>
      {[...Array(fullStar)].map((_, index) => (
        <FaStar key={`full-${index}`} className='text-yellow-500' />
      ))}

      {hasHalfStar && <FaStarHalfAlt className='text-yellow-500' />}

      {[...Array(emptyStar)].map((_, index) => (
        <FaStar key={`empty-${index}`} className='text-gray-300' />
      ))}

      <span className='ml-1 text-sm text-gray-600'>({rating})</span>
    </div>
  );
};

const MapCard = ({ name, rating, reviewCount, description, image }) => {
  return (
    <div className='bg-white rounded-md p-4 hover:translate-y-2 transition-all hover:bg-slate-900 hover:text-white flex items-start gap-4'>
      <img src={image} alt={name} className="lg:w-32  h-24 object-cover rounded-md flex-shrink-0" />
      <div className='flex-grow'>
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <div className='flex items-center gap-2 mb-1'>
          <StarRating rating={rating} />
          <span className='text-sm text-[#7A7A7A] font-Roboto'>{reviewCount}</span>
        </div>
        <p className='text-gray-500 text-sm line-clamp-2'>{description}</p>
      </div>
    </div>
  );
};

const ResCardCol = () => {

  const [showSort, setShowSort] = useState(false);
  const handleClick=()=>{
    setShowSort(!showSort)
  }
  const handleCloseSort = () => {
    setShowSort(false); // 
  };
  return (
   <div>
     <div className='flex flex-col md:flex-row'>
<div className='w-full md:w-1/2 p-8'>
  <h1 className='text-[#1E1E1E] font-Lexend font-bold text-2xl md:text-3xl lg:text-4xl mb-2'>
    Home / All restaurants
  </h1>
  <div className='flex items-center justify-between mb-4'>
    <h2 className='text-[#1E1E1E] font-Lexend font-bold text-xl md:text-2xl lg:text-3xl'>
      best restaurants in singapore
    </h2>
    
<div className='relative'>
<Button className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-600"  onClick={handleClick}>
      <span className="inline-block mr-1">↓↑</span> Sort
    </Button>

    {showSort && (
      <div className='absolute mt-2 p-2 bg-white top-full'>
          <Sort onClose={handleCloseSort}/>
      </div>
    )}
</div>


  </div>
  <div className="grid grid-cols-1 gap-4">
    {restaurantsCard.map((restaurant, index) => (
      <MapCard key={index} {...restaurant} />
    ))}
  </div>
</div>

<div className='w-full md:w-1/2 p-4'>
  <img src="/Rectangle 45 (1).png" alt="Map of Singapore" className="w-full h-full object-cover rounded-md" />
</div>
</div>
<Button className='ml-14 bg-blue-500 text-white mb-4'>Show More</Button>
   </div>
    
  );
};

export default ResCardCol;

const restaurantsCard = [
  {
    name: 'The snug',
    rating: 4.5,
    reviewCount: " (654 reviews)",
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    image: '/Rectangle 32.png',
  },
  {
    name: 'Bottega',
    rating: 5.0,
    reviewCount: "(1654 reviews)",
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    image: '/Rectangle 32 (1).png',
  },
  {
    name: 'Little Shucker',
    rating: 3.0,
    reviewCount: " (553 reviews)",
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    image: '/Rectangle 32 (2).png',
  },
  {
    name: 'Lokma',
    rating: 4.5,
    reviewCount: "(654 reviews)",
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    image: '/Rectangle 32 (3).png',
  },
  {
    name: 'Starbelly',
    rating: 4.5,
    reviewCount: "  (654 reviews)",
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    image: '/Rectangle 32 (4).png',
  },
  {
    name: 'The melt',
    rating: 4.5,
    reviewCount: " (654 reviews)",
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    image: '/Rectangle 32 (5).png',
  },
  {
    name: 'Arabia Nights',
    rating: 4.5,
    reviewCount: " (654 reviews)",
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    image: '/Rectangle 32 (6).png',
  },
];