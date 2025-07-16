import React, { useState, useEffect } from "react";
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

  useEffect(() => {
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
    return price >= 1
      ? `$ ${price.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`
      : `$ ${price.toFixed(6)}`;
  };

  const formatChange = (change) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change.toFixed(2)}%`;
  };

  const getChangeColor = (change) =>
    change >= 0 ? "text-green-400" : "text-red-400";

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-10">
          <h1 className="text-yellow-500 text-lg sm:text-xl font-semibold text-center sm:text-left">
            {activeTraders.toLocaleString()}+ Active Traders
          </h1>
        </div>

        {/* Coin Feed */}
        <div className="bg-[#1A2B4C] rounded-2xl p-4 sm:p-6 shadow-xl">
          <div className="space-y-4">
            {cryptoData.map((crypto) => (
              <div
                key={crypto.symbol}
                className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl px-4 py-4 sm:py-5 hover:scale-[1.01] transition transform duration-300">
                {/* Left - Icon & Name */}
                <div className="flex items-center space-x-3 flex-1 min-w-0 mb-3 sm:mb-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                    <img
                      src={crypto.icon}
                      alt={crypto.symbol}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-medium text-sm sm:text-base truncate">
                      {crypto.name}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {crypto.symbol}
                    </p>
                  </div>
                </div>

                {/* Right - Price & Change */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end space-x-4 sm:space-x-6 w-full sm:w-auto">
                  {/* Price */}
                  <p className="text-white font-semibold text-sm sm:text-base">
                    {formatPrice(crypto.price)}
                  </p>

                  {/* Change */}
                  <div className="flex items-center space-x-1">
                    <img
                      src={crypto.change >= 0 ? greenUp : redDown}
                      alt="change-icon"
                      className="w-4 h-4"
                    />
                    <span
                      className={`font-semibold text-xs sm:text-sm ${getChangeColor(
                        crypto.change
                      )}`}>
                      {formatChange(crypto.change)}
                    </span>
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
