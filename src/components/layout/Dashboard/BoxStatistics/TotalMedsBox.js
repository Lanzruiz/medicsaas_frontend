import React from "react";
import OrdersIcon from "../icons/OrdersIcon";

const TotalMedsBox = () => {
  return (
    <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-6 col-sm-6">
      <div className="widget-stat card">
        <div className="card-body p-4">
          <div className="media ai-icon d-flex">
            <span className="me-3 bgl-primary text-primary">
              <OrdersIcon />
            </span>
            <div className="media-body">
              <h3 className="mb-0 text-black">
                <span className="counter ms-0">20</span>
              </h3>
              <p className="mb-0">Total Orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalMedsBox;
