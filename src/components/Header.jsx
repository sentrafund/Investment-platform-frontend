import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import BorderButton from "../components/BorderButton";
import Logo from "../assets/CoinVertical.svg";
import BgVideo from "../assets/bgvideo.mp4";
import { useNavigate, NavLink } from "react-router-dom";

function MyNavlink(pros) {
  return (
    <NavLink
      to="/#plans"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Investment Plans
    </NavLink>
  );
}

function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="relative w-full">
      {/* Semi-transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#1A2B4C] opacity-50 z-10" />

      {/* Header + Hero content */}
      <div className="relative z-20">
        <header className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          {/* Logo and Title */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={Logo}
              alt="SENTRAFUND logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white">
              SENTRAFUND
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-6 xl:gap-10 text-white font-medium">
            <li className="hover:text-[#F59E0B] transition-colors duration-200 cursor-pointer py-2">
              Home
            </li>
            <li
              className="hover:text-[#F59E0B] transition-colors duration-200 cursor-pointer py-2"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Investment Plans
            </li>
            <li className="hover:text-[#F59E0B] transition-colors duration-200 cursor-pointer py-2">
              Contact
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-2 lg:gap-2.5 ">
            <Button
              name="Register"
              onClick={() => handleNavigation("/register")}
            />
            <BorderButton
              name="Login"
              onClick={() => handleNavigation("/login")}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col gap-1 p-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] rounded"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </header>

        {/* Mobile Menu dropdown */}
        <div
          className={`lg:hidden  absolute left-0 w-full  bg-[#15273E] opacity-50 backdrop-blur-sm transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-80 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-4 ">
            <ul className=" text-white font-medium">
              <li className="hover:text-[#F59E0B] transition-colors duration-200 cursor-pointer py-2 border-b border-white/10">
                Investment Plans
              </li>
              <MyNavlink />
              <li className="hover:text-[#F59E0B] transition-colors duration-200 cursor-pointer py-2 border-white/10">
                Contact
              </li>
            </ul>

            <div className="flex flex-row justify-between pt-4 border-t border-white/20">
              <Button
                name="Register"
                onClick={() => handleNavigation("/register")}
              />
              <Button
                name="Login"
                type="outline"
                onClick={() => handleNavigation("/login")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
