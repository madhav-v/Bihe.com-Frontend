import React from "react";
// import DashboardCard from "../newComponent/DashboardCard/DashboardCard";
// import ConnectionRequestCard from "../newComponent/ConnectionRequestCard/ConnectionRequestCard";
// import ConnectionRequestSection from "./connectionRequestSection";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import RecommendSection from "./comp/recommendsection";
// import { SocketContext } from "../utils/context/SocketContext";
// import { useEffect } from "react";
// import { fetchConnectionRequestThunk } from "../store/thunk/connectionsThunk";
// import RecommendSection from "../newComponent/RecommendSection/RecommendSection";

function DashboardSection() {
  const dispatch = useDispatch();
  //   const socket = useContext(SocketContext);
  //   const { connections, connectionRequests } = useSelector(
  //     (state) => state.connection
  //   );

  //   useEffect(() => {
  //     dispatch(fetchConnectionRequestThunk());
  //   }, [dispatch]);

  return (
    <div className="min-h-[90vh] overflow-x-hidden">
      {/* <ConnectionRequestSection />  */}
      <RecommendSection />
    </div>
  );
}

export default DashboardSection;
