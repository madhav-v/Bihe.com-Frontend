import React from "react";
import RecommendSection from "./comp/recommendsection";
import Matches from "./comp/algorithm";
import FeedBack from "../../components/FeedBack/feedback"
function DashboardSection() {
  return (
    <div className="min-h-[90vh] overflow-x-hidden">
      <Matches />
      <RecommendSection />
      <FeedBack/>
    </div>
  );
}

export default DashboardSection;
