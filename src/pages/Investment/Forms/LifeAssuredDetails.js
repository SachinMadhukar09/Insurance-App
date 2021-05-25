import React from "react";
import { Link } from "react-router-dom";
import "./Forms.css";
const LifeAssuredDetails = () => {
  return (
    <div>
      <form action="#" method="post">
        <fieldset>
          <div className="inputBox">
            <label for="name" class="mid">
              Full Name of Policyholder
            </label>
            <input type="text" name="name" id="name" tabindex="1" />
          </div>
          {/* <label for="password" class="mid"> */}
          Marital Status:
          <div className="inputBox">
            <label for="radio-choice-1">Married</label>
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
            <label for="radio-choice-2">Single</label>
            <input
              type="radio"
              name="radio-choice"
              id="radio-choice-2"
              class="radio"
              tabindex="6"
              value="choice-2"
            />
          </div>
          <div className="inputBox">
            <label for="select-choice-2" class="mid">
              Highest Education
            </label>
            <select name="extraoptions" id="select-choice-2">
              <optgroup label="1">
                <option value="Choice 1">Post Graduate</option>
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
          Are you Polictically Exposed Person
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
          <p>
            {" "}
            Polictically exposed persons are indviduals and their close
            relatives who have <br />
            been entrusted with prminent public functions in India or in a
            foreign country E.g Important political party officals, senior
            politicians, senior Goverment/Judical/Miltary officals, heads of the
            State/Goverment, senior Executives of State owned corporations, etc.
          </p>
          <div>
            <label for="select-choice-2" class="mid">
              Select the eIA
            </label>
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
        </fieldset>
      </form>
    </div>
  );
};

export default LifeAssuredDetails;
