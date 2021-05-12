import React from "react";
import Plans from "./Plans";

// import Tabs from "../components/Tabs/Tabs"
const TwoWheelerInsurance = () => {
  return (
    <div className="carInsurance_wrapper">
      <div className="CarDetails">
        <div>
          <div className="yourCar">Your Bike</div>
          <div className="carName">Honda Cb ShineKick Start | 125 CC </div>
        </div>

        <div className="manufactureWrapper">
          <div className="dateTitle">Manufacturing Date</div>
          <div className="manufactureDate">01-Mar-21</div>
        </div>
        <div className="manufactureWrapper">
          <div className="dateTitle">NEW POLICY START DATE</div>
          <div className="policyDate">06-Mar-21</div>
        </div>
      </div>

      {/* <Tabs /> */}
      <div data-v-592022c0="" class="eco__left plan_count_wrapper">
        <div data-v-592022c0="">
          <span data-v-592022c0="" class="plan_count">
            9&nbsp;
          </span>
          <span data-v-592022c0="" class="plan_count">
            Plans
            <span data-v-592022c0="" class="found">
              found
            </span>
          </span>
        </div>
        <div data-v-592022c0="">
          <div data-v-592022c0="" class="text-left">
            <small data-v-592022c0="">Prices Exclusive of GST</small>
          </div>
        </div>
      </div>

      <Plans />
    </div>
  );
};

export default TwoWheelerInsurance;
