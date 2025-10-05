import React from "react";
import PeopleIcon from "../icons/PeopleIcon";

const TotalSuppliesBox = () => {
  return (
    <div class="col-xl-3 col-xxl-3 col-lg-6 col-md-6 col-sm-6">
      <div class="widget-stat card">
        <div class="card-body p-4">
          <div class="media ai-icon d-flex">
            <span class="me-3 bgl-primary text-primary">
              <PeopleIcon />
            </span>
            <div class="media-body">
              <h3 class="mb-0 text-black">
                <span class="counter ms-0">65</span>
              </h3>
              <p class="mb-0">Total Client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSuppliesBox;
