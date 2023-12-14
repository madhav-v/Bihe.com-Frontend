import NavBar from "../../components/Navbar";
import img from "../../../public/background.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUserWithProfile } from "../../reducers/user.reducer";
import { useEffect, useState } from "react";
import Loading from "../error/loading";
import profileSvc from "../../services/profile.service";

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
        console.log("detail is ", detail);
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
      {loggedInUser ? (
        <>
          <div className="container mx-auto mt-[6rem]">
            <div className="capitalize bg-green-300 p-5 mb-5 max-w-2xl mx-auto">
              <div className="border-black flex">
                <div className="flex">
                  <div className="p-5">
                    <img
                      src={
                        loggedInUser && loggedInUser?.profile
                          ? import.meta.env.VITE_IMAGE_URL +
                            "/profile/" +
                            detail?.image
                          : img
                      }
                      alt="Profile"
                      className="w-[11rem] h-[11rem] object-cover rounded-full"
                    />
                  </div>
                  <div className="ml-5 p-5 mr-5">
                    <p className="text-xl font-bold">
                      {loggedInUser.profile.fullname}
                    </p>
                    <p className="mt-2">
                      {calculateAge(loggedInUser.profile.dateOfBirth)},
                      {loggedInUser?.profile?.sex}
                    </p>
                    <p className="mt-2">
                      {loggedInUser.profile.caste},{" "}
                      {loggedInUser.profile.religion}
                    </p>
                    <p className="mt-2">
                      {loggedInUser.profile.address}, Nepal
                    </p>
                    <p className="mt-2">{loggedInUser.profile.occupation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-5">
            <div className="capitalize bg-pink-300 p-5 mb-5 max-w-2xl mx-auto">
              <div>
                <p className="font-bold text-lg">About Myself:</p>
                <br />
                <p>{loggedInUser?.profile?.bio}</p>
              </div>
              <div>
                <p className="font-bold text-lg mt-5">Message to my partner:</p>
                <br />
                <p>{loggedInUser?.profile?.partnerMessage}</p>
              </div>
              <div>
                <p className="font-bold text-lg mt-5">Hobbies:</p>
                <br />
                <p>{loggedInUser?.profile?.hobbies}</p>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-5">
            <div className="capitalize bg-slate-300 p-5 mb-5 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-3">Basic Details</h3>
              <p>Name: {loggedInUser?.profile?.fullname}</p>
              <p>Age: {calculateAge(loggedInUser.profile.dateOfBirth)}</p>
              <p>Height: {loggedInUser.profile.height}</p>
              <p>Marital Status: {loggedInUser.profile.marital_status}</p>
              <p>Mother Tongue: {loggedInUser.profile.motherTongue}</p>
              <p>
                Smoking or Drinking Habits: {loggedInUser.profile.smokeOrDrink}
              </p>
              <p>
                Physical Disability: {loggedInUser.profile.physicalDisability}
              </p>
            </div>
            <div className="capitalize bg-yellow-100 p-5 mt-5 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-3">Religious Details</h3>
              <p>Caste: {loggedInUser.profile.caste}</p>
              <p>Gotra: {loggedInUser?.profile?.gotra}</p>
              <p>Religion: {loggedInUser?.profile?.religion}</p>
            </div>
            <div className="capitalize p-5 bg-green-100 mt-5 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-3">
                Educational and Professional Details
              </h3>
              <p>Highest Education: {loggedInUser.profile.highestEducation}</p>
              <p>Occupation: {loggedInUser?.profile?.occupation}</p>
              <p>Employed In: {loggedInUser?.profile?.employedIn}</p>
              <p>Annual Income: NPR {loggedInUser?.profile?.income} Lakhs</p>
            </div>
            <div className="capitalize p-5 bg-purple-500 mt-5 max-w-2xl mx-auto mb-5">
              <h3 className="text-lg font-bold mb-3">Family Details</h3>
              <p>Familty Type: {loggedInUser.profile.familyType}</p>
              <p>Family Values: {loggedInUser?.profile?.familyValues}</p>
              <p>
                Number of Family Members:{" "}
                {loggedInUser?.profile?.noOfFamilyMembers ? (
                  <>{loggedInUser?.profile?.noOfFamilyMembers}</>
                ) : (
                  <>N/A</>
                )}
              </p>
              <p>
                Number of Siblings:{" "}
                {loggedInUser?.profile?.noOfSiblings ? (
                  <>{loggedInUser?.profile?.noOfSiblings}</>
                ) : (
                  <>N/A</>
                )}
              </p>
              <p>
                Live with Family?:{" "}
                {loggedInUser?.profile?.liveWithFamily ? (
                  <>{loggedInUser?.profile?.liveWithFamily}</>
                ) : (
                  <>N/A</>
                )}
              </p>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ViewProfile;
