import React from "react";
import { Users, TrendingUp, Clock, DollarSign } from "lucide-react";
import { useAdmin } from "../context/AdminContext";

const StatCards = () => {
  const { state } = useAdmin();

  const stats = [
    {
      name: "Total Users",
      value: state.stats.totalUsers,
      icon: Users,
      color: "bg-blue-500",
      change: "+12%",
      changeType: "positive",
    },
    {
      name: "Active Investments",
      value: state.stats.totalInvestments,
      icon: TrendingUp,
      color: "bg-green-500",
      change: "+8%",
      changeType: "positive",
    },
    {
      name: "Pending Approvals",
      value: state.stats.pendingApprovals,
      icon: Clock,
      color: "bg-yellow-500",
      change: "-15%",
      changeType: "negative",
    },
    {
      name: "Total Invested",
      value: `$${state.stats.totalInvested.toLocaleString()}`,
      icon: DollarSign,
      color: "bg-purple-500",
      change: "+23%",
      changeType: "positive",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 p-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.name}
              </p>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p
                  className={`ml-2 text-sm font-medium ${
                    stat.changeType === "positive"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}>
                  {stat.change}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
