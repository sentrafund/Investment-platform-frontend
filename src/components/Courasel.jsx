import React, { useState, useEffect } from "react";
import Ratings from "./Ratings";

const reviews = [
  {
    id: 1,
    text: `SENTRAFUND gives me peace of mind. The returns have been consistent, and the platform is very secure.`,
    author: `Emily R. - London, United Kingdom`,
    rating: "5",
  },
  {
    id: 2,
    text: "Finally, a platform that actually delivers. I’ve seen real growth and love how transparent everything is.",
    author: "Jason T. - New York, USA",
    rating: "4",
  },
  {
    id: 3,
    text: "I was new to crypto and investing, but SENTRAFUND made everything simple and clear. Great support team too!",
    author: "Olivia M. - Sydney, Australia",
    rating: "5",
  },
  {
    id: 4,
    text: "I’ve tried a few platforms, but none have matched SENTRAFUND’s performance. It’s reliable and easy to use.",
    author: "Mark L. - Toronto, Canada",
    rating: "5",
  },
  {
    id: 5,
    text: "Customer service is excellent, and withdrawals are quick. I trust SENTRAFUND with my investments 100%.",
    author: "Sophie D. - Dublin, Ireland",
    rating: "5",
  },
  {
    id: 6,
    text: "The Bitcoin trading tools are fast and accurate. I’ve already referred three friends to join.",
    author: "Alex B. - Berlin, Germany",
    rating: "5",
  },
  {
    id: 7,
    text: "I appreciate how SENTRAFUND combines professional investment strategies with a user-friendly interface.",
    author: "Mia H. - Vancouver, Canada",
    rating: "5",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevReview = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#1E3A8A] py-12 px-4 sm:px-6 lg:px-12 text-white text-center relative overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        What our clients are saying:
      </h2>

      <div className="relative max-w-3xl mx-auto z-10">
        <div
          key={reviews[current].id}
          className="transition-opacity duration-500 ease-in-out">
          <div className="flex justify-center mb-4">
            <Ratings rating={reviews[current].rating} />
          </div>
          <p className="text-lg sm:text-xl italic text-[#E9D9D9] mb-6 px-4">
            "{reviews[current].text}"
          </p>
          <p className="font-semibold">{reviews[current].author}</p>
        </div>
      </div>

      {/* Fixed Arrows at the Edges */}
      <button
        onClick={prevReview}
        className="absolute top-1/2 left-4 sm:left-8 -translate-y-1/2 z-20 p-2 rounded-full cursor-pointer transition"
        aria-label="Previous Review">
        <img src="/vector1.png" alt="Previous" className="w-5 h-5" />
      </button>

      <button
        onClick={nextReview}
        className="absolute top-1/2 right-4 sm:right-8 -translate-y-1/2 z-20 p-2 rounded-full cursor-pointer transition"
        aria-label="Next Review">
        <img src="/vector2.png" alt="Next" className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 gap-2 z-10 relative">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to review ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white" : "bg-blue-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
