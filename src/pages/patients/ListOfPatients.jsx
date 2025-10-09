import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/layout/Navbar";
import ChatBox from "../../components/layout/ChatBox";
import Header from "../../components/layout/Header";
import SideMenu from "../../components/layout/SideMenu";
import Footer from "../../components/layout/Footer";
import BodyPatients from "../../components/layout/Patients/BodyPatients";
import PatientsList from "../../components/layout/Patients/PatientsList";
import Jsloader from "../../components/resources/jsloader";
import Preloader from "../../components/layout/Dashboard/Preloader";

const ListOfPatients = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // Check if a reload has already happened in this session
    localStorage.removeItem("hasReloadedDashboard");
    localStorage.removeItem("hasReloadedPatients");
    localStorage.removeItem("hasReloadedAddPatients");
    const hasReloadedListPatients = localStorage.getItem(
      "hasReloadedListPatients"
    );

    if (!hasReloadedListPatients) {
      // If not reloaded, set the flag and perform the reload
      localStorage.setItem("hasReloadedListPatients", "true");
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
          <PatientsList />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default ListOfPatients;
