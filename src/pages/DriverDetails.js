import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
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

const DriverDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setOptions(years);
  }, [years]);
  const [yearOptions, setOptions] = useState();

  return (
    <div>
      <div className="carInsuranceForm">
        <h1 className="vehicle_title">Driver Details</h1>
        <div>
          <div className="car_year box">
            <h3 className="year title_question">Nationality</h3>
            <Select options={yearOptions} />
          </div>
          <div className="first_car box">
            <h3 className="first_car_ques title_question">
              Which country issued your first driving license?
            </h3>
            <Select options={yearOptions} />
          </div>
          <div className="makeCar box">
            <h3 className="make title_question">
              How many years of international driving experience do you have?
            </h3>
            <Select options={yearOptions} />
          </div>
          <div className="modelName box">
            <h3 className="model title_question">
              When do you want to register your car?
            </h3>
            <Select options={yearOptions} />
          </div>
          <div className="modelDetails box">
            <h3 className="details title_question">
              When did you last claim your car insurance?
            </h3>
            <Select options={yearOptions} />
          </div>
          <div className="carValue box">
            <h3 className="value title_question">
              Do you have a No Claims Certificate from your insurer(s)? Save up
              to 20%!
            </h3>
            <Select options={yearOptions} />
          </div>
          <div className="firstCarRegistered box">
            <h3 className="carRegsiDate title_question">Full Name</h3>
            <input className="text_input" placeholder="Full Name" type="text" />
          </div>
          <div className="registeredCity box">
            <h3 className="cityName title_question">Mobile Number</h3>

            <input
              className="text_input"
              placeholder="Mobile Number"
              type="text"
            />
          </div>
          <div className="gccspec box">
            <h3 className="gccTitle title_question">Email Address</h3>
            <input
              className="text_input"
              placeholder="Email Address"
              type="email"
            />
          </div>

          <div className="fully box">
            <h3 className="fullyTi title_question">Date of Birth</h3>
            <Select options={yearOptions} />
          </div>
          <div className="agencyRepair box">
            <h3 className="title title_question">
              Are you looking for Fully Comprehensive Insurance, or Third Party
              Only Insurance?
            </h3>
            <div class="switch3">
              <input type="radio" name="choice3" id="yes3" checked />
              <label className="yesnoLabel3" for="yes3">
                Yes
              </label>
              <input type="radio" name="choice3" id="no3" />
              <label className="yesnoLabel3" for="no3">
                No
              </label>
              <span class="switchFilter3"></span>
            </div>
          </div>

          <div className="policyExpiry box">
            <h3 className="expiryTitle title_question">
              Has the current policy of this car already expired?
            </h3>
            <div class="switch4">
              <input type="radio" name="choice4" id="yes4" checked />
              <label className="yesnoLabel3" for="yes4">
                Yes
              </label>
              <input type="radio" name="choice4" id="no4" />
              <label className="yesnoLabel4" for="no4">
                No
              </label>
              <span class="switchFilter4"></span>
            </div>
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
            </div> */}
          </div>
          <Link to="/car-quotes">
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
    </div>
  );
};

export default DriverDetails;
