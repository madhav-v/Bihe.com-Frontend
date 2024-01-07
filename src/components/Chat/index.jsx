import React, { useEffect, useState } from "react";
import NavBar from "../Navbar";
import ConversationBox from "./comp/ConversationBox";
import img from "../../../public/sr1.jpg";
import { useNavigate } from "react-router-dom";
import chatSvc from "../../services/chat.service";

const Chat = (props) => {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const chats = async () => {
    try {
      const response = await chatSvc.getConversations();
      if (response.status) {
        setConversations(response.result);
      }
    } catch (exception) {
      console.log(exception);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    chats();
  }, []);

  const handleConversationClick = (id) => {
    navigate(`/user/chat/conversation/${id}`);
  };

  return (
    <>
   
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
            {isLoading && <p>Loading...</p>}
            {!isLoading && conversations.length === 0 && (
              <p className="ml-5">
                No conversations to show....
                <br /> Please connect with your matches.
              </p>
            )}
            {!isLoading &&
              conversations.map((conversation, index) => (
                <div
                  key={index}
                  onClick={() => handleConversationClick(conversation._id)}
                  className="cursor-pointer"
                >
                  <ConversationBox props={conversation} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
