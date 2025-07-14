import React from 'react';
import {
  FaChartLine,
  FaBitcoin,
  FaCheck,
  FaBalanceScale,
  FaGlobe,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from './Button';

const features = [
  {
    icon: <FaChartLine className="text-[#1E3A8A] text-2xl" />,
    title: 'Stock Trading',
    description:
      'Trade stocks from global markets with real-time data, advanced charts, and professional-grade tools.',
    list: ['Real-time quotes', 'Advanced analytics', 'Global markets'],
  },
  {
    icon: <FaBitcoin className="text-yellow-400 text-2xl" />,
    title: 'Cryptocurrency',
    description:
      'Access major cryptocurrencies with secure trading, cold storage, and 24/7 market availability.',
    list: ['50+ cryptocurrencies', 'Secure wallet', '24/7 trading'],
  },
  {
    icon: <FaCheck className="text-green-500 text-2xl" />,
    title: 'Binary Options',
    description:
      'Simple yes/no propositions with fixed risk and reward. Perfect for short-term trading strategies.',
    list: ['Fixed returns', 'Short-term trades', 'Easy to understand'],
  },
  {
    icon: <FaGlobe className="text-pink-500 text-2xl" />,
    title: 'Forex Trading',
    description:
      'Trade major, minor, and exotic currency pairs with tight spreads and leverage options.',
    list: ['Major currency pairs', 'Tight spreads', 'Leverage available'],
  },
  {
    icon: <FaBalanceScale className="text-cyan-500 text-2xl" />,
    title: 'Bonds & Fixed Income',
    description:
      'Invest in government and corporate bonds for steady returns and portfolio diversification.',
    list: ['Government bonds', 'Corporate bonds', 'Steady returns'],
  },
];

function TradingSolutionCard() {
  return (
    <section className="bg-[#F4FFFF] py-16 px-4 sm:px-6 lg:px-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Complete Trading Solutions</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base">
        Everything you need to trade and invest across multiple asset classes,
        all from one powerful platform designed for modern investors.
      </p>

      {/* Animated grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {features.map(({ icon, title, description, list }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 text-left"
          >
            <div className="flex flex-col items-center text-center gap-3 mb-4">
              <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button name="Start Investing" />
      </div>
    </section>
  );
}

export default TradingSolutionCard;
