import React, { useState } from "react";
import copyIcon from "../assets/copyIcon.png";
import paypal from "../assets/paypal.png";
import mastercard from "../assets/mastercard.png";
import americanExpress from "../assets/americanexpress.png";
import visa from "../assets/visa.png";
import bankTransfer from "../assets/bankTransfer.png";
import {
  Copy,
  CheckCircle,
  DollarSign,
  CreditCard,
  Smartphone,
  Building2,
} from "lucide-react";
import investmentCardLogo from "../assets/investmentCardLogo.png";

export default function InvestmentPlanCard() {
  const [copied, setCopied] = useState(false);
  const [hoveredPayment, setHoveredPayment] = useState(null);

  const btcAddress = "1G4mMv9ad3M8KR3ctQZX5pUyMP4Whv3RG3";

  const paymentMethods = [
    { name: "PayPal" },
    { name: "MasterCard" },
    { name: "American Express" },
    { name: "Visa" },
    { name: "Bank Transfer" },
  ];

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(btcAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 w-full max-w-[90%] sm:max-w-md md:max-w-2xl lg:max-w-4xl">
        {/* Header Section */}
        <div className="bg-[#1E3A8A] p-6 md:p-8 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-20 h-20 border border-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full"></div>
          </div>

          {/* Icon */}
          <div className="mx-auto w-16 h-16">
            <img src={investmentCardLogo} alt="investmentcardlogo" />
          </div>

          {/* Title */}
          <h1 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
            Buy an Investment Plan
          </h1>

          {/* Subtitle */}
          <p className="text-purple-100 text-sm md:text-base leading-relaxed">
            Become an investor and start your journey with{" "}
            <span className="font-semibold text-amber-300">SENTRAFUND</span>
          </p>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 space-y-8">
          {/* BTC Address Section */}
          <div className="space-y-4">
            <h2 className="text-base md:text-lg font-semibold text-gray-800">
              Copy BTC address
            </h2>

            <div className="relative">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 pr-12 hover:bg-gray-100 transition-colors duration-200">
                <p className="text-xs sm:text-sm text-gray-600 font-mono break-all">
                  {btcAddress}
                </p>
              </div>

              <button
                onClick={handleCopyAddress}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer rounded-lg hover:bg-gray-200 transition-all duration-200 group">
                {copied ? (
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                ) : (
                  <img src={copyIcon} alt="copy address" />
                )}
              </button>
            </div>

            {copied && (
              <div className="text-sm text-yellow-400 font-medium animate-fade-in">
                ✓ Address copied to clipboard!
              </div>
            )}
          </div>

          {/* Payment Methods Section */}
          <div className="space-y-4">
            <h2 className="text-base md:text-lg font-semibold text-gray-800">
              We support
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={method.name}
                  onMouseEnter={() => setHoveredPayment(index)}
                  onMouseLeave={() => setHoveredPayment(null)}
                  className={`rounded-xl flex items-center justify-center p-2 bg-white border hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 cursor-pointer
                    ${hoveredPayment === index ? "border-none" : "border-none"}`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    {method.name === "PayPal" && <img src={paypal} alt="PayPal" />}
                    {method.name === "MasterCard" && <img src={mastercard} alt="MasterCard" />}
                    {method.name === "American Express" && <img src={americanExpress} alt="AmEx" />}
                    {method.name === "Visa" && <img src={visa} alt="Visa" />}
                    {method.name === "Bank Transfer" && <img src={bankTransfer} alt="Bank Transfer" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
