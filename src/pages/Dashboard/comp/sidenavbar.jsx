import { useEffect, useState } from "react";
import authSvc from "../../../services/auth.service";
import { Link } from "react-router-dom";

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Adjust age if birthday hasn't occurred yet this year
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const SideNavBar = () => {
  const [user, setUser] = useState();
  const profileData = async () => {
    try {
      let response = await authSvc.getUserWithProfile();
      setUser(response.result.profile);
    } catch (exception) {
      console.log(exception);
      throw exception;
    }
  };
  useEffect(() => {
    profileData();
  }, []);
  return (
    <>
      <div className="mt-4 flex flex-col h-full bg-white shadow-lg p-4 rounded-lg">
        {user ? (
          <>
            <div className="">
              <img
                src={
                  user && user.image
                    ? import.meta.env.VITE_IMAGE_URL + "/profile/" + user?.image
                    : "https://www.caltrain.com/files/images/2021-09/default.jpg"
                }
                alt="Profile Image"
                className="rounded-3xl p-2 w-[350px]"
              />
            </div>
            <div className="mt-4 capitalize text-center">
              <h2 className="text-black text-3xl font-bold mb-4">
                Your Details
              </h2>
              <p className="text-black text-xl font-semibold">
                {user?.fullname}
              </p>
              <p className="text-black text-lg">
                {calculateAge(user?.dateOfBirth)}
              </p>
              <p className="text-black text-lg">{user?.height}</p>
              <p className="text-black text-lg">
                {user?.religion}, <span>{user?.caste}</span>
              </p>
              <p className="text-black text-lg">{user?.occupation}</p>
              <p className="text-black text-lg">
                {user?.address}, <span>Nepal</span>
              </p>
            </div>
            <div className="flex flex-col p-2 mt-4 text-center">
              <Link
                to="/profile"
                className="text-blue-500 text-lg hover:underline"
              >
                View Your Profile
              </Link>
              <Link
                to="/editProfile"
                className="text-blue-500 text-lg mb-2 hover:underline"
              >
                Edit Your Profile
              </Link>
            </div>
          </>
        ) : (
          <>Loading</>
        )}
      </div>
    </>
  );
};

export default SideNavBar;
