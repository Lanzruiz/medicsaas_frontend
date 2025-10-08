import React, { Fragment } from "react";
import LightningIcon from "../../resources/icons/LightningIcon";
import Calendar from "../../resources/icons/Calendar";
import ThreeDotsIcon from "../../resources/icons/ThreeDotsIcon";

const PatientsList = () => {
  return (
    <div className="container-fluid">
      <div className="form-head d-flex mb-3 align-items-start">
        <div className="me-auto d-none d-lg-block">
          <h2 className="text-primary font-w600 mb-0">List of Patients</h2>
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
      <div class="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Exam Toppers</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-responsive-md">
                <thead>
                  <tr>
                    <th style={{ width: "50px" }}>
                      <div className="custom-control form-check checkbox-success check-lg me-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkAll"
                          required=""
                        />
                        <label
                          className="custom-control-label"
                          for="checkAll"
                        ></label>
                      </div>
                    </th>
                    <th>
                      <strong>ROLL NO.</strong>
                    </th>
                    <th>
                      <strong>NAME</strong>
                    </th>
                    <th>
                      <strong>Email</strong>
                    </th>
                    <th>
                      <strong>Date</strong>
                    </th>
                    <th>
                      <strong>Status</strong>
                    </th>
                    <th>
                      <strong>Action</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="custom-control form-check checkbox-success check-lg me-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                        />
                        <label
                          className="custom-control-label"
                          for="customCheckBox2"
                        ></label>
                      </div>
                    </td>
                    <td className="text-black">
                      <strong>542</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>example@example.com </td>
                    <td>01 August 2020</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="fa fa-circle text-success me-1"></i>{" "}
                        Successful
                      </div>
                    </td>
                    <td>
                      <div className="d-flex">
                        <a
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="custom-control form-check  checkbox-success check-lg me-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox3"
                          required=""
                        />
                        <label
                          className="custom-control-label"
                          for="customCheckBox3"
                        ></label>
                      </div>
                    </td>
                    <td className="text-black">
                      <strong>542</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>example@example.com </td>
                    <td>01 August 2020</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="fa fa-circle text-danger me-1"></i>{" "}
                        Canceled
                      </div>
                    </td>
                    <td>
                      <div className="d-flex">
                        <a
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="custom-control form-check custom-checkbox checkbox-success check-lg me-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox4"
                          required=""
                        />
                        <label
                          className="custom-control-label"
                          for="customCheckBox4"
                        ></label>
                      </div>
                    </td>
                    <td className="text-black">
                      <strong>542</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="images/avatar/3.jpg"
                          className="rounded-lg me-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td>example@example.com </td>
                    <td>01 August 2020</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="fa fa-circle text-warning me-1"></i>{" "}
                        Pending
                      </div>
                    </td>
                    <td>
                      <div className="d-flex">
                        <a
                          href="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsList;
