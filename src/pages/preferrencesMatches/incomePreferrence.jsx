import React, { useEffect, useState } from "react";
import preferrenceSvc from "../../services/preferreces.service";
import RecommendItem from "../Dashboard/comp/recommenditem";
import NavBar from "../../components/Navbar";
import noData from "../../../public/3009287.jpg";

const IncomePreferrence = () => {
  const [incomeInfo, setIncomeInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const incomeDetails = async () => {
    try {
      const detail = await preferrenceSvc.getByIncome();
      setIncomeInfo(detail.result);
      setUser(detail.user);
      setLoading(false);
    } catch (exception) {
      setLoading(false);
      throw exception;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await incomeDetails();
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-[10vh]">
          <p className="mt-3">Loading...</p>
        </div>
      ) : (
        <div className="mt-5 ml-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4">
          {incomeInfo && incomeInfo.length > 0 ? (
            incomeInfo.map((match, index) => (
              <RecommendItem key={index} recommend={match} user={user[index]} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center mt-5">
              <img src={noData} alt="No Matches Found" />
              <p className="mt-3">No matches found</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default IncomePreferrence;
