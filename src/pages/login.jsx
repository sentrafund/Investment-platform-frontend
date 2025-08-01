import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import loginbg from "../assets/loginbg.png";
import sentrafundcoin from "../assets/sentrafundcoin.png";
import BrandIcon from "../components/BrandIcon";
import { getUserProfile, loginUser } from "../api/auth";
import { useNavigate, NavLink } from "react-router-dom";

export default function SentrafundLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password");
      setIsLoading(false);
      return;
    }

    try {
      const payload = JSON.stringify({
        username: formData.email,
        password: formData.password,
      });
      const response = await loginUser(payload);

      console.log("Login response:", response);

      if (response?.key) {
        console.log("Login successful:", response);
        // Save token and redirect user
        localStorage.setItem("authToken", response.key); // Store token (if 'key' is returned)
        const userProfile = await getUserProfile();

        setSuccess("Login successful!");
        setTimeout(() => {
          if (userProfile?.is_superuser) {
            navigate("/admin"); // Redirect to admin dashboard if user is superuser
          } else {
            navigate("/dashboard"); // Redirect to user dashboard
          }
        }, 2000); // Redirect after 2 second
      } else {
        const errorData = response;
        console.error("Login failed:", errorData);
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("A network error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // const handleGoogleLogin = () => {
  //   console.log("Google login");
  // };

  // const handleAppleLogin = () => {
  //   console.log("Apple login");
  // };

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
              Log in to continue
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
                className="block text-sm font-medium text-gray-700 mb-2">
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

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200">
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <div className="flex">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 font-semibold block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <NavLink to={"/password-reset"}>
                <p className=" text-amber-500 font-semibold hover:underline">
                  {" "}
                  Forgot password?{" "}
                </p>
              </NavLink>
            </div>

            {/* Submit Button */}
            <div>
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#F59E0B] hover:bg-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F59E0B] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer transform hover:scale-105 active:scale-95">
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
            <div className="flex text-center justify-center font-bold text-gray-600 gap-2">
              <p className="">Don't have an account?</p>
              <NavLink to={"/register"}>
                <p className=" text-amber-500 hover:underline "> Register </p>
              </NavLink>
            </div>

            {/* Divider */}
            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">
                  Continue with
                </span>
              </div>
            </div> */}

            {/* Social Login Buttons */}
            {/* <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleGoogleLogin}
                className="w-full inline-flex justify-center items-center border-none cursor-pointer focus:outline-none transition-all duration-200 transform hover:scale-105 active:scale-95">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </button>
              <button
                onClick={handleAppleLogin}
                className="w-full inline-flex justify-center items-center border-none cursor-pointer focus:outline-none transition-all duration-200 transform hover:scale-105 active:scale-95">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
