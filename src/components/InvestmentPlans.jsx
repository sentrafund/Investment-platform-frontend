import React, { useState } from "react";
import Logo from "../assets/CoinVertical.svg";
import Button from "./Button";
import sentrafundcoin from "../assets/sentrafundcoin.png";

const ButtonDemo = ({ name, onClick }) => (
  <button
    onClick={onClick}
    className="bg-[#F59E0B] hover:bg-[#D97706] cursor-pointer text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
  >
    {name}
  </button>
);

const plans = [
  {
    title: "Basic",
    price: "$200",
    desc: "Invest in bonds and stocks",
    min: "$200",
    max: "$1,999",
    duration: "14 days",
    popular: false,
    features: [
      "Stock Trading",
      "Bond Investment",
      "24/7 Support",
      "Mobile App",
    ],
  },
  {
    title: "Pro StartUp",
    price: "$2,000",
    desc: "Invest in bonds and stocks",
    min: "$2,000",
    max: "$50,000",
    duration: "30 days",
    popular: true,
    features: [
      "Stock Trading",
      "Bond Investment",
      "Advanced Analytics",
      "Priority Support",
      "Mobile App",
    ],
  },
  {
    title: "Premium",
    price: "$50,000",
    desc: "Invest in bonds, stocks, binary, crypto, and forex",
    min: "$50,000",
    max: "$150,000",
    duration: "30-60 days",
    popular: false,
    features: [
      "All Asset Classes",
      "Personal Manager",
      "VIP Support",
      "Advanced Tools",
      "API Access",
    ],
  },
];

function InvestmentPlans() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanHover = (index) => {
    setSelectedPlan(index);
  };

  const handlePlanLeave = () => {
    setSelectedPlan(null);
  };

  return (
    <section
      id="#plans"
      className="bg-gradient-to-b text-center from-[#F4FFFF] to-[#E6F7FF] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Investment Plans
            </h2>
          </div>
          <p className="text-gray-600 text-center max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Invest in the future with our visionary platform, blending stock,
            binary, crypto, forex, and bonds trading. Enjoy secure, real-time
            trading on any device, backed by innovative technology and
            opportunities in any market condition.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col items-center transform hover:scale-105 ${
                plan.popular ? "ring-2 ring-[#F59E0B] ring-opacity-50" : ""
              } ${selectedPlan === index ? "scale-105 shadow-2xl" : ""}`}
              onMouseEnter={() => handlePlanHover(index)}
              onMouseLeave={handlePlanLeave}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#F59E0B] text-white px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                  <img src={sentrafundcoin} alt="" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A8A]">
                  {plan.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 text-center mb-4 leading-relaxed">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-6">
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {plan.price}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Starting investment
                </p>
              </div>

              {/* Plan Details */}
              <div className="w-full bg-gray-50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-1 gap-3 text-sm sm:text-base">
                  <div className="flex justify-center gap-2 items-center">
                    <span className="text-gray-600">Minimum:</span>
                    <span className="font-semibold text-gray-900">
                      {plan.min}
                    </span>
                  </div>
                  <div className="flex justify-center gap-2 items-center">
                    <span className="text-gray-600">Maximum:</span>
                    <span className="font-semibold text-gray-900">
                      {plan.max}
                    </span>
                  </div>
                  <div className="flex justify-center gap-2 items-center">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">
                      {plan.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="w-full mt-auto">
                {/* <ButtonDemo name="Invest Now" /> */}
                <Button name="Invest Now" url="/dashboard" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Need a custom investment plan? We've got you covered.
          </p>
          <ButtonDemo name="Explore More Plans" />
        </div> */}
      </div>
    </section>
  );
}

export default InvestmentPlans;
