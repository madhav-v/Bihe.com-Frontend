import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import profileAvatar from "../../../../public/sr1.jpg";

function ConnectionRequestCard(props) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (!imageUrl) {
      setImageUrl("https://www.caltrain.com/files/images/2021-09/default.jpg");
    }
  }, []);

  return (
    <div className="flex items-center justify-between p-4 border-b border-[rgba(0,0,0,0.4)]">
      <div className="flex items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img
            src={profileAvatar}
            alt="Profile"
            className="w-full h-full object-cover object-center rounded-full"
          />
        </div>
        <div className="ml-10">
          <h3 className="mb-2">Madhav Dhungana</h3>
          <hr className="mb-2 border-t border-[rgba(0,0,0,0.4)]" />
        </div>
      </div>
      <div className="flex-grow ml-10">
        <div className="flex flex-col justify-between">
          <div className="flex">
            <p>
              22,  <span className="ml-1 mr-1">5.9ft,</span>
            </p>
            <p>
              Hindu, <span className="ml-1">Brahmin</span>
            </p>
            <div className="flex flex-col ml-10">
              <p>Kathmandu</p>
              <p>Web Developer</p>
              <p>Nepal</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-4">
        <button className="text-white border bg-green-500 px-3 py-1 rounded w-[10rem]">
          Accept
        </button>
        <button className="text-white bg-red-500 px-3 py-1 rounded mt-2">
          Ignore
        </button>
      </div>
    </div>
  );
}

export default ConnectionRequestCard;
