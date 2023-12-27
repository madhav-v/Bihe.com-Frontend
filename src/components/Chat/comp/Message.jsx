import { formatRelative } from "date-fns";
import React from "react";

function Message({  message }) {
  return (
    <div
      className={`w-full flex my-4`}
    >
      <div className="flex flex-col p-1">
        {/* {message && <span className="text-sm">{message.author.username}</span>} */}
        {message.content && (
          <span
            className={`flex flex-col px-2 py-2 rounded-xl text-white bg-red-500`}
          >
            {message.content}
          </span>
        )}

        <span className="text-sm">{formatRelative(new Date(message.createdAt), new Date())}</span>
      </div>
    </div>
  );
}

export default Message;
