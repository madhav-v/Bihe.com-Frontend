import React, { useContext } from "react";
import profileAvatar from "../../../../public/sr1.jpg";
import { Link, useNavigate } from "react-router-dom";

function RecommendItem(props) {
  return (
    // <Link to={`/home/profile/${recommend.id}`}>
    <div className=" rounded-lg bg-white overflow-hidden shadow-sm">
      <div className="w-full h-[250px] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={profileAvatar}
          alt=""
        />
      </div>

      <div className="flex flex-col px-2 py-2">
        <h1 className="text-center text-[1.5rem] font-[500] my-2">
          {props.recommend.username}
        </h1>
        <div className="w-full flex justify-between px-2">
          <span className="text-md font-[500]">24 years</span>
          <span className="text-md font-[500]">5ft 2in</span>
        </div>

        <div className="w-full flex justify-between px-2">
          <span className="text-md font-[500]">Hindu, chhetri</span>
          <span className="text-md font-[500]">Web Developer</span>
        </div>

        <div className="w-full flex justify-between mt-2 mb-2">
          <button
            className="px-2 py-2 w-full rounded-xl mr-1 text-md text-white bg-[#E61A52]"
            // onClick={() => navigate(`/home/profile/${recommend.id}`)}
          >
            View Profile
          </button>
          <button
            className="px-2 py-2 w-full rounded-xl text-md border-[2px] border-[rgba(0, 0, 0, 0.4)]"
            // onClick={() => sendConnectionRequest()}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
    //{" "}
    // </Link>
  );
}

export default RecommendItem;
