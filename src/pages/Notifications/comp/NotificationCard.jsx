import React from "react";
import { useState, useEffect } from "react";
import profileAvatar from "../../../../public/sr1.jpg";

function NotificationCard() {
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <div className="flex items-center justify-between p-4 border-b border-[rgba(0,0,0,0.4)] my-4">
      <div className="flex items-center">
        <div className="w-16 h-16 px-2 py-2 rounded-full overflow-hidden">
          <img
            src={profileAvatar}
            alt="Profile"
            className="w-full h-full object-cover object-center rounded-full"
          />
        </div>
        <div className="ml-4 flex flex-col">
          <h1 className="font-bold text-xl">Madhav Dhungana</h1>
          <h6 className="font-semibold text-md text-[rgba(0,0,0,0.6)]">
            Your perfect match for today.
          </h6>
        </div>
      </div>
      <div className="flex flex-col ml-4">
        <button className="text-white border bg-green-500 px-3 py-1 rounded w-[10rem]">
          See Profile
        </button>
        <button className="text-white bg-red-500 px-3 py-1 rounded mt-2">
          Delete
        </button>
      </div>
    </div>
  );
}

export default NotificationCard;
