import React from "react";
import HeaderComponent from "../components/Navlink";
import Footer from "../components/Footer";
import DashBoardNavigation from "../components/DashBoardNav";
import TradingDashboard from "../components/TradingDashboard";
import DepositTab from "../components/DashboardDeposit";
import { useState } from "react";
import Withdrawal from "./Withdrawal";
import HistoryTab from "../components/DashboardHistory";
import ProfileTab from "../components/DashboardProfile";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const renderContent = () => {
    switch (activeTab) {
      case "Deposit":
        return <DepositTab />;
      case "Withdrawal":
        return <Withdrawal />;
      case "History":
        return <HistoryTab />;
      case "Profile":
        return <ProfileTab />;
      default:
        return <TradingDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5fdff]">
      <HeaderComponent />
      <div className="container mx-auto px-4 py-8">
        <DashBoardNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <main className="">{renderContent()}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
