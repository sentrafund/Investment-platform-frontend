import React from "react";

const tabs = ["Dashboard", "Deposit", "Withdrawal", "History", "Profile"];

const DashBoardNavigation = ({ activeTab, setActiveTab }) => (
  <nav
    className="bg-[#D9E6FB] text-[#666666] px-4 py-3 max-w-4xl mx-auto rounded-lg shadow-md overflow-x-auto scrollbar-hide"
    role="tablist">
    <div className="flex justify-start sm:justify-center gap-2 min-w-max">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap cursor-pointer hover:text-yellow-500 ${
            activeTab === tab ? "text-yellow-500" : "text-[#666666]"
          }`}>
          {tab}
        </button>
      ))}
    </div>
  </nav>
);

export default DashBoardNavigation;
