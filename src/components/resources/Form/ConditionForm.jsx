import React from "react";
import BasicDatePicker from "./BasicDatePicker";
import DropdownPlaces from "../DropdownPlaces/DropdownPlaces";
import FemaleAnatomy from "../FemaleAnatomy/index.jsx";
import MaleAnatomy from "../MaleAnatomy/index.jsx";

const ConditionForm = () => {
  return (
    <div id="wizard_Service" className="tab-pane margin-top-50" role="tabpanel">
      <div className="row">
        <div className="col-lg-6 mb-2">
            <MaleAnatomy />    
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group">
            <label className="form-label">
              Last Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Montana"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group">
            <label className="form-label">
              Date of Birth<span className="required">*</span>
            </label>
            <BasicDatePicker />
          </div>
        </div>
    
        {/* <div className="col-lg-6 mb-2">
          <div className="form-group">
            <label className="form-label">
              Phone Number<span className="required">*</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              placeholder="(+1)408-657-9007"
              required
            />
          </div>
        </div> */}
         <div className="col-lg-6 mb-2">
          <div className="form-group">
            <label className="form-label">
              Nick Name
            </label>
            <input
              type="text"
              name="nickName"
              className="form-control"
              placeholder="Enter your nickname"
              required
            />
          </div>
        </div> 
        <div className="col-lg-6 mb-2">
          <div className="form-group">
            <label className="form-label">
              Gender<span className="required">*</span>
            </label>
            <select class="form-control">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
               
          </div>
        </div>
         <div className="col-lg-6 mb-2">
          <div className="form-group">
            <label className="form-label">
              Job<span className="required">*</span>
            </label>
            <select class="form-control">
                <option value="">Select Job</option>
                <option value="engineer">Engineer</option>
                <option value="doctor">Doctor</option>
            </select>
               
          </div>
        </div>
       
     
      </div>

    </div>
  );
};

export default ConditionForm;
