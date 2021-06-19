import React, { Component, useState, useEffect } from "react";
import "./products.css";
import PopularProducts from "./Components/popularproducts";
import AllProducts from "./Components/allproducts";

const Products = () => {
  //   const [allproducts, setAllproducts] = React.useState(false);
  const [popular, setPopular] = React.useState(false);

  return (
    <div className="products-container">
      <div className="products-tab">
        <button
          className="product-btn"
          onClick={() => {
            setPopular(false);
          }}
          style={!popular ? { background: "#f6a8a9", border: "none" } : null}
        >
          All Products
        </button>

        <button
          className="product-btn"
          onClick={() => {
            setPopular(true);
          }}
          style={popular ? { background: "#f6a8a9", border: "none" } : null}
        >
          Popular Products
        </button>
      </div>
      <div className="product-listing">
        {popular ? <PopularProducts /> : <AllProducts />}
      </div>
    </div>
  );
};

export default Products;
