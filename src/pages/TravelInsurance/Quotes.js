import React from "react";
import "./TravelInsurance.css";
import { Link } from "react-router-dom";

const Quotes = () => {
  return (
    <div className="quotes_page_container">
      <div style={{ padding: " 38px 0", textAlign: "center" }}>
        <h2 style={{ color: "#033967" }}>Available Quotes</h2>
        <div className="vatMessage-exclusive">
          * The prices you see here are exclusive of 5% VAT.
        </div>
      </div>
      <div className="quotes_tables">
        <div className="insuranceProvider">
          <div className="insurerImage">
            <img
              style={{ height: "65px", marginBottom: 0 }}
              src="https://static.compareit4me.com/insurance/logos/orient-min.png"
              alt=""
            />
          </div>
          <div class="plan-column features-column column-2">
            <span class="plan-header">Medical Cover</span>
            <div class="feature-sub">Up to $100,000 excess $75</div>
          </div>
          <div className="plan-column features-column column-2">
            {" "}
            <span class="plan-header">Medical Cover</span>
            <div class="feature-sub">Up to $100,000 excess $75</div>
          </div>
          <div class="plan-column features-column column-2">
            <span class="plan-header">Cancellation</span>
            <div class="feature-sub">Up to $100,000 excess $75</div>
          </div>
          <div class="plan-column features-column column-2">
            <span class="plan-header">COVID-19 Cover</span>
            <div class="feature-sub">YES</div>
          </div>
          <div class="plan-column features-column column-2">
            <span class="plan-header">Quote Price</span>
            <div class="feature-sub">AED 30</div>
          </div>{" "}
          <div className="totalPrice ">
            <Link to="/payment">
              <div className="buy_btn">
                Buy Now <br /> AED 752
              </div>
            </Link>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <a style={{ fontSize: "14px" }} href="">
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
