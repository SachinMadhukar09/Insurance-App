import { jsx, ThemeProvider, Themed } from "theme-ui";
import React, { Component, useState, useEffect } from "react";
import theme from "./theme";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./pages/Dashboard/Sidebar";
import axios from "axios";
import Configs from "./configs/config";

const url = Configs.serverless;

function Userquotes() {
  const history = useHistory();
  const dispatch = useDispatch();
  
  let { company } = useParams();
  if (!company) {
    company = localStorage.getItem("company");
  }
  const [authToken] = localStorage.getItem("token");
  const userName = useSelector((state) => state.user.username);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const [loading, setloading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [pagenumber, setPageNumber] = React.useState(1);

  React.useEffect(() => {
    console.log("logIn---", loggedIn);
   
    if (!authToken) {
      history.push(`${company}/user-login/`);
    }
    const customerid = localStorage.getItem("customer");
    getProducts(customerid);
  }, []);

  const getProducts = async (id) => {
    try {
      fetch(`${url}/quotations/${id}/${pagenumber}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
      // const response = await axios.get(
      //   `${url}/quotations/${id}/${pagenumber}`,
      //   {
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "x-requested-with": "XMLHttpRequest",
      //       "content-type": "application/json",
      //     },
      //   }
      // );
      // console.log("response---", response);
      // if (response) {
      //   setProducts(response.data.data);
      // }
    } catch (error) {
      setProducts([]);
    }
  };
  const handleBuyPolicies = () => {
    history.push(`${company}/buy-policy`);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="dashboard-wrapper">
        <div className="dashboard-sidebar">
          <SideBar />
        </div>
        <div className="dashboard-content">
          <h2 className="top-heading">My Quotes</h2>

          <div className="listing">
            {products.length ? (
              <div className="listing-container">
                {products.map((product) => (
                  <div className="product-container">
                    <h3 className="product-heading">{product.quotationName}</h3>
                    <div className="product-detail">
                      <div className="product-logo">
                        <div className="logo-container">
                          {product.productLogo ? (
                            <img
                              src={product.productLogo}
                              alt="Logo"
                              className="logo-img"
                            />
                          ) : (
                            <p style={{ paddingTop: 30 }}>Logo</p>
                          )}
                        </div>

                        <div className="logo-caption">{product.IceName}</div>
                      </div>

                      {/* <div className="product-table"> */}
                      {/* <div className="product-tab"> */}
                      <div className="product-table">
                        <div className="tab-head">Cover</div>
                        <div className="tab-value">{product.cover}</div>
                      </div>

                      <div className="product-table">
                        <div className="tab-head">Premium</div>
                        <div className="tab-value">{product.premium}</div>
                      </div>

                      <div className="product-table">
                        <div className="tab-head">Status</div>
                        <div
                          className="tab-value"
                          style={{ color: product.isActive ? "green" : "red" }}
                        >
                          {product.isActive ? "Active" : "Not Active"}
                        </div>
                      </div>
                      {product.isDeleted ? (
                        <button
                          type="submit"
                          className="login-submit"
                          //   onClick={}
                          style={{
                            width: 150,
                            marginRight: 20,
                            background: "#c4c4c4",
                            color: "#8a9198",
                          }}
                        >
                          {"Expired"}
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="login-submit"
                          onClick={handleBuyPolicies}
                          style={{ width: 150, marginRight: 20 }}
                        >
                          {loading ? "Please wait..." : "Buy Now"}
                        </button>
                      )}
                      {/* </div> */}
                      {/* <div className="product-icon">
                        <img
                          src={downloadIcon}
                          alt="Icon"
                          className="download-icon"
                        />

                        <img
                          src={searchIcon}
                          alt="Icon"
                          className="latter-search"
                        />
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="buypolicy-container">
                <div
                  className="policy-container"
                  style={{ textAlign: "center" }}
                >
                  <div style={{ padding: 20 }}>
                    You have not purchased any Policy till now
                  </div>
                  <button
                    type="submit"
                    className="login-submit"
                    onClick={handleBuyPolicies}
                    style={{ marginTop: 0, marginBottom: 30 }}
                  >
                    {loading ? "Please wait..." : "Buy First Policy"}
                  </button>
                </div>
              </div>
            )}
            {/* <div className="side-img">{false ? <img src="#" /> : null}</div> */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Userquotes;
