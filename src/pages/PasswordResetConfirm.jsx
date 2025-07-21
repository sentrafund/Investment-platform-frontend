import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import loginbg from "../assets/loginbg.png";
import BrandIcon from "../components/BrandIcon";
import { password_reset_confirm } from "../api/auth";
import { useNavigate, useParams } from "react-router-dom";

export default function PasswordResetConfirm() {
  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { uid, token } = useParams();
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
    setSuccess("");

    const { password1, password2 } = formData;

    if (!password1 || !password2) {
      setError("Please enter both passwords");
      setIsLoading(false);
      return;
    }

    const payload = {
      new_password1: password1,
      new_password2: password2,
      uid: uid,
      token: token,
    };

    console.log("Payload:", {
      new_password1: password1,
      new_password2: password2,
      uid,
      token,
    });

    try {
      const response = await password_reset_confirm(payload);
      const data = await response.json;

      if (response.status === 200) {
        setSuccess("Password reset successful!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        console.error("Password reset failed:", data);
        const firstError =
          Object.values(data)?.[0]?.[0] || "Password reset failed.";
        setError(firstError);
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

      {/* Right Side - Form */}
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
              Confirm Password Reset
            </h2>
          </div>

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

          {/* Form */}
          <div className="space-y-6">
            {/* New Password */}
            <div>
              <label
                htmlFor="password1"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  id="password1"
                  name="password1"
                  type={showPassword ? "text" : "password"}
                  value={formData.password1}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="password2"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="password2"
                  name="password2"
                  type={showPassword ? "text" : "password"}
                  value={formData.password2}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
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
                    Resetting password
                  </div>
                ) : (
                  "Reset Password"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
