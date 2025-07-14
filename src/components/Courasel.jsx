// import React from 'react'

// function Courasel({rating, text, name}) {
//   return (
//     <div>
//         <div className='items-center'> {rating} </div>
//         <div className=''> {text} </div>
//         <div className='text-center'> {name} </div>
//     </div>
//   )
// }

// export default Courasel




import React, { useState, useEffect } from "react";
import Ratings from "./Ratings";

const reviews = [
  {
    id: 1,
    text: `SENTRAFUND gives me peace of mind. The returns have been consistent, and the platform is very secure.`,
    author: `Jane DoeEmily R. -  London, United Kingdom`,
    rating: "5",
  },
  {
    id: 2,
    text: "Finally, a platform that actually delivers. I’ve seen real growth and love how transparent everything is",
    author: "Jason T. - New York, USA ",
    rating: "4"
  },
  {
    id: 3,
    text: "I was new to crypto and investing, but SENTRAFUND made everything simple and clear. Great support team too!",
    author: "Olivia M. -  Sydney, Australia",
    rating: "5"
  },
  {
    id: 4,
    text: "I’ve tried a few platforms, but none have matched SENTRAFUND’s performance. It’s reliable and easy to use.",
    author: "Mark L. -  Toronto, Canada",
    rating: "5"
  },
  {
    id: 5,
    text: "Customer service is excellent, and withdrawals are quick. I trust SENTRAFUND with my investments 100%.",
    author: "Sophie D. -  Dublin, Ireland",
    rating: "5"
  },
  {
    id: 6,
    text: "The Bitcoin trading tools are fast and accurate. I’ve already referred three friends to join.",
    author: "Alex B. -  Berlin, Germany",
    rating: "5"
  },
  {
    id: 7,
    text: "I appreciate how SENTRAFUND combines professional investment strategies with a user-friendly interface.",
    author: "Mia H. -  Vancouver, Canada",
    rating: "5"
  },
];


function Carousel() {
  const [current, setCurrent] = useState(0);

    // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const prevReview = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-[427px] mx-auto p-6 bg-[#1E3A8A]">
      <h2 className="text-xl font-bold mb-25 text-center text-white">What our clients are saying:</h2>
      <div>
        {/* <Ratings/> */}
      </div>
        {/* imported ratings and this is the Courasel bodywork */}
      <div className="relative">
        <div key={reviews[current].id} className="transition-opacity duration-500 ease-in-out">
            <div className="flex justify-center mb-3">
                <Ratings rating={reviews[current].rating} />
            </div>
            <p className="text-[#E9D9D9] text-center text-lg italic mb-20">
                "{reviews[current].text}"
            </p>
            <p className="text-center text-white font-semibold mb-15">
                {reviews[current].author}
            </p>
        </div>


        {/* Navigation buttons */}
        <button
          onClick={prevReview}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 "
          aria-label="Previous Review"> <img className="bg-[#1E3A8A]" src="Vector (1).png" alt="" />
        </button>
        <button
          onClick={nextReview}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-200 hover:bg-gray-300"
          aria-label="Next Review"><img className="bg-[#1E3A8A]" src="Vector (2).png" alt="" />
        </button>
      </div>

      {/* Dots indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
export default Carousel
