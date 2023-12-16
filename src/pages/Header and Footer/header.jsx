import React, { useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../App.css";
import logo from "../../../public/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const sidenav = useRef();
  const sidenavblur = useRef();
  const loggedInUser = useSelector((state) => state.User.loggedInUser);
  const sidenavs = () => {
    sidenav.current.style.bottom = "0px";
    sidenavblur.current.style.bottom = "0px";
  };
  const navigate = useNavigate();
  const sidenavss = () => {
    sidenav.current.style.bottom = "-100%";
    sidenavblur.current.style.bottom = "-100%";
  };
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Thanks for using our service.");
    navigate("/login");
  };
  return (
    <>
      <header className="Navbar">
        <NavLink className="navbar-logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="Navbar-items">
          <ul className="flex gap-3 md:gap-6 justify-end w-full">
            <li className="navbar-item mt-2">
              <NavLink
                className="navbar-link cool-link text-sm md:text-base"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="navbar-item mt-2">
              <NavLink
                className="navbar-link cool-link text-sm md:text-base"
                to="/"
              >
                About Bihe.com
              </NavLink>
            </li>
            <li className="navbar-item mt-2">
              <NavLink
                className="navbar-link cool-link text-sm md:text-base"
                to="/"
              >
                Help?
              </NavLink>
            </li>
          </ul>

          {!loggedInUser ? (
            <Link to="/login">
              <button className="nav-btn text-sm md:text-base text-white">
                Login
              </button>
            </Link>
          ) : (
            <Link to="/user">
              <button className="nav-btn text-sm md:text-base text-white">
                {loggedInUser.name.split(" ")[0]}{" "}
              </button>
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
