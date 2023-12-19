import React from "react";
import Chat from "..";
import { Outlet } from "react-router-dom";

function ChatLayout() {
  return (
    <div className="w-full min-h-[100vh] md:h-[90vh] md:bg-screen pt-[10vh] mt-10">
      <div className="chatsection md:py-5 md:px-4">
        <div className="messagesection">
          <Chat />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ChatLayout;
