import React, { useState } from 'react';
import { Edit2, Save, X, DollarSign } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

const BalanceEditor = ({ userId, currentBalance, userName }) => {
  const { dispatch } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [newBalance, setNewBalance] = useState(currentBalance.toString());
  const [error, setError] = useState('');

  const handleSave = () => {
    const balance = parseFloat(newBalance);
    
    if (isNaN(balance) || balance < 0) {
      setError('Please enter a valid positive number');
      return;
    }

    dispatch({ type: 'UPDATE_WALLET_BALANCE', payload: { userId, balance } });
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        id: Date.now().toString(),
        type: 'success',
        message: `Updated wallet balance for ${userName} to $${balance.toLocaleString()}`
      }
    });
    
    setIsEditing(false);
    setError('');
  };

  const handleCancel = () => {
    setNewBalance(currentBalance.toString());
    setIsEditing(false);
    setError('');
  };

  if (isEditing) {
    return (
      <div className="space-y-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <DollarSign className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="number"
            value={newBalance}
            onChange={(e) => setNewBalance(e.target.value)}
            className="block w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter new balance"
            autoFocus
          />
        </div>
        {error && (
          <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
        )}
        <div className="flex space-x-2">
          <button
            onClick={handleSave}
            className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 cursor-pointer focus:ring-offset-2 focus:ring-green-500 transition-colors"
          >
            <Save className="h-3 w-3 mr-1 " />
            Save
          </button>
          <button
            onClick={handleCancel}
            className="cursor-pointer inline-flex items-center px-2 py-1 border border-gray-300 dark:border-gray-600 text-xs font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            <X className="h-3 w-3 mr-1" />
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-900 dark:text-white">
        ${currentBalance.toLocaleString()}
      </span>
      <button
        onClick={() => setIsEditing(true)}
        className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <Edit2 className="h-4 w-4" />
      </button>
    </div>
  );
};

export default BalanceEditor;