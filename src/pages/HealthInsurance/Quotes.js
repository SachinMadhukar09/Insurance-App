import React from "react";
import "./Quotes.css";
import { Link } from "react-router-dom";
const Quotes = () => {
  return (
    <div className="quotes_page_container">
      <div style={{ padding: " 38px 0", textAlign: "center" }}>
        <h2 style={{ color: "#033967" }}>
          We have found 5 health insurance quotes for you
        </h2>
        <div className="vatMessage-exclusive">
          * The prices you see here are exclusive of 5% VAT.
        </div>
      </div>
      <div className="table_header">
        <div className="insurerDeductibles table_cell">Insurance Provider</div>
        <div className="annualCoverage table_cell">Deductibles</div>
        <div className="maternity table_cell">Annual Coverage</div>
        {/* <div className="networks table_cell">Coverage</div> */}
        <div className="maternity table_cell">Networks</div>
        <div className="maternity table_cell">pharmaceuticals</div>
        <div className="maternity table_cell">Total Price</div>
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
          <div className="insurerDeductibles grid_cell">20% coinsurance</div>
          <div className="annualCoverage grid_cell">150000</div>
          <div className="maternity grid_cell">tick sign</div>
          <div className="networks grid_cell">
            NextCare RN3 - PCP / RN3 Network
          </div>
          <div className="pharmaceuticals grid_cell">30% Co-payment*</div>
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
        <div className="insuranceProvider">
          <div className="insurerImage">
            <img
              style={{ height: "65px", marginBottom: 0 }}
              src="https://static.compareit4me.com/insurance/logos/orient-min.png"
              alt=""
            />
          </div>
          <div className="insurerDeductibles grid_cell">20% coinsurance</div>
          <div className="annualCoverage grid_cell">150000</div>
          <div className="maternity grid_cell">tick sign</div>
          <div className="networks grid_cell">
            NextCare RN3 - PCP / RN3 Network
          </div>
          <div className="pharmaceuticals grid_cell">30% Co-payment*</div>
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
        <div className="insuranceProvider">
          <div className="insurerImage">
            <img
              style={{ height: "65px", marginBottom: 0 }}
              src="https://static.compareit4me.com/insurance/logos/orient-min.png"
              alt=""
            />
          </div>
          <div className="insurerDeductibles grid_cell">20% coinsurance</div>
          <div className="annualCoverage grid_cell">150000</div>
          <div className="maternity grid_cell">tick sign</div>
          <div className="networks grid_cell">
            NextCare RN3 - PCP / RN3 Network
          </div>
          <div className="pharmaceuticals grid_cell">30% Co-payment*</div>
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
        <div className="insuranceProvider">
          <div className="insurerImage">
            <img
              style={{ height: "65px", marginBottom: 0 }}
              src="https://static.compareit4me.com/insurance/logos/orient-min.png"
              alt=""
            />
          </div>
          <div className="insurerDeductibles grid_cell">20% coinsurance</div>
          <div className="annualCoverage grid_cell">150000</div>
          <div className="maternity grid_cell">tick sign</div>
          <div className="networks grid_cell">
            NextCare RN3 - PCP / RN3 Network
          </div>
          <div className="pharmaceuticals grid_cell">30% Co-payment*</div>
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
