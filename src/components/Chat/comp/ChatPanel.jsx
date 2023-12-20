import React, { useRef, useState } from "react";
// import Picker from "@emoji-mart/react";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs"; // Assuming you have this import
import profileAvatar from "../../../../public/sr2.jpg";
import { useParams } from "react-router-dom";
import Message from "./Message";

function ChatPanel() {
  const user = [
    {
      id: 1,
    },
  ];
  const [conversationMessages, setConversationMessages] = useState([
    {
      id: 1,
      author: {
        id: 1,
        username: "Madhav Dhungana",
      },
      content: "Hello, how are you?",
      createdAt: new Date(),
    },
    {
      id: 2,
      author: {
        id: 2,
        username: "Shruti Khanal",
      },
      content: "I'm doing well, thanks!",
      createdAt: new Date(),
    },
    {
      id: 3,
      author: {
        id: 1,
        username: "Madhav Dhungana",
      },
      content: "What's up?",
      createdAt: new Date(),
    },
    {
      id: 4,
      author: {
        id: 1,
        username: "Madhav Dhungana",
      },
      content: "I'm sending another message!",
      createdAt: new Date(),
    },
    {
      id: 5,
      author: {
        id: 2,
        username: "Shruti Khanal",
      },
      content: "Great! How's your day? Will you please marry me?",
      createdAt: new Date(),
    },
    // Add more dummy messages as needed
  ]);

  return (
    <>
      <div className="w-[70%] ml-[30%] min-h-[90vh] md:h-full rounded-xl overflow-hidden relative md:rounded-tl-none md:rounded-bl-none">
        <div className="w-full h-full">
          <div className="flex justify-between items-center border-b-[1px] border-[rgba(0, 0, 0, 0.7)]">
            <div className="px-2 flex items-center justify-center basis-1/3">
              <div className="relative w-[50px] h-[50px] md:w-[70px] md:h-[70px]  rounded-[50%] ml-[-30%]">
                <img
                  src={profileAvatar}
                  className="w-full h-full object-cover object-center rounded-[50%]"
                  alt="chat-profile"
                />
              </div>
              <div className="">
                <div className="flex items-center ml-2">
                  <p className="ml-2 text-lg">Madhav Dhungana</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[72vh]">
            <div className="chat-box w-full h-full flex flex-col-reverse overflow-y-auto">
              {conversationMessages && conversationMessages.length === 0 && (
                <span>NO Conversation</span>
              )}
              {conversationMessages.map((message, index) => (
                <Message
                  key={index}
                  message={message}
                  isUserCreator={message.author.id === user[0].id}
                />
              ))}
            </div>
          </div>
          <div className="chat-write absolute bg-screen bottom-2 left-0 mb-3 w-full flex items-center ml-1">
            <input
              type="text"
              placeholder="Send a message"
              className="w-full border p-2 pt-2 bg-white text-lg rounded-3xl align-middle bg-screen"
            />
            <span className="ml-2 p-2 bg-red-500 text-white rounded-full cursor-pointer mr-4 hover:bg-red-700">
              <RiSendPlaneFill className="text-xl" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatPanel;
