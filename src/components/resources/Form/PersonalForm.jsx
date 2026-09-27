import React from "react";
import BasicDatePicker from "./BasicDatePicker";

const PersonalForm = () => {
  return (
    <div id="wizard_Service" className="tab-pane margin-top-50" role="tabpanel">
      <div className="row">
        <div className="col-lg-6 mb-2">
          <div className="form-group">
            <label className="form-label">
              First Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Parsley"
              required
            />
          </div>
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
              Nick Name<span className="required">*</span>
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
       
     
      </div>
      <div className="row">
        <div className="card-header">
          <h4 className="card-title">Guardian Information</h4>
        </div>
      </div>
      <div className="row">
         <div className="col-lg-6 mb-2 margin-top-10px">
            <div className="form-group">
              <label className="form-label">
                 First Name<span className="required">*</span>
              </label>
              <input
                type="text"
                name="guardianFirstName"
                className="form-control"
                placeholder="Enter guardian's first name"
                required
               />
            </div>
          </div> 
          <div className="col-lg-6 mb-2 margin-top-10px">
            <div className="form-group">
              <label className="form-label">
                 Guardian's Last Name<span className="required">*</span>
              </label>
              <input
                type="text"
                name="guardianLastName"
                className="form-control"
                placeholder="Enter guardian's last name"
                required
               />
            </div>
          </div> 
          <div className="col-lg-6 mb-2 margin-top-10px">
            <div className="form-group">
              <label className="form-label">
                 First Name<span className="required">*</span>
              </label>
              <input
                type="text"
                name="guardianFirstName"
                className="form-control"
                placeholder="Enter guardian's first name"
                required
               />
            </div>
          </div> 
      </div>
    </div>
  );
};

export default PersonalForm;
