import { jsx, ThemeProvider, Themed } from "theme-ui";
import React, { Component, useState, useEffect } from "react";
import theme from "../../theme";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../Dashboard/Sidebar";
import { useLocation } from "react-router-dom";
import "./profile.css";
import Personal from "./Components/Personal";
import Vehicle from "./Components/Vehicle";
import Health from "./Components/Health";

function Profile() {
  const { pathname } = useLocation();
  let { company } = useParams();

  const history = useHistory();
  const dispatch = useDispatch();

  const [authToken] = localStorage.getItem("token");
  const userName = useSelector((state) => state.user.username);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const [personal, setPersonal] = React.useState(false);
  const [vehicle, setVehicle] = React.useState(false);
  const [health, setHealth] = React.useState(false);

  React.useEffect(() => {
    console.log("logIn---", loggedIn);
    /* check token and refresh user after login */
    if (!authToken) {
      history.push(`${company}/user-login/`);
    }
    if (pathname == `/${company}/profile`) {
      setPersonal(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="dashboard-wrapper">
        <div className="dashboard-sidebar">
          <SideBar />
        </div>
        <div className="dashboard-content">
          <div className="data-content">
            <h2 className="top-heading">My Profile</h2>
            <div className="profile-header">
              {/* <div className="listing-container"> */}
              <button
                style={personal ? { color: "#f36f71" } : null}
                className="profile-tab"
                onClick={() => {
                  setPersonal(true);
                  setVehicle(false);
                  setHealth(false);
                }}
              >
                Personal Details
              </button>
              <button
                style={vehicle ? { color: "#f36f71" } : null}
                className="profile-tab"
                onClick={() => {
                  setPersonal(false);
                  setVehicle(true);
                  setHealth(false);
                }}
              >
                Vehicle Details
              </button>
              <button
                style={health ? { color: "#f36f71" } : null}
                className="profile-tab"
                onClick={() => {
                  setPersonal(false);
                  setVehicle(false);
                  setHealth(true);
                }}
              >
                Health Details
              </button>
            </div>
            {personal ? <Personal /> : null}
            {vehicle ? <Vehicle /> : null}
            {health ? <Health /> : null}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Profile;
