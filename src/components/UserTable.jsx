import React, { useMemo } from "react";
import { ChevronDown, ChevronUp, Mail, Phone, Calendar } from "lucide-react";
import { useAdmin } from "../context/AdminContext";
import BalanceEditor from "./BalanceEditor";
import InvestmentActions from "./InvestmentAction";

const UserTable = () => {
  const { state } = useAdmin();
  const [expandedUsers, setExpandedUsers] = React.useState(new Set());

  const filteredUsers = useMemo(() => {
    let filtered = state.users;

    // Search filter
    if (state.searchTerm) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          user.phone.includes(state.searchTerm)
      );
    }

    // Status filter
    if (state.statusFilter !== "all") {
      filtered = filtered.filter((user) => user.status === state.statusFilter);
    }

    return filtered;
  }, [state.users, state.searchTerm, state.statusFilter]);

  const toggleUserExpansion = (userId) => {
    const newExpanded = new Set(expandedUsers);
    if (newExpanded.has(userId)) {
      newExpanded.delete(userId);
    } else {
      newExpanded.add(userId);
    }
    setExpandedUsers(newExpanded);
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      active:
        "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      inactive:
        "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400",
      suspended: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
    };

    return (
      <span
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          User Management ({filteredUsers.length} users)
        </h3>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {filteredUsers.map((user) => (
          <div key={user.id}>
            {/* User Row */}
            <div className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleUserExpansion(user.id)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition-colors">
                    {expandedUsers.has(user.id) ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      {user.name}
                    </h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Mail className="h-3 w-3 mr-1" />
                        {user.email}
                      </div>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Phone className="h-3 w-3 mr-1" />
                        {user.phone}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Wallet Balance
                    </p>
                    <BalanceEditor
                      userId={user.id}
                      currentBalance={user.walletBalance}
                      userName={user.name}
                    />
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Investments
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {user.investments.length}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Status
                    </p>
                    {getStatusBadge(user.status)}
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      <Calendar className="h-3 w-3 inline mr-1" />
                      Joined
                    </p>
                    <p className="text-xs text-gray-900 dark:text-white">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded Investment Details */}
            {expandedUsers.has(user.id) && (
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600">
                <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                  Investment Plans ({user.investments.length})
                </h5>

                {user.investments.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {user.investments.map((investment) => (
                      <InvestmentActions
                        key={investment.id}
                        investment={investment}
                        userName={user.name}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    No investments found for this user.
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="px-6 py-12 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            No users found matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default UserTable;
