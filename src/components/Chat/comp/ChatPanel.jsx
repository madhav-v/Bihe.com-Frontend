import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import Picker from "@emoji-mart/react";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs"; // Assuming you have this import
import profileAvatar from "../../../../public/sr2.jpg";
import { Link, useParams } from "react-router-dom";
import Message from "./Message";
import chatSvc from "../../../services/chat.service";
import profileSvc from "../../../services/profile.service";
import authSvc from "../../../services/auth.service";

function ChatPanel() {
  const chatBoxRef = useRef(null);

  const params = useParams();
  let id = params.id;
  const [newMessageContent, setNewMessageContent] = useState([]);
  const [conversationMessages, setConversationMessages] = useState();
  const [conversations, setConversations] = useState([]);
  const [sender, setSender] = useState();
  const chats = async () => {
    try {
      const response = await authSvc.getUserProfileById(id);
      if (response.status) {
        setConversations(response.result);
      }
    } catch (exception) {
      console.log(exception);
    }
  };
  const messageSender = async () => {
    try {
      const response = await authSvc.getUserWithProfile();
      if (response.status) {
        setSender(response.result);
      }
    } catch (exception) {
      console.log(exception);
    }
  };

  const fetchMessages = async () => {
    const chatId = params.id;
    try {
      const response = await chatSvc.getMessages(chatId);
      if (response.status) {
        setConversationMessages(response.result);
      }
    } catch (exception) {
      console.log(exception);
    }
  };

  const sendMessage = async () => {
    try {
      const chatId = params.id;
      const response = await chatSvc.sendMessage(chatId, newMessageContent);
      if (response.status) {
        fetchMessages();
        setNewMessageContent("");
        socket.emit("newMessage", { chatId, message: response.result });
      }
    } catch (exception) {
      console.log(exception);
    }
  };
  useEffect(() => {
    chats();
    fetchMessages();
    messageSender();
  }, [id]);
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  useLayoutEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [conversationMessages]);

  return (
    <>
      <div className="w-[70%] ml-[30%] min-h-[90vh] md:h-full rounded-xl overflow-hidden relative md:rounded-tl-none md:rounded-bl-none">
        <div className="w-full h-full">
          <div className="flex justify-between items-center border-b-[1px] border-[rgba(0, 0, 0, 0.7)]">
            <div className="px-2 flex items-center justify-center basis-1/3">
              <div className="relative w-[50px] h-[50px] md:w-[70px] md:h-[70px]  rounded-[50%] ml-[-30%]">
                <img
                  src={conversations && conversations.profile?.image}
                  className="w-full h-full object-cover object-center rounded-[50%]"
                  alt="chat-profile"
                />
              </div>
              <div className="">
                <Link
                  to={`/user/match/${
                    conversations?.profile && conversations?.profile._id
                  }`}
                >
                  <div className="flex items-center ml-2">
                    <p className="ml-2 text-lg">
                      {" "}
                      {conversations && conversations?.profile?.fullname}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-[72vh]">
            <div className="chat-box w-full h-full flex flex-col-reverse overflow-y-auto">
              {conversationMessages
                ?.slice()
                .reverse()
                .map((message, index) => (
                  <Message key={index} message={message} sender={sender} />
                ))}
            </div>
          </div>

          <div className="chat-write absolute bg-screen bottom-2 left-0 mb-3 w-full flex items-center ml-1">
            <input
              type="text"
              placeholder="Send a message"
              value={newMessageContent}
              onChange={(e) => setNewMessageContent(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full border p-2 pt-2 bg-white text-lg rounded-3xl align-middle bg-screen"
            />
            <span
              onClick={sendMessage}
              className="ml-2 p-2 bg-red-500 text-white rounded-full cursor-pointer mr-4 hover:bg-red-700"
            >
              <RiSendPlaneFill className="text-xl" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatPanel;
