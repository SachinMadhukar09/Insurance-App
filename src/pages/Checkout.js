import React from "react"
import AdditionalCover from "../components/CarInsurance/AdditionalCover"

const Checkout = () => {
  return (
    <div className="cover_container">
      <div className="heading">
        <h1 className="page-heading">Secure Checkout</h1>
      </div>
      <div class="row-md-height">
        <div class="col-md-15-percent col-md-height col-md-middle">
          <div>
            {/* <h3 class="offscreen">Quote Overview</h3> */}
            <img
              class="image"
              style={{ width: "150px" }}
              src="https://static.compareit4me.com/insurance/logos/high_res/oriental%2C+car+insurance+in+uae+%26+dubai.png"
              alt="Oriental Insurance Company Logo"
              title="Oriental Insurance Company"
            />
          </div>
        </div>

        <div class="col-md-25-percent col-md-height col-md-middle">
          <div>
            <p class="label">Oriental Insurance Company Comprehensive</p>

            <p class="value">(from March 8, 2021 to April 7, 2022)</p>
          </div>
        </div>

        <div class="col-md-30-percent col-md-height col-md-middle">
          <div>
            <p class="label">2021 Aston Martin 4.0TC V8 RWD 4.0TC V8 RWD</p>

            <p class="value">(insured value 765,000 AED)</p>
          </div>
        </div>

        <div class="col-md-30-percent col-md-height col-md-middle text-center">
          <div class="package">
            <p class="price global-price">AED 37,767</p>

            <p class="name">Annual Premium</p>
          </div>
        </div>
      </div>
      <div className="features_section">
        <section className="inside-full-height">
          <div>
            <i className="no-icon"></i>
          </div>

          <h3 className="text-center heading">policy feature summary</h3>
          <ul className="plain-list">
            <li>third party damage limit : Up to AED 2 Million</li>

            <li>third party liability : UAE</li>

            <li>damage to your vehicle : UAE &amp; Oman Only</li>

            <li>excess : 5,000 AED</li>
          </ul>

          <h3 className="text-center heading">Other Features</h3>
          <ul className="plain-list">
            <li>
              Additional excess of 10% if customer age is below 25 and 15%
              excess in case of sports car
            </li>

            <li>Off Road Excess 2500 for Luxury Pick ups and 4WD</li>

            <li> Recovery Claim Hire Car Benefit (10 Days)</li>

            <li> Personal effects cover (Limit Dhs.2,000)</li>
          </ul>

          <a
            className="carQuote__termsLink"
            href="https://static.compareit4me.com/insurance/company-terms/POLICY+JACKET+COMPREHENSIVE+wef+1st+Jan.+2017+consolidated.pdf"
            target="_blank"
            rel="noopener"
          >
            View Policy T&amp;Cs
          </a>
        </section>
        <section className="inside-full-height highlight">
          <div className="text-center">
            <i className="insurance-icon-verification-mark"></i>
          </div>

          <h3 className="text-center heading">what's included</h3>
          <ul className="plain-list">
            <li>Personal accident cover for driver</li>

            <li>Personal accident cover for passenger</li>

            <li>Car registration service</li>

            <li>Natural Calamity Cover</li>

            <li>Emergency Medical Expenses (AED 2000)</li>

            <li>Windscreen damage (AED 2000)</li>

            <li>Valet parking theft</li>
          </ul>
          <ul className="plain-list moreInclusions">
            <li>Towing Services</li>

            <li>Battery Service</li>

            <li>Lockout Service</li>

            <li>Flat Tyre Service</li>

            <li>Fuel Delivery Service</li>

            <li>Off-road Recovery</li>

            <li>Car Registration</li>

            <li>Discounted International Driving License</li>
          </ul>
        </section>
        <section className="inside-full-height">
          <div className="text-center">
            <i className="insurance-icon-cross-out-mark"></i>
          </div>

          <h3 className="text-center heading">what's not</h3>
          <ul className="plain-list">
            <li>Agency repairs</li>

            <li>car hire service (cash benefit)</li>

            <li>off road &amp; desert breakdown recovery</li>

            <li>Involuntary loss of employment insurance</li>

            <li>Loss of personal belongings</li>
          </ul>
        </section>
      </div>
      <AdditionalCover />
    </div>
  )
}

export default Checkout
