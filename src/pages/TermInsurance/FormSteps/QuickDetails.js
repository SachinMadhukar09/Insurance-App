import React from "react";
import { Link } from "react-router-dom";

const QuickDetails = () => {
  return (
    <div>
      {/* <div className="term_details_form"> */}
      {/* <h2 style={{ textAlign: "center" }} class="css-r1stu2">
          Term Insurance
        </h2>
        <p style={{ textAlign: "center" }}>
          Financial Protection for Your family
        </p> */}
      <form className="term_form" action="">
        {/* <h1>Material Design Input with pure CSS</h1> */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            height: "80px",
          }}
        >
          <p className="health_question">Gender? </p>
          <div className="radio_flex">
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Male</span>
              </label>
            </div>
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Female</span>
              </label>
            </div>
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Transgender</span>
              </label>
            </div>
          </div>
        </div>
        <div className="inputBox">
          <p className="health_question" for="name">
            Date Of Birth
          </p>
          <input type="text" name="name" id="name" tabindex="1" />
        </div>
        <div className="inputBox">
          <p className="health_question" for="name">
            Annual Income
          </p>
          <input type="text" name="name" id="name" tabindex="1" />
        </div>
        <div className="inputBox">
          <p className="health_question" for="name">
            Mobile Number
          </p>
          <input type="text" name="name" id="name" tabindex="1" />
        </div>
        <div className="inputBox">
          <p className="health_question" for="name">
            Email ID
          </p>
          <input type="text" name="name" id="name" tabindex="1" />
        </div>
        {/* <div className="input-container">
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
        </div> */}
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
    // </div>
  );
};

export default QuickDetails;
