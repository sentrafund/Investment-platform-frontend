import React, { useState } from "react";
import WithdrawalSuspendedModal from "../components/WithdrawalSuspend";
import Header from "../components/Header";

function Withdrawal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5fdff]">
      {/* Modal Display */}
      {showModal && (
        <WithdrawalSuspendedModal onClose={() => setShowModal(false)} />
      )}

      {/* Main Form Content */}
      {!showModal && (
        <div className="flex flex-col items-center px-4 py-10">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Request a Withdrawal
          </h2>

          {/* Form Container */}
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 space-y-6">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="janedoe@gmail.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
                />
              </div>

              {/* Amount Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount to withdraw
                </label>
                <input
                  type="number"
                  placeholder="(USD)"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
                />
              </div>

              {/* Crypto Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Withdraw Crypto
                </label>
                <select
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  defaultValue="BTC">
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="USDT">USDT</option>
                </select>
              </div>

              {/* Wallet Address Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Wallet Address
                </label>
                <input
                  type="text"
                  placeholder="Enter crypto wallet address"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={() => setShowModal(true)}
                className="w-full bg-[#F59E0B] cursor-pointer text-white font-semibold py-3 rounded-xl hover:bg-amber-500 transition duration-200 shadow hover:shadow-lg">
                Proceed Withdrawal
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Withdrawal;
