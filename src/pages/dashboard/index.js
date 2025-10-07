import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/layout/Navbar";
import ChatBox from "../../components/layout/ChatBox";
import Header from "../../components/layout/Header";
import SideMenu from "../../components/layout/SideMenu";
import Footer from "../../components/layout/Footer";
import Body from "../../components/layout/Dashboard/Body";
import Jsloader from "../../components/resources/jsloader";
import Preloader from "../../components/layout/Dashboard/Preloader";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // Check if a reload has already happened in this session
    localStorage.removeItem("hasReloadedPatients");
    localStorage.removeItem("hasReloadedListPatients");
    const hasReloaded = localStorage.getItem("hasReloadedDashboard");

    if (!hasReloaded) {
      // If not reloaded, set the flag and perform the reload
      localStorage.setItem("hasReloadedDashboard", "true");
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
          <Body />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default index;
