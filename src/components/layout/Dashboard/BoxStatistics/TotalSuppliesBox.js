import React from "react";
import PeopleIcon from "../../../resources/icons/PeopleIcon";
import SuppliesIcon from "../../../resources/icons/SuppliesIcon";

const TotalSuppliesBox = () => {
  return (
    <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-6 col-sm-6">
      <div className="widget-stat card">
        <div className="card-body p-4">
          <div className="media ai-icon d-flex">
            <span className="me-3 bgl-primary text-primary">
              <SuppliesIcon />
            </span>
            <div className="media-body">
              <h3 className="mb-0 text-black">
                <span className="counter ms-0">65</span>
              </h3>
              <p className="mb-0">Total Supplies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSuppliesBox;
