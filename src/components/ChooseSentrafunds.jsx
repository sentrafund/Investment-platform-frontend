import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaChartLine,
  FaMobileAlt,
  FaHeadset,
} from "react-icons/fa";
import { TbAward } from "react-icons/tb";
import { IoMdLock } from "react-icons/io";

const features = [
  {
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
    title: "Bank-Level Security",
    description:
      "Your funds and data are protected with military-grade encryption and multi-factor authentication.",
  },
  {
    icon: <FaChartLine className="text-blue-600 text-3xl" />,
    title: "Real-Time Data",
    description:
      "Access real-time market data, news, and analysis from trusted financial data providers.",
  },
  {
    icon: <FaMobileAlt className="text-blue-600 text-3xl" />,
    title: "Mobile Trading",
    description:
      "Execute financial transactions using our mobile-optimized website on smartphones or tablets, enabling users to access markets and manage investments remotely.",
  },
  {
    icon: <TbAward className="text-blue-600 text-3xl" />,
    title: "Award Winning",
    description:
      "Recognized for excellence in trading technology and customer service.",
  },
  {
    icon: <IoMdLock className="text-blue-600 text-3xl" />,
    title: "Regulated & Compliant",
    description:
      "Fully licensed and compliant with global financial regulations.",
  },
  {
    icon: <FaHeadset className="text-blue-600 text-3xl" />,
    title: "Expert Support",
    description:
      "24/7 customer support from experienced professionals in the trading space.",
  },
];

function WhyChooseSentrafund() {
  return (
    <section className="bg-[#F4FFFF] py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        Why Choose <span className="text-blue-600">SENTRAFUND</span>?
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
        We combine cutting-edge technology with institutional-grade security to
        deliver the ultimate trading experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map(({ icon, title, description }, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200"
            aria-labelledby={`feature-title-${index}`}>
            <div className="flex flex-col items-center gap-3 mb-4">
              <div className="bg-blue-100 p-4 rounded-full">{icon}</div>
              <h3
                id={`feature-title-${index}`}
                className="text-lg font-semibold text-gray-800 text-center">
                {title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 text-center">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseSentrafund;
