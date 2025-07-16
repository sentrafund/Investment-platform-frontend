import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import BgVideo from "../assets/bgvideo.mp4";
import Button from "./Button";

function Hero() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" ">
      {/* video background */}
      <div className="absolute top-0 w-full min-h-[80vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>

        {/* Semi-transparent overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#1A2B4C] opacity-50 z-[-1]" />
      </div>
      {/* Hero Section */}
      <div className="z-20 flex flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-8 min-h-[50vh] px-4 sm:px-6 lg:px-8 text-center">
        {
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-w-[min(100%,30ch)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-full sm:w-11/12 md:w-10/12 lg:w-8/12 text-white font-bold leading-tight"
          >
            Transform Your Investments with{" "}
            {!isMobileMenuOpen && (
              <span className="text-[#F59E0B] drop-shadow-lg md:inline">
                SENTRAFUND
              </span>
            )}
          </motion.h1>
        }

        {
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-2xl w-full sm:w-11/12 md:w-10/12 lg:w-8/12 text-white/90 leading-relaxed"
          >
            Join the future of trading with SENTRAFUND. Our advanced platform
            combines cutting-edge technology with institutional-grade analytics
            to maximize your investment potential.
          </motion.p>
        }

        {
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 sm:mt-6 lg:mt-8"
          >
            <Button name="Start Investing" url={"/dashboard"} />
          </motion.div>
        }
      </div>
    </div>
  );
}

export default Hero;
