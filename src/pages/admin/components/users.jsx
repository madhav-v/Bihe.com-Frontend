import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3005/api/v1/auth/users",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3005/api/v1/auth/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
    setIsPopupOpen(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div key={user._id} className="border rounded-lg p-4">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 mr-2"
              onClick={() => handleViewProfile(user)}
            >
              View Profile
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => handleDelete(user._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <button
              className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800"
              onClick={handleClosePopup}
            >
              Close
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {selectedUser.name}'s Profile
            </h2>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            {selectedUser.profile && (
              <div>
                <p>
                  <strong>Full Name:</strong> {selectedUser.profile.fullname}
                </p>
                <p>
                  <strong>Height:</strong> {selectedUser.profile.height}
                </p>
                <p>
                  <strong>Religion:</strong> {selectedUser.profile.religion}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
