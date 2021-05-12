import React from "react";
import "./Carinsurance.css";
import { Link } from "react-router-dom";

const Carinsurance = () => {
  return (
    <div className="slide-right">
      <h1 className="termlife__header_content">
        Upto 75% Off on Car Insurance. Renew in 5 minutes
      </h1>
      <div className="termLifeForm" style={{ display: "flex" }}>
        {/* <div className="term_gender_select">
          <div className="w--radio">
            <div className="w--radio__label">Select Gender</div>
            <div className="w--radio__options">
              <div tabindex="0" className="w--radio__option">
                Male
              </div>
              <div tabindex="0" className="w--radio__option radio_selected">
                Female
              </div>
            </div>
          </div>
        </div>  */}
        <div className="registration-input">
          <div class="input-container">
            <input id="name" className="car_input" type="text" required />
            <label className="label" for="name">
              Your Car No.
            </label>
          </div>
          {/* <input className="car_input" type="text" name="" id="" /> */}
        </div>
        <Link to="/vehicle-details">
          {" "}
          <div style={{ marginTop: 0 }} className="view_quotes__btn">
            view quotes
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Carinsurance;
