import { useEffect, useState } from "react";
import preferrenceSvc from "../../services/preferreces.service";
import RecommendItem from "../Dashboard/comp/recommenditem";
import NavBar from "../../components/Navbar";
import noData from "../../../public/3009287.jpg";

const OccupationPreferrence = () => {
  const [occupationInfo, setOccupationInfo] = useState();
  const [user, setUser] = useState();
  const occupationDetails = async () => {
    try {
      const detail = await preferrenceSvc.getByOccupation();
      setOccupationInfo(detail.result);
      setUser(detail.user);
    } catch (exception) {
      throw exception;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await occupationDetails();
    };

    fetchData();
  }, [occupationInfo]);
  return (
    <>
      <div className="mt-5 ml-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4">
        {occupationInfo && occupationInfo.length > 0 ? (
          occupationInfo.map((match, index) => (
            <RecommendItem key={index} recommend={match} user={user[index]} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center mt-5">
            <img src={noData} alt="No Matches Found" />
            <p className="mt-3">No matches found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default OccupationPreferrence;
