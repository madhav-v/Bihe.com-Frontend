import React from "react";
import RecommendSection from "./comp/recommendsection";
import Matches from "./comp/algorithm";

function DashboardSection() {
  return (
    <div className="min-h-[90vh] overflow-x-hidden">
      <Matches />
      <RecommendSection />
    </div>
  );
}

export default DashboardSection;
