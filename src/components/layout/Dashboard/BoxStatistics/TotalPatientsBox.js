import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CupIcon from "../../../resources/icons/CupIcon";
import PatientIcon from "../../../resources/icons/PatientIcon";

const TotalPatientsBox = () => {
  return (
    <Link
      to="/patients"
      className="col-xl-3 col-xxl-3 col-lg-6 col-md-6 col-sm-6"
    >
      <div className="widget-stat card">
        <div className="card-body p-4">
          <div className="media ai-icon d-flex">
            <span className="me-3 bgl-primary text-primary">
              <PatientIcon />
            </span>
            <div className="media-body">
              <h3 className="mb-0 text-black">
                <span className="counter ms-0">56</span>
              </h3>
              <p className="mb-0">Total Patients</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TotalPatientsBox;
