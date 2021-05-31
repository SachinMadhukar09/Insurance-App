import React from "react";
import { Link } from "react-router-dom";

import "./HousingInputs.css";

const AdditonalDetails = (props) => {
  return (
    <div>
      <div>
        <form action="#" method="post">
          <div className="radiobox">
            <p className="health_question">Property Type</p>

            <div className="radio_flex">
              <div className="inputBox">
                <label className="housing_radio">
                  <input type="radio" name="radio" checked />
                  <span>Multi Story</span>
                </label>
              </div>
              <div className="inputBox">
                <label className="housing_radio">
                  <input type="radio" name="radio" checked />
                  <span>Single Property</span>
                </label>
              </div>
            </div>
          </div>
          <div className="inputBox">
            <p className="health_question">Floor Number</p>
            <input type="text" name="name" id="name" tabindex="1" />
          </div>
          <div className="inputBox">
            <p className="health_question">Number of Flats</p>
            <input type="text" name="name" id="name" tabindex="1" />
          </div>
          <div className="inputBox">
            <p className="health_question">Carpet Area</p>
            <input type="text" name="name" id="name" tabindex="1" />
          </div>
          <div className="inputBox">
            <p className="health_question">Rate of Cost of Construction 2</p>
            <input type="text" name="name" id="name" tabindex="1" />
          </div>
          <div className="radiobox">
            <p className="health_question"> Are there any shops?</p>

            <div className="radio_flex">
              <div className="inputBox">
                <label className="housing_radio">
                  <input type="radio" name="radio" checked />
                  <span>Yes</span>
                </label>
              </div>
              <div className="inputBox">
                <label className="housing_radio">
                  <input type="radio" name="radio" checked />
                  <span>No</span>
                </label>
              </div>
            </div>
          </div>
          <div className="inputBox">
            <p className="health_question">How many shops are there?</p>
            <input type="text" name="name" id="name" tabindex="1" />
          </div>
          <div className="radiobox">
            <p className="health_question">Are there basements?</p>

            <div className="radio_flex">
              <div className="inputBox">
                <label className="housing_radio">
                  <input type="radio" name="radio" checked />
                  <span>Yes</span>
                </label>
              </div>
              <div className="inputBox">
                <label className="housing_radio">
                  <input type="radio" name="radio" checked />
                  <span>No</span>
                </label>
              </div>
            </div>
          </div>
          <div className="inputBox">
            <p className="health_question">
              Policy to be issued in the name of?
            </p>
            <input type="text" name="name" id="name" tabindex="1" />
          </div>
        </form>
      </div>
      <div style={{ marginTop: "82px" }}>
        <div
          onClick={() => props.jumpToStep(2)}
          className="continue_btn view_quotes__btn"
        >
          Calculate Premium
        </div>
      </div>
    </div>
  );
};

export default AdditonalDetails;
