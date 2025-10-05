import React, { Fragment } from "react";
import TotalPatientsBox from "./TotalPatientsBox";
import TotalNursesBox from "./TotalNursesBox";

const index = () => {
  return (
    <Fragment>
      <TotalPatientsBox />
      <TotalNursesBox />
    </Fragment>
  );
};

export default index;
