import React, { Fragment } from "react";
import TotalPatientsBox from "./TotalPatientsBox";
import TotalNursesBox from "./TotalNursesBox";
import TotalMedsBox from "./TotalMedsBox";
import TotalSuppliesBox from "./TotalSuppliesBox";

const index = () => {
  return (
    <Fragment>
      <TotalPatientsBox />
      <TotalNursesBox />
      <TotalMedsBox />
      <TotalSuppliesBox />
    </Fragment>
  );
};

export default index;
