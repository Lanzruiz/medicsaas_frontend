import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PatientIcon from "../resources/icons/PatientIcon";
import NursesIcon from "../resources/icons/NursesIcon";
import DashboardIcon from "../resources/icons/DashboardIcon";
import MedicineIcon from "../resources/icons/MedicineIcon";
import SuppliesIcon from "../resources/icons/SuppliesIcon";

const SideMenu = () => {
  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li>
            <Link to="/dashboard" className="ai-icon" aria-expanded="false">
              <DashboardIcon />
              <span className="nav-text">Dashboard</span>
            </Link>
            {/* <ul aria-expanded="false">
              <li>
                <a href="index.html">Dashboard</a>
              </li>
              <li>
                <a href="page-analytics.html">Analytics</a>
              </li>
              <li>
                <a href="page-review.html">Review</a>
              </li>
              <li>
                <a href="page-order.html">Order</a>
              </li>
              <li>
                <a href="page-order-list.html">Order List</a>
              </li>
              <li>
                <a href="page-general-customers.html">General Customers</a>
              </li>
            </ul> */}
          </li>
          <li>
            <Link
              to="/patients"
              className="has-arrow ai-icon"
              aria-expanded="false"
            >
              <PatientIcon />
              <span className="nav-text">Patients</span>
            </Link>
            <ul aria-expanded="false">
              <li>
                <Link to="/patients">Analytics</Link>
              </li>
              <li>
                <Link to="/list-patients">List of Patients</Link>
              </li>
              <li>
                <a href="page-review.html">Add Patient</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="fi fi-rr-users" aria-expanded="false">
              <NursesIcon />
              <span className="nav-text">Nurses</span>
            </a>
          </li>
          <li>
            <a className="fi fi-rr-users" aria-expanded="false">
              <MedicineIcon />
              <span className="nav-text">Medicine</span>
            </a>
          </li>
          <li>
            <a className="fi fi-rr-users" aria-expanded="false">
              <SuppliesIcon />
              <span className="nav-text">Supplies</span>
            </a>
          </li>
          {/* <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i className="flaticon-381-networking"></i>
              <span className="nav-text">Frontend</span>
              <span className="badge badge-xs badge-danger">New</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="../frontend/front-home.html">POS</a>
              </li>
              <li>
                <a href="../frontend/front-dashboard.html">Dashboard</a>
              </li>
              <li>
                <a href="../frontend/front-authentication.html">
                  Authentication
                </a>
              </li>
              <li>
                <a href="../frontend/front-booking.html">Booking</a>
              </li>
              <li>
                <a href="../frontend/front-food-items.html">Food Items</a>
              </li>
              <li>
                <a href="../frontend/front-orders_status.html">Orders Status</a>
              </li>
              <li>
                <a href="../frontend/front-people.html">People</a>
              </li>
              <li>
                <a href="../frontend/front-reviews.html">Reviews</a>
              </li>
              <li>
                <a href="../frontend/front-setting.html">Setting</a>
              </li>
              <li>
                <a href="../frontend/front-support.html">Support</a>
              </li>
              <li>
                <a href="../frontend/front-terms_conditions.html">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="../frontend/front-transactions.html">Transactions</a>
              </li>
              <li>
                <a href="../frontend/front-upload_item.html">Upload Item</a>
              </li>
              <li>
                <a href="../frontend/front-wallet.html">Wallet</a>
              </li>
              <li>
                <a href="../frontend/front-login.html">Login</a>
              </li>
            </ul>
          </li> */}
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i className="flaticon-381-home-1"></i>
              <span className="nav-text">Frontend 2</span>
              <span className="badge badge-xs badge-danger">New</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a
                  href="https://davur.dexignzone.com/websitetemplate/xhtml/index.html"
                  target="_blank"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://davur.dexignzone.com/websitetemplate/xhtml/about-us.html"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="has-arrow"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a
                      href="https://davur.dexignzone.com/websitetemplate/xhtml/shop-grid-view.html"
                      target="_blank"
                    >
                      Shop Grid
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://davur.dexignzone.com/websitetemplate/xhtml/shop-detail.html"
                      target="_blank"
                    >
                      Shop Detail
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://davur.dexignzone.com/websitetemplate/xhtml/shop-cart.html"
                      target="_blank"
                    >
                      Shop Cart
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://davur.dexignzone.com/websitetemplate/xhtml/shop-checkout.html"
                      target="_blank"
                    >
                      Shop Checkout
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://davur.dexignzone.com/websitetemplate/xhtml/wishlist.html"
                      target="_blank"
                    >
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://davur.dexignzone.com/websitetemplate/xhtml/shop-login.html"
                      target="_blank"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://davur.dexignzone.com/websitetemplate/xhtml/shop-registration.html"
                      target="_blank"
                    >
                      Registration
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a
                      href="https://davur.dexignzone.com/websitetemplate/xhtml/blog-list.html"
                      target="_blank"
                    >
                      Blog List
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://davur.dexignzone.com/websitetemplate/xhtml/blog-grid.html"
                      target="_blank"
                    >
                      Blog Grid
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://davur.dexignzone.com/websitetemplate/xhtml/blog-details.html"
                      target="_blank"
                    >
                      Blog Details
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="https://davur.dexignzone.com/websitetemplate/xhtml/blog-list.html"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i className="fa-solid fa-gear"></i>
              <span className="nav-text">CMS</span>
              <span className="badge badge-xs badge-danger">New</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="content.html">Content</a>
              </li>
              <li>
                <a href="menu.html">Menu</a>
              </li>
              <li>
                <a href="email-template.html">Email Template</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
            </ul>
          </li>

          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i className="flaticon-381-television"></i>
              <span className="nav-text">Apps</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./app-profile.html">Profile</a>
              </li>
              <li>
                <a href="./post-details.html">Post Details</a>
              </li>
              <li>
                <a
                  className="has-arrow"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  Email
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="./email-compose.html">Compose</a>
                  </li>
                  <li>
                    <a href="./email-inbox.html">Inbox</a>
                  </li>
                  <li>
                    <a href="./email-read.html">Read</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./app-calender.html">Calendar</a>
              </li>
              <li>
                <a
                  className="has-arrow"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="./ecom-product-grid.html">Product Grid</a>
                  </li>
                  <li>
                    <a href="./ecom-product-list.html">Product List</a>
                  </li>
                  <li>
                    <a href="./ecom-product-detail.html">Product Details</a>
                  </li>
                  <li>
                    <a href="./ecom-product-order.html">Order</a>
                  </li>
                  <li>
                    <a href="./ecom-checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="./ecom-invoice.html">Invoice</a>
                  </li>
                  <li>
                    <a href="./ecom-customers.html">Customers</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i className="flaticon-381-controls-3"></i>
              <span className="nav-text">Charts</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./chart-flot.html">Flot</a>
              </li>
              <li>
                <a href="./chart-morris.html">Morris</a>
              </li>
              <li>
                <a href="./chart-chartjs.html">Chartjs</a>
              </li>
              <li>
                <a href="./chart-chartist.html">Chartist</a>
              </li>
              <li>
                <a href="./chart-sparkline.html">Sparkline</a>
              </li>
              <li>
                <a href="./chart-peity.html">Peity</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i className="flaticon-381-internet"></i>
              <span className="nav-text">Bootstrap</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./ui-accordion.html">Accordion</a>
              </li>
              <li>
                <a href="./ui-alert.html">Alert</a>
              </li>
              <li>
                <a href="./ui-badge.html">Badge</a>
              </li>
              <li>
                <a href="./ui-button.html">Button</a>
              </li>
              <li>
                <a href="./ui-modal.html">Modal</a>
              </li>
              <li>
                <a href="./ui-button-group.html">Button Group</a>
              </li>
              <li>
                <a href="./ui-list-group.html">List Group</a>
              </li>
              <li>
                <a href="./ui-media-object.html">Media Object</a>
              </li>
              <li>
                <a href="./ui-card.html">Cards</a>
              </li>
              <li>
                <a href="./ui-carousel.html">Carousel</a>
              </li>
              <li>
                <a href="./ui-dropdown.html">Dropdown</a>
              </li>
              <li>
                <a href="./ui-popover.html">Popover</a>
              </li>
              <li>
                <a href="./ui-progressbar.html">Progressbar</a>
              </li>
              <li>
                <a href="./ui-tab.html">Tab</a>
              </li>
              <li>
                <a href="./ui-typography.html">Typography</a>
              </li>
              <li>
                <a href="./ui-pagination.html">Pagination</a>
              </li>
              <li>
                <a href="./ui-grid.html">Grid</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i className="flaticon-381-heart"></i>
              <span className="nav-text">Plugins</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./uc-select2.html">Select 2</a>
              </li>
              <li>
                <a href="./uc-nestable.html">Nestedable</a>
              </li>
              <li>
                <a href="./uc-noui-slider.html">Noui Slider</a>
              </li>
              <li>
                <a href="./uc-sweetalert.html">Sweet Alert</a>
              </li>
              <li>
                <a href="./uc-toastr.html">Toastr</a>
              </li>
              <li>
                <a href="./map-jqvmap.html">Jqv Map</a>
              </li>
              <li>
                <a href="./uc-lightgallery.html">Light Gallery</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i className="flaticon-381-settings-2"></i>
              <span className="nav-text">Widget</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="widget-card.html">Widget Card</a>
              </li>
              <li>
                <a href="widget-chart.html">widget Chart</a>
              </li>
              <li>
                <a href="widget-list.html">Widget List</a>
              </li>
            </ul>
          </li>

          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i className="flaticon-381-notepad"></i>
              <span className="nav-text">Forms</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./form-element.html">Form Elements</a>
              </li>
              <li>
                <a href="./form-wizard.html">Wizard</a>
              </li>
              <li>
                <a href="./form-ckeditor.html">Summernote</a>
              </li>
              <li>
                <a href="form-pickers.html">Pickers</a>
              </li>
              <li>
                <a href="form-validation-jquery.html">Jquery Validate</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i className="flaticon-381-network"></i>
              <span className="nav-text">Table</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="table-bootstrap-basic.html">Bootstrap</a>
              </li>
              <li>
                <a href="table-datatable-basic.html">Datatable</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void()"
              aria-expanded="false"
            >
              <i className="flaticon-381-layer-1"></i>
              <span className="nav-text">Pages</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./page-register.html">Register</a>
              </li>
              <li>
                <a href="./page-login.html">Login</a>
              </li>
              <li>
                <a
                  className="has-arrow"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  Error
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="./page-error-400.html">Error 400</a>
                  </li>
                  <li>
                    <a href="./page-error-403.html">Error 403</a>
                  </li>
                  <li>
                    <a href="./page-error-404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="./page-error-500.html">Error 500</a>
                  </li>
                  <li>
                    <a href="./page-error-503.html">Error 503</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./page-lock-screen.html">Lock Screen</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="add-menu-sidebar">
          <img src="images/icon1.png" alt="" />
          <p>Organize your menus through button bellow</p>
          <a href="javascript:void(0);" className="btn bg-white text-black">
            + Add Menus
          </a>
        </div>
        <div className="copyright">
          <p>
            <strong>Davur - Restaurant Admin Dashboard</strong> ©2023 All Rights
            Reserved
          </p>
          <p>
            Made with <span className="heart"></span> by DexignZone
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
