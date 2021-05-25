import React from "react";
import { Link } from "react-router-dom";

const AdditonalDetails = () => {
  return (
    <div>
      <div>
        <form action="#" method="post">
          <fieldset>
            <div>
              Marital Status:
              <div className="inputBox">
                <label for="radio-choice-1">Multi Story</label>
                <input
                  type="radio"
                  name="radio-choice"
                  id="radio-choice-1"
                  class="radio"
                  tabindex="5"
                  value="choice-1"
                />
              </div>
              <div className="inputBox">
                <label for="radio-choice-2">Single Property</label>
                <input
                  type="radio"
                  name="radio-choice"
                  id="radio-choice-2"
                  class="radio"
                  tabindex="6"
                  value="choice-2"
                />
              </div>
            </div>
            <div className="inputBox">
              <label for="name" class="mid">
                Floor Number
              </label>
              <input type="text" name="name" id="name" tabindex="1" />
            </div>
            <div className="inputBox">
              <label for="name" class="mid">
                Number of Flats
              </label>
              <input type="text" name="name" id="name" tabindex="1" />
            </div>
            <div className="inputBox">
              <label for="name" class="mid">
                Carpet Area
              </label>
              <input type="text" name="name" id="name" tabindex="1" />
            </div>
            <div className="inputBox">
              <label for="name" class="mid">
                Rate of Cost of Construction 2
              </label>
              <input type="text" name="name" id="name" tabindex="1" />
            </div>
            <div>
              Are there any shops?
              <div className="inputBox">
                <label for="radio-choice-1">Yes</label>
                <input
                  type="radio"
                  name="radio-choice"
                  id="radio-choice-1"
                  class="radio"
                  tabindex="5"
                  value="choice-1"
                />
              </div>
              <div>
                <label for="radio-choice-2">No</label>
                <input
                  type="radio"
                  name="radio-choice"
                  id="radio-choice-2"
                  class="radio"
                  tabindex="6"
                  value="choice-2"
                />
              </div>
            </div>
            <div className="inputBox">
              <label for="name" class="mid">
                How many shops are there?
              </label>
              <input type="text" name="name" id="name" tabindex="1" />
            </div>
            <div>
              Are there basements?
              <div className="inputBox">
                <label for="radio-choice-1">Yes</label>
                <input
                  type="radio"
                  name="radio-choice"
                  id="radio-choice-1"
                  class="radio"
                  tabindex="5"
                  value="choice-1"
                />
              </div>
              <div>
                <label for="radio-choice-2">No</label>
                <input
                  type="radio"
                  name="radio-choice"
                  id="radio-choice-2"
                  class="radio"
                  tabindex="6"
                  value="choice-2"
                />
              </div>
            </div>
            <div className="inputBox">
              <label for="name" class="mid">
                Policy to be issued in the name of?
              </label>
              <input type="text" name="name" id="name" tabindex="1" />
            </div>
          </fieldset>
        </form>
      </div>
      <div style={{ marginTop: "82px" }}>
        <Link to="/termPlans">
          <div className="continue_btn view_quotes__btn">Calculate Premium</div>
        </Link>
      </div>
    </div>
  );
};

export default AdditonalDetails;
