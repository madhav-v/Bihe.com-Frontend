import React, { useEffect, useState } from "react";
import NotificationCard from "./comp/NotificationCard";
import NavBar from "../../components/Navbar";
import chatSvc from "../../services/chat.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function NotificationSection() {
  const [userId, setUserId] = useState();
  const [chatRequests, setChatRequests] = useState([]);
  const navigate = useNavigate();
  const [sId, setSId] = useState();

  const fetchChatRequests = async () => {
    try {
      const response = await chatSvc.getConnectionRequests();
      if (Array.isArray(response.result) && response.result.length > 0) {
        setSId(response.result[0]._id);
        const senders = response.result.map((item) => item.sender);
        console.log("senders", senders);
        setChatRequests(senders);
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (exception) {
      console.log(exception);
    }
  };

  useEffect(() => {
    fetchChatRequests();
  }, []);

  const handleAccept = async (sId, userID) => {
    try {
      setChatRequests((prevRequests) =>
        prevRequests.filter((sender) => sender._id !== sId)
      );
      const response = await chatSvc.acceptChatRequest(sId);
      if (response.status) {
        const chatResponse = await chatSvc.accessChat({ userId: userID });
        console.log("chatResponse", chatResponse);
        if (chatResponse.status) {
          toast.success(response.msg);
          navigate(`/chat/conversation/${response.result.sender._id}`);
        }
      } else {
        toast.error(response.msg);
      }
    } catch (exception) {
      console.log(exception);
    }
  };
  const handleReject = async (sId) => {
    try {
      setChatRequests((prevRequests) =>
        prevRequests.filter((sender) => sender._id !== sId)
      );
      const response = await chatSvc.rejectChatRequest(sId);
      if (response.status) {
        toast.error("Request Deleted");
      }
      console.log(response.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen bg-screen pt-[10vh] mt-10">
        <div className="flex w-[80%] mx-auto flex-col my-3 rounded-xl">
          <div className="px-2 border-b-2 border-[rgba(0, 0, 0, 0.6)] flex justify-between py-1">
            <h2 className="text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl mx-2 ">
              Notifications
            </h2>
          </div>
          <div className="w-full">
            {chatRequests.map((sender) => (
              <NotificationCard
                key={sender._id}
                sId={sId}
                sender={sender}
                onAccept={handleAccept}
                onReject={handleReject}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationSection;
