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
            <Link to="/">
              <button className="nav-btn text-sm md:text-base text-white">
                Logout
              </button>
            </Link>
          )}
        </div>
        <div className="sidenavbar lg:hidden">
          <div ref={sidenav} className="sidenav">
            <div className="snbar"></div>
            <ul className="sidenavbar-items">
              <li className="sidenavbar-item">
                <NavLink
                  className="navbar-link cool-link text-sm md:text-base"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="sidenavbar-item">
                <NavLink
                  className="navbar-link cool-link text-sm md:text-base"
                  to="/about"
                >
                  About Our Life Partner
                </NavLink>
              </li>
              <li className="sidenavbar-item">
                <NavLink
                  className="navbar-link cool-link text-sm md:text-base"
                  to="/help"
                >
                  Help?
                </NavLink>
              </li>
            </ul>

            <div>
              {!loggedInUser ? (
                <span className="sidenavbar-item ">
                  <Link to="/signup">
                    <button className="sidenav-btn text-sm md:text-base">
                      Register Now
                    </button>
                  </Link>
                </span>
              ) : (
                <span className="sidenavbar-item ">
                  <Link to="/">
                    <button className="sidenav-btn text-sm md:text-base">
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
