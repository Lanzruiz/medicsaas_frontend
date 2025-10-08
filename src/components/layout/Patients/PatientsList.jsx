import React, { Fragment } from "react";
import LightningIcon from "../../resources/icons/LightningIcon";
import Calendar from "../../resources/icons/Calendar";
import ThreeDotsIcon from "../../resources/icons/ThreeDotsIcon";

const PatientsList = () => {
  return (
    <div className="container-fluid">
      <div className="form-head d-flex mb-3 align-items-start">
        <div className="me-auto d-none d-lg-block">
          <h2 className="text-primary font-w600 mb-0">Orders</h2>
          <p className="mb-0">Here is your order list data</p>
        </div>
        <div className="dropdown custom-dropdown">
          <button
            type="button"
            className="btn btn-primary light d-flex align-items-center svg-btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <LightningIcon />
            <span className="fs-16 ms-3">All Status</span>
            <i className="fa fa-angle-down scale5 ms-3"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">
              2020
            </a>
            <a className="dropdown-item" href="#">
              2019
            </a>
            <a className="dropdown-item" href="#">
              2018
            </a>
            <a className="dropdown-item" href="#">
              2017
            </a>
            <a className="dropdown-item" href="#">
              2016
            </a>
          </div>
        </div>
        <div className="dropdown custom-dropdown ms-3">
          <button
            type="button"
            className="btn btn-primary light d-flex align-items-center svg-btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Calendar />
            <span className="fs-16 ms-3">Today</span>
            <i className="fa fa-angle-down scale5 ms-3"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">
              Monday
            </a>
            <a className="dropdown-item" href="#">
              Tuesday
            </a>
            <a className="dropdown-item" href="#">
              Wednesday
            </a>
            <a className="dropdown-item" href="#">
              Thursday
            </a>
            <a className="dropdown-item" href="#">
              Friday
            </a>
            <a className="dropdown-item" href="#">
              Saturday
            </a>
            <a className="dropdown-item" href="#">
              Sunday
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table
              id="example5"
              className="display mb-4 dataTablesCard"
              style={{ minWidth: "845px" }}
            >
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Customer Name</th>
                  <th>Location</th>
                  <th>Amount</th>
                  <th>Status Order</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#5552351</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>James WItcwicky</td>
                  <td>Corner Street 5th London</td>
                  <td>$164.52</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no fs-16">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>David Horison</td>
                  <td>981 St. John’s Road London</td>
                  <td>$24.55</td>
                  <td>
                    <span className="btn btn-sm light btn-primary w-space-no">
                      On Delivery
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552351</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Emilia Johanson</td>
                  <td>67 St. John’s Road London</td>
                  <td>$251.16</td>
                  <td>
                    <span className="btn btn-sm light btn-primary w-space-no">
                      On Delivery
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <ThreeDotsIcon />
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Rendy Greenlee</td>
                  <td>32 The Green London</td>
                  <td>$251.16</td>
                  <td>
                    <span className="btn btn-sm light btn-success">
                      Delivered
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <ThreeDotsIcon />
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552351</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Jessica Wong</td>
                  <td>11 Church Road London</td>
                  <td>$24.17</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no w-space-no">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <ThreeDotsIcon />
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Veronica</td>
                  <td>21 King Street London</td>
                  <td>$74.92</td>
                  <td>
                    <span className="btn btn-sm light btn-primary w-space-no w-space-no">
                      On Delivery
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <ThreeDotsIcon />
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#7552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Samantha Bake</td>
                  <td>79 The Drive London</td>
                  <td>$22.18</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552351</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Olivia Shine</td>
                  <td>35 Station Road London</td>
                  <td>$82.46</td>
                  <td>
                    <span className="btn btn-sm light btn-success">
                      Delivered
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#4546563</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td className="w-space-no">Roberto Carlo</td>
                  <td className="w-space-no">Roberto Carlo</td>
                  <td>$34.41</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Franky Sihotang</td>
                  <td>6 The Avenue London</td>
                  <td>$164.52</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552351</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>James WItcwicky</td>
                  <td>Corner Street 5th London</td>
                  <td>$164.52</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no fs-16">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>David Horison</td>
                  <td>981 St. John’s Road London</td>
                  <td>$24.55</td>
                  <td>
                    <span className="btn btn-sm light btn-primary w-space-no">
                      On Delivery
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552351</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Emilia Johanson</td>
                  <td>67 St. John’s Road London</td>
                  <td>$251.16</td>
                  <td>
                    <span className="btn btn-sm light btn-primary w-space-no">
                      On Delivery
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Rendy Greenlee</td>
                  <td>32 The Green London</td>
                  <td>$251.16</td>
                  <td>
                    <span className="btn btn-sm light btn-success">
                      Delivered
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552351</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Jessica Wong</td>
                  <td>11 Church Road London</td>
                  <td>$24.17</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Veronica</td>
                  <td>21 King Street London</td>
                  <td>$74.92</td>
                  <td>
                    <span className="btn btn-sm light btn-primary w-space-no">
                      On Delivery
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#7552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Samantha Bake</td>
                  <td>79 The Drive London</td>
                  <td>$22.18</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552351</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Olivia Shine</td>
                  <td>35 Station Road London</td>
                  <td>$82.46</td>
                  <td>
                    <span className="btn btn-sm light btn-success">
                      Delivered
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#4546563</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Roberto Carlo</td>
                  <td className="w-space-no">Roberto Carlo</td>
                  <td>$34.41</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Franky Sihotang</td>
                  <td>6 The Avenue London</td>
                  <td>$164.52</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552351</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>James WItcwicky</td>
                  <td>Corner Street 5th London</td>
                  <td>$164.52</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no fs-16">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>David Horison</td>
                  <td>981 St. John’s Road London</td>
                  <td>$24.55</td>
                  <td>
                    <span className="btn btn-sm light btn-primary w-space-no">
                      On Delivery
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552351</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Emilia Johanson</td>
                  <td>67 St. John’s Road London</td>
                  <td>$251.16</td>
                  <td>
                    <span className="btn btn-sm light btn-primary w-space-no">
                      On Delivery
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Rendy Greenlee</td>
                  <td>32 The Green London</td>
                  <td>$251.16</td>
                  <td>
                    <span className="btn btn-sm light btn-success">
                      Delivered
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552351</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Jessica Wong</td>
                  <td>11 Church Road London</td>
                  <td>$24.17</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Veronica</td>
                  <td>21 King Street London</td>
                  <td>$74.92</td>
                  <td>
                    <span className="btn btn-sm light btn-primary w-space-no">
                      On Delivery
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#7552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Samantha Bake</td>
                  <td>79 The Drive London</td>
                  <td>$22.18</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552351</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Olivia Shine</td>
                  <td>35 Station Road London</td>
                  <td>$82.46</td>
                  <td>
                    <span className="btn btn-sm light btn-success">
                      Delivered
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#4546563</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Roberto Carlo</td>
                  <td className="w-space-no">Roberto Carlo</td>
                  <td>$34.41</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5552397</td>
                  <td className="w-space-no">26 March 2020, 12:42 AM</td>
                  <td>Franky Sihotang</td>
                  <td>6 The Avenue London</td>
                  <td>$164.52</td>
                  <td>
                    <span className="btn btn-sm light btn-warning w-space-no">
                      New Order
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown ms-auto text-end c-pointer">
                      <div className="btn-link" data-bs-toggle="dropdown">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="las la-check-square scale5 text-primary me-2"></i>{" "}
                          Accept Order
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="las la-times-circle scale5 text-danger me-2"></i>{" "}
                          Reject Order
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsList;
