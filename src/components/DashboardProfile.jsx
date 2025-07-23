import { useEffect, useState } from "react";
import { getUserProfile } from "../api/auth";

function ProfileTab() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getUserProfile();
        setUser(data);
        console.log("user profile:", data);
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading)
    return (
      <div className="p-4 text-center text-gray-300">
        <p className="animate-pulse">Loading profile...</p>
      </div>
    );

  if (error)
    return (
      <div className="p-4 text-center text-red-400">
        <p>{error}</p>
      </div>
    );

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-xl mx-auto text-gray-300">
      <h1 className="text-2xl font-bold text-yellow-500 mb-4 text-center">
        User Profile
      </h1>
      <div className="bg-blue-900 p-4 rounded-xl shadow-md space-y-4">
        <div className="flex justify-between">
          <span className="text-yellow-500 font-medium">Email:</span>
          <span>{user.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-yellow-500 font-medium">First Name:</span>
          <span>{user.first_name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-yellow-500 font-medium">Last Name:</span>
          <span>{user.last_name}</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileTab;
