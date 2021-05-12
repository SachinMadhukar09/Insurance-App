import React from "react";
import { Link } from "react-router-dom";

const QuickDetails = () => {
  return (
    <div>
      <div className="term_details_form">
        <h2 style={{ textAlign: "center" }} class="css-r1stu2">
          Term Insurance
        </h2>
        <p style={{ textAlign: "center" }}>
          Financial Protection for Your family
        </p>
        <form className="term_form" action="">
          {/* <h1>Material Design Input with pure CSS</h1> */}
          <div class="input-container">
            <input id="name" className="input" type="text" required />
            <label className="label" for="name">
              First Name
            </label>
          </div>
          <div className="input-container">
            <input id="lastname" className="input" type="text" required />
            <label className="label" for="lastname">
              Last Name
            </label>
          </div>
          <div className="input-container">
            <input id="passport" className="input" type="text" required />
            <label className="label" for="passport">
              Date of Birth
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
    </div>
  );
};

export default QuickDetails;
