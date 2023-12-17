import NavBar from "../../components/Navbar";
import img from "../../../public/background.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUserWithProfile } from "../../reducers/user.reducer";
import { useEffect, useState } from "react";
import Loading from "../error/loading";
import profileSvc from "../../services/profile.service";
import { Link, Outlet } from "react-router-dom";
import { VscDeviceCamera } from "react-icons/vsc";
import { AiOutlineEdit } from "react-icons/ai";

const calculateAge = (dateOfBirth) => {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const ViewProfile = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.User.loggedInUser);
  const [detail, setDetail] = useState();
  const [image, setImage] = useState();
  const getProfile = async () => {
    try {
      if (loggedInUser) {
        const response = await profileSvc.getProfileById(
          loggedInUser?.profile?._id
        );
        setDetail(response.result);
      }
    } catch (exception) {
      throw exception;
    }
  };
  useEffect(() => {
    if (loggedInUser) {
      getProfile();
    }
  }, [loggedInUser]);
  useEffect(() => {
    dispatch(getLoggedInUserWithProfile());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      {detail ? (
        <div className="h-full w-full mt-3 md:bg-screen md:pb-4 md:pt-[10vh]">
          <div className="h-full flex flex-col mx-auto bg-white px-2 py-2 md:px-4 md:pt-8 rounded-xl ">
            <div className="relative border-2 h-[300px] border-[var(--secondary)] rounded-xl bg-white w-[80%] mx-auto">
              <div className="w-full h-full flex justify-center rounded-xl items-center overflow-hidden bg-red-100">
                <img
                  src={
                    loggedInUser && loggedInUser.profile.image
                      ? import.meta.env.VITE_IMAGE_URL +
                        "/profile/" +
                        loggedInUser?.profile.image
                      : "https://www.caltrain.com/files/images/2021-09/default.jpg"
                  }
                  alt=""
                  className="w-full h-full object-cover object-center object-fit-contain rounded-3xl p-1"
                />
              </div>
            </div>

            <div className=" w-full md:w-[80%] mx-auto mt-8 pt-2">
              <div className="w-full flex justify-between items-start">
                <div className="w-full flex flex-col  justify-center my-2 pl-2"></div>

                <div className="w-[200px]">
                  <button className="w-full flex bg-[var(--secondary)] hover:bg-[var(--secondary-light)] rounded-xl px-4 py-2 border-none outline-none">
                    <span>
                      <AiOutlineEdit size={25} color="white" />
                    </span>
                    <Link
                      className="w-full ml-2 font-bold text-white"
                      to="/editProfile"
                    >
                      Edit Profile
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[80%] mx-auto flex flex-col mt-2 capitalize">
              <div className="w-[80%] mx-auto flex flex-col mt-2">
                <div className="border p-4 rounded-md shadow-md mb-4">
                  <h2 className="text-xl font-bold mb-2">
                    Bio:{" "}
                    <span className="text-base font-normal ">{detail.bio}</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-[80%] mx-auto flex flex-col mt-2 capitalize">
              <div className="w-[80%] mx-auto flex flex-col mt-2">
                <div className="border p-4 rounded-md shadow-md mb-4">
                  <h2 className="text-xl font-bold mb-2">
                    Full Name:{" "}
                    <span className="float-right">{detail.fullname}</span>
                  </h2>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Address:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.address}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Hobbies:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.hobbies}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Date of Birth:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.dateOfBirth}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Height:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.height}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Address:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.address}, <span>Nepal</span>
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Caste:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.caste}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Religion:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.religion}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Gotra:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.gotra ? detail.gotra : "N/A"}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Occupation:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.occupation}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Works In:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.employedIn}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Income:{" "}
                    <span className="text-base font-normal float-right">
                      NPR {detail.income} Lakhs
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Education:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.highestEducation}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Marital Status:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.marital_status}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Mother Tongue:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.motherTongue}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Physical Disability:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.physicalDisability}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Smoking or Drinking Habits:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.smokeOrDrink}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[80%] mx-auto flex flex-col mt-2 capitalize">
              <div className="w-[80%] mx-auto flex flex-col mt-2">
                <div className="border p-4 rounded-md shadow-md mb-4">
                  <h2 className="text-xl font-bold mb-2">Preferences</h2>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Preferred Age:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.preferredAge}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Preferred Caste:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.preferredCaste}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Preferred Education:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.preferredEducation}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Preferred Height:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.preferredHeight}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Preferred Income:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.preferredIncome}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Preferred Marital Status:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.preferredMaritalStatus}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Preferred Mother Tongue:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.preferredMotherTongue}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Preferred Occupation:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.preferredOccupation}
                    </span>
                  </p>
                  <p className="text-md font-bold text-gray-600 mb-2">
                    Preferred Religion:{" "}
                    <span className="text-base font-normal float-right">
                      {detail.preferredReligion}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ViewProfile;
