import { useEffect, useState } from "react";
import { get_all_transactions } from "../api/auth";

function HistoryTab() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await get_all_transactions();
        const data = response.data;
        // Sort by created_at DESC (newest first)
        const sorted = [...data].sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        setHistory(sorted);
        console.log("user transaction history:", data);
      } catch (err) {
        console.error("Error fetching user transaction history:", err);
        setError("Failed to load transaction history");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-300">
        <p className="animate-pulse">Loading transaction history...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-xl mx-auto text-gray-300">
      <h1 className="text-2xl font-bold text-yellow-500 mb-4 text-center">
        Deposit History
      </h1>
      {history.length === 0 ? (
        <p className="text-center">No deposit history found.</p>
      ) : (
        <div className="bg-blue-900 p-4 rounded-xl shadow-md space-y-4">
          {history.map((deposit, index) => (
            <div key={index} className="border-b border-blue-700 pb-2">
              <div className="flex justify-between">
                <span className="text-yellow-500 font-medium">Plan</span>
                <span>{deposit.reference_plan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-500 font-medium">Amount</span>
                <span>{deposit.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-500 font-medium">Status</span>
                <span>{deposit.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-500 font-medium">Timestamp</span>
                <span>
                  {new Date(deposit.created_at).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoryTab;
