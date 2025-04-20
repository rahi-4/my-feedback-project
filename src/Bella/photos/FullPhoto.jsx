import React, { useState } from 'react';

const photoList = [
  "/Rectangle 1266.png",
  "/Rectangle 1267.png",
  "/Rectangle 1268.png",
  "/Rectangle 1269.png",
  "/Rectangle 1270.png",
  "/Rectangle 1267.png",
  "/Rectangle 1268.png"
];

function FullPhoto() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const openModal = (index) => {
    setCurrentPhoto(index);
    setIsModalOpen(true);
  };

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photoList.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photoList.length) % photoList.length);
  };

  return (
    <>
      {/* Main Section */}
      <div className="max-w-[1300px] w-full h-auto mx-auto px-4">
        <h1 className="text-[#1E1E1E] lg:text-[34px] text-xl font-bold max-w-[700px]">
          Discover our magnificent place in photos
        </h1>
        <p className="text-[#5E5E5E] mt-5 max-w-[600px]">
          The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
        </p>

        <div className="flex flex-col lg:flex-row mt-5 gap-4">
          {/* Left Image */}
          <div className="lg:w-1/2 w-full rounded-l-md overflow-hidden relative h-[380px]">
            <img
              src="/Rectangle 1266.png"
              alt="Main"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(0)}
            />
            <button
              onClick={() => openModal(0)}
              className="flex items-center gap-2 rounded-[23.5px] absolute bottom-4 left-4 bg-white px-4 py-2 text-sm shadow-md"
            >
              <img src="/plus.png" alt="plus" className="w-4 h-4" />
              View all photos (7)
            </button>
          </div>

          {/* Right Grid Images */}
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
            {photoList.slice(1, 5).map((photo, index) => (
              <div
                key={index}
                className="h-[180px] overflow-hidden rounded-md cursor-pointer"
                onClick={() => openModal(index + 1)}
              >
                <img src={photo} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative w-[90%] lg:w-[1000px] bg-white p-5 rounded-md">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-xl font-bold text-gray-700"
            >
              &times;
            </button>

            {/* Main Image */}
            <img
              src={photoList[currentPhoto]}
              className="w-[500px] h-[300px] object-cover rounded-md mx-auto"
              alt="preview"
            />

            {/* Navigation */}
            <div className="flex justify-between items-center mt-4">
              <button onClick={prevPhoto} className="text-xl">⬅️</button>
              <p>{currentPhoto + 1} / {photoList.length}</p>
              <button onClick={nextPhoto} className="text-xl">➡️</button>
            </div>

            
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {photoList.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  onClick={() => setCurrentPhoto(index)}
                  className={`w-12 h-12 object-cover cursor-pointer rounded mx-auto ${currentPhoto === index ? "ring-2 ring-black" : ""}`}
                  alt="thumb"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FullPhoto;
