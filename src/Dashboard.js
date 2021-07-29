import { jsx, ThemeProvider, Themed } from "theme-ui";
import React, { Component, useState, useEffect } from "react";
import theme from "./theme";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./pages/Dashboard/Sidebar";
import { login } from "./logic/actions/actions";
import searchIcon from "./Assets/svg/policy-active.svg";
import downloadIcon from "./Assets/svg/download.png";
import axios from "axios";
import Configs from "./configs/config";

const url = Configs.serverless;

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  let { company } = useParams();
  if (!company) {
    company = localStorage.getItem("company");
  }
  const authToken = localStorage.getItem("token");
  const [loading, setloading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [userName, setUserName] = React.useState("");
  // const [company, setCompanyName]

  const getCustomer = async (user) => {
    try {
      const response = await axios.get(`${url}/customer/${user}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "x-requested-with": "XMLHttpRequest",
          "content-type": "application/json",
        },
      });
      if (response) {
        const details = response.data.personalDetails;
        setUserName(details.firstName + " " + details.lastName);
      }
    } catch (error) {
      setUserName("");
    }
  };

  React.useEffect(() => {
    const user = localStorage.getItem("customer");
    getCustomer(user);
  }, []);

  // const getProducts = async (token) => {
  //   try {
  //     console.log("token here", token);
  //     // const response = await axios.get(`${url}/customer/products`, {
  //     //   headers: {
  //     //     Authorization: "Bearer " + token,
  //     //   },
  //     // });
  //     // if (response) {
  //     //   setProducts(response.data);
  //     // }
  //     setProducts([
  //       {
  //         status: false,
  //         product_name: "Health Insurance",
  //         insurance_type_id: "2",
  //         insurance_category_id: "1",
  //         product_icon:
  //           "https://product-icon.s3.amazonaws.com/product_name/1622112148058_Health%20Insurance.svg",
  //         xpc_insurance_product_id: "aSTo4HgwE",
  //         createdate:
  //           "Thu May 27 2021 10:42:28 GMT+0000 (Coordinated Universal Time)",
  //         updatedate:
  //           "Thu May 27 2021 10:42:28 GMT+0000 (Coordinated Universal Time)",
  //       },
  //     ]);
  //   } catch (error) {
  //     console.log("something went wrong:", error.response.data);
  //   }
  // };

  // React.useEffect(() => {
  //   if (!authToken) {
  //     history.push("/user-login/");
  //   }
  //   getProducts(authToken);
  // }, []);

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
          <h2 className="top-heading">Welcome {userName}</h2>

          <div className="listing">
            {products.length ? (
              <div className="listing-container">
                {products.map((product) => (
                  <div className="product-container">
                    <h3 className="product-heading">{product.product_name}</h3>
                    <div className="product-detail">
                      <div className="product-logo">
                        <div className="logo-container">
                          {product.product_icon ? (
                            <img
                              src={product.product_icon}
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
                        <div className="tab-value">
                          {product.status ? "Active" : "Not Active"}
                        </div>
                      </div>
                      {/* </div> */}
                      <div className="product-icon">
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
                      </div>
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

export default Dashboard;
