import React from 'react';
import Button from '../components/Button';
import BorderButton from '../components/BorderButton';
import Logo from '../assets/CoinVertical.svg';
import BgVideo from '../assets/bgvideo.mp4';

function Header() {
  return (
    <div className="relative">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={BgVideo} type="video/mp4 " />
      </video>

      {/* Semi-transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#1A2B4C] opacity-50 z-10" />

      {/* Header + Hero content */}
      <div className="relative z-20">
        <header className="flex justify-between items-center px-8 py-6">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img src={Logo} alt="SENTRAFUND logo" className=" w-10 h-10" />
            <h1 className="text-4xl font-extrabold text-white">SENTRAFUND</h1>
          </div>

          {/* Navigation */}
          <ul className="flex gap-10 text-white font-medium">
            <li>Home</li>
            <li>Investment Plans</li>
            <li>Contact</li>
          </ul>

          {/* Buttons */}
          <div className="flex gap-2.5">
            <Button name="Register" />
            <BorderButton name="Login" />
          </div>
        </header>

        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center gap-5 h-[calc(100vh-100px)] px-4 text-center">
          <h1 className="text-5xl w-11/12 md:w-8/12 text-white font-bold leading-tight">
            Transform Your Investments with <span className="text-[#F59E0B]">SENTRAFUND</span>
          </h1>
          <p className="text-2xl w-11/12 md:w-8/12 text-white">
            Join the future of trading with SENTRAFUND.
            Our advanced platform combines cutting-edge technology with
            institutional-grade analytics to maximize your investment potential.
          </p>
          <Button name="Start Investing" />
        </div>
      </div>
    </div>
  );
}

export default Header;
