import React from "react";
import BasicDatePicker from "./BasicDatePicker";
import DropdownPlaces from "../DropdownPlaces/DropdownPlaces";

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
            <select className="form-control">
                <option value="">Select Job</option>
                <option value="engineer">Engineer</option>
                <option value="doctor">Doctor</option>
            </select>
               
          </div>
        </div>
        
        < DropdownPlaces  />
       
     
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
                 Last Name<span className="required">*</span>
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
                 Email<span className="required">*</span>
              </label>
              <input
                type="email"
                name="guardianEmail"
                className="form-control"
                placeholder="Enter guardian's email"
                required
               />
            </div>
          </div> 
           <div className="col-lg-6 mb-2 margin-top-10px">
            <div className="form-group">
              <label className="form-label">
                 Phone Number<span className="required">*</span>
              </label>
              <input
                type="tel"
                name="guardianPhone"
                className="form-control"
                placeholder="Enter guardian's phone number"
                required
               />
            </div>
          </div> 
          
          < DropdownPlaces  />
           <div className="col-lg-6 mb-2 margin-top-10px">
            <div className="form-group">
              <label className="form-label">
                 Relationship to Patient<span className="required">*</span>
              </label>
              <input
                type="text"
                name="guardianRelationship"
                className="form-control"
                placeholder="Enter relationship to patient"
                required
               />
            </div>
          </div> 
           <div className="col-lg-6 mb-2">
          <div className="form-group">
            <label className="form-label">
              Date<span className="required">*</span>
            </label>
            <BasicDatePicker />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PersonalForm;
