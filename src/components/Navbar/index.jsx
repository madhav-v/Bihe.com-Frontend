import { AiOutlineHome } from "react-icons/ai";
import { BsPersonAdd } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "/logo1.png";
import { useEffect, useState } from "react";
import authSvc from "../../services/auth.service";
import { toast } from "react-toastify";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileDetails, setProfileDetails] = useState();

  const navigate = useNavigate();

  const profileData = async () => {
    try {
      let response = await authSvc.getUserWithProfile();
      console.log("res", response);
      setProfileDetails(response.result.profile);
    } catch (exception) {
      console.log(exception);
      throw exception;
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Thanks for using our service.");
    navigate("/login");
  };
  useEffect(() => {
    profileData();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <header className="Navbar bg-[#e83868] z-50 shadow-sm flex justify-between items-center md:fixed w-full left-0 top-0 h-20">
        <div className="basis-1/2 flex justify-start items-center">
          <NavLink className="navbar-logo basis-1/3" to="/user">
            <img src={logo} alt="logo" className="w-20 ml-7 rounded-[40%]" />
          </NavLink>
          <div className="ml-auto basis-1/2 text-white text-lg font-bold">
            Love Begins Here
          </div>
        </div>
        <div className="basis-1/2 xl:basis-1/2  md:flex md:justify-between items-center hidden">
          <ul className="flex md:justify-between w-full md:basis-1/2 mr-3">
            <li className="navbar-item inline-block mt-2 hover:bg-[#e86f6f] px-3 py-2 rounded-xl">
              <NavLink
                className="navbar-link cool-link"
                aria-current="page"
                to="/user"
              >
                <AiOutlineHome size={30} color="white" />
              </NavLink>
            </li>
            <li className="navbar-item mt-2 hover:bg-screen py-2 px-3 rounded-xl hover:bg-[#e86f73]">
              <NavLink className="navbar-link cool-link" to="/user">
                <BsPersonAdd size={30} color="white" />
              </NavLink>
            </li>
            <li className="navbar-item mt-2 hover:bg-screen py-2 px-3 rounded-xl hover:bg-[#e86f6f]">
              <NavLink className="navbar-link cool-link" to="/chat">
                <RiMessengerLine size={30} color="white" />
              </NavLink>
            </li>

            <li className="navbar-item mt-2 hover:bg-screen py-2 px-3 rounded-xl hover:bg-[#e86f6f]">
              <NavLink className="navbar-link cool-link" to="/user">
                <MdNotificationsNone size={30} color="white" />
              </NavLink>
            </li>
            <li className="navbar-item mt-2 hover:bg-screen py-2 px-3 rounded-xl relative hover:bg-[#e86f6f]">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="navbar-link cool-link flex items-center"
                >
                  <FaRegUser size={25} color="white" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 top-8 right-0 bg-white shadow-lg rounded-md mt-2 w-40">
                    <ul>
                      <li>
                        <NavLink
                          to="/profile"
                          className="block px-4 py-2 text-black hover:bg-gray-200"
                        >
                          My Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={`/editProfile`}
                          className="block px-4 py-2 text-black hover:bg-gray-200"
                        >
                          Edit Profile
                        </NavLink>
                      </li>
                      <li>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-black hover:bg-gray-200"
                          onClick={handleLogout}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;
