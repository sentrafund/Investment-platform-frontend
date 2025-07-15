import React from "react";
import HeaderComponent from "../components/Navlink";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderComponent />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your dashboard!</p>
        {/* Add more dashboard content here */}
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
