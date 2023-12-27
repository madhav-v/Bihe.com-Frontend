import React, { useEffect, useState } from "react";
import NavBar from "../Navbar";
import ConversationBox from "./comp/ConversationBox";
import img from "../../../public/sr1.jpg";
import { useNavigate } from "react-router-dom";
import chatSvc from "../../services/chat.service";

const Chat = (props) => {
  const navigate = useNavigate();
  // const [converstaion, setConversation] = useState([
  //   {
  //     id: 123,
  //     fullname: "Madhav Dhungana",
  //     image: img,
  //     lastMessage: "Last Message #1",
  //     timeStamp: "today",
  //   },
  //   {
  //     id: 123,
  //     fullname: "Shruti Khanal",
  //     image: img,
  //     lastMessage: "Last Message #1",
  //     timeStamp: "today",
  //   },
  //   {
  //     id: 123,
  //     fullname: "Ajita Giri",
  //     image: img,
  //     lastMessage: "Last Message #1",
  //     timeStamp: "today",
  //   },
  // ]);
  const [conversations, setConversations] = useState([]);
  const chats = async () => {
    try {
      const response = await chatSvc.getConversations();
      if (response.status) {
        setConversations(response.result);
      }
    } catch (exception) {
      console.log(exception);
    }
  };
  useEffect(() => {
    chats();
  }, [conversations]);
  const handleConversationClick = (id) => {
    navigate(`/chat/conversation/${id}`);
  };
  return (
    <>
      <NavBar />
      <div className="w-full md:basis-1/3 rounded-xl md:rounded-tr-none md:rounded-br-none bg-white py-2 border-r-2 border-[rgba(0 , 0, 0, 0.8)] lg:fixed lg:h-[90vh] lg:w-[30vw] lg:bottom-0 lg:left-0">
        <div className="chat-friend-list h-full overflow-hidden ">
          <div className="w-full flex  flex-col justify-around relative">
            <div className="w-full flex justify-around ">
              <div className="flex items-center justify-center hover:bg-screen px-3 py-2 rounded-xl">
                <span className={"font-bold xl:text-xl"}>Chat</span>
              </div>
            </div>
          </div>

          <div className="chat-sidebar w-full px-2">
            {conversations?.map((converstaion, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleConversationClick(converstaion._id)}
                  className="cursor-pointer"
                >
                  <ConversationBox props={converstaion} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
