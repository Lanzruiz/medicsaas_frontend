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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // Check if a reload has already happened in this session
    localStorage.removeItem("hasReloadedDashboard");
    localStorage.removeItem("hasReloadedListPatients");
    const hasReloadedPatients = localStorage.getItem("hasReloadedPatients");

    if (!hasReloadedPatients) {
      // If not reloaded, set the flag and perform the reload
      localStorage.setItem("hasReloadedPatients", "true");
      window.location.reload();
    }
  }, []); // The empty dependency array ensures this effect runs only once on mount

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
