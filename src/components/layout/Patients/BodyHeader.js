import React from "react";
import Calendar from "../../resources/icons/Calendar";
import FilterDropDown from "./FilterDropDown";

const BodyHeader = () => {
  return (
    <div className="form-head d-flex mb-3 align-items-start">
      <div className="me-auto d-none d-lg-block">
        <h2 className="text-primary font-w600 mb-0 margin-top-10px">Patients</h2>
        <p className="mb-0">Welcome to Davur Admin!</p>
      </div>

      <div className="dropdown custom-dropdown">
        <div
          className="btn btn-sm btn-primary light d-flex align-items-center svg-btn"
          data-bs-toggle="dropdown"
        >
          <Calendar />
          <span className="d-block fs-16">Filter Periode</span>
          <small className="d-block fs-13">4 June 2020 - 4 July 2020</small>
        </div>
        <i className="fa fa-angle-down scale5 ms-3"></i>
      </div>
      <FilterDropDown />
    </div>
  );
};

export default BodyHeader;
