import React from "react";
import alert from "../assets/alert.png";
const WithdrawalSuspendedModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-sm p-6 text-center space-y-6">
        {/* Warning Icon */}
        <div className="flex justify-center">
          <div className="w-12 h-12  rounded-full flex items-center justify-center">
            <img src={alert} alt="alert" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-lg font-semibold text-black">
          Withdrawal function <br /> temporarily suspended
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm">
          You have to wait 30 days to withdraw
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="w-full bg-[#F59E0B] text-white font-semibold py-2 cursor-pointer rounded-md hover:bg-amber-500 transition">
          Ok
        </button>
      </div>
    </div>
  );
};

export default WithdrawalSuspendedModal;
