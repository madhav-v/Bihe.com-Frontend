import React from "react";
import { useSelector } from "react-redux";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";
import { useContext } from "react";
import ConnectionRequestCard from "./ConnectionRequestCard";

export default function ConnectionRequestSection() {
  const [showRequests, setShowRequests] = useState(true);

  const [invitations, setInvitations] = useState([0, 1, 2]);
  const [pending, setPending] = useState([0, 1, 2]);

  // const connectionRequests = useSelector((state) => state.connection.connectionRequests);
  const connectionRequests = [1, 2, 3, 4];

  return (
    <div className="w-full h-full">
      <div className="flex flex-col mb-3 w-[80%] mx-auto h-full bg-screen rounded-xl overflow-hidden">
        {connectionRequests ? (
          <>
            {/* invitations */}
            {invitations && (
              <>
                <div
                  className="px-2 py-2 border-b-[1px] border-[rgba(0, 0, 0, 0.4)] flex justify-between pr-4"
                  onClick={() => setShowRequests((prev) => !prev)}
                >
                  <h2 className="text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl ">
                    Invitations
                  </h2>
                  {/* <span><RiArrowDownSFill size={25} /></span> */}
                </div>
                {/* { connectionRequests.length === 0 && <div>No Connection Requests :</div>} */}
                <div
                  className={`transition-all duration-500 overflow-hidden  ${
                    showRequests ? "h-full" : "h-0"
                  }`}
                >
                  {invitations &&
                    invitations.map((connectionRequest) => {
                      return (
                        <ConnectionRequestCard
                          key={connectionRequest.id}
                          connectionRequest={connectionRequest}
                        />
                      );
                    })}
                </div>
              </>
            )}
            {/* pending request */}
            {pending && (
              <>
                <div
                  className="px-2 py-2 border-b-[1px] border-[rgba(0, 0, 0, 0.4)] flex justify-between pr-4"
                  onClick={() => setShowRequests((prev) => !prev)}
                >
                  <h2 className="text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl ">
                    Sent Requests
                  </h2>
                  {/* <span><RiArrowDownSFill size={25} /></span> */}
                </div>
                {/* { connectionRequests.length === 0 && <div>No Connection Requests :</div>} */}
                <div
                  className={`transition-all duration-500 overflow-hidden  ${
                    showRequests ? "h-full" : "h-0"
                  }`}
                >
                  {pending &&
                    pending.map((connectionRequest) => {
                      return (
                        <ConnectionRequestCard
                          key={connectionRequest.id}
                          connectionRequest={connectionRequest}
                        />
                      );
                    })}
                </div>
              </>
            )}
          </>
        ) : (
          <div>
            <div className="h-[30vh]">
              <img
                className="w-full h-full object-contain object-center"
                src={
                  "https://www.caltrain.com/files/images/2021-09/default.jpg"
                }
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
