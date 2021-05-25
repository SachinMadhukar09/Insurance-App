import React from "react";
import { Link } from "react-router-dom";

const QuickQuote = () => {
  return (
    <div>
      {" "}
      <form className="term_form" action="">
        {/* <h1>Material Design Input with pure CSS</h1> */}
        <div class="input-container">
          <input id="name" className="input" type="text" required />
          <label className="label" for="name">
            Property Name
          </label>
        </div>
        <div className="input-container">
          <input id="lastname" className="input" type="text" required />
          <label className="label" for="lastname">
            Pincode where society is located
          </label>
        </div>
        <div className="input-container">
          <input id="passport" className="input" type="text" required />
          <label className="label" for="passport">
            Name of Proposer
          </label>
        </div>
        <div className="input-container">
          <input id="nationality" className="input" type="text" required />
          <label className="label" for="nationality">
            Mobile Number
          </label>
        </div>
        <div className="input-container">
          <input id="email" className="input" type="text" required />
          <label className="label" for="email">
            Email ID
          </label>
        </div>
        <br />
        <div style={{ display: "flex", width: "643px" }}>
          <input type="checkbox" />

          <p>
            {" "}
            By submitting my details, I override myNDNC. I further consent to
            share my information on confidential bassis with third parties for
            evaluating and processing this proposal
          </p>
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

export default QuickQuote;
