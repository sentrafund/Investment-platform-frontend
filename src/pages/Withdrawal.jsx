import React from "react";
function Withdrawal() {
  return (
    <div>
    
      <div className="min-h-screen bg-[#f5fdff] py-10 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Request a withdrawal
        </h2>
        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-md w-full max-w-md px-6 py-">
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="janedoe@gmail.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
              />
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Withdraw Crypto
              </label>
              <select className="w-full border border-gray-300 rounded-xl px-4 py-2">
                <option>BTC</option>
                <option>ETH</option>
                <option>USDT</option>
              </select>
            </div>

            {/* Wallet Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Wallet address
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#F59E0B] text-white cursor-pointer font-medium py-2 rounded-xl mt-2 hover:bg-[#F59E0B]">
              Proceed withdrawal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Withdrawal;
