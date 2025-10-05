import React, { Fragment } from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/dashboard";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Fragment>
  );
};

export default App;
