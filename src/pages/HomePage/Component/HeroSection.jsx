import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import heroImage from "../../../../public/sr2.jpg";

const Herosection = () => {
  return (
    <div className="herosection relative">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Background"
        className="w-full h-full object-cover object-center "
      />
      <div className="overlay bg-black opacity-60 absolute inset-0 w-full h-full"></div>
      {/* Overlay */}
      <div className="w-full md:w-[80%] mx-auto absolute inset-0 flex items-center justify-center">
        <div className="text-content text-white text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-red-500">Bihe.com</span> Connecting Souls,
            Creating Stories.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Our platform seamlessly blends tradition with technology, ensuring
            tailored matches based on cultural compatibility and personal
            preferences. Embark on a journey to find your life partner today.
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-4">
            Ready to begin? Join thousands of others who have found their life
            partners. Start your journey today.
          </p>
          <Link
            to="/register"
            className="btn bg-red-500 text-white px-4 py-2 rounded-full text-base md:text-lg lg:text-xl"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
