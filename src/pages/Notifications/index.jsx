import React, { useEffect, useState } from "react";
import NotificationCard from "./comp/NotificationCard";
import NavBar from "../../components/Navbar";
import chatSvc from "../../services/chat.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function NotificationSection() {
  const [chatRequests, setChatRequests] = useState([]);
  const navigate = useNavigate();
  const [sId, setSId] = useState();

  const fetchChatRequests = async () => {
    try {
      const response = await chatSvc.getConnectionRequests();
      // Check if response.result is an array with at least one item
      if (Array.isArray(response.result) && response.result.length > 0) {
        setSId(response.result[0]._id);
        // Extract the sender field from each item in the array
        const senders = response.result.map((item) => item.sender);
        // Set the senders in the state
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

  const handleAccept = async (sId) => {
    try {
      // Update the state by removing the accepted request
      setChatRequests((prevRequests) =>
        prevRequests.filter((sender) => sender._id !== sId)
      );
      // Call the acceptChatRequest function with the senderId
      const response = await chatSvc.acceptChatRequest(sId);
      if (response.status) {
        toast.success(response.msg);
        console.log(response.result.sender.profile);
        navigate(`/match/${response.result.sender.profile}`);
      } else {
        toast.error(response.msg);
      }
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
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationSection;
