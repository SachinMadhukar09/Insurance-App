import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./buttons.css";

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

const VehicleDetails = () => {
  const [yearOptions, setOptions] = useState(years);
  useEffect(() => {
    document.title =
      "Car Insurance: Buy Car Insurance Policies Online | Coverfox.com";
  }, []);

  return (
    <div>
      <h1 className="vehicle_title">
        Vehicle Details <br /> this will only take 1 minute!
      </h1>
      <div className="carInsuranceForm">
        <div className="car_year box">
          <h3 className="year title_question">Car Year</h3>
          <Select
            styles={{
              // Fixes the overlapping problem of the component
              menu: (provided) => ({ ...provided, zIndex: 9999 }),
            }}
            options={yearOptions}
          />
        </div>
        <div className="car_brand box">
          <h3 className="first_car_ques title_question">
            Is your car brand new ?
          </h3>
          <div class="switch1">
            <input type="radio" name="choice1" id="yes1" checked />
            <label className="yesnoLabel1" for="yes1">
              Yes
            </label>
            <input type="radio" name="choice1" id="no1" />
            <label className="yesnoLabel1" for="no1">
              No
            </label>
            <span class="switchFilter1"></span>
          </div>
          {/* <div class="button-wrap">
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
          </div> */}
        </div>
        <div className="first_car box">
          <h3 className="first_car_ques title_question">
            Are you buying your first car?
          </h3>
          <div class="switch2">
            <input type="radio" name="choice2" id="yes2" checked />
            <label className="yesnoLabel" for="yes2">
              Yes
            </label>
            <input type="radio" name="choice2" id="no2" />
            <label className="yesnoLabel2" for="no2">
              No
            </label>
            <span class="switchFilter2"></span>
          </div>
        </div>

        <div className="makeCar box">
          <h3 className="make title_question">Make</h3>
          <Select options={yearOptions} />
        </div>
        <div className="modelName box">
          <h3 className="model title_question">Model</h3>
          <Select options={yearOptions} />
        </div>
        <div className="modelDetails box">
          <h3 className="details title_question">Model Details</h3>
          <Select options={yearOptions} />
        </div>
        <div className="carValue box">
          <h3 className="value title_question">
            What is the value of your car?
          </h3>
          <Select options={yearOptions} />
        </div>
        <div className="firstCarRegistered box">
          <h3 className="carRegsiDate title_question">
            When was your car first registered?
          </h3>
          <Select options={yearOptions} />
        </div>

        <div className="registeredCity box">
          <h3 className="cityName title_question">
            In which city do you want to register this car?
          </h3>
          <Select
            styles={{
              // Fixes the overlapping problem of the component
              menu: (provided) => ({ ...provided, zIndex: 9999 }),
            }}
            options={yearOptions}
          />
        </div>
        <div className="gccspec box">
          <h3 className="gccTitle title_question">
            Is this car GCC spec AND unmodified?
          </h3>
          <div class="switch3">
            <input type="radio" name="choice3" id="yes3" checked />
            <label className="yesnoLabel" for="yes3">
              Yes
            </label>
            <input type="radio" name="choice3" id="no3" />
            <label className="yesnoLabel3" for="no3">
              No
            </label>
            <span class="switchFilter3"></span>
          </div>
          {/* <div class="button-wrap">
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
          </div> */}
        </div>

        <div className="fully box">
          <h3 className="fullyTitle title_question">
            Is the current policy of this car fully comprehensive?
          </h3>
          <div class="switch4">
            <input type="radio" name="choice4" id="yes4" checked />
            <label className="yesnoLabel4" for="yes4">
              Yes
            </label>
            <input type="radio" name="choice4" id="no4" />
            <label className="yesnoLabel4" for="no4">
              No
            </label>
            <span class="switchFilter4"></span>
          </div>
          {/* <div class="button-wrap">
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
          </div> */}
        </div>
        <div className="agencyRepair box">
          <h3 className="title title_question">
            Does the current policy of this car include agency repair?
          </h3>
          <div class="switch5">
            <input type="radio" name="choice5" id="yes5" checked />
            <label className="yesnoLabel5" for="yes5">
              Yes
            </label>
            <input type="radio" name="choice5" id="no5" />
            <label className="yesnoLabel5" for="no5">
              No
            </label>
            <span class="switchFilter5"></span>
          </div>
          {/* <div class="button-wrap">
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
          </div> */}
        </div>

        <div className="policyExpiry box">
          <h3 className="expiryTitle title_question">
            Has the current policy of this car already expired?
          </h3>
          <div class="switch">
            <input type="radio" name="choice" id="yes" checked />
            <label className="yesnoLabel" for="yes">
              Yes
            </label>
            <input type="radio" name="choice" id="no" />
            <label className="yesnoLabel" for="no">
              No
            </label>
            <span class="switchFilter"></span>
          </div>
        </div>
        <Link to="/driver-details">
          {" "}
          <div
            style={{ width: "100%" }}
            className="continue_btn view_quotes__btn"
          >
            Continue
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VehicleDetails;
