import React from 'react';
import { Check, X, Clock } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

const InvestmentActions = ({ investment, userName }) => {
  const { dispatch } = useAdmin();

  const handleApprove = () => {
    dispatch({ type: 'APPROVE_INVESTMENT', payload: investment.id });
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        id: Date.now().toString(),
        type: 'success',
        message: `Approved ${investment.planName} investment for ${userName}`
      }
    });
  };

  const handleReject = () => {
    dispatch({ type: 'REJECT_INVESTMENT', payload: investment.id });
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        id: Date.now().toString(),
        type: 'warning',
        message: `Rejected ${investment.planName} investment for ${userName}`
      }
    });
  };

  const getStatusBadge = (status) => {
    const badgeClasses = {
      pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      approved: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      rejected: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      completed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
    };

    const statusIcons = {
      pending: <Clock className="h-3 w-3" />,
      approved: <Check className="h-3 w-3" />,
      rejected: <X className="h-3 w-3" />,
      completed: <Check className="h-3 w-3" />
    };

    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badgeClasses[status]}`}>
        {statusIcons[status]}
        <span className="ml-1 capitalize">{status}</span>
      </span>
    );
  };

  const getRiskBadge = (risk) => {
    const riskClasses = {
      low: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      high: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    };

    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${riskClasses[risk]}`}>
        {risk.toUpperCase()} RISK
      </span>
    );
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
          {investment.planName}
        </h4>
        <div className="flex space-x-2">
          {getStatusBadge(investment.status)}
          {getRiskBadge(investment.riskLevel)}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500 dark:text-gray-400">Amount</p>
          <p className="font-medium text-gray-900 dark:text-white">
            ${investment.amount.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Expected Return</p>
          <p className="font-medium text-gray-900 dark:text-white">
            ${investment.expectedReturn.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Duration</p>
          <p className="font-medium text-gray-900 dark:text-white">
            {investment.duration}
          </p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Start Date</p>
          <p className="font-medium text-gray-900 dark:text-white">
            {new Date(investment.startDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      {investment.status === 'pending' && (
        <div className="flex space-x-2 pt-2">
          <button
            onClick={handleApprove}
            className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
          >
            <Check className="h-4 w-4 mr-1" />
            Approve
          </button>
          <button
            onClick={handleReject}
            className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
          >
            <X className="h-4 w-4 mr-1" />
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default InvestmentActions;