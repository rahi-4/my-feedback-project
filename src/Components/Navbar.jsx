import React, { useState } from "react";
import { X, Search } from "lucide-react";

function Navbar() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = ["restaurant", "hotel", "service", "gym", "spa", "coffee shop"];
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleClear = () => {
    setQuery("");
    setShowSuggestions(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm py-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-[521px] md:w-[621px]">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              className="w-full h-[45px] sm:h-[51px] pl-4 sm:pl-6 md:pl-12 pr-10 border border-[#ADADAD] rounded-full text-sm placeholder:text-gray-500"
              placeholder="restaurant, hotel, service...."
            />

            {query ? (
              <X
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 cursor-pointer"
                onClick={handleClear}
              />
            ) : (
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 text-gray-500" />
            )}

            {showSuggestions && query && (
              <ul className="absolute z-10 bg-white w-full mt-1 rounded-lg shadow-md border border-gray-200">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setQuery(item);
                        setShowSuggestions(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {item}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-sm text-gray-400">No results found</li>
                )}
              </ul>
            )}
          </div>

          {/* Right Side Button */}
          <div className="flex justify-center sm:justify-end items-center space-x-3">
            <img src="/wIcon.png" alt="Icon" className="w-6 h-6" />
            <button className="text-white bg-black font-medium px-4 py-2 rounded-full text-sm">
              MyFeedback for business
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
