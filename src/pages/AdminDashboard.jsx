import { p } from "framer-motion/client";
import Header from "../components/DashboardHeader";
import StatCards from "../components/StatCards";
import SearchAndFilters from "../components/SearchAndFilters";
import BulkActions from "../components/BulkActions";
import UserTable from "../components/UserTable";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-6 space-y-6">
   <Header />
      <StatCards />
      <SearchAndFilters />
      <BulkActions />
      <UserTable />
    </div>
  );
};

export default AdminDashboard;
