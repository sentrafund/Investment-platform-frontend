import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import Logo from "../assets/CoinVertical.svg";

function HeaderComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Investment Plans", path: "/dashboard" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-[#1E3A8A] text-white">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="SENTRAFUND Logo" className="w-8 h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold">
            SENTRAFUND
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 lg:gap-10 text-lg lg:text-xl font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="relative group hover:text-[#F59E0B] transition-colors duration-300"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F59E0B] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Auth Buttons Desktop */}
        <div className="hidden md:flex gap-6 lg:gap-10 text-lg lg:text-xl font-medium items-center">
          {isAuthenticated ? (
            <>
              <a
                href="/dashboard"
                className="relative group hover:text-[#F59E0B] transition-colors duration-300"
              >
                Dashboard
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F59E0B] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button
                onClick={handleLogout}
                className="relative group hover:text-[#F59E0B] transition-colors duration-300 focus:outline-none cursor-pointer"
              >
                Logout
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F59E0B] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </>
          ) : (
            <a
              href="/login"
              className="relative group hover:text-[#F59E0B] transition-colors duration-300"
            >
              Login
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F59E0B] transition-all duration-300 group-hover:w-full"></span>
            </a>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-lg font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="hover:text-[#F59E0B] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {isAuthenticated ? (
            <>
              <a
                href="/dashboard"
                className="hover:text-[#F59E0B]"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </a>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="text-left hover:text-[#F59E0B]"
              >
                Logout
              </button>
            </>
          ) : (
            <a
              href="/login"
              className="hover:text-[#F59E0B]"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
          )}
        </div>
      )}
    </header>
  );
}

export default HeaderComponent;
