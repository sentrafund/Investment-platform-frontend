import React, { createContext, useContext, useReducer } from 'react';

const AdminContext = createContext(null);

// Mock data
const mockUsers = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    walletBalance: 15000,
    status: 'active',
    joinDate: '2024-01-15',
    lastLogin: '2024-12-10',
    investments: [
      {
        id: 'inv1',
        userId: '1',
        planName: 'Growth Portfolio',
        amount: 5000,
        expectedReturn: 6500,
        status: 'pending',
        startDate: '2024-12-15',
        endDate: '2025-12-15',
        duration: '12 months',
        riskLevel: 'medium'
      },
      {
        id: 'inv2',
        userId: '1',
        planName: 'Conservative Bonds',
        amount: 10000,
        expectedReturn: 11000,
        status: 'approved',
        startDate: '2024-11-01',
        endDate: '2025-11-01',
        duration: '12 months',
        riskLevel: 'low'
      }
    ]
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 987-6543',
    walletBalance: 8500,
    status: 'active',
    joinDate: '2024-02-20',
    lastLogin: '2024-12-09',
    investments: [
      {
        id: 'inv3',
        userId: '2',
        planName: 'High Yield Stocks',
        amount: 7500,
        expectedReturn: 9750,
        status: 'pending',
        startDate: '2024-12-20',
        endDate: '2025-06-20',
        duration: '6 months',
        riskLevel: 'high'
      }
    ]
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 456-7890',
    walletBalance: 25000,
    status: 'active',
    joinDate: '2024-03-10',
    lastLogin: '2024-12-11',
    investments: [
      {
        id: 'inv4',
        userId: '3',
        planName: 'Crypto Portfolio',
        amount: 15000,
        expectedReturn: 22500,
        status: 'approved',
        startDate: '2024-10-01',
        endDate: '2025-10-01',
        duration: '12 months',
        riskLevel: 'high'
      },
      {
        id: 'inv5',
        userId: '3',
        planName: 'Real Estate Fund',
        amount: 8000,
        expectedReturn: 9600,
        status: 'pending',
        startDate: '2024-12-25',
        endDate: '2026-12-25',
        duration: '24 months',
        riskLevel: 'medium'
      }
    ]
  }
];

const initialState = {
  users: mockUsers,
  investments: mockUsers.flatMap(user => user.investments),
  stats: {
    totalUsers: mockUsers.length,
    activeUsers: mockUsers.filter(u => u.status === 'active').length,
    totalInvestments: mockUsers.flatMap(u => u.investments).length,
    pendingApprovals: mockUsers.flatMap(u => u.investments).filter(i => i.status === 'pending').length,
    totalInvested: mockUsers.flatMap(u => u.investments).reduce((sum, i) => sum + i.amount, 0),
    totalReturns: mockUsers.flatMap(u => u.investments).reduce((sum, i) => sum + i.expectedReturn, 0)
  },
  notifications: [],
  theme: 'light',
  isAuthenticated: false,
  searchTerm: '',
  statusFilter: 'all',
  selectedUsers: []
};

function adminReducer(state, action) {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.payload.id ? action.payload : user
        )
      };
    
    case 'UPDATE_WALLET_BALANCE':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.userId
            ? { ...user, walletBalance: action.payload.balance }
            : user
        )
      };
    
    case 'APPROVE_INVESTMENT':
      return {
        ...state,
        users: state.users.map(user => ({
          ...user,
          investments: user.investments.map(inv =>
            inv.id === action.payload ? { ...inv, status: 'approved' } : inv
          )
        })),
        investments: state.investments.map(inv =>
          inv.id === action.payload ? { ...inv, status: 'approved' } : inv
        ),
        stats: {
          ...state.stats,
          pendingApprovals: state.stats.pendingApprovals - 1
        }
      };
    
    case 'REJECT_INVESTMENT':
      return {
        ...state,
        users: state.users.map(user => ({
          ...user,
          investments: user.investments.map(inv =>
            inv.id === action.payload ? { ...inv, status: 'rejected' } : inv
          )
        })),
        investments: state.investments.map(inv =>
          inv.id === action.payload ? { ...inv, status: 'rejected' } : inv
        ),
        stats: {
          ...state.stats,
          pendingApprovals: state.stats.pendingApprovals - 1
        }
      };
    
    case 'BULK_APPROVE_INVESTMENTS':
      return {
        ...state,
        users: state.users.map(user => ({
          ...user,
          investments: user.investments.map(inv =>
            action.payload.includes(inv.id) ? { ...inv, status: 'approved' } : inv
          )
        })),
        investments: state.investments.map(inv =>
          action.payload.includes(inv.id) ? { ...inv, status: 'approved' } : inv
        ),
        stats: {
          ...state.stats,
          pendingApprovals: state.stats.pendingApprovals - action.payload.length
        }
      };
    
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    
    case 'SET_STATUS_FILTER':
      return { ...state, statusFilter: action.payload };
    
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    
    case 'SET_AUTHENTICATED':
      return { ...state, isAuthenticated: action.payload };
    
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      };
    
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };
    
    case 'TOGGLE_USER_SELECTION':
      return {
        ...state,
        selectedUsers: state.selectedUsers.includes(action.payload)
          ? state.selectedUsers.filter(id => id !== action.payload)
          : [...state.selectedUsers, action.payload]
      };
    
    case 'CLEAR_USER_SELECTION':
      return { ...state, selectedUsers: [] };
    
    default:
      return state;
  }
}

export function AdminProvider({ children }) {
  const [state, dispatch] = useReducer(adminReducer, initialState);

  return (
    <AdminContext.Provider value={{ state, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
}