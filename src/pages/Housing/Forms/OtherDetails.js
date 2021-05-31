import React from "react";

const OtherDetails = () => {
  return (
    <div>
      <form action="#" method="post">
        <div className="inputBox">
          <p className="health_question">Age of Home Building</p>
          <input
            // placeholder="5-10 Years"
            type="text"
            name="name"
            id="name"
            tabindex="1"
          />
        </div>
        <div className="radiobox">
          <p className="health_question">Condition of insured building</p>

          <div className="radio_flex">
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Bad</span>
              </label>
            </div>
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Good</span>
              </label>
            </div>
          </div>
        </div>
        <div className="radiobox">
          <p className="health_question">
            Level of density of industries/population?
          </p>

          <div className="radio_flex">
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Low</span>
              </label>
            </div>
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>High</span>
              </label>
            </div>
          </div>
        </div>

        <div className="radiobox">
          <p className="health_question">
            Is the property within 5km from Fire Station?
          </p>

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
        <div className="radiobox">
          <p className="health_question">
            Are there security features in society?
          </p>

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

        <div className="radiobox">
          <p className="health_question">Are there water bodies in 1 km?</p>

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
      </form>
    </div>
  );
};

export default OtherDetails;
