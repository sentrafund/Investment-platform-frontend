import React from "react";

function Ratings({ rating }) {
  return (
    <div className="flex space-x-1 text-yellow-400 justify-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "fill-current" : "fill-none stroke-current stroke-1"
          }`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
export default Ratings