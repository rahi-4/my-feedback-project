// src/components/CategoryNav.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTh, FaUtensils, FaHotel, FaHome, FaShoppingCart,
  FaCar, FaSpa, FaTree, FaLandmark, FaShower, FaBeer, FaDumbbell,
} from "react-icons/fa";

const categories = [
  { label: "All", icon: <FaTh /> },
  { label: "Restaurants", icon: <FaUtensils /> },
  { label: "Hotels", icon: <FaHotel /> },
  { label: "Home services", icon: <FaHome /> },
  { label: "Shopping", icon: <FaShoppingCart /> },
  { label: "Car location", icon: <FaCar /> },
  { label: "Beauty & Spa", icon: <FaSpa /> },
  { label: "Park", icon: <FaTree /> },
  { label: "Museum", icon: <FaLandmark /> },
  { label: "Car wash", icon: <FaShower /> },
  { label: "Bars", icon: <FaBeer /> },
  { label: "Gyms", icon: <FaDumbbell /> },
];

export default function CategoryNav() {
  const [active, setActive] = useState("Restaurants");
  const navigate = useNavigate();

  const handleClick = (label) => {
    setActive(label);
    if (label === "Hotels") {
      navigate("/hotels");
    }
  };

  return (
    <div className="w-full border-b">
      <div className="flex overflow-x-auto scrollbar-hide px-4 sm:px-6 py-4 max-w-screen-xl mx-auto space-x-8 sm:space-x-12">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => handleClick(cat.label)}
            className={`flex flex-col items-center text-xs sm:text-sm whitespace-nowrap transition duration-200 ${
              active === cat.label ? "text-blue-600 font-semibold" : "text-gray-400"
            }`}
          >
            <div className="text-lg sm:text-xl mb-1">{cat.icon}</div>
            <span>{cat.label}</span>
            {active === cat.label && (
              <div className="w-full h-0.5 bg-blue-600 mt-1 rounded"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
