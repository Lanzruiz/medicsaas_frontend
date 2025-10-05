import React from "react";
import BodyHeader from "./BodyHeader";
import BoxStatistics from "./BoxStatistics";

const Body = () => {
  return (
    <div className="container-fluid">
      <BodyHeader />
      <div className="row">
        <BoxStatistics />
      </div>
    </div>
  );
};

export default Body;
