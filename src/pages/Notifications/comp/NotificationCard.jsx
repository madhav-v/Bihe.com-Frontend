import React from "react";
import { useState, useEffect } from "react";
import profileAvatar from "../../../../public/sr1.jpg";
import chatSvc from "../../../services/chat.service";

const NotificationCard = ({ sender, sId, onAccept, onReject }) => {
  const handleAccept = async () => {
    try {
      if (!sender || !sender._id || !sId) {
        console.error("Invalid data:", sender, sId);
        return;
      }
      const userID = sender._id;
      console.log("userID", userID);
      onAccept(sId, userID);
    } catch (exception) {
      console.log(exception);
    }
  };

  if (!sender || !sender.profile) {
    return null;
  }
  const handleReject = async () => {
    try {
      if (!sender || !sender._id || !sId) {
        console.error("Invalid data:", sender, sId);
        return;
      }
      onReject(sId);
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-[rgba(0,0,0,0.4)] my-4">
      <div className="flex items-center">
        <div className="w-16 h-16 px-2 py-2 rounded-full overflow-hidden">
          <img
            src={sender.profile.image || profileAvatar}
            alt="Profile"
            className="w-full h-full object-cover object-center rounded-full"
          />
        </div>
        <div className="ml-4 flex flex-col">
          <h1 className="font-bold text-xl">{sender.profile.fullname}</h1>
          <h6 className="font-semibold text-md text-[rgba(0,0,0,0.6)]">
            Your perfect match for today.
          </h6>
        </div>
      </div>
      <div className="flex flex-col ml-4">
        <button
          onClick={handleAccept}
          className="text-white border bg-green-500 px-3 py-1 rounded w-[10rem]"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="text-white bg-red-500 px-3 py-1 rounded mt-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotificationCard;
