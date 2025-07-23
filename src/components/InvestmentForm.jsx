import React, { useState } from "react";
import { ChevronDown, User, Mail, TrendingUp, CreditCard } from "lucide-react";
export default function InvestmentForm() {
  const [formData, setFormData] = useState({
    plan: "basic",
    paymentMethod: "bank_transfer",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const investmentPlans = ["basic", "pro_startup", "premium"];

  const paymentMethods = [
    "bank_transfer",
    "credit_card",
    "paypal",
    "cryptocurrency",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Package purchased successfully!");
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="sm: p-[1em] m-[1em] w-full sm:max-w-lg mx-auto bg-white rounded-2xl shadow-xl sm:p-8 space-y-6 transform hover:scale-[1.02] transition-all duration-300">
      {/* Name Field
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User
              className={`w-5 h-5 transition-colors duration-200 ${
                focusedField === "name" ? "text-amber-500" : "text-gray-400"
              }`}
            />
          </div>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            placeholder="Jane Doe"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white text-sm sm:text-base"
          />
        </div>
      </div> */}

      {/* Email Field
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail
              className={`w-5 h-5 transition-colors duration-200 ${
                focusedField === "email" ? "text-amber-500" : "text-gray-400"
              }`}
            />
          </div>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            placeholder="janedoe@gmail.com"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white text-sm sm:text-base"
          />
        </div>
      </div> */}

      {/* Investment Plan Dropdown */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Choose an investment plan
        </label>
        <div className="relative">
          <select
            value={formData.plan}
            onChange={(e) => handleInputChange("plan", e.target.value)}
            onFocus={() => setFocusedField("plan")}
            onBlur={() => setFocusedField(null)}
            className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white cursor-pointer text-sm sm:text-base">
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
      <div className="space-y-2">
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
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-[#F59E0B] text-white font-semibold py-3 sm:py-4 px-6 rounded-xl hover:from-amber-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base">
        {isSubmitting ? (
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
