import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <div className="nav-header">
        <a href="index.html" className="brand-logo">
          <img className="logo-abbr" src="./images/logo.png" alt=""></img>
          <img
            className="logo-compact"
            src="./images/logo-text.png"
            alt=""
          ></img>
          <img
            className="brand-title"
            src="./images/logo-text.png"
            alt=""
          ></img>
        </a>

        <div className="nav-control">
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
