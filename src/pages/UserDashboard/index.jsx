import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar";
import Chat from "../../components/Chat";

const UserDashboard = () => {
  return (
    <>
      <NavBar />

      <div className="flex items-center justify-center h-screen ">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
          <p className="text-lg">
            We are working on exciting new features for you. Stay tuned!
          </p>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
