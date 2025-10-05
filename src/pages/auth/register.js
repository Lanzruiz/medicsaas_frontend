import React, { Fragment } from "react";

const register = () => {
  return (
    <Fragment>
      <div className="authincation h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-12">
              <div className="row align-items-center ">
                <div className="card login-card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="text-center my-5">
                          <a href="index.html">
                            <img src="images/logo-full.png" alt=""></img>
                          </a>
                        </div>
                        <div className="media-login">
                          <img
                            src="images/svg/student.svg"
                            className="w-100"
                            alt=""
                          ></img>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="auth-form">
                          <h3 className="text-start mb-4 font-w600">
                            Register to Davur
                          </h3>
                          <form action="index.html">
                            <div className="form-group">
                              <label className="mb-1 text-black">
                                Full Name<span className="required">*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                value="hello@example.com"
                              />
                            </div>
                            <div className="form-group">
                              <label className="mb-1 text-black">
                                Email<span className="required">*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                value="hello@example.com"
                              />
                            </div>
                            <div className="form-group">
                              <label className="mb-1 text-black">
                                Password<span className="required">*</span>
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                value="Password"
                              />
                            </div>
                            <div className="form-row d-flex justify-content-between mt-4 mb-2">
                              <div className="form-group">
                                <div className=" form-check ms-1 mb-2">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="basic_checkbox_1"
                                  />
                                  <label
                                    className="custom-control-label ms-1"
                                    for="basic_checkbox_1"
                                  >
                                    I agree with Davur{" "}
                                    <a href="javascript:void(0);">
                                      Terms & Conditions
                                    </a>
                                  </label>
                                </div>
                                <div className=" form-check ms-1">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="basic_checkbox_2"
                                  />
                                  <label
                                    className="custom-control-label ms-1"
                                    for="basic_checkbox_2"
                                  >
                                    Remember my preference
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="text-center">
                              <button
                                type="submit"
                                className="btn btn-primary btn-block"
                              >
                                Sign In
                              </button>
                            </div>
                          </form>
                          <div className="new-account mt-3 d-flex align-items-center justify-content-between flex-wrap">
                            <small className="mb-0">
                              Don't have an account?{" "}
                              <a
                                className="text-primary"
                                href="./page-register.html"
                              >
                                Sign up
                              </a>
                            </small>
                            <small href="page-forgot-password.html">
                              Forgot Password?
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default register;
