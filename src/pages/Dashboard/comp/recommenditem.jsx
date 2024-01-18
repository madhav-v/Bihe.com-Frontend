import React, { useContext, useEffect, useState } from "react";
import profileAvatar from "../../../../public/sr1.jpg";
import { Link, useNavigate } from "react-router-dom";
import chatSvc from "../../../services/chat.service";
import { toast } from "react-toastify";

function RecommendItem(props) {
  console.log("props", props.user);
  const [request, setRequest] = useState(() => {
    const storedState = localStorage.getItem("chatRequestState");
    return storedState ? JSON.parse(storedState) : undefined;
  });
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const navigate = useNavigate();
  const sendChatRequest = async () => {
    try {
      const response = await chatSvc.sendChatRequest({
        userId: props.user,
      });
      if (response.status) {
        toast.success("Request Sent Successfully");
      } else {
        toast.warn("Request Already Sent!!");
      }
      setRequest(response);
      localStorage.setItem("chatRequestState", JSON.stringify(response));
    } catch (exception) {
      console.error("Error sending chat request:", exception);
      setRequest("error");
    }
  };
  useEffect(() => {
    return () => localStorage.removeItem("chatRequestState");
  }, []);

  return (
    <div className="mt-5 capitalize rounded-lg bg-white overflow-hidden shadow-sm">
      <div className="w-full h-[290px] overflow-hidden">
        <img
          className="w-full h-full object-cove"
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
            {calculateAge(props.recommend.dateOfBirth)} years
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
            onClick={() => navigate(`/user/match/${props.recommend._id}`)}
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
