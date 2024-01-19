import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NotificationCard from "../../Notifications/comp/NotificationCard";
import chatSvc from "../../../services/chat.service";

function Connection() {
  const [userId, setUserId] = useState();
  const [chatRequests, setChatRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const navigate = useNavigate();
  const [sId, setSId] = useState();

  const fetchChatRequests = async () => {
    try {
      const response = await chatSvc.getConnectionRequests();
      if (Array.isArray(response.result) && response.result.length > 0) {
        console.log(response);
        setSId(response.result[0]._id);
        const senders = response.result.map((item) => item.sender);
        setChatRequests(senders);
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (exception) {
      console.log(exception);
    }
  };
  const fetchSentRequests = async () => {
    try {
      const response = await chatSvc.getSentRequests();
      console.log("response", response.result);
      setSentRequests(response.result);
    } catch (exception) {
      console.log(exception);
    }
  };

  useEffect(() => {
    fetchChatRequests();
    fetchSentRequests();
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
          navigate(`/user/chat/conversation/${response.result.sender._id}`);
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
      <div className="w-full min-h-screen bg-screen pt-[10vh] mt-10">
        <div className="flex w-[80%] mx-auto flex-col my-3 rounded-xl">
          <div className="px-2 border-b-2 border-[rgba(0, 0, 0, 0.6)] flex justify-between py-1">
            <h2 className="text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl mx-2 ">
              Invitations
            </h2>
          </div>
          <div className="w-full">
            {chatRequests.length === 0 ? (
              <p className="ml-[65vh] mt-[50px]">
                No Invitaions at the moment...
              </p>
            ) : (
              chatRequests.map((sender) => (
                <NotificationCard
                  key={sender._id}
                  sId={sId}
                  sender={sender}
                  onAccept={handleAccept}
                  onReject={handleReject}
                />
              ))
            )}
          </div>
        </div>
        <div className="flex w-[80%] mx-auto flex-col my-3 rounded-xl">
          <div className="px-2 border-b-2 border-[rgba(0, 0, 0, 0.6)] flex justify-between py-1">
            <h2 className="text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl mx-2 ">
              Request Sent
            </h2>
          </div>
          <div className="w-full">
            {sentRequests.length === 0 ? (
              <p className="ml-[65vh] mt-[50px]">No requests sent</p>
            ) : (
              <ul className="divide-y divide-gray-300">
                {sentRequests.map((request) => (
                  <li key={request._id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={
                            request.receiver.profile.image
                              ? request.receiver.profile.image
                              : "https://www.caltrain.com/files/images/2021-09/default.jpg"
                          }
                          alt="receiver-profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-[rgba(0, 0, 0, 0.8)] font-semibold">
                          {request.receiver.name}
                        </p>
                        <p className="text-[rgba(0, 0, 0, 0.6)]">
                          Status: {request.status}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Connection;
