import axios from "axios";
import { useEffect, useState } from "react";

const FeedBack = () => {
  let token = localStorage.getItem("token");
  const [feedbacks, setFeedbacks] = useState([]);
  const getFeedBacks = async () => {
    let response = await axios.get(
      "http://localhost:3005/api/v1/feedback/get",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );

    setFeedbacks(response.data.feedbacks);
  };
  useEffect(() => {
    getFeedBacks();
  }, []);

  // Chunk the feedbacks array into groups of three items
  const chunkedFeedbacks = feedbacks.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Feedbacks</h1>
      <div className="grid grid-cols-3 gap-4 justify-between">
        {chunkedFeedbacks.map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-col">
            {group.map((feedback) => (
              <div key={feedback._id} className="border rounded-lg p-4 mb-4">
                <p className="text-lg font-semibold">
                  User: {feedback.user.name}
                </p>
                <p className="mt-2">{feedback.feedback}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
