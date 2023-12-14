import React from "react";
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaGift, FaVideo } from "react-icons/fa";
import { FiMessageCircle, FiPhoneCall } from "react-icons/fi";
import { MdInsertEmoticon, MdInsertPhoto, MdMessage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import NavBar from "../Navbar";

const Chat = () => {
  return (
    <>
      <NavBar />
      <div className="realtive">
        <div className=" flex max-h-screen  w-screen fixed  top-[80px] left-0 bottom-0 ">
          {/* <div className='w-1/4 p-4  '>
                    
                </div> */}
          <div className="  w-[25%] p-4 border-r border-r-gray-300">
            <div className=" z-10  h-[15vh]">
              <div className="flex justify-between">
                <p className="text-xl font-semibold">Chats</p>
                <div className="flex space-x-3">
                  <p className="bg-gray-500 h-8 w-8 rounded-full relative ">
                    <BsThreeDots
                      size={22}
                      style={{
                        position: "absolute",
                        top: "4px",
                        left: "4px",
                        color: "white",
                      }}
                    />
                  </p>
                  <p className="bg-gray-500 h-8 w-8 rounded-full relative ">
                    <MdMessage
                      size={18}
                      style={{
                        position: "absolute",
                        top: "7px",
                        left: "7px",
                        color: "white",
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="relative my-2">
                <AiOutlineSearch
                  size={24}
                  style={{
                    color: "gray",
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                  }}
                />
                <input
                  type="search"
                  className="w-full my-4 rounded-2xl border border-gray-300 p-[6px] pl-10"
                  placeholder="Search Message"
                />
              </div>
              {/* <div className='flex mb-4 space-x-3 font-medium text-base'>
                            <p className='bg-[#4441F1] text-[white] px-2 py-1 rounded-xl'>Inbox</p>
                            <p className='bg-[white] text-[black] px-2 py-1 rounded-xl'>Communities</p>
                        </div> */}
            </div>

            <div className="  mt-2 max-h-[80vh] overflow-y-auto ">
              <div className="mt-2  ">
                <div className="flex-1 bg-gray-200 cursor-pointer my-2 rounded-xl p-2  flex space-x-3">
                  <div className="bg-[red] rounded-full h-10 w-10">
                    <img src="" alt="" />
                  </div>
                  <div>
                    <p className="font-semibold text-base">Backbenchers</p>
                    <p className="text-[12px]">Last Message</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  w-[75%]  fixed left-[25%] h-full">
            <div className="bg-[white] shadow-xl p-4 flex items-center justify-between mr-8 w-full">
              <div className="flex space-x-4">
                <div className="bg-[red] rounded-full h-12 w-12">
                  <img src="" alt="" />
                </div>
                <div>
                  <p className="font-semibold text-base">Backbenchers</p>
                  <p className="text-sm text-gray-600 font-medium">
                    Active Now
                  </p>
                </div>
              </div>
              <div className="flex space-x-5 text-[#00B2FF] mr-5">
                <FiPhoneCall size={24} />
                <FaVideo size={24} />
                <BsThreeDots size={24} />
              </div>
            </div>
            <div
              style={{ boxShadow: "0 -5px 10px rgba(0, 0, 0, 0.1)" }}
              className="  absolute bottom-0 bg-[white] w-full  p-4  flex items-center  justify-between  space-x-5 mr-5"
            >
              <div className="flex space-x-4 text-[#00B2FF] w-[15%] cursor-pointer">
                <AiFillPlusCircle size={22} />
                <MdInsertPhoto size={22} />
                <MdInsertEmoticon size={22} />
                <FaGift size={22} />
              </div>
              <div className="flex ">
                <input
                  type="text"
                  className="  rounded-2xl bg-gray-200 p-[6px] pl-3 w-[600px] "
                  placeholder="Aa"
                />
              </div>
              <div className=" text-[#00B2FF] cursor-pointer">
                <IoMdSend size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
