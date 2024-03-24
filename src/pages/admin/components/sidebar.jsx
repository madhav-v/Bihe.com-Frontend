import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  MdOutlineDashboard,
} from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GoReport } from "react-icons/go";
import { MdReportProblem } from "react-icons/md";

const SuperAdminSidebar = () => {
  const menus = [
    {
      name: "Home",
      link: "/user",
      icon: MdOutlineDashboard,
    },
    { name: "Feedback", link: "/admin/feedback", icon: GoReport },
    {
      name: "Report",
      link: "/admin/report",
      icon: MdReportProblem,
    },
    { name: "Users", link: "/admin/user", icon: AiOutlineUser },
  ];
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6 ">
      <div
        className={`bg-[#47464c] rounded-tr-[30px] rounded-br-[30px] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 overflow-y-auto`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => {
            return (
              <>
                {menu.name != "Logout" ? (
                  <Link
                    to={menu?.link}
                    key={i}
                    className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                  >
                    <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                    <h2
                      className={`whitespace-pre duration-500 ${
                        !open && "opacity-0 overflow-hidden"
                      }`}
                    >
                      {menu?.name}
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  z-10 `}
                    >
                      {menu?.name}
                    </h2>
                  </Link>
                ) : (
                  <div
                    className={` ${
                      menu?.margin && "mt-5"
                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                  >
                    <div className="">
                      {React.createElement(menu?.icon, { size: "20" })}
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className=" text-xl text-gray-900 font-semibol">
        <Outlet />
      </div>
    </section>
  );
};

export default SuperAdminSidebar;
