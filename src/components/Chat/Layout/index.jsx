import React from "react";
import Chat from "..";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ChatPanel from "../comp/ChatPanel";
import ConversationBox from "../comp/ConversationBox";

function ChatLayout() {
  const {id}= useParams()
  const navigate = useNavigate()
  const openConversation = (conversationId)=>{
    navigate(`/chat/conversation/${conversationId}`)
  }
  return (
    <div className="w-full mt-[5.5%]">
      <div className="">
        <div className=" ">
          <Chat />
          <Outlet />
          {/* <ChatPanel/> */}
          {/* <ConversationBox/> */}
        </div>
      </div>
    </div>
  );
}

export default ChatLayout;
