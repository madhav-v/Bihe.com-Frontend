import React, { useRef, useState } from "react";
// import Picker from "@emoji-mart/react";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs"; // Assuming you have this import
import profileAvatar from "../../../../public/sr2.jpg"
import { useParams } from "react-router-dom";

function ChatPanel() {
  const { id } = useParams();

  const [showEmoji, setShowEmoji] = useState(false);
  const handleSelectEmoji = (emoji) => {
    console.log(emoji);
    // setContent(content + emoji.native);
  };

  const handleShowEmoji = () => {
    setShowEmoji((prev) => !prev);
  };

  return (
    <>
      {id == "123" ? (
        <div className="w-[70%] ml-auto min-h-[84vh] md:h-full rounded-xl overflow-hidden relative md:rounded-tl-none md:rounded-bl-none">
          <div className="w-full h-full">
            <div className="flex justify-between items-center border-b-[1px] border-[rgba(0, 0, 0, 0.7)]">
              <div className="px-2 flex items-center justify-center basis-1/3">
                <div className="relative w-[50px] h-[50px] md:w-[70px] md:h-[70px]  rounded-[50%] ">
                  <img
                    className="w-full h-full object-cover object-center rounded-[50%]"
                    src={profileAvatar}
                    alt="chat-profile"
                  />
                </div>
                <div className="">
                  {/* <h5 className="font-semibold text-xl px-2 pt-2 pb-0">
                    {type === "createConversation"
                      ? selectedConversation && selectedConversation.username
                      : recepient && recepient.username}
                  </h5> */}
                  <div className="flex items-center ml-2">
                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-green-500"></div>
                    {/* <p>{conversation && conversation.}</p> */}
                    <div className="ml-2 text-lg">Active</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[72vh]">
              <div className="chat-box w-full h-full flex flex-col-reverse overflow-y-auto">
              
              </div>
            </div>
          

            <div className="chat-write absolute bg-screen bottom-2 left-0 mb-2 w-full flex ">
              <input
                multiple
                type="file"
                accept="image/*"
                // onChange={fileInputChange}
                className="hidden"
                // ref={fileRef}
              />
              
              <input
                type="text"
                // ref={ref}
                // value={content}
                // onChange={(e) => onMessageChange(e)}
                placeholder="Send a message"
                // onKeyDown={onKeyDown}
                // onDrop={onDrop}
                // onPaste={onPaste}
                className="w-[90%] p-2 pt-2 bg-gray-200 text-lg rounded-3xl align-middle bg-screen"
              ></input>
              <span
              // onClick={
              //   type == "createConversation"
              //     ? () => createConversation()
              //     : () => sendMessage()
              // }
              >
                <RiSendPlaneFill className="sendIcon" size={30} color="red" />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[70%] ml-auto min-h-[80vh] flex justify-center items-center text-xl font-semibold">
          <span className="text-center">No Conversation Selected</span>
        </div>
      )}
    </>
  );
}

export default ChatPanel;
