import { useEffect, useState } from "react";
import { getUserProfile } from "../api/auth";
function ProfileTab() {
  const [user, setUser] = useState(null); // or {} if you prefer an empty object
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

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-2">User Profile</h1>
      <div className="space-y-2">
        <p>{/* <strong>ID:</strong> {user.pk} */}</p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>First Name:</strong> {user.first_name}
        </p>
        <p>
          <strong>Last Name:</strong> {user.last_name}
        </p>
      </div>
    </div>
  );
}

export default ProfileTab;
