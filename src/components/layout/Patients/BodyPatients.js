import React from "react";
import BodyHeader from "./BodyHeader";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";

const BodyPatients = () => {
  return (
    <div className="container-fluid">
      <BodyHeader />
      <div className="row">
        <BodyLeft />
        <BodyRight />
      </div>
    </div>
  );
};

export default BodyPatients;
