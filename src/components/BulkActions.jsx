import React from "react";
import { CheckSquare, Square, Check } from "lucide-react";
import { useAdmin } from "../context/AdminContext";

const BulkActions = () => {
  const { state, dispatch } = useAdmin();

  const pendingInvestments = state.investments.filter(
    (inv) => inv.status === "pending"
  );
  const selectedInvestments = pendingInvestments.filter((inv) =>
    state.selectedUsers.includes(inv.userId)
  );

  const handleBulkApprove = () => {
    if (selectedInvestments.length === 0) return;

    const investmentIds = selectedInvestments.map((inv) => inv.id);
    dispatch({ type: "BULK_APPROVE_INVESTMENTS", payload: investmentIds });
    dispatch({ type: "CLEAR_USER_SELECTION" });
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: Date.now().toString(),
        type: "success",
        message: `Approved ${selectedInvestments.length} investments in bulk`,
      },
    });
  };

  const toggleAllSelection = () => {
    if (state.selectedUsers.length === state.users.length) {
      dispatch({ type: "CLEAR_USER_SELECTION" });
    } else {
      state.users.forEach((user) => {
        if (!state.selectedUsers.includes(user.id)) {
          dispatch({ type: "TOGGLE_USER_SELECTION", payload: user.id });
        }
      });
    }
  };

  if (pendingInvestments.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleAllSelection}
            className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            {state.selectedUsers.length === state.users.length ? (
              <CheckSquare className="h-4 w-4 mr-2" />
            ) : (
              <Square className="h-4 w-4 mr-2" />
            )}
            Select All Users
          </button>

          {state.selectedUsers.length > 0 && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {state.selectedUsers.length} users selected (
              {selectedInvestments.length} pending investments)
            </span>
          )}
        </div>

        {selectedInvestments.length > 0 && (
          <button
            onClick={handleBulkApprove}
            className="inline-flex cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
            <Check className="h-4 w-4 mr-2" />
            Approve {selectedInvestments.length} Investments
          </button>
        )}
      </div>
    </div>
  );
};

export default BulkActions;
