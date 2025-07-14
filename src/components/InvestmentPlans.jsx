import React from 'react';
import Logo from '../assets/CoinVertical.svg';
import Button from './Button';

const plans = [
  {
    title: 'Basic',
    price: '$200',
    desc: 'Invest in bonds and stocks',
    min: '$2.00',
    max: '$1,999',
    duration: '14 days',
  },
  {
    title: 'Pro StartUp',
    price: '$2,000',
    desc: 'Invest in bonds and stocks',
    min: '$2,000',
    max: '$50,000',
    duration: '30 days',
  },
  {
    title: 'Premium',
    price: '$50,000',
    desc: 'Invest in bonds, stocks, binary, crypto, and forex',
    min: '$50,000',
    max: '$150,000',
    duration: '30-60 days',
  },
];

function InvestmentPlans() {
  return (
    <section className="bg-[#F4FFFF] py-14 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Investment Plans</h2>
      <p className="text-gray-600 max-w-4xl mx-auto text-base">
        Invest in the future with our visionary platform, blending stock, binary, crypto, forex, and bonds trading. Enjoy secure, real-time trading on any device, backed by innovative technology and opportunities in any market condition.
      </p>

      <div className="flex flex-nowrap justify-center gap-4 overflow-x-auto py-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white border-4 border-[#1E3A8A] rounded-xl shadow-md p-4 w-80 flex-shrink-0 flex flex-col items-center"
          >
            <div className="flex items-center gap-2 mb-3">
              <img src={Logo} alt="SENTRAFUND" className="w-8 h-8" />
              <h3 className="text-xl font-bold text-blue-900">{plan.title}</h3>
            </div>

            <p className="text-sm text-gray-700 text-center mb-2">{plan.desc}</p>
            <p className="text-2xl font-bold text-black mb-3">{plan.price}</p>

            <div className="text-sm text-gray-600 text-center mb-4 space-y-1">
              <p><span className="font-medium">Min:</span> {plan.min}</p>
              <p><span className="font-medium">Max:</span> {plan.max}</p>
              <p><span className="font-medium">Duration:</span> {plan.duration}</p>
            </div>

            <Button name="Invest Now" />
          </div>
        ))}
      </div>

      <Button name="Explore More" />
    </section>
  );
}

export default InvestmentPlans;
