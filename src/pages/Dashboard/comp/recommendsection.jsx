// import React, { useState } from "react";

// import noData from "../../../../public/3009287.jpg";
// import RecommendItem from "./recommenditem";
// import { RiArrowDownFill } from "react-icons/ri";

// function RecommendSection() {
//   const [showRecommend, setShowRecommend] = useState(true);
//   const recommendItem = [1, 2, 3, 4, 5, 6, 7, 8];

//   return (
//     <div className=" mx-4 my-4 rounded-xl mt-4 flex flex-col">
//       {recommendItem ? (
//         <>
//           <div
//             className="py-2 px-2 flex justify-between"
//             onClick={() => setShowRecommend((prev) => !prev)}
//           >
//             <h3 className=" text-xl font-semibold">Your probable matches</h3>
//             <span className="">
//               <RiArrowDownFill size={25} />
//             </span>
//           </div>
//           <div
//             className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4 transition-all duration-500 overflow-hidden ${
//               showRecommend ? "h-full" : "h-0"
//             }`}
//           >
//             {recommendItem.map((recommend, index) => {
//               return <RecommendItem key={index} recommend={recommend} />;
//             })}
//           </div>
//         </>
//       ) : (
//         <div className="w-full h-[60vh]">
//           <img
//             src={noData}
//             alt="nodata"
//             className="w-full h-full object-contain"
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default RecommendSection;
import React, { useState, useEffect } from "react";
import noData from "../../../../public/3009287.jpg";
import RecommendItem from "./recommenditem";
import { RiArrowDownFill } from "react-icons/ri";
import preferrenceSvc from "../../../services/preferreces.service";
import educationP from "../../../../public/convo.jpg";
import incomeP from "../../../../public/off.jpg";
import occupationP from "../../../../public/salar.jpg";
import { Link } from "react-router-dom";
function RecommendSection() {
  const [matchesByEducation, setMatchesByEducation] = useState([]);
  const [matchesByOccupation, setMatchesByOccupation] = useState([]);
  const [matchesByIncome, setMatchesByIncome] = useState([]);

  const fetchMatches = async () => {
    const education = await preferrenceSvc.getByEducation();
    setMatchesByEducation(education.result);
    const occupation = await preferrenceSvc.getByOccupation();
    setMatchesByOccupation(occupation.result);
    const income = await preferrenceSvc.getByIncome();
    setMatchesByIncome(income.result);
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <>
      <div className="mx-4 my-4">
        <h3 className="text-xl font-semibold">Discover Matches</h3>
        <p>Explore profiles matching your preferences</p>
        <div className="flex justify-between mx-5 my-4">
          {" "}
          <Link
            to="/preferrenceEducation"
            className="text-center relative hover:shadow-lg"
          >
            <div
              className="bg-cover bg-center w-[280px] h-[250px] mb-2 rounded-3xl relative"
              style={{
                backgroundImage: 'url("../../../../public/convo.jpg")',
                position: "relative",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 mb-4 text-white text-lg font-bold">
                Education ({matchesByEducation.length})
              </div>
              <div
                className="absolute inset-0 bg-black opacity-50 rounded-3xl"
                style={{ zIndex: -1 }}
              ></div>
            </div>
          </Link>
          <Link
            to="/preferrenceOccupation"
            className="text-center relative hover:shadow-lg"
          >
            <div
              className="bg-cover bg-center w-[280px] h-[250px] mb-2 rounded-3xl relative"
              style={{
                backgroundImage: 'url("../../../../public/off.jpg")',
                position: "relative",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 mb-4 text-white text-lg font-bold">
                Occupation ({matchesByOccupation.length})
              </div>
              <div
                className="absolute inset-0 bg-black opacity-50 rounded-3xl"
                style={{ zIndex: -1 }}
              ></div>
            </div>
          </Link>
          <Link
            to="/preferrenceIncome"
            className="text-center relative hover:shadow-lg"
          >
            <div
              className="bg-cover bg-center w-[280px] h-[250px] mb-2 rounded-3xl relative"
              style={{
                backgroundImage: 'url("../../../../public/salar.jpg")',
                position: "relative",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 mb-4 text-white text-lg font-bold">
                Income ({matchesByIncome.length})
              </div>
              <div
                className="absolute inset-0 bg-black opacity-50 rounded-3xl"
                style={{ zIndex: -1 }}
              ></div>
            </div>
          </Link>
        </div>
      </div>

      {/* <div className="mx-4 my-4 rounded-xl mt-4 flex flex-col">
        <div
          className="py-2 px-2 flex justify-between"
          onClick={() => setShowRecommend((prev) => !prev)}
        >
          <h3 className="text-xl font-semibold">Your probable matches</h3>
          <span className="">
            <RiArrowDownFill size={25} />
          </span>
        </div>

        {showRecommend && (
          <>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">By Education</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4">
                {matchesByEducation.length > 0 ? (
                  matchesByEducation.map((match, index) => (
                    <RecommendItem key={index} recommend={match} />
                  ))
                ) : (
                  <p>No matches found</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">By Occupation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4">
                {matchesByOccupation.length > 0 ? (
                  matchesByOccupation.map((match, index) => (
                    <RecommendItem key={index} recommend={match} />
                  ))
                ) : (
                  <p>No matches found</p>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">By Income</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4">
                {matchesByIncome.length > 0 ? (
                  matchesByIncome.map((match, index) => (
                    <RecommendItem key={index} recommend={match} />
                  ))
                ) : (
                  <p>No matches found</p>
                )}
              </div>
            </div>
          </>
        )}
      </div> */}
    </>
  );
}

export default RecommendSection;
