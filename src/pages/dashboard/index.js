import React, { Fragment } from "react";
import Navbar from "../../components/layout/Dashboard/Navbar";
import ChatBox from "../../components/layout/Dashboard/ChatBox";
import Header from "../../components/layout/Dashboard/Header";
import SideBar from "../../components/layout/Dashboard/SideBar";
import Footer from "../../components/layout/Dashboard/Footer";
import Body from "../../components/layout/Dashboard/Body";

const index = () => {
  return (
    <Fragment>
      <div id="main-wrapper">
        <Navbar />
        <ChatBox />
        <Header />
        <SideBar />
        <div className="content-body">
          <Body />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default index;
