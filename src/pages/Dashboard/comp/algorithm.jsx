import { useEffect, useState } from "react";
import preferrenceSvc from "../../../services/preferreces.service";
import RecommendItem from "./recommenditem";

const Matches = () => {
  const [algoInfo, setAlgoInfo] = useState();
  const [loading, setLoading] = useState(true);
  const algoMatches = async () => {
    try {
      const details = await preferrenceSvc.getMatchesByAlgorithm();
      console.log(details.result);
      setAlgoInfo(details.result.profile);
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

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-[10vh]">
          <p className="mt-3">Loading...</p>
        </div>
      ) : (
        <div className="mx-4 my-4">
          <h3 className="text-xl font-semibold">Your matches</h3>
          <div className="mt-5 ml-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4">
            {algoInfo &&
              algoInfo.map((match, index) => (
                // console.log(match)
                <RecommendItem key={index} recommend={match} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Matches;
