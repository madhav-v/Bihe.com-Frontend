import React from "react";
import { Outlet } from "react-router-dom";
import "./styles.css";
import NavBar from "../../components/Navbar";
import SideNavBar from "./comp/sidenavbar";
import DashboardSection from "./dashboardsection";


function Dashboard() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="min-h-screen w-full flex md:flex-row flex-col md:justify-end md:bg-screen">
        <div className="flex flex-col mt-4 md:mt-0 md:mx-0  md:w-[23vw] md:bg-white fixed top-[6vh] left-0 bottom-0 h-full">
          <SideNavBar />
        </div>
        <div className="h-full flex flex-col w-[100%] md:basis-[76%] md:mr-4 md:mt-20">
          <DashboardSection/>
          {/* <Outlet /> */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
