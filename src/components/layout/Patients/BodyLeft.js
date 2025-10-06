import React from "react";
import PatientSummaryCard from "./PatientSummaryCard";

const BodyLeft = () => {
  return (
    <div className="col-xl-6 col-xxl-6 col-lg-12 col-lg-9 col-md-12">
      <div class="row">
        <PatientSummaryCard />
      </div>
    </div>
  );
};

export default BodyLeft;
