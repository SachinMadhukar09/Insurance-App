import React from "react";
import { Link } from "react-router-dom";

const QuickQuote = () => {
  return (
    <div>
      {" "}
      <form className="term_form" action="">
        {/* <h1>Material Design Input with pure CSS</h1> */}
        <div className="inputBox">
          <p className="health_question">Property Name</p>
          <input type="text" name="name" id="name" tabindex="1" />
        </div>
        <div className="inputBox">
          <p className="health_question">Pincode where society is located</p>
          <input type="text" name="name" id="name" tabindex="1" />
        </div>
        <div className="inputBox">
          <p className="health_question">Names of Proposer</p>
          <input type="text" name="name" id="name" tabindex="1" />
        </div>
        <div className="inputBox">
          <p className="health_question">Mobile Number</p>
          <input type="text" name="name" id="name" tabindex="1" />
        </div>
        <div className="inputBox">
          <p className="health_question">Email</p>
          <input type="text" name="name" id="name" tabindex="1" />
        </div>
        <br />
        <div style={{ display: "flex", width: "643px", alignItems: "center" }}>
          <input type="checkbox" />

          <p style={{ fontSize: "14px" }}>
            {" "}
            By submitting my details, I override myNDNC. I further consent to
            share my information on confidential bassis with third parties for
            evaluating and processing this proposal
          </p>
        </div>
        {/* <div style={{ marginTop: "82px" }}>
          <Link to="/termPlans">
            <div className="continue_btn view_quotes__btn">Submit</div>
          </Link>
        </div> */}
      </form>
    </div>
  );
};

export default QuickQuote;
