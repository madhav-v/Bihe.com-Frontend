import { Outlet } from "react-router-dom";
import NavBar from "../../../components/Navbar";

const InnerLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default InnerLayout;
