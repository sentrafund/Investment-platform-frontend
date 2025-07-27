import React, { useState } from "react";
import { ChevronDown, Coins, Mail, TrendingUp, CreditCard } from "lucide-react";
import { make_deposit } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function InvestmentForm() {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const investmentPlans = ["basic", "pro_startup", "premium"];

  const paymentMethods = [
    "bank_transfer",
    "credit_card",
    "paypal",
    "cryptocurrency",
  ];
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setError("");
    setSuccess("");
    e.preventDefault();

    if (!formData["amount"]) {
      setError("Please Enter Amount");
      setIsLoading(false);
      return;
    }

    const payload = {
      reference_plan: formData["reference_plan"],
      transaction_type: "deposit",
      amount: formData["amount"],
    };
    try {
      const response = await make_deposit(payload);

      if (response.status === 201) {
        setSuccess("Payment request sent successful!");
        setIsLoading(false);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        console.error("Payment request failed:", response);
        const firstError =
          Object.values(response)?.[0]?.[0] || "Payment request failed";
        setError(firstError);
        setIsLoading(false);
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="sm: p-[1em] m-[1em] w-full sm:max-w-lg mx-auto bg-white rounded-2xl shadow-xl sm:p-8 space-y-6 transform hover:scale-[1.02] transition-all duration-300">
      {/* Error Message */}
      {error && (
        <div className="mb-4 text-red-600 text-center text-sm font-medium">
          {error}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="mb-4 text-green-600 text-center text-sm font-medium">
          {success}
        </div>
      )}
      {/* Amount Field */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Amount
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Coins
              className={`w-5 h-5 transition-colors duration-200 ${
                focusedField === "amount" ? "text-amber-500" : "text-gray-400"
              }`}
            />
          </div>
          <input
            type="text"
            value={formData.amount}
            onChange={(e) => handleInputChange("amount", e.target.value)}
            onFocus={() => setFocusedField("amount")}
            onBlur={() => setFocusedField(null)}
            placeholder="120.00"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Investment Plan Dropdown */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Choose an investment plan
        </label>
        <div className="relative">
          <select
            value={formData.reference_plan}
            onChange={(e) =>
              handleInputChange("reference_plan", e.target.value)
            }
            onFocus={() => setFocusedField("reference_plan")}
            onBlur={() => setFocusedField(null)}
            className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white cursor-pointer text-sm sm:text-base"
          >
            {investmentPlans.map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ChevronDown
              className={`w-5 h-5 transition-all duration-200 ${
                focusedField === "plan"
                  ? "text-amber-500 rotate-180"
                  : "text-gray-400"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Payment Method Dropdown */}
      {/* <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Payment Method
        </label>
        <div className="relative">
          <select
            value={formData.paymentMethod}
            onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
            onFocus={() => setFocusedField("paymentMethod")}
            onBlur={() => setFocusedField(null)}
            className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white cursor-pointer text-sm sm:text-base">
            {paymentMethods.map((method) => (
              <option key={method} value={method} className="cursor-pointer">
                {method}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ChevronDown
              className={`w-5 h-5 transition-all duration-200 ${
                focusedField === "paymentMethod"
                  ? "text-amber-500 rotate-180"
                  : "text-gray-400"
              }`}
            />
          </div>
        </div>
      </div> */}

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full bg-[#F59E0B] text-white font-semibold py-3 sm:py-4 px-6 rounded-xl hover:from-amber-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <span>Purchase Package</span>
          </div>
        )}
      </button>
    </div>
  );
}
