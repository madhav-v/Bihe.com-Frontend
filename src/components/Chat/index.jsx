import React, { useEffect, useState } from "react";
import NavBar from "../Navbar";
import ConversationBox from "./comp/ConversationBox";
import img from "../../../public/sr1.jpg";
import { useNavigate } from "react-router-dom";
import chatSvc from "../../services/chat.service";
import io from "socket.io-client";

const Chat = () => {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io("http://localhost:3005");

    socketInstance.on("connect", () => {
      console.log("Connected to Socket.IO server!");
    });

    socketInstance.on("disconnect", () => {
      console.log("Disconnected from Socket.IO server!");
    });

    socketInstance.on("error", (error) => {
      console.error("Socket.IO error:", error);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("newMessage", (message) => {
      console.log("New message received:", message);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

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
    const message = {
      text: "Hello, new conversation!",
      conversationId: id,
    };

    socket.emit("sendMessage", message);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
              {conversations.map((conversation, index) => (
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
      )}
    </>
  );
};

export default Chat;
