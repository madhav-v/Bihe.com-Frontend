import React from "react";
// import ConnectionSection from "./ConnectionSection";
import ConnectionRequestSection from "./comp/ConnectionRequestSection";
import NavBar from "../../components/Navbar";

function ConnectionLayout() {
  return (
    <>
      <NavBar />
      <div className="w-full mt-[15vh] h-full flex flex-col min-h-screen items-center bg-screen ">
        <ConnectionRequestSection />
        {/* <ConnectionSection /> */}
      </div>
    </>
  );
}

export default ConnectionLayout;
