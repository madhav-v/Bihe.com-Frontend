import React from "react";
import { useSelector } from "react-redux";

function ConversationBox({ props }) {
  const loggedInUser = useSelector((state) => state.User.loggedInUser);
  const { users } = props;
  const otherUser = users.find((user) => user._id !== loggedInUser?._id);
  return (
    <>
      {loggedInUser && (
        <>
          {" "}
          <div className="chat-person w-full p-2 md:hover:bg-gray-200 md:rounded-xl overflow-hidden cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={otherUser?.profile.image}
                  alt="chat-friend-img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h6 className="font-semibold text-lg">
                  {otherUser?.profile.fullname}
                </h6>
                <p className="text-sm">{props?.latestMessage?.content}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ConversationBox;
