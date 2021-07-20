import { jsx, ThemeProvider, Themed } from "theme-ui";
import React, { Component, useState, useEffect } from "react";
import theme from "./theme";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./pages/Dashboard/Sidebar";
import searchIcon from "./Assets/svg/policy-active.svg";
import downloadIcon from "./Assets/svg/download.png";

function Helps() {
  const history = useHistory();
  const [authToken] = localStorage.getItem("token");
  const loggedIn = useSelector((state) => state.user.loggedIn);

  React.useEffect(() => {
    console.log("logIn---", loggedIn);
    /* check token and refresh user after login */
    if (!authToken) {
      history.push("/user-login/");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="dashboard-wrapper">
        <div className="dashboard-sidebar">
          <SideBar />
        </div>
        <div className="dashboard-content">
          <div className="buypolicy-container">
            <div className="policy-container" style={{ textAlign: "center" }}>
              <h1
                style={{
                  color: "#f37273",
                }}
              >
                {" "}
                Coming Soon......
              </h1>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Helps;
