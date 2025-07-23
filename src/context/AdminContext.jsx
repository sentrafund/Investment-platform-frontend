import React, { createContext, useContext, useReducer } from "react";

const AdminContext = createContext(null);

// Mock data
const mockUsers = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    walletBalance: 15000,
    status: "active",
    joinDate: "2024-01-15",
    lastLogin: "2024-12-10",
    investments: [
      {
        id: "inv1",
        userId: "1",
        planName: "Basic",
        amount: 200,
        expectedReturn: 6500,
        status: "pending",
        startDate: "2024-12-15",
        endDate: "2025-12-15",
        duration: "12 months",
        riskLevel: "medium",
      },
      {
        id: "inv2",
        userId: "1",
        planName: "premium",
        amount: 10000,
        expectedReturn: 11000,
        status: "approved",
        startDate: "2024-11-01",
        endDate: "2025-11-01",
        duration: "12 months",
        riskLevel: "low",
      },
    ],
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 987-6543",
    walletBalance: 8500,
    status: "active",
    joinDate: "2024-02-20",
    lastLogin: "2024-12-09",
    investments: [
      {
        id: "inv3",
        userId: "2",
        planName: "High Yield Stocks",
        amount: 7500,
        expectedReturn: 9750,
        status: "pending",
        startDate: "2024-12-20",
        endDate: "2025-06-20",
        duration: "6 months",
        riskLevel: "high",
      },
    ],
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+1 (555) 456-7890",
    walletBalance: 25000,
    status: "active",
    joinDate: "2024-03-10",
    lastLogin: "2024-12-11",
    investments: [
      {
        id: "inv4",
        userId: "3",
        planName: "Crypto Portfolio",
        amount: 15000,
        expectedReturn: 22500,
        status: "approved",
        startDate: "2024-10-01",
        endDate: "2025-10-01",
        duration: "12 months",
        riskLevel: "high",
      },
      {
        id: "inv5",
        userId: "3",
        planName: "Real Estate Fund",
        amount: 8000,
        expectedReturn: 9600,
        status: "pending",
        startDate: "2024-12-25",
        endDate: "2026-12-25",
        duration: "24 months",
        riskLevel: "medium",
      },
    ],
  },
  {
    id: "4",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 789-0123",
    walletBalance: 18500,
    status: "active",
    joinDate: "2024-01-15",
    lastLogin: "2024-12-10",
    investments: [
      {
        id: "inv6",
        userId: "4",
        planName: "Tech Stocks Portfolio",
        amount: 12000,
        expectedReturn: 16800,
        status: "approved",
        startDate: "2024-08-15",
        endDate: "2025-08-15",
        duration: "12 months",
        riskLevel: "medium",
      },
      {
        id: "inv7",
        userId: "4",
        planName: "Green Energy Fund",
        amount: 5000,
        expectedReturn: 6250,
        status: "active",
        startDate: "2024-09-01",
        endDate: "2026-09-01",
        duration: "24 months",
        riskLevel: "low",
      },
      {
        id: "inv8",
        userId: "4",
        planName: "Dividend Growth",
        amount: 3500,
        expectedReturn: 4200,
        status: "completed",
        startDate: "2024-01-01",
        endDate: "2024-12-01",
        duration: "11 months",
        riskLevel: "low",
      },
    ],
  },
  {
    id: "5",
    name: "David Rodriguez",
    email: "david.rodriguez@email.com",
    phone: "+1 (555) 234-5678",
    walletBalance: 7250,
    status: "inactive",
    joinDate: "2024-05-22",
    lastLogin: "2024-11-28",
    investments: [
      {
        id: "inv9",
        userId: "5",
        planName: "Mutual Fund Plus",
        amount: 4000,
        expectedReturn: 4800,
        status: "active",
        startDate: "2024-06-01",
        endDate: "2025-06-01",
        duration: "12 months",
        riskLevel: "low",
      },
    ],
  },
  {
    id: "6",
    name: "Emily Watson",
    email: "emily.watson@email.com",
    phone: "+1 (555) 890-1234",
    walletBalance: 42000,
    status: "active",
    joinDate: "2023-11-08",
    lastLogin: "2024-12-12",
    investments: [
      {
        id: "inv10",
        userId: "6",
        planName: "Premium Growth",
        amount: 25000,
        expectedReturn: 35000,
        status: "approved",
        startDate: "2024-11-01",
        endDate: "2026-11-01",
        duration: "24 months",
        riskLevel: "high",
      },
      {
        id: "inv11",
        userId: "6",
        planName: "Balanced Portfolio",
        amount: 10000,
        expectedReturn: 12500,
        status: "active",
        startDate: "2024-07-15",
        endDate: "2025-07-15",
        duration: "12 months",
        riskLevel: "medium",
      },
      {
        id: "inv12",
        userId: "6",
        planName: "Bond Investment",
        amount: 6000,
        expectedReturn: 6900,
        status: "pending",
        startDate: "2025-01-01",
        endDate: "2026-01-01",
        duration: "12 months",
        riskLevel: "low",
      },
    ],
  },
  {
    id: "7",
    name: "James Thompson",
    email: "james.thompson@email.com",
    phone: "+1 (555) 567-8901",
    walletBalance: 3800,
    status: "suspended",
    joinDate: "2024-08-03",
    lastLogin: "2024-12-05",
    investments: [
      {
        id: "inv13",
        userId: "7",
        planName: "Starter Investment",
        amount: 2000,
        expectedReturn: 2400,
        status: "rejected",
        startDate: "2024-09-15",
        endDate: "2025-09-15",
        duration: "12 months",
        riskLevel: "low",
      },
      {
        id: "inv14",
        userId: "7",
        planName: "Recovery Plan",
        amount: 1500,
        expectedReturn: 1725,
        status: "pending",
        startDate: "2024-12-20",
        endDate: "2025-12-20",
        duration: "12 months",
        riskLevel: "low",
      },
    ],
  },
];

const initialState = {
  users: mockUsers,
  investments: mockUsers.flatMap((user) => user.investments),
  stats: {
    totalUsers: mockUsers.length,
    activeUsers: mockUsers.filter((u) => u.status === "active").length,
    totalInvestments: mockUsers.flatMap((u) => u.investments).length,
    pendingApprovals: mockUsers
      .flatMap((u) => u.investments)
      .filter((i) => i.status === "pending").length,
    totalInvested: mockUsers
      .flatMap((u) => u.investments)
      .reduce((sum, i) => sum + i.amount, 0),
    totalReturns: mockUsers
      .flatMap((u) => u.investments)
      .reduce((sum, i) => sum + i.expectedReturn, 0),
  },
  notifications: [],
  theme: "light",
  isAuthenticated: false,
  searchTerm: "",
  statusFilter: "all",
  selectedUsers: [],
};

function adminReducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case "UPDATE_WALLET_BALANCE":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userId
            ? { ...user, walletBalance: action.payload.balance }
            : user
        ),
      };

    case "APPROVE_INVESTMENT":
      return {
        ...state,
        users: state.users.map((user) => ({
          ...user,
          investments: user.investments.map((inv) =>
            inv.id === action.payload ? { ...inv, status: "approved" } : inv
          ),
        })),
        investments: state.investments.map((inv) =>
          inv.id === action.payload ? { ...inv, status: "approved" } : inv
        ),
        stats: {
          ...state.stats,
          pendingApprovals: state.stats.pendingApprovals - 1,
        },
      };

    case "REJECT_INVESTMENT":
      return {
        ...state,
        users: state.users.map((user) => ({
          ...user,
          investments: user.investments.map((inv) =>
            inv.id === action.payload ? { ...inv, status: "rejected" } : inv
          ),
        })),
        investments: state.investments.map((inv) =>
          inv.id === action.payload ? { ...inv, status: "rejected" } : inv
        ),
        stats: {
          ...state.stats,
          pendingApprovals: state.stats.pendingApprovals - 1,
        },
      };

    case "BULK_APPROVE_INVESTMENTS":
      return {
        ...state,
        users: state.users.map((user) => ({
          ...user,
          investments: user.investments.map((inv) =>
            action.payload.includes(inv.id)
              ? { ...inv, status: "approved" }
              : inv
          ),
        })),
        investments: state.investments.map((inv) =>
          action.payload.includes(inv.id) ? { ...inv, status: "approved" } : inv
        ),
        stats: {
          ...state.stats,
          pendingApprovals:
            state.stats.pendingApprovals - action.payload.length,
        },
      };

    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };

    case "SET_STATUS_FILTER":
      return { ...state, statusFilter: action.payload };

    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    case "SET_AUTHENTICATED":
      return { ...state, isAuthenticated: action.payload };

    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };

    case "REMOVE_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter(
          (n) => n.id !== action.payload
        ),
      };

    case "TOGGLE_USER_SELECTION":
      return {
        ...state,
        selectedUsers: state.selectedUsers.includes(action.payload)
          ? state.selectedUsers.filter((id) => id !== action.payload)
          : [...state.selectedUsers, action.payload],
      };

    case "CLEAR_USER_SELECTION":
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
    throw new Error("useAdmin must be used within AdminProvider");
  }
  return context;
}
