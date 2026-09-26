import React, { useEffect } from "react";
import DonutChart from "../../../resources/DonutChart";

const PatientSummaryCard = () => {
  return (
    <div className="col-xl-6 col-xxl-6 col-lg-12 col-md-12">
      <div className="card">
        <div className="card-header border-0 pb-0 d-sm-flex flex-wrap d-block">
          <div className="mb-3">
            <h4 className="card-title mb-1">Patient Summary</h4>
            <small className="mb-0">
              Lorem ipsum dolor sit amet, consectetur
            </small>
          </div>
          <div className="card-action card-tabs mb-2">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#Monthly"
                  role="tab"
                >
                  Monthly
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#Weekly"
                  role="tab"
                >
                  Weekly
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#Today"
                  role="tab"
                >
                  Today
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body tab-content orders-summary pt-3">
          <div className="tab-pane fade show active" id="Monthly">
            <div className="d-flex flex-wrap order-manage p-3 align-items-center mb-4">
              <a
                href="javascript:void(0);"
                className="btn fs-22 text-white py-1 btn-success px-4 me-3"
              >
                25
              </a>
              <h4 className="mb-0">
                New Orders{" "}
                <i className="fa fa-circle text-success ms-1 fs-15"></i>
              </h4>
              <a
                href="javascript:void(0);"
                className="ms-sm-auto mt-sm-0 mt-2 text-success font-w500"
              >
                Manage orders <i className="ti-angle-right ms-1"></i>
              </a>
            </div>
            <div className="row">
              <div className="col-sm-4 mb-4">
                <div className="border px-3 py-3 rounded-xl">
                  <h2 className="fs-32 font-w600 counter">25</h2>
                  <p className="fs-16 mb-0">Private</p>
                </div>
              </div>
              <div className="col-sm-4 mb-4">
                <div className="border px-3 py-3 rounded-xl">
                  <h2 className="fs-32 font-w600 counter">60</h2>
                  <p className="fs-16 mb-0">Medic-Care</p>
                </div>
              </div>
              <div className="col-sm-4 mb-4">
                <div className="border px-3 py-3 rounded-xl">
                  <h2 className="fs-32 font-w600 counter">7</h2>
                  <p className="fs-16 mb-0">Cases</p>
                </div>
              </div>
            </div>
            <div className="widget-timeline-icon">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-2 col-xxl-4 col-sm-3 col-md-3 my-2 text-center text-sm-left">
                  <div className="d-inline-block">
                    <DonutChart />
                  </div>
                </div>
                <div className="col-xl-9 col-lg-10 col-xxl-8 col-sm-9 col-md-9">
                  <div className="d-flex align-items-center mb-3">
                    <p class="mb-0 fs-14 me-2 col-4 col-xxl-2 px-0">
                      24%
                    </p>
                    <div
                      className="progress mb-0"
                      style={{ height: "8px", width: "100%" }}
                    >
                      <div
                        className="progress-bar bg-warning progress-animated"
                        style={{ width: "85%", height: "8px" }}
                        role="progressbar"
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <span className=" ms-auto col-1 col-xxl-2 px-0 text-end">
                      25
                    </span>
                  </div>
                  <div className="d-flex align-items-center  mb-3">
                    <p class="mb-0 fs-14 me-2 col-4 col-xxl-2 px-0">
                      24%
                    </p>
                    <div
                      className="progress mb-0"
                      style={{ height: "8px", width: "100%" }}
                    >
                      <div
                        className="progress-bar bg-success progress-animated"
                        style={{ width: "70%", height: "8px" }}
                        role="progressbar"
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <span className="ms-auto col-1 col-xxl-2 px-0 text-end">
                      60
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 fs-14 me-2 col-4 col-xxl-2 px-0">
                      24%
                    </p>
                    <div
                      className="progress mb-0"
                      style={{ height: "8px", width: "100%" }}
                    >
                      <div
                        className="progress-bar bg-dark progress-animated"
                        style={{ width: "30%", height: "8px" }}
                        role="progressbar"
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <span className="ms-auto col-1 col-xxl-2 px-0 text-end">
                      07
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="Weekly">
            <div className="d-flex flex-wrap order-manage p-3 align-items-center mb-4">
              <a
                href="javascript:void(0);"
                className="btn fs-22 text-white py-1 btn-success px-4 me-3"
              >
                25
              </a>
              <h4 className="mb-0">
                New Orders{" "}
                <i className="fa fa-circle text-success ms-1 fs-15"></i>
              </h4>
              <a
                href="javascript:void(0);"
                className="ms-sm-auto mt-sm-0 mt-2 text-success font-w500"
              >
                Manage orders <i className="ti-angle-right ms-1"></i>
              </a>
            </div>
            <div className="row">
              <div className="col-sm-4 mb-4">
                <div className="border px-3 py-3 rounded-xl">
                  <h2 className="fs-32 font-w600 counter">25</h2>
                  <p className="fs-16 mb-0">Private</p>
                </div>
              </div>
              <div className="col-sm-4 mb-4">
                <div className="border px-3 py-3 rounded-xl">
                  <h2 className="fs-32 font-w600 counter">60</h2>
                  <p className="fs-16 mb-0">Medic-Care</p>
                </div>
              </div>
              <div className="col-sm-4 mb-4">
                <div className="border px-3 py-3 rounded-xl">
                  <h2 className="fs-32 font-w600 counter">7</h2>
                  <p className="fs-16 mb-0">Cases</p>
                </div>
              </div>
            </div>
            <div className="widget-timeline-icon">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-2 col-xxl-4 col-sm-3 col-md-3 my-2 text-center text-sm-left">
                  <div className="d-inline-block">
                    <DonutChart />
                  </div>
                </div>
                <div className="col-xl-9 col-lg-10 col-xxl-8 col-sm-9 col-md-9">
                  <div className="d-flex align-items-center mb-3">
                    <p class="mb-0 fs-14 me-2 col-4 col-xxl-2 px-0">
                      24%
                    </p>
                    <div
                      className="progress mb-0"
                      style={{ height: "8px", width: "100%" }}
                    >
                      <div
                        className="progress-bar bg-warning progress-animated"
                        style={{ width: "85%", height: "8px" }}
                        role="progressbar"
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <span className=" ms-auto col-1 col-xxl-2 px-0 text-end">
                      25
                    </span>
                  </div>
                  <div className="d-flex align-items-center  mb-3">
                    <p class="mb-0 fs-14 me-2 col-4 col-xxl-2 px-0">
                      24%
                    </p>
                    <div
                      className="progress mb-0"
                      style={{ height: "8px", width: "100%" }}
                    >
                      <div
                        className="progress-bar bg-success progress-animated"
                        style={{ width: "70%", height: "8px" }}
                        role="progressbar"
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <span className="ms-auto col-1 col-xxl-2 px-0 text-end">
                      60
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 fs-14 me-2 col-4 col-xxl-2 px-0">
                      24%
                    </p>
                    <div
                      className="progress mb-0"
                      style={{ height: "8px", width: "100%" }}
                    >
                      <div
                        className="progress-bar bg-dark progress-animated"
                        style={{ width: "30%", height: "8px" }}
                        role="progressbar"
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <span className="ms-auto col-1 col-xxl-2 px-0 text-end">
                      07
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="Today">
            <div className="d-flex flex-wrap order-manage p-3 align-items-center mb-4">
              <a
                href="javascript:void(0);"
                className="btn fs-22 text-white py-1 btn-success px-4 me-3"
              >
                25
              </a>
              <h4 className="mb-0">
                New Orders{" "}
                <i className="fa fa-circle text-success ms-1 fs-15"></i>
              </h4>
              <a
                href="javascript:void(0);"
                className="ms-sm-auto mt-sm-0 mt-2 text-success font-w500"
              >
                Manage orders <i className="ti-angle-right ms-1"></i>
              </a>
            </div>
            <div className="row">
              <div className="col-sm-4 mb-4">
                <div className="border px-3 py-3 rounded-xl">
                  <h2 className="fs-32 font-w600 counter">25</h2>
                  <p className="fs-16 mb-0">Private</p>
                </div>
              </div>
              <div className="col-sm-4 mb-4">
                <div className="border px-3 py-3 rounded-xl">
                  <h2 className="fs-32 font-w600 counter">60</h2>
                  <p className="fs-16 mb-0">Medic-Care</p>
                </div>
              </div>
              <div className="col-sm-4 mb-4">
                <div className="border px-3 py-3 rounded-xl">
                  <h2 className="fs-32 font-w600 counter">7</h2>
                  <p className="fs-16 mb-0">Cases</p>
                </div>
              </div>
            </div>
            <div className="widget-timeline-icon">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-2 col-xxl-4 col-sm-3 col-md-3 my-2 text-center text-sm-left">
                  <div className="d-inline-block">
                    <DonutChart />
                  </div>
                </div>
                <div className="col-xl-9 col-lg-10 col-xxl-8 col-sm-9 col-md-9">
                  <div className="d-flex align-items-center mb-3">
                    <p class="mb-0 fs-14 me-2 col-4 col-xxl-2 px-0">
                      24%
                    </p>
                    <div
                      className="progress mb-0"
                      style={{ height: "8px", width: "100%" }}
                    >
                      <div
                        className="progress-bar bg-warning progress-animated"
                        style={{ width: "85%", height: "8px" }}
                        role="progressbar"
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <span className=" ms-auto col-1 col-xxl-2 px-0 text-end">
                      25
                    </span>
                  </div>
                  <div className="d-flex align-items-center  mb-3">
                    <p class="mb-0 fs-14 me-2 col-4 col-xxl-2 px-0">
                      24%
                    </p>
                    <div
                      className="progress mb-0"
                      style={{ height: "8px", width: "100%" }}
                    >
                      <div
                        className="progress-bar bg-success progress-animated"
                        style={{ width: "70%", height: "8px" }}
                        role="progressbar"
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <span className="ms-auto col-1 col-xxl-2 px-0 text-end">
                      60
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 fs-14 me-2 col-4 col-xxl-2 px-0">
                      24%
                    </p>
                    <div
                      className="progress mb-0"
                      style={{ height: "8px", width: "100%" }}
                    >
                      <div
                        className="progress-bar bg-dark progress-animated"
                        style={{ width: "30%", height: "8px" }}
                        role="progressbar"
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <span className="ms-auto col-1 col-xxl-2 px-0 text-end">
                      07
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default PatientSummaryCard;
