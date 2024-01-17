import { useEffect, useState } from "react";
import preferrenceSvc from "../../../services/preferreces.service";
import RecommendItem from "./recommenditem";
// import "./Matches.css"; // Import your CSS file

const Matches = () => {
  const [algoInfo, setAlgoInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllMatches, setShowAllMatches] = useState(false);

  const algoMatches = async () => {
    try {
      const details = await preferrenceSvc.getMatchesByAlgorithm();
      setAlgoInfo(details.result);
      setLoading(false);
    } catch (exception) {
      setLoading(false);
      console.log(exception);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await algoMatches();
    };

    fetchData();
  }, []);

  const handleToggleMatches = () => {
    setShowAllMatches(!showAllMatches);
  };

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-[10vh]">
          <p className="mt-3">Loading...</p>
        </div>
      ) : (
        <div className="mx-4 my-4">
          <h3 className="font-semibold text-2xl">Your matches</h3>
          <div className="ml-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4">
            {algoInfo
              .slice(0, showAllMatches ? algoInfo.length : 3)
              .map((match, index) => (
                <RecommendItem key={index} recommend={match} />
              ))}
          </div>
          <button
            className="text-red-500 px-4 py-2 text-xl rounded mt-4 mx-[45%] w-[15%] inline-block focus:outline-none shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleToggleMatches}
          >
            {showAllMatches ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </>
  );
};

export default Matches;
