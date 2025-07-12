import React from 'react';
import { FaChartLine, FaBitcoin, FaCheck, FaMoneyBillWave, FaBalanceScale, FaGlobe } from 'react-icons/fa';

const features = [
  {
    icon: <FaChartLine className="text-[#1E3A8A] text-2xl" />,
    title: 'Stock Trading',
    description: 'Trade stocks from global markets with real-time data, advanced charts, and professional-grade tools.',
    list: [
      'Real-time quotes',
      'Advanced analytics',
      'Global markets',
    ],
  },
  {
    icon: <FaBitcoin className="text-yellow-400 text-2xl" />,
    title: 'Cryptocurrency',
    description: 'Access major cryptocurrencies with secure trading, cold storage, and 24/7 market availability.',
    list: [
      '50+ cryptocurrencies',
      'Secure wallet',
      '24/7 trading',
    ],
  },
  {
    icon: <FaCheck className="text-green-500 text-2xl" />,
    title: 'Binary Options',
    description: 'Simple yes/no propositions with fixed risk and reward. Perfect for short-term trading strategies.',
    list: [
      'Fixed returns',
      'Short-term trades',
      'Easy to understand',
    ],
  },
  {
    icon: <FaGlobe className="text-pink-500 text-2xl" />,
    title: 'Forex Trading',
    description: 'Trade major, minor, and exotic currency pairs with tight spreads and leverage options.',
    list: [
      'Major currency pairs',
      'Tight spreads',
      'Leverage available',
    ],
  },
  {
    icon: <FaBalanceScale className="text-cyan-500 text-2xl" />,
    title: 'Bonds & Fixed Income',
    description: 'Invest in government and corporate bonds for steady returns and portfolio diversification.',
    list: [
      'Government bonds',
      'Corporate bonds',
      'Steady returns',
    ],
  },
];

function TradingSolutionCard() {
  return (
    <section className="bg-[#F4FFFF] py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Complete Trading Solutions</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Everything you need to trade and invest across multiple asset classes,
        all from one powerful platform designed for modern investors.
      </p>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map(({ icon, title, description, list }, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center gap-3 mb-4">
              <div className="p-2 bg-gray-100 rounded-full">{icon}</div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p> {description}</p>
            </div>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TradingSolutionCard;
