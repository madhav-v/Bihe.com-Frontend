import { NavLink } from "react-router-dom";
import background from "/background.jpg";
import First from "./Component/First";
import Second from "./Component/Second";
import Header from "../Header and Footer/header";
import Layout from "./Layout";
import Herosection from "./Component/HeroSection";
const HomePage = () => {
  return (
    <>
      {/* <div
        className="bg-cover bg-center bg-no-repeat min-h-screen relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="text-container absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Bihe.com</h1>
          <div className="link-container mt-10">
            <NavLink
              to="/login"
              className="bg-blue-500 hover:bg-blue-700 text-white mr-5 font-bold py-2 px-4 rounded-full text-lg"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-lg mt-4"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div> */}
      <Layout>
        <Herosection />
        <First />
        <Second />
      </Layout>
    </>
  );
};

export default HomePage;
