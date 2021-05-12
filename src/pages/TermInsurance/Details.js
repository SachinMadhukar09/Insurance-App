import React from "react";
import { Link } from "react-router-dom";
import StepForm from "../Investment/MultiStepForm";
const TermInsuranceDetails = () => {
  return (
    <div className="termDetails">
      <div class="css-2o2fd1-Col">
        <div class="css-1g2bbnf">
          <div class="css-pzytfr">
            <h1 style={{ textAlign: "center" }} class="css-cmva83">
              Simple Life
            </h1>
            <span class="css-1nzvg3u">Read this information first</span>
            <span class="css-9dz5ej">Your information is protected</span>
            <p>
              We save and encrypt your information.
              <a
                class="css-1ul8ap6"
                href="https://yallacompare.com/uae/en/privacy/"
              >
                Read our privacy policy.
              </a>
            </p>
            <span class="css-9dz5ej">
              Documents or specific information needed
            </span>
            <p>
              Please have at hand the below documents for you and your spouse (
              if applicable ) :
            </p>
            <ul class="css-1chizq8">
              <li>Passport</li>
              <li>Residence visa</li>
              <li>Emirates ID</li>
            </ul>
          </div>
          <div class="css-pzytfr">
            <span class="css-9dz5ej">You can not apply if</span>
            <ul>
              <li>You are not a resident of the UAE</li>
              <li>You are less than 18 years old</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="term_details_form">
        <h2 style={{ textAlign: "center" }} class="css-r1stu2">
          Term Insurance
        </h2>
        <p style={{ textAlign: "center" }}>
          Financial Protection for Your family
        </p>
        <StepForm />
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

export default TermInsuranceDetails;
