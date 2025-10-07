import React from "react";
import BodyHeader from "./BodyHeader";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import PatientsSlide from "./PatientsSlide";

const BodyPatients = () => {
  return (
    <div className="container-fluid">
      <BodyHeader />
      <div className="row">
        <BodyLeft />
        <BodyRight />
        <div className="row">
          <PatientsSlide />
        </div>
      </div>
    </div>
  );
};

export default BodyPatients;
