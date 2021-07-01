import React from "react";
import { Link } from "react-router-dom";
import "./Forms.css";
const LifeAssuredDetails = () => {
  return (
    <div>
      <form action="#" method="post" style={{ width: "1000px" }}>
        <div className="inputBox">
          <p className="health_question" for="name">
            Full Name of Policyholder
          </p>
          <input type="text" name="name" id="name" tabindex="1" />
        </div>
        {/* <label for="password"> */}
        <div className="radiobox">
          <p className="health_question" for="name">
            Marital Status
          </p>

          <div className="radio_flex">
            <div className="inputBox" style={{ marginRight: "24px" }}>
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Married</span>
              </label>
            </div>
            <div className="inputBox" style={{ marginRight: "24px" }}>
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Single</span>
              </label>
            </div>
          </div>
        </div>

        <div className="radiobox">
          <p className="health_question" for="name">
            Highest Education
          </p>

          <div className="radio_flex">
            <div className="inputBox" style={{ marginRight: "24px" }}>
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Post Graduate</span>
              </label>
            </div>
            <div className="inputBox" style={{ marginRight: "24px" }}>
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>12th</span>
              </label>
            </div>
            <div className="inputBox" style={{ marginRight: "24px" }}>
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>10th</span>
              </label>
            </div>
            <div className="inputBox" style={{ marginRight: "24px" }}>
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Diploma</span>
              </label>
            </div>
          </div>
        </div>
        <div className="radiobox">
          <p className="health_question" for="name">
            Are you Polictically Exposed Person{" "}
          </p>
          <div className="radio_flex">
            <div className="inputBox" style={{ marginRight: "24px" }}>
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Yes</span>
              </label>
            </div>
            <div className="inputBox" style={{ marginRight: "24px" }}>
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className="health_question" for="select-choice-2">
            Occupation
          </label>
          <select name="extraoptions" id="select-choice-2" value="Choice 1">
            <optgroup label="1">
              <option value="Choice 1">Work as a</option>
              <option value="Choice 2">Choice 2</option>
              <option value="Choice 3">Choice 3</option>
            </optgroup>
            <optgroup label="2">
              <option value="Choice 1">Choice 1</option>
              <option value="Choice 2">Choice 2</option>
              <option value="Choice 3">Choice 3</option>
            </optgroup>
          </select>
        </div>
        <p>
          {" "}
          Polictically exposed persons are indviduals and their close relatives
          who have <br />
          been entrusted with prminent public functions in India or in a foreign
          country E.g Important political party officals, senior politicians,
          senior Goverment/Judical/Miltary officals, heads of the
          State/Goverment, senior Executives of State owned corporations, etc.
        </p>
        <div>
          <label for="select-choice-2">Select the eIA</label>
          <select name="extraoptions" id="select-choice-2" value="Choice 1">
            <optgroup label="1">
              <option value="Choice 1">Official eIa Providers</option>
              <option value="Choice 2">Choice 2</option>
              <option value="Choice 3">Choice 3</option>
            </optgroup>
            <optgroup label="2">
              <option value="Choice 1">Choice 1</option>
              <option value="Choice 2">Choice 2</option>
              <option value="Choice 3">Choice 3</option>
            </optgroup>
          </select>
        </div>
        <div>
          <label for="check">Checkbox:</label>
          <input type="checkbox" name="check" class="checkbox" id="check" />
        </div>
        <div>
          <label for="textarea">Textarea:</label>
          <textarea
            cols="40"
            rows="10"
            name="textarea"
            id="textarea"
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Submit" class="submit" />
        </div>
      </form>
    </div>
  );
};

export default LifeAssuredDetails;
