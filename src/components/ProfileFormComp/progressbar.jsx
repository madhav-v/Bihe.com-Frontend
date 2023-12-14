import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaHouseUser } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

function NewProgressBar({ currentFormCount, setCurrentFormCount }) {
  return (
    <div className="relative w-[80%] h-[7px] mx-auto rounded-2xl mt-16 bg-black">
      <div
        className={`h-full flex justify-evenly items-center ${
          currentFormCount === 0 && "w-[15%] progressStep1"
        } ${currentFormCount === 1 && "w-[30%] progressStep2"} ${
          currentFormCount === 2 && "w-[45%] progressSetp3"
        } ${currentFormCount === 3 && "w-[60%] progressStep4"} ${
          currentFormCount === 4 && "w-[75%] progressStep5"
        } ${currentFormCount === 5 && "w-[90%] progressStep6"} bg-[#ec1c24]`}
      >
        <div
          className={`p-2 rounded-[50%] border-4 absolute top-[-100%] left-[15%] ${
            currentFormCount >= 0 ? "border-[#ec1c24] bg-white" : "bg-white"
          }`}
        ></div>
        <div
          className={`p-2 rounded-[50%] border-4  absolute top-[-100%] left-[30%] ${
            currentFormCount >= 1 ? "bg-white border-[#ec1c24]" : "bg-white"
          }`}
        ></div>
        <div
          className={`p-2 rounded-[50%] border-4  absolute top-[-100%] left-[45%] ${
            currentFormCount >= 2 ? "bg-white border-[#ec1c24]" : "bg-white"
          }`}
        ></div>
        <div
          className={`p-2 rounded-[50%] border-4 absolute top-[-100%] left-[60%] ${
            currentFormCount >= 3 ? "bg-white border-[#ec1c24]" : "bg-white"
          }`}
        ></div>
        <div
          className={`p-2 rounded-[50%] border-4 absolute top-[-100%] left-[75%] ${
            currentFormCount >= 4 ? "bg-white border-[#ec1c24]" : "bg-white"
          }`}
        ></div>
        {/* <div
          className={`p-2 rounded-[50%] border-4 absolute top-[-100%] left-[90%] ${
            currentFormCount >= 5 ? "bg-white border-[#ec1c24]" : "bg-white"
          }`}
        ></div> */}
      </div>
    </div>
  );
}

export default NewProgressBar;
