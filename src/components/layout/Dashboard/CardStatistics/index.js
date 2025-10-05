import React, { Fragment } from "react";
import PatientSummaryCard from "./PatientSummaryCard";
import SuppliesSummaryCard from "./SuppliesSummaryCard";

const index = () => {
  return (
    <Fragment>
      <PatientSummaryCard />
      <SuppliesSummaryCard />
    </Fragment>
  );
};

export default index;
