import { formatRelative } from "date-fns";
import React from "react";

function Message({ message, sender }) {
  const isCurrentUser = sender && message.sender._id === sender._id;
  return (
    <div
      className={`w-full flex my-4 ${
        isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      <div className="flex flex-col p-1">
        {message.sender && message.sender.name && (
          <span className="text-sm">
            {isCurrentUser ? "You" : message.sender.name}
          </span>
        )}
        {message.content && (
          <span
            className={`flex flex-col px-2 py-2 rounded-xl text-white bg-red-500`}
          >
            {message.content}
          </span>
        )}
        <span className="text-sm">
          {formatRelative(new Date(message.createdAt), new Date())}
        </span>
      </div>
    </div>
  );
}

export default Message;
