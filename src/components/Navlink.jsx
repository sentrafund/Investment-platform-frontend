import React from 'react'
import Logo from "../assets/CoinVertical.svg";

function Headercomponent() {
  return (
        <div>
            <nav className="bg-[#17398C] text-white px-20 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={Logo} alt="SENTRAFUND Logo" className="w-8 h-8" />
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white">SENTRAFUND</h1>
            </div>

            {/* Navigation Links */}
            
            {/* <div className="flex justify-around gap-6 text-sm font-medium"> */}
            <div className='flex gap-10 text-xl'>
                <a href="/" className="hover:text-white">
                Home
                </a>
                <a href="/dashboard" className="hover:text-white">
                Investment Plans
                </a>
                <a href="/contact" className="hover:text-white">
                Contact
                </a>
            </div>
            
            <div className='flex gap-10 text-xl'>
                <a href="/dashboard" className="text-[#f59e0b] font-semibold">
                Dashboard
                </a>
                <a href="/login" className="hover:text-[#f59e0b]">
                Logout
                </a>
            </div>
            </nav>


        </div>
  )
}

export default Headercomponent