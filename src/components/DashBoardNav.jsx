import React from "react";

const tabs = ["Dashboard", "Deposit", "Withdrawal", "History", "Profile"];

const DashBoardNavigation = ({ activeTab, setActiveTab }) => (
  <nav className="bg-[#D9E6FB] text-[#666666] p-4 max-w-4xl mx-auto rounded-lg shadow-md">
    <div className="flex justify-center space-x-1  rounded-lg p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-md font-medium transition-colors hover:text-yellow-500 cursor-pointer ${
            activeTab === tab ? " text-yellow-500" : "text-[#666666]"
          }`}>
          {tab}
        </button>
      ))}
    </div>
  </nav>
);

export default DashBoardNavigation;
