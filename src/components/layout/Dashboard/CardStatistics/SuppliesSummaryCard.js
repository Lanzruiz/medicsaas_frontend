import React from "react";
import ApexCharts from "apexcharts";
import LineChart from "../../../resources/LineChart";

const SuppliesSummaryCard = () => {
  return (
    <div className="col-xl-6 col-xxl-6 col-lg-12 col-md-12">
      <div className="card">
        <div className="card-header border-0 pb-0 d-sm-flex d-block">
          <div>
            <h4 className="card-title mb-1">Supplies</h4>
            <small className="mb-0">Analytical data of supplies</small>
          </div>
          <select className="form-control style-1 default-select  mt-3 mt-sm-0">
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Daily</option>
          </select>
        </div>
        <div className="card-body revenue-chart px-3">
          <div className="d-flex flex-wrap justify-content-end pe-3 pull-right revenue-chart-bar">
            <div className="d-flex align-items-end me-4 mb-2">
              <img
                src="images/svg/ic_stat2.svg"
                height="22"
                width="22"
                className="me-2 mb-1"
                alt=""
              />
              <div>
                <small className="text-dark fs-14">Income</small>
                <h3 className="font-w600 mb-0">
                  $<span className="counter">41,512</span>k
                </h3>
              </div>
            </div>
            <div className="d-flex align-items-end mb-2">
              <img
                src="images/svg/ic_stat1.svg"
                height="22"
                width="22"
                className="me-2 mb-1"
                alt=""
              />
              <div>
                <small className="text-dark fs-14">Expense</small>
                <h3 className="font-w600 mb-0">
                  $<span className="counter">41,512</span>k
                </h3>
              </div>
            </div>
          </div>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default SuppliesSummaryCard;
