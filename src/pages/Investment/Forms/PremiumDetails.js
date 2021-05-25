import React from "react";
import { Link } from "react-router-dom";

const PremiumDetails = () => {
  return (
    <div>
      <form className="term_form" action="">
        <div class="input-container">
          <input id="name" className="input" type="number" required />
          <label className="label" for="name">
            Coverage Amount
          </label>
        </div>
        <div className="input-container">
          <input id="lastname" className="input" type="Number" required />
          <label className="label" for="lastname">
            Duration
          </label>
        </div>
        <div className="input-container">
          <input id="passport" className="input" type="number" required />
          <label className="label" for="passport">
            Premium Payment Term
          </label>
        </div>
        <div className="input-container">
          <input id="nationality" className="input" type="text" required />
          <label className="label" for="nationality">
            Nationality
          </label>
        </div>
        <div className="input-container">
          <input id="email" className="input" type="text" required />
          <label className="label" for="email">
            Email
          </label>
        </div>
        <div className="input-container">
          <input id="mobile" className="input" type="number" required />
          <label className="label" for="mobile">
            Mobile
          </label>
        </div>
        <div className="input-container">
          <input id="status" className="input" type="text" required />
          <label className="label" for="status">
            Marital Status
          </label>
        </div>
        <div style={{ marginTop: "82px" }}>
          <Link to="/termPlans">
            <div className="continue_btn view_quotes__btn">Submit</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PremiumDetails;
