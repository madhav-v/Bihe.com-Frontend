import React from "react";
import { useNavigate } from "react-router-dom";

function ConversationBox({ props }) {
  const { users } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    if (users && users.length > 1) {
      navigate(`/chat/conversation/${users[1]._id}`);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="chat-person w-full p-2 md:hover:bg-gray-200 md:rounded-xl overflow-hidden cursor-pointer"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={users[1]?.profile.image}
              alt="chat-friend-img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h6 className="font-semibold text-lg">
              {users[1]?.profile.fullname}
            </h6>
            <p className="text-sm">{props?.latestMessage?.content}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs">{props?.createdAt}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConversationBox;
