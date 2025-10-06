import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/layout/Navbar";
import ChatBox from "../../components/layout/ChatBox";
import Header from "../../components/layout/Header";
import SideMenu from "../../components/layout/SideMenu";
import Footer from "../../components/layout/Footer";
import BodyPatients from "../../components/layout/Patients/BodyPatients";
import Jsloader from "../../components/resources/jsloader";
import Preloader from "../../components/layout/Dashboard/Preloader";

const index = () => {
  return (
    <Fragment>
      <Preloader />
      <div id="main-wrapper">
        <Navbar />
        <ChatBox />
        <Header />
        <SideMenu />
        <div className="content-body">
          <BodyPatients />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default index;
