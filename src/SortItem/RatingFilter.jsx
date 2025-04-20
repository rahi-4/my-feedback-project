import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const RatingFilter = ({ onFilterChange,onClose }) => {
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleRatingClick = (rating) => {
    const isSelected = selectedRatings.includes(rating);
    if (isSelected) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
    onFilterChange(isSelected ? selectedRatings.filter((r) => r !== rating) : [...selectedRatings, rating]);
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`w-4 h-4 ${i <= count ? 'text-yellow-500' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-md p-4 w-48">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-700">filter by rating</h2>
        <button >
           <FaTimes 
                   className="cursor-pointer text-[#5D5D5D] hover:text-slate-900" 
                   onClick={onClose} 
                 />
        </button>
      </div>
      <ul>
        {[5, 4, 3, 2, 1].map((rating) => (
          <li
            key={rating}
            className={`flex items-center space-x-2 py-1 cursor-pointer ${
              selectedRatings.includes(rating) ? 'text-yellow-500' : 'text-gray-700 hover:text-yellow-500'
            }`}
            onClick={() => handleRatingClick(rating)}
          >
            <span>{rating}</span>
            <div className="flex">{renderStars(rating)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingFilter;