import React from "react";
// import ConnectionSection from "./ConnectionSection";
import ConnectionRequestSection from "./comp/ConnectionRequestSection";
import NavBar from "../../components/Navbar";
import NotificationSection from "../Notifications";
import Connection from "./comp/ConnectionRequestSection";

function ConnectionLayout() {
  return (
    <>
      <div className="w-full h-full flex flex-col min-h-screen items-center bg-screen ">
        <Connection />
        {/* <ConnectionSection /> */}
      </div>
    </>
  );
}

export default ConnectionLayout;
