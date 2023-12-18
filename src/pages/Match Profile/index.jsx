import { useEffect, useState } from "react";
import profileSvc from "../../services/profile.service";
import { useParams } from "react-router-dom";
import NavBar from "../../components/Navbar";

const MatchProfile = () => {
  const params = useParams();
  const [matchInfo, setMatchInfo] = useState();
  const matchDetails = async () => {
    try {
      const detail = await profileSvc.getProfileById(params.id);
      setMatchInfo(detail.result);
    } catch (exception) {
      throw exception;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await matchDetails();
    };
    fetchData();
  }, [matchInfo]);
  return (
    <>
      <NavBar />
      {matchInfo && (
        <>
          <div className="h-full w-full mt-3 md:bg-screen md:pb-4 md:pt-[10vh]">
            <div className="h-full flex flex-col mx-auto bg-white px-2 py-2 md:px-4 md:pt-8 rounded-xl ">
              <div className="relative border-2 h-[300px] border-[var(--secondary)] rounded-xl bg-white w-[80%] mx-auto">
                <div className="w-full h-full flex justify-center rounded-xl items-center overflow-hidden bg-red-100">
                  <img
                    src={
                      matchInfo && matchInfo.image
                        ? matchInfo?.image
                        : "https://www.caltrain.com/files/images/2021-09/default.jpg"
                    }
                    alt=""
                    className="w-full h-full object-cover object-center object-fit-contain rounded-3xl p-1"
                  />
                </div>
              </div>
              <div className="w-[80%] mx-auto flex flex-col mt-2 capitalize">
                <div className="w-[80%] mx-auto flex flex-col mt-2">
                  <div className="border p-4 rounded-md shadow-md mb-4">
                    <h2 className="text-xl font-bold mb-2">
                      Bio:{" "}
                      <span className="text-base font-normal ">
                        {matchInfo?.bio ? matchInfo.bio : "N/A"}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-[80%] mx-auto flex flex-col mt-2 capitalize">
                <div className="w-[80%] mx-auto flex flex-col mt-2">
                  <div className="border p-4 rounded-md shadow-md mb-4">
                    <h2 className="text-xl font-bold mb-2">
                      Full Name:{" "}
                      <span className="float-right">{matchInfo.fullname}</span>
                    </h2>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Address:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.address}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Hobbies:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.hobbies ? matchInfo.hobbies : "N/A"}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Date of Birth:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.dateOfBirth}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Height:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.height}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Address:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.address}, <span>Nepal</span>
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Caste:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.caste}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Religion:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.religion}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Gotra:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.gotra ? matchInfo.gotra : "N/A"}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Family Type:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.familyType}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Family Values:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.familyValues}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Occupation:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.occupation}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Works In:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.employedIn}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Income:{" "}
                      <span className="text-base font-normal float-right">
                        NPR {matchInfo.income} Lakhs
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Education:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.highestEducation}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Marital Status:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.marital_status}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Mother Tongue:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.motherTongue}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Physical Disability:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.physicalDisability}
                      </span>
                    </p>
                    <p className="text-md font-bold text-gray-600 mb-2">
                      Smoking or Drinking Habits:{" "}
                      <span className="text-base font-normal float-right">
                        {matchInfo.smokeOrDrink}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MatchProfile;
