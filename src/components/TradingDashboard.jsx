import React, { useEffect, useState } from "react";
import { Eye, EyeOff, Wallet, CreditCard, TrendingUp } from "lucide-react";
import wallet from "../assets/wallet.png";
import deposit from "../assets/deposit.png";
import fundaccount from "../assets/fundaccount.png";
import CoinFeedDashboard from "./CoinFeedDashboard";
import {
  get_all_balance,
  get_all_transactions,
  get_my_balance,
} from "../api/auth";

const TradingDashboard = ({ setActiveTab }) => {
  const [depositBalace, setDepositBalance] = useState(0);
  const [showBalance, setShowBalance] = useState(true);
  const [showDepositAmount, setShowDepositAmount] = useState(true);
  const [walletBalance, setWallet] = useState(0);
  const [error, setError] = useState("");

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const toggleDepositVisibility = () => {
    setShowDepositAmount(!showDepositAmount);
  };
  useEffect(() => {
    async function fetchUser() {
      try {
        // Fetch wallet and transactions concurrently
        const [walletRes, transactionsRes] = await Promise.all([
          get_all_balance(),
          get_all_transactions(),
        ]);

        // Set wallet data
        setWallet(walletRes.data[0]?.["balance"] ?? 0);
        console.log("Wallet:", walletRes.data[0]?.["balance"] ?? 0);

        const transactions = transactionsRes?.data ?? 0;

        // Compute total approved/completed deposits
        const totalApproved = transactions
          .filter((item) => item.status === "completed")
          .reduce((sum, item) => sum + parseFloat(item.amount), 0);

        setDepositBalance(totalApproved);
        console.log("Total approved deposit:", totalApproved);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load wallet or transaction history");
      }
      // finally {
      //   setLoading(false);
      // }
    }

    fetchUser();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gray-50">
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Account Balance Card */}
        <div className="bg-gradient-to-br from-[#1E3A8A] to-blue-900 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between gap-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className=" rounded-full flex items-center justify-center">
                {/* <Wallet className="w-5 h-5 text-blue-900" /> */}
                <img src={wallet} alt="wallet" />
              </div>
              <h3 className="text-lg font-semibold">Account Balance</h3>
            </div>
            <button
              onClick={toggleBalanceVisibility}
              className="p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200"
              aria-label="Toggle balance visibility"
            >
              {showBalance ? (
                <Eye className="w-5 h-5 cursor-pointer" />
              ) : (
                <EyeOff className="w-5 h-5 cursor-pointer" />
              )}
            </button>
          </div>

          <div className="text-3xl font-bold">
            {showBalance ? `$${walletBalance ?? 0}` : "••••••"}
          </div>
        </div>

        {/* Deposit Card */}
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className=" rounded-full flex items-center gap-2 justify-center">
                <img src={deposit} alt="deposit" className="" />
                <h3 className="text-lg font-semibold">Deposit</h3>
              </div>
            </div>
            <button
              onClick={toggleDepositVisibility}
              className="p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200"
              aria-label="Toggle deposit amount visibility"
            >
              {showDepositAmount ? (
                <Eye className="w-5 h-5 cursor-pointer" />
              ) : (
                <EyeOff className="w-5 h-5 cursor-pointer" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between space-x-2 text-white  rounded-lg font-medium">
            <div className="text-3xl font-bold">
              {showDepositAmount ? `$${depositBalace}` : "••••••"}
            </div>
            <div
              className=" rounded-sm flex items-center gap-2 justify-center"
              onClick={() => setActiveTab("Deposit")}
            >
              <img
                src={fundaccount}
                alt="fund account"
                className="fund-account cursor-pointer"
              />
              <span className="text-sm">Fund your trading account</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-sm text-[#666666] font-medium">
        Duration: No trade
      </div>
      <CoinFeedDashboard /> */}
    </div>
  );
};

export default TradingDashboard;
