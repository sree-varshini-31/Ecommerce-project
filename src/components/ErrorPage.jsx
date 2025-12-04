import React from "react";

const NoSearchResults = ({ searchQuery = "" }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-pink-100 via-blue-100 to-emerald-100">
      <div className="text-6xl font-bold text-pink-400 mb-6">🔍</div>
      <p className="text-3xl font-bold text-gray-800 mb-2">No Results Found</p>
      <p className="text-xl text-gray-600 mb-4 max-w-md text-center">
        We couldn't find any products matching
      </p>
     
      <p className="text-gray-600 mb-8 max-w-md text-center">
        Try different keywords or check spelling. Explore our beauty collection below!
      </p>
      <button
        onClick={() => window.location.href = "/"}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
      >
        Browse All Products
      </button>
    </div>
  );
};

export default NoSearchResults;
