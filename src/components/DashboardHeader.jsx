import React from "react";
import { LogOut, Bell } from "lucide-react";
import { useAdmin } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { state, dispatch } = useAdmin();
  const navigate = useNavigate();
  // Handle logout
  const handleLogout = () => {
    console.log(localStorage.getItem("authToken"));

    localStorage.removeItem("authToken");
    dispatch({ type: "SET_AUTHENTICATED", payload: false });
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: Date.now().toString(),
        type: "info",
        message: "Successfully logged out",
      },
    });

    navigate("/login");
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                <Bell className="h-5 w-5" />
                {state.stats.pendingApprovals > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {state.stats.pendingApprovals}
                  </span>
                )}
              </button>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors cursor-pointer">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
