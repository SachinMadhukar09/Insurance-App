import React from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { Link } from "react-router-dom";

const TravellerDetails = () => {
  return (
    <div>
      <div style={{ width: "1140px", margin: "auto", marginTop: "27px" }}>
        <h1 style={{ color: "#033967", fontSize: "30px", textAlign: "center" }}>
          Find the right travel insurance for your needs
        </h1>
        <ul class="nav nav-pills" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              href="#java"
              role="tab"
              data-rb-event-key="schengenCountries"
              tabindex="-1"
              aria-selected="false"
              class="nav-link"
            >
              Schengen countries
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#java"
              role="tab"
              data-rb-event-key="hajjUmrah"
              tabindex="-1"
              aria-selected="false"
              class="nav-link"
            >
              Hajj / Umrah
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#java"
              role="tab"
              data-rb-event-key="arabCountries"
              aria-selected="true"
              class="nav-link active"
            >
              Arab countries gcc
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#java"
              role="tab"
              data-rb-event-key="otherCountries"
              tabindex="-1"
              aria-selected="false"
              class="nav-link"
            >
              Worldwide
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#java"
              role="tab"
              data-rb-event-key="uaeInbound"
              aria-selected="false"
              class="nav-link"
              tabindex="-1"
            >
              Inbound Travel to UAE
            </a>
          </li>
        </ul>
      </div>
      <div className="contact_form">
        <h2 class="css-r1stu2">
          Main Contact Details
          <span>Please fill the below travelers data to proceed!</span>
        </h2>
        <form className="travellerForm" action="">
          {/* <h1>Material Design Input with pure CSS</h1> */}
          <div class="input-container">
            <input id="name" className="input" type="text" required />
            <label className="label" for="name">
              First Name
            </label>
          </div>
          <div className="input-container">
            <input id="lastname" className="input" type="text" required />
            <label className="label" for="lastname">
              Last Name
            </label>
          </div>
          <div className="input-container">
            <input id="passport" className="input" type="text" required />
            <label className="label" for="passport">
              Passport Number
            </label>
          </div>
          <div className="input-container">
            <input id="email" className="input" type="text" required />
            <label className="label" for="email">
              Email
            </label>
          </div>
        </form>
        <div className="trip_details">
          <div className="trip_details_form">
            <div style={{ marginBottom: "36px" }}>Choose Travelling Dates</div>
            <DateRangePicker
              startDate={moment().subtract(2, "year")}
              // startDateId="your_unique_start_date_id"
              endDate={moment().subtract(2, "year")}
              // startDatePlaceholderText="Check-In"
              // orientation={this.state.vertical}
              // endDatePlaceholderText="Check-Out"
              // endDateId="your_unique_end_date_id"
              // onDatesChange={({ startDate, endDate }) =>
              //   this.setState({ startDate, endDate })
              // }
              // focusedInput={this.state.focusedInput}
              // onFocusChange={(focusedInput) => this.setState({ focusedInput })}
            />
          </div>
          <div>
            <div style={{ display: "flex", marginBottom: "45px" }}>
              <div>Travellers</div>
              <div
                style={{
                  width: "116px",
                  padding: 0,
                  marginTop: 0,
                  marginLeft: "20px",
                  fontSize: "12px",
                }}
                className="continue_btn view_quotes__btn"
              >
                + Add/Edit
              </div>
            </div>
            <ul class="css-enzbht">
              <li>
                <span class="traveler">Traveler: 1</span>
                <span class="traveler-date-txt">Date of birth</span>
                <span class="traveler-date">12/03/2001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="css-7tn9p4">
          <label for="declaration"></label>
          <input
            style={{ marginRight: "10px" }}
            type="checkbox"
            id="declaration"
            name="declaration"
          />
          I confirm that I have read, understood and accept the&nbsp;
          <a href="https://static.compareit4me.com/insurance/company-terms/UNION_INBOUND_T%26C_SOB+for+Yalla+Compare.pdf">
            terms and conditions
          </a>{" "}
          and that the information provided herein is true, accurate, and
          complete. At the same time, I am aware that policy cancellation can be
          requested no later than 48 hours from date of purchase.
        </div>
        <Link to="/traveller-quotes">
          <div className="continue_btn view_quotes__btn">Show Me Quotes</div>
        </Link>
      </div>
    </div>
  );
};

export default TravellerDetails;
