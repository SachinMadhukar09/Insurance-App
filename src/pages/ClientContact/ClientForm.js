import React from "react";
import "./client.css";

const ClientForm = () => {
  return (
    <div className="clientForm">
      <div class="work-with-us">
        <div class="form">
          {/* <h1>ADEPT</h1> */}
          <h2>Better Together</h2>
          <h2>Reach out and let's make something.</h2>
          <form>
            <label for="name">FIRST AND LAST NAME</label>
            <input id="name" type="text" />
            <label for="company-name">POSITION HELD</label>
            <input id="company-name" type="text" />
            <label for="work-email"> EMAIL</label>
            <input id="work-email" type="text" />
            <label for="work-phone"> PHONE</label>
            <input id="work-phone" type="text" />
            <label for="cars">Your Company Type:</label>

            <select
              style={{ padding: "0 10px", height: "50px", width: "100%" }}
              name="cars"
              id="cars"
            >
              <option value="Cooperative Bank">Cooperative Bank</option>
              <option value="Retailer">Retailer</option>
              <option value="Cooperative Society">Cooperative Society </option>
              <option value="Association">Association</option>
              <option value="Employee Benefits">Employee Benefits</option>
              <option value="Insurance Company">Insurance Company</option>
              <option value="Housing Society">Housing Society</option>
              <option value="POSP">POSP</option>
              <option value="Aggregator">Aggregator</option>
            </select>
            <label style={{ marginTop: "28px" }} for="project-idea">
              HOW CAN WE WORK TOGETHER
            </label>
            <textarea id="project-idea" rows="4"></textarea>
            <button className="continue_btn view_quotes__btn" type="button">
              SUBMIT
            </button>
          </form>
        </div>
        <div class="illustration">
          <img
            src="https://xpcover.com/assets/images/undraw-business-deal-cpi9.svg"
            alt="img"
          />
          <div class="link-rollup">
            <h2>Our Email</h2>
            <h1>Hello@xpcover.com</h1>
            <h2>Feature Us</h2>
            <h1>feature@adeptnfk.com</h1>
            <h2>Anything Else</h2>
            <h1>hello@adeptnfk.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
