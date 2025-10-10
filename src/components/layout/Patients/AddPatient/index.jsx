import React, { Fragment } from "react";
import Humanbody from "../../../resources/HumanBody";
import MenBackBodySvgComponent from "../../../resources/HumanBody/MenBackBodySvgComponent";
import Calendar from "../../../resources/icons/Calendar";
import LightningIcon from "../../../resources/icons/LightningIcon";
import FormWizard from "./FormWizard";
const index = () => {
  return (
    <Fragment>
      <div className="form-head d-flex mb-3 align-items-start">
        <div className="me-auto d-none d-lg-block">
          <h2 className="text-primary font-w600 mb-0">Add Patient</h2>
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
        <div className="col-xl-12 col-xxl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Please Provide the Information</h4>
            </div>
            <div className="card-body">
              <FormWizard />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
