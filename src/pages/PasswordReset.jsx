import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import loginbg from "../assets/loginbg.png";
import sentrafundcoin from "../assets/sentrafundcoin.png";
import BrandIcon from "../components/BrandIcon";
import { password_reset } from "../api/auth";
import { useNavigate, NavLink } from "react-router-dom";

export default function PasswordReset() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic validation
    if (!formData.email) {
      setError("Please enter both email and password");
      setIsLoading(false);
      return;
    }

    try {
      const payload = JSON.stringify({
        email: formData.email,
      });
      const response = await password_reset(payload);

      console.log("Login response:", response);

      if (response.status === 200) {
        console.log("reset email sent:", response);
        setSuccess("Please check your mail for password reset e-mail");
        setTimeout(() => {
          navigate("/password-reset-confirm"); // Redirect to dashboard or home page
        }, 5000); // Redirect after 2 second
      } else {
        const errorData = response;
        console.error("password reset failed:", errorData);
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("A network error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Background Image */}
      <div className="hidden max-h-screen lg:flex lg:w-1/2 relative">
        <img src={loginbg} alt="loginbg" className="object-cover" />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 bg-[#F4FFFF] flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <BrandIcon type={"auth_logo"} />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Reset Password
            </h2>
          </div>

          {/* Display Error Message */}
          {error && (
            <div className="mb-4 text-red-600 text-center text-sm font-medium">
              {error}
            </div>
          )}
          {/* Display Success Message */}
          {success && (
            <div className="mb-4 text-green-600 text-center text-sm font-medium">
              {success}
            </div>
          )}

          {/* Form */}
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="yourname@email.com"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#F59E0B] hover:bg-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F59E0B] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer transform hover:scale-105 active:scale-95"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    ...
                  </div>
                ) : (
                  "Request Password Reset"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
