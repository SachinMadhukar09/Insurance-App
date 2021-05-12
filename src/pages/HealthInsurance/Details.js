import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

var years = [
  { value: 2000, label: 2000 },
  { value: 2001, label: 2001 },
  { value: 2002, label: 2002 },
  { value: 2003, label: 2003 },
  { value: 2004, label: 2004 },
  { value: 2005, label: 2005 },
  { value: 2006, label: 2006 },
  { value: 2007, label: 2007 },
  { value: 2008, label: 2008 },
  { value: 2009, label: 2009 },
  { value: 2010, label: 2010 },
  { value: 2011, label: 2011 },
  { value: 2012, label: 2012 },
  { value: 2013, label: 2013 },
  { value: 2014, label: 2014 },
  { value: 2015, label: 2015 },
  { value: 2016, label: 2016 },
  { value: 2017, label: 2017 },
  { value: 2018, label: 2018 },
  { value: 2019, label: 2019 },
  { value: 2020, label: 2020 },
  { value: 2021, label: 2021 },
];

const Details = () => {
  const [yearOptions, setOptions] = useState(years);

  return (
    <div>
      <h2 className="vehicle_title">
        Need health insurance for family? <br />
        Great! Let's get started
      </h2>
      <div className="carInsuranceForm">
        <div className="car_year box">
          <div className="year title_question">What's your full name?</div>
          <input className="text_input" placeholder="Full Name" type="text" />
        </div>
        <div className="car_year box">
          <div className="year title_question">
            Which emirates is your visa issued from?
          </div>
          <Select options={yearOptions} />
        </div>
        <div className="car_brand box">
          <div className="first_car_ques title_question">
            Is your salary more than AED 4,000 per month?
          </div>
          <div class="button-wrap">
            <input
              class="hidden radio-label"
              type="radio"
              name="accept-offers"
              id="brand-new-yes-button"
              checked={true}
            />
            <label class="button-label" for="brand-new-yes-button">
              <h1>Yes</h1>
            </label>
            <input
              class="hidden radio-label"
              type="radio"
              name="accept-offers"
              id="brand-new-no-button"
            />
            <label class="button-label" for="brand-new-no-button">
              <h1>No</h1>
            </label>
          </div>
        </div>
        <div className="first_car box">
          <div className="first_car_ques title_question">
            Do you need insurance for yourself?
          </div>
          <div class="button-wrap">
            <input
              class="hidden radio-label"
              type="radio"
              name="diff-offers"
              id="yes-button"
              checked={true}
            />
            <label class="button-label" for="yes-button">
              <h1>Yes</h1>
            </label>
            <input
              class="hidden radio-label"
              type="radio"
              name="diff-offers"
              id="no-button"
            />
            <label class="button-label" for="no-button">
              <h1>No</h1>
            </label>
          </div>
        </div>
        <h1 className="member_title">Member 1</h1>
        <div className="makeCar box">
          <div className="make title_question">
            What's their relationship to you?
          </div>
          <Select options={yearOptions} />
        </div>
        <div className="modelName box">
          <div className="model title_question">
            Please select member's date of birth?
          </div>
          <Select options={yearOptions} />
        </div>
        <div className="modelDetails box">
          <div className="details title_question">What's their gender?</div>
          <Select options={yearOptions} />
        </div>
        <div className="carValue box">
          <div className="value title_question">What's their nationality?</div>
          <Select options={yearOptions} />
        </div>

        <div className="gccspec box">
          <div className="gccTitle title_question">
            Is their salary more than AED 4,000 per month?
          </div>
          <div class="button-wrap">
            <input
              class="hidden radio-label"
              type="radio"
              name="accept-offers"
              id="yes-button"
              checked="checked"
            />
            <label class="button-label" for="yes-button">
              <h1>Yes</h1>
            </label>
            <input
              class="hidden radio-label"
              type="radio"
              name="accept-offers"
              id="no-button"
            />
            <label class="button-label" for="no-button">
              <h1>No</h1>
            </label>
          </div>
        </div>

        {/* <div className="policyExpiry box">
          <div className="expiryTitle title_question">
            Has the current policy of this car already expired?
          </div>
          <div class="button-wrap">
            <input
              class="hidden radio-label"
              type="radio"
              name="accept-offers"
              id="yes-button"
              checked="checked"
            />
            <label class="button-label" for="yes-button">
              <h1>Yes</h1>
            </label>
            <input
              class="hidden radio-label"
              type="radio"
              name="accept-offers"
              id="no-button"
            />
            <label class="button-label" for="no-button">
              <h1>No</h1>
            </label>
          </div>
        </div> */}
        <Link to="/declaration">
          <div
            style={{ width: "100%" }}
            className="continue_btn view_quotes__btn"
          >
            Continue
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Details;
