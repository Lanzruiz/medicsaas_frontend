import React from "react";
import BodyHeader from "./BodyHeader";
import BoxStatistics from "./BoxStatistics";
import CardStatistics from "./CardStatistics";

const Body = () => {
  return (
    <div className="container-fluid">
      <BodyHeader />
      <div className="row">
        <BoxStatistics />
        <CardStatistics />
      </div>
    </div>
  );
};

export default Body;
