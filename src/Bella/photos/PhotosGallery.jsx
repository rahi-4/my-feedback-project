import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div onClick={() => openModal(currentIndex)} className="cursor-pointer">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="w-full h-auto rounded-md shadow-md" />
        <div className="absolute top-2 right-2 bg-gray-900 bg-opacity-50 text-white text-sm py-1 px-2 rounded">
          {currentIndex + 1}/{images.length}
        </div>
      </div>

      {/* Navigation Buttons (Optional, can be inside the modal) */}
      {images.length > 1 && (
        <>
          <button onClick={goToPrevious} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </>
      )}

      {/* Thumbnail Images */}
      <div className="flex mt-2 space-x-2 overflow-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-16 object-cover rounded-sm cursor-pointer ${index === currentIndex ? 'border-2 border-blue-500' : 'border border-gray-300'}`}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <img src={images[currentIndex]} alt={`Full Image ${currentIndex + 1}`} className="max-w-full max-h-full rounded-md shadow-lg" />
          {images.length > 1 && (
            <>
              <button onClick={goToPrevious} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-4">
                <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
              </button>
              <button onClick={goToNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-4">
                <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;