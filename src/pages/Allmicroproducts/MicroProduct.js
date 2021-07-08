import "./Microproducts.css";
import Microproduct1 from "./MicroProduct1";
import Microproduct2 from "./Microproduct2";
import Microproduct3 from "./Microproduct3";
import Microproduct4 from "./MicroProduct4";
import Microproduct5 from "./MicroProduct5";
import React, { Component, useState, useEffect } from "react";
import axios from "axios";

// import Microproduct4 from "./Microproduct4";

const Microproduct = (props) => {
  const [productData, setProductData] = useState();

  useEffect(() => {
    setProductData({
      quotationName: "Micro-insurance",
      quotationAmount: {
        amountActual: 400,
        amountFormatted: 400,
      },
    });
    const data = {
      customerId: props.match.params.id,
      companyId: "icici2343",
      type: "quotation",
      isPaymentCompleted: false,
      quotationLink: window.location.href,
      ...productData,
    };
    if (props.match.params.id) {
      axios
        .post("https://backend.1protekt.com/crm/createQuote", data)
        .then((res) => console.log(res));
    }
  }, []);
  let logoIcon = "";
  const [option, setOption] = React.useState(1);
  // const []

  return (
    <div>
      <div className="head">
        <div className="head-container">
          <div className="logo2">
            {logoIcon ? (
              <img src={logoIcon} className="logoImg" />
            ) : (
              <div className="logoImg" />
            )}
          </div>

          <div className="paragarph">
            <h1 className="product-name">Product Name</h1>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="section1">
        <button
          className="button1"
          onClick={() => setOption(1)}
          style={
            option == 1 ? { background: "#62a5f3", color: "#ffffff" } : null
          }
        >
          Option1
        </button>
        <button
          className="button1"
          onClick={() => setOption(2)}
          style={
            option == 2 ? { background: "#62a5f3", color: "#ffffff" } : null
          }
        >
          Option2
        </button>
        <button
          className="button1"
          onClick={() => setOption(3)}
          style={
            option == 3 ? { background: "#62a5f3", color: "#ffffff" } : null
          }
        >
          Option3
        </button>
        <button
          className="button1"
          onClick={() => setOption(4)}
          style={
            option == 4 ? { background: "#62a5f3", color: "#ffffff" } : null
          }
        >
          Option4
        </button>
        <button
          className="button1"
          onClick={() => setOption(5)}
          style={
            option === 5 ? { background: "#62a5f3", color: "#ffffff" } : null
          }
        >
          Option5
        </button>
      </div>
      {option === 1 ? <Microproduct1 /> : null}
      {/* {option == 2 ? <Microproduct2 /> : null}
      {option == 3 ? <Microproduct3 /> : null}
      {option == 4 ? <Microproduct4 /> : null}
      {option == 5 ? <Microproduct5/> : null} */}
    </div>
  );
};

export default Microproduct;
