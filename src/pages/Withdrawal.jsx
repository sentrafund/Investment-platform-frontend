import React from 'react'
import Navlink from '../components/Navlink'
import Footer from '../components/Footer';
function Withdrawal() {
  return (
    <div>
         <Navlink />
        <div className="min-h-screen bg-[#f5fdff] py-10 px-4 flex flex-col items-center">
  {/* Navigation */}
  <nav className="flex gap-6 bg-[#e3efff] text-xl px-6 py-3 rounded-xl mb-8 font-medium text-gray-600">
    <a href="#" className="">Dashboard</a>
    <a href="#" className="">Deposit</a>
    <a href="#" className="text-[#f59e0b] font-semibold">Withdrawal</a>
    <a href="#" className="">History</a>
    <a href="#" className="">Profile</a>
  </nav>
  <h2 className="text-2xl font-semibold text-center mb-6">Request a withdrawal</h2>
  {/* Form Container */}
  <div className="bg-white rounded-lg shadow-md w-full max-w-md px-6 py-">
    <form className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
          type="text"
          placeholder="Jane Doe"
          className="w-full border border-gray-300 rounded-xl px-4 py-2"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
      
          <input
            type="email"
            placeholder="janedoe@gmail.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"/>
         
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount to withdraw
        </label>
        <input
          type="text"
          placeholder="(USD)"
          className="w-full border border-gray-300 rounded-xl px-4 py-2"
        />
      </div>

      {/* Crypto Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Withdraw Crypto</label>
        <select className="w-full border border-gray-300 rounded-xl px-4 py-2">
          <option>BTC</option>
          <option>ETH</option>
          <option>USDT</option>
        </select>
      </div>

      {/* Wallet Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Wallet address</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-xl px-4 py-2"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-orange-500 text-white font-medium py-2 rounded-xl mt-2 hover:bg-orange-600"
      >
        Proceed withdrawal
      </button>
    </form>
  </div>
</div>

        <Footer/>

    </div>
  )
}

export default Withdrawal