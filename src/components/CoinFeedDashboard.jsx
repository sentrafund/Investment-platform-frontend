import React, { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import bitcoin from "../assets/bitcoin .png";
import ethereum from "../assets/ethereum.png";
import tether from "../assets/tether-usdt.png";
import solana from "../assets/solana.png";
import xrp from "../assets/xrp.png";
import dogecoin from "../assets/dogecoin.png";
import greenUp from "../assets/green-drop-up.png";
import redDown from "../assets/red-drop-down.png";
export default function CoinFeedDashboard() {
  const [cryptoData, setCryptoData] = useState([
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 117639.52,
      change: -0.17,
      icon: bitcoin,
      color: "text-orange-500",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: 2945.14,
      change: -1.06,
      icon: ethereum,
      color: "text-blue-400",
    },
    {
      name: "Tether",
      symbol: "USDT",
      price: 1.0,
      change: 0.02,
      icon: tether,
      color: "text-green-500",
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: 161.08,
      change: -1.74,
      icon: solana,
      color: "text-purple-500",
    },
    {
      name: "XRP",
      symbol: "XRP",
      price: 2.77,
      change: 4.8,
      icon: xrp,
      color: "text-gray-400",
    },
    {
      name: "Dogecoin",
      symbol: "DOGE",
      price: 0.198142,
      change: -0.18,
      icon: dogecoin,
      color: "text-yellow-500",
    },
  ]);

  const [activeTraders] = useState(25000);
  const [animatedValues, setAnimatedValues] = useState({});

  useEffect(() => {
    // Simulate real-time price updates
    const interval = setInterval(() => {
      setCryptoData((prev) =>
        prev.map((crypto) => ({
          ...crypto,
          price: crypto.price + (Math.random() - 0.5) * (crypto.price * 0.001),
          change: crypto.change + (Math.random() - 0.5) * 0.5,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price) => {
    if (price >= 1) {
      return `$ ${price.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    } else {
      return `$ ${price.toFixed(6)}`;
    }
  };

  const formatChange = (change) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change.toFixed(2)}%`;
  };

  const getChangeColor = (change) => {
    return change >= 0 ? "text-green-400" : "text-red-400";
  };

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <h1 className="text-yellow-500 text-lg sm:text-xl font-semibold">
              {activeTraders.toLocaleString()}+ Active Traders
            </h1>
          </div>
        </div>

        {/* Crypto Cards */}
        <div className="bg-[#1A2B4C] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl">
          <div className="space-y-3 sm:space-y-4">
            {cryptoData.map((crypto, index) => (
              <div
                key={crypto.symbol}
                className="group backdrop-blur-sm  rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300 transform hover:scale-[1.01]">
                <div className="flex items-center justify-between">
                  {/* Left side - Icon and Name */}
                  <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                    <div
                      className={`
                      w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl
                      ${crypto.color} group-hover:scale-110 transition-transform duration-200
                    `}>
                      <img src={crypto.icon} alt="crypto icon" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                        {crypto.name}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {crypto.symbol}
                      </p>
                    </div>
                  </div>

                  {/* Right side - Price and Change */}
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    {/* Price */}
                    <div className="text-right">
                      <p className="text-white font-semibold text-sm sm:text-base">
                        {formatPrice(crypto.price)}
                      </p>
                    </div>

                    {/* Change */}
                    <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
                      {crypto.change >= 0 ? (
                        // <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                        <img src={greenUp} alt="" />
                      ) : (
                        // <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                        <img src={redDown} alt="" />
                      )}
                      <span
                        className={`
                        font-semibold text-xs sm:text-sm
                        ${getChangeColor(crypto.change)}
                      `}>
                        {formatChange(crypto.change)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
