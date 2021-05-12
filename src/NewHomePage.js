import React from "react";
import "./Home.css";
import HealthIcon from "./Assets/svg/Health_Insurance.svg";
import TwoWheelerIcon from "./Assets/svg/2wheeler-insurance.svg";
import CarIcon from "./Assets/svg/car.svg";
import ChildInvestIcon from "./Assets/svg/Child-Investment.svg";
import FamilyIcon from "./Assets/svg/Family_health_insurance.svg";
import HeartIcon from "./Assets/svg/heart-insurance.svg";
import InvestmentIcon from "./Assets/svg/investment-plans.svg";

const NewHomePage = () => {
  return (
    <div>
      <section>
        <div className="top-banner">
          <div>
            <h1 className="top-text">
              Let's find you
              <br /> the <span style={{ fontWeight: 500 }}>Best Insurance</span>
            </h1>
            <div>
              <div className="lowest_price">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/758/758930.svg?token=exp=1620478001~hmac=85d495decb12c913ed090b5f4824295a"
                  alt=""
                  style={{ width: "27px", marginRight: "12px" }}
                />
                50+ insurers with the lowest prices
              </div>
              <div className="hassle_free">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/819/819398.svg?token=exp=1620477723~hmac=c2fdbf699e4da7a69ca7701a07d691c8"
                  alt=""
                  style={{ width: "27px", marginRight: "12px" }}
                />
                Quick, easy & hassle free
              </div>
            </div>
          </div>
          <div>
            <h4 className="promise-text">XPC Promise</h4>
            <div>
              <h1 className="mid-text">
                A commitment <br /> to our customers
              </h1>
            </div>
            <div className="button_knowMOre">Know More</div>
          </div>
        </div>
      </section>
      <section
        style={{
          background: "white",
          height: "350px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="product-section">
          <div className="product_card">
            <div className="card_icon">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/3026/3026399.svg?token=exp=1620474619~hmac=22dda1a9d795cea383008b53a3b2a653"
                alt=""
                style={{ width: "34px" }}
              />
            </div>
            <div className="product_title">Term Life Insurance</div>
          </div>
          <div className="product_card">
            <img src={HealthIcon} alt="" style={{ width: "34px" }} />
            <div className="product_title">Health Insurance</div>
          </div>
          <div className="product_card">
            <img src={HealthIcon} alt="" style={{ width: "34px" }} />
            <div className="product_title">Investment Plans</div>
          </div>
          <div className="product_card">
            <img src={CarIcon} alt="" style={{ width: "34px" }} />
            <div className="product_title">Car Insurance</div>
          </div>
          <div className="product_card">
            <img src={TwoWheelerIcon} alt="" style={{ width: "34px" }} />
            <div className="product_title">2 Wheeler Insurance</div>
          </div>
          <div className="product_card">
            <div className="card_icon">
              <img src={ChildInvestIcon} alt="" style={{ width: "34px" }} />
            </div>
            <div className="product_title">Child Savings Plan</div>
          </div>
          <div className="product_card">
            <img src={FamilyIcon} alt="" style={{ width: "34px" }} />
            <div className="product_title">Family Health Insurance</div>
          </div>
          <div className="product_card">
            <img src={InvestmentIcon} alt="" style={{ width: "34px" }} />
            <div className="product_title">Investment Plans</div>
          </div>
          <div className="product_card">
            <img src={CarIcon} alt="" style={{ width: "34px" }} />
            <div className="product_title">Car Insurance</div>
          </div>
          <div className="product_card">
            <img
              src="https://www.flaticon.com/premium-icon/icons/svg/1768/1768201.svg"
              alt=""
              style={{ width: "34px" }}
            />
            <div className="product_title">2 Wheeler Insurance</div>
          </div>
          <div className="product_card">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/3089/3089803.svg?token=exp=1620474738~hmac=c767972e5e1ba96e5054d723343b913a"
              alt=""
              style={{ width: "34px" }}
            />
            <div className="product_title">Car Insurance</div>
          </div>
          <div className="product_card">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/3089/3089803.svg?token=exp=1620474738~hmac=c767972e5e1ba96e5054d723343b913a"
              alt=""
              style={{ width: "34px" }}
            />
            <div className="product_title">Car Insurance</div>
          </div>
          {/* <div className="product_card">
          <div className="card_icon">icon</div>
          <div className="product_title">Car Insurance</div>
        </div>
        <div className="product_card">
          <div className="card_icon">icon</div>
          <div className="product_title">2 Wheeler Insurance</div>
        </div> */}
        </div>
      </section>
    </div>
  );
};

export default NewHomePage;
