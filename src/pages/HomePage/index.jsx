import { NavLink } from "react-router-dom";
import background from "/background.jpg";
const HomePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        {" "}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div>
          <div className="absolute inset-0 flex justify-center text-white">
            <h1 className="text-4xl font-bold">Welcome to Bihe.com</h1>
          </div>
          <div>
            <div className="absolute inset-0 mt-10 ml-10 flex flex-col text-white">
              <NavLink to="/login">Login</NavLink>

              <NavLink to="/register">Register</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
