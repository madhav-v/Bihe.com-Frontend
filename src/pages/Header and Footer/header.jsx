import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";
import logo from "../../../public/logo.png";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const sidenav = useRef();
  const sidenavblur = useRef();
  const loggedInUser = useSelector((state) => state.User.loggedInUser);

  const sidenavs = () => {
    sidenav.current.style.bottom = "0px";
    sidenavblur.current.style.bottom = "0px";
  };

  const sidenavss = () => {
    sidenav.current.style.bottom = "-100%";
    sidenavblur.current.style.bottom = "-100%";
  };

  return (
    <>
      <header className="Navbar">
        <NavLink className="navbar-logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="Navbar-items">
          <ul className="flex gap-6 justify-end w-full">
            <li className="navbar-item mt-2">
              <NavLink
                className="navbar-link cool-link"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="navbar-item mt-2">
              <NavLink className="navbar-link cool-link" to="/">
                About Our Life Partner
              </NavLink>
            </li>
            <li className="navbar-item mt-2">
              <NavLink className="navbar-link cool-link" to="/">
                Help?
              </NavLink>
            </li>
          </ul>

          {!loggedInUser ? (
            // <li className="navbar-item">
            <Link to="/login">
              {" "}
              <button className="nav-btn text-white">Login</button>
            </Link>
          ) : (
            // </li>
            // <li className="navbar-item">
            <Link>
              {" "}
              <button
                className="nav-btn text-white"
                // onClick={(e) => handleLogout(e)}
              >
                Logout
              </button>
            </Link>
            // </li>
          )}
        </div>
        <div className="sidenavbar">
          {/* <VscThreeBars onClick={sidenavs} className="navbar-toggle" /> */}
          <div ref={sidenav} className="sidenav">
            <div className="snbar"></div>
            <ul className="sidenavbar-items">
              <li className="sidenavbar-item">
                <NavLink
                  className="navbar-link cool-link "
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="sidenavbar-item">
                <NavLink className="navbar-link cool-link" to="/about">
                  About Our Life Partner
                </NavLink>
              </li>
              <li className="sidenavbar-item">
                <NavLink className="navbar-link cool-link" to="/help">
                  Help?
                </NavLink>
              </li>
            </ul>

            <div>
              {!loggedInUser ? (
                <span className="sidenavbar-item ">
                  <Link to="/signup">
                    {" "}
                    <button className="sidenav-btn">Register Now</button>
                  </Link>
                </span>
              ) : (
                <span className="sidenavbar-item ">
                  <Link>
                    {" "}
                    <button
                      className="sidenav-btn"
                      //   onClick={(e) => handleLogout(e)}
                    >
                      Logout
                    </button>
                  </Link>
                </span>
              )}
            </div>
          </div>
          <div
            ref={sidenavblur}
            className="sidenavblur"
            onClick={sidenavss}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
