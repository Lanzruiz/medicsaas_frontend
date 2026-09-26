import React, { Fragment } from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/dashboard";
import Patients from "./pages/patients";
import ListOfPatients from "./pages/patients/ListOfPatients";
import AddPatient from "./pages/patients/AddPatient";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/patients" element={<Patients />} />
        <Route exact path="/list-patients" element={<ListOfPatients />} />
        <Route exact path="/add-patient" element={<AddPatient />} />
      </Routes>
    </Fragment>
  );
};

export default App;
