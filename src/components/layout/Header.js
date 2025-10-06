import React from "react";
import Capa_1 from "../resources/icons/Capa_1";
import Bill from "../resources/icons/Bill";
import Dropdown from "../resources/icons/Dropdown";
import Logout from "../resources/icons/Logout";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div className="input-group search-area">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here..."
                />
                <span className="input-group-text">
                  <a href="javascript:void(0)">
                    <i className="flaticon-381-search-2"></i>
                  </a>
                </span>
              </div>
            </div>

            <ul className="navbar-nav header-right">
              <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link dz-fullscreen primary" href="#">
                  <Capa_1 />
                </a>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link bell bell-link primary" href="#">
                  <Bill />
                </a>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a
                  className="nav-link  ai-icon warning"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <Dropdown />
                  <div className="pulse-css"></div>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div
                    id="DZ_W_Notification1"
                    className="widget-media dz-scroll p-3"
                    style={{ height: "380px" }}
                  >
                    <ul className="timeline">
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2">
                            <img
                              alt="image"
                              width="50"
                              src="images/avatar/1.jpg"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-info">KG</div>
                          <div className="media-body">
                            <h6 className="mb-1">
                              Resport created successfully
                            </h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-success">
                            <i className="fa fa-home"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2">
                            <img
                              alt="image"
                              width="50"
                              src="images/avatar/1.jpg"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-danger">KG</div>
                          <div className="media-body">
                            <h6 className="mb-1">
                              Resport created successfully
                            </h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-primary">
                            <i className="fa fa-home"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a className="all-notification" href="#">
                    See all notifications <i className="ti-arrow-right"></i>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown header-profile">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <div className="header-info">
                    <span>
                      Hello, <strong>Samuel</strong>
                    </span>
                  </div>
                  <img src="images/profile/pic1.jpg" width="20" alt="" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a
                    href="./app-profile.html"
                    className="dropdown-item ai-icon"
                  >
                    <Dropdown />
                    <span className="ms-2">Profile </span>
                  </a>
                  <a
                    href="./email-inbox.html"
                    className="dropdown-item ai-icon"
                  >
                    <Dropdown />
                    <span className="ms-2">Inbox </span>
                  </a>
                  <a href="./page-login.html" className="dropdown-item ai-icon">
                    <Logout />
                    <span className="ms-2">Logout </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
