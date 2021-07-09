import { jsx, ThemeProvider, Themed } from "theme-ui";
import theme from "../../../theme";
import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactHTMLDatalist from "react-html-datalist";

const Vehicle = () => {
  const history = useHistory();
  const [loading, setloading] = React.useState(false);

  const products = [
    {
      productName: "Car Details",
      productLogo: "",
      BrandName: "Brand Name",
      value: "₹ 1,00,000",
      insurance: "Active",
      NCB: "30%",
    },
  ];

  const handleBuyPolicies = () => {
    history.push("/buy-policy");
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="personal-container">
        <p>
          Keeping these updates will help you buying insurance in a fast way
        </p>
        <div className="vehicle-container">
          {products.map((product) => (
            <div className="product-container">
              <div
                className="product-heading"
                style={{ marginLeft: 40, fontSize: 16 }}
              >
                {product.productName}
              </div>
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

                  <div className="logo-caption" style={{ fontSize: 15 }}>
                    {product.BrandName}
                  </div>
                </div>

                <div className="product-table">
                  <div className="tab-head">Car Value</div>
                  <div className="tab-value">{product.value}</div>
                </div>

                <div className="product-table">
                  <div className="tab-head">insurance</div>
                  <div className="tab-value">{product.insurance}</div>
                </div>

                <div className="product-table">
                  <div className="tab-head">NCB</div>
                  <div className="tab-value">{product.NCB}</div>
                </div>

                <button
                  type="submit"
                  className="confirmbtn"
                  onClick={handleBuyPolicies}
                  style={{ width: 150, marginRight: 20, marginTop: 20 }}
                >
                  {loading ? "Please wait..." : "Buy Now"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="addcar-container" style={{ textAlign: "center" }}>
          <button className="add-carheadbtn">
            {loading ? "Please wait..." : "Add Another Vehicle"}
          </button>
          <form>
            <div className="newcar-form">
              <div className="field" style={{ marginLeft: 20, width: "100%" }}>
                <label>Vehicle Type</label>
                <input
                  list="vehicle-types"
                  name="vehicle"
                  id="vehicle"
                  required
                />
                <datalist id="vehicle-types">
                  <option value="car" key="car" />
                  <option value="bike" key="bike" />
                </datalist>
              </div>
              <div className="field" style={{ marginLeft: 20, width: "100%" }}>
                <label>Vehicle Number</label>
                <input type="text" name="vehicle-number" required></input>
              </div>
              <button
                type="submit"
                className="save-btn"
                onClick={handleBuyPolicies}
              >
                {loading ? "Please wait..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Vehicle;
