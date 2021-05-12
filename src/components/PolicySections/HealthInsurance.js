import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

var years = [
  { value: "18 yrs", label: "18 yrs" },
  { value: "19 yrs", label: "19 yrs" },
  { value: "20 yrs", label: "20 yrs" },
  { value: "21 yrs", label: "21 yrs" },
  { value: "22 yrs", label: "22 yrs" },
  { value: "23 yrs", label: "23 yrs" },
  { value: "24 yrs", label: "24 yrs" },
  { value: "25 yrs", label: "25 yrs" },
  { value: "26 yrs", label: "26 yrs" },
  { value: "27 yrs", label: "27 yrs" },
  { value: "28 yrs", label: "28 yrs" },
  { value: "29 yrs", label: "29 yrs" },
  { value: "30 yrs", label: "30 yrs" },
  { value: "31 yrs", label: "31 yrs" },
  { value: "32 yrs", label: "32 yrs" },
  { value: "33 yrs", label: "33 yrs" },
  { value: "34 yrs", label: "34 yrs" },
  { value: "35 yrs", label: "35 yrs" },
  { value: "36 yrs", label: "36 yrs" },
  { value: "37 yrs", label: "37 yrs" },
  { value: "38 yrs", label: "38 yrs" },
  { value: "39 yrs", label: "39 yrs" },
];
const HealthInsurance = () => {
  return (
    <div className="slide-right">
      <h1 className="termlife__header_content">
        Best Health Insurance plans. Customized for you.
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
        <div className="select_input">
          <div className="radio__label">Select Gender</div>
          <label htmlFor="">Male</label>
          <input type="radio" name="Male" id="" />
          <label htmlFor="">Female</label>

          <input type="radio" name="Female" id="" />
        </div>

        <div>
          <div className="age_handle">
            <div className="label_show">Your Age</div>
            <Select
              placeholder="Your Age"
              className="ageSelect"
              options={years}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />

            {/* <div className="selected_items"> 21 Years</div> */}
          </div>
        </div>
      </div>
      <Link to="/details">
        {" "}
        <div className="view_quotes__btn">view quotes</div>{" "}
      </Link>{" "}
    </div>
  );
};

export default HealthInsurance;
