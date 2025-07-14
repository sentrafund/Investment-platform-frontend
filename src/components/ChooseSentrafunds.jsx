import React from 'react';
import {
  FaShieldAlt,
  FaChartLine,
  FaMobileAlt,
  
  FaLock,
//   FaUserTie,
FaHeadset,
} from 'react-icons/fa';
import { TbAward } from "react-icons/tb";
import { IoMdLock } from "react-icons/io";

const features = [
  {
    icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
    title: 'Bank-Level Security',
    description:
      'Your funds and data are protected with military-grade encryption and multi-factor authentication.',
  },
  {
    icon: <FaChartLine className="text-blue-500 text-2xl" />,
    title: 'Real-Time Data',
    description:
      'Access to real-time market data, news, and analysis from leading financial data providers.',
  },
  {
    icon: <FaMobileAlt className="text-blue-500 text-2xl" />,
    title: 'Mobile Trading',
    description:
      'Trade on the go with our award-winning mobile app available for iOS and Android devices.',
  },
  {
    icon: <TbAward className="text-blue-500 text-2xl" />,
    title: 'Award Winning',
    description:
      'Recognized by industry leaders for excellence in trading technology and customer service.',
  },
  {
    icon: <IoMdLock className="text-blue-500 text-2xl" />,
    title: 'Regulated & Compliant',
    description:
      'Fully regulated by major financial authorities and compliant with international standards.',
  },
  {
    icon: <FaHeadset className="text-blue-500 text-2xl" />,
    title: 'Expert Support',
    description:
      '24/7 customer support from experienced traders and financial professionals.',
  },
];

function WhyChooseSentrafund() {
  return (
    <section className="bg-[#F4FFFF] py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Why Choose SENTRAFUND?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        We combine cutting-edge technology with institutional-grade security to
        deliver the ultimate trading experience.
      </p>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {features.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="w-[300px] bg-[#F4FFFF] rounded-lg border border-[#1E3A8A] p-6 text-left shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col items-center gap-3 mb-3">
              <div className="bg-[#1E3A8A33] p-3 rounded-md">{icon}</div>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="text-sm text-gray-600 text-center">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseSentrafund;
