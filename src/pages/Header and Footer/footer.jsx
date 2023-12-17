import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
// import i1 from "../images/tiktok.png";
// import i2 from "../images/facebook.png";
// import i3 from "../images/instagram.png";
// import i4 from "../images/youtube.png";
// import i5 from "../images/twitter.png";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-white">
        {/* <div className="footertop">
          <ul className="footertopfirst">
            <li>
              <h3>Quicks Link</h3>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profiles">Search For Partners</Link>
            </li>
            <li>
              <Link to="/">Browse profiles By</Link>
            </li>
          </ul>
          <ul className="footertopfirst">
            <li>
              <h3>About Bihe.com</h3>
            </li>
            <li>
              <Link to="/">Who Are You?</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Our History</Link>
            </li>
          </ul>
          <ul className="footertopfirst">
            <li>
              <h3>Quick Help</h3>
            </li>
            <li>
              <Link to="/">Account Blocking</Link>
            </li>
            <li>
              <Link to="/">Reporting</Link>
            </li>
            <li>
              <Link to="/">Tutorials/Guides</Link>
            </li>
          </ul>
        </div> */}

        <div className="footerbuttom">
          <div className="copyright">
            <p>
              &#169;Copyright 2023 | This Website is designed by |
              <span>
                <Link to="#">Trinity</Link>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
