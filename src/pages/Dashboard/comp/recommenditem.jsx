import React, { useContext, useEffect, useState } from "react";
import profileAvatar from "../../../../public/sr1.jpg";
import { Link, useNavigate } from "react-router-dom";
import chatSvc from "../../../services/chat.service";

function RecommendItem(props) {
  const [request, setRequest] = useState(() => {
    // Try to retrieve the state from localStorage, default to undefined if not found
    const storedState = localStorage.getItem("chatRequestState");
    return storedState ? JSON.parse(storedState) : undefined;
  });
  const navigate = useNavigate();
  const sendChatRequest = async () => {
    try {
      const response = await chatSvc.sendChatRequest({
        userId: props.recommend._id,
      });
      setRequest(response);

      // Save the state to localStorage
      localStorage.setItem("chatRequestState", JSON.stringify(response));
    } catch (exception) {
      console.error("Error sending chat request:", exception);
      setRequest("error");
    }
  };
  useEffect(() => {
    // Cleanup localStorage when the component is unmounted
    return () => localStorage.removeItem("chatRequestState");
  }, []);


  return (
    <div className="mt-5 capitalize rounded-lg bg-white overflow-hidden shadow-sm">
      <div className="w-full h-[200px] overflow-hidden">
        <img
          className="w-full object-cover object-center"
          src={
            props.recommend.image
              ? props.recommend.image
              : "https://www.caltrain.com/files/images/2021-09/default.jpg"
          }
          alt=""
        />
      </div>

      <div className="flex flex-col px-2 py-2">
        <h1 className="text-center text-[1.5rem] font-[500] my-2">
          {props.recommend.fullname}
        </h1>
        <div className="w-full flex justify-between px-2">
          <span className="text-md font-[500]">
            {props.recommend.dateOfBirth} years
          </span>
          <span className="text-md font-[500]">{props.recommend.height}</span>
        </div>

        <div className="w-full flex justify-between px-2">
          <span className="text-md font-[500]">
            {props.recommend.religion}, {props.recommend.caste}
          </span>
          <span className="text-md font-[500]">
            {props.recommend.occupation}
          </span>
        </div>

        <div className="w-full flex justify-between mt-2 mb-2">
          <button
            className="px-2 py-2 w-full rounded-xl mr-1 text-md text-white bg-[#E61A52]"
            onClick={() => navigate(`/match/${props.recommend._id}`)}
          >
            View Profile
          </button>
          <button
            className="px-2 py-2 w-full rounded-xl text-md border-[2px] border-[rgba(0, 0, 0, 0.4)]"
            onClick={sendChatRequest}
            disabled={request && request.status === false}
          >
            {request && request.status === false ? "Request Sent" : "Connect"}
          </button>
        </div>
      </div>
    </div>
    //{" "}
    // </Link>
  );
}

export default RecommendItem;
