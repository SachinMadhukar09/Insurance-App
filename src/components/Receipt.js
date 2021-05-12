import React from "react";
import "./Receipt.css";

const Receipt = () => {
  return (
    <div className="receipt_container">
      <div className="order-summary vertical-margins-sm">
        <div className="grid grid--margin grid--padding-horizontal">
          <div className="grid-cell grid-cell--half grid-cell--middle grid-cell--padding-horizontal">
            <img
              width="250px"
              className="responsive-image responsive-image--lg responsive-image--centered"
              src="https://static.compareit4me.com/insurance/logos/high_res/oriental%2C+car+insurance+in+uae+%26+dubai.png"
              alt="Oriental Insurance Company Logo"
              title="Oriental Insurance Company"
            />
          </div>

          <div className="grid-cell grid-cell--half grid-cell--middle grid-cell--padding-horizontal">
            <div className="content-block content-block--margin">
              <div className="text text--bold">
                Oriental Insurance Company - Comprehensive <br />
              </div>

              <div className="text text--regular">
                from March 8, 2021 to April 7, 2022
              </div>
            </div>

            <div className="content-block content-block--margin">
              <div className="text text--bold">
                2021 Aston Martin 4.0TC V8 RWD 4.0TC V8 RWD
              </div>

              <div className="text text--regular">
                insured value 765,000 AED
              </div>
            </div>
          </div>
        </div>

        <div className="order-summary__row clearfix">
          <h2 className="title text--bold  grid--padding-horizontal">
            Policy
            <div className="horizontal-divider"></div>
          </h2>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">Annual Premium</span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--right">
                <span className="text text--clr-primary text--right">
                  AED 35,410
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">Admin Fee</span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--clr-accent text--right">
                <span className="text--clr-primary">AED 100</span>
              </div>
            </div>
          </div>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">Sub Total</span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--right">
                <span className="text text--right">AED 35,510</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-summary__row clearfix">
          <h2 className="title text--bold  grid--padding-horizontal">
            Add-ons
            <div className="horizontal-divider"></div>
          </h2>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">
                Warranty 1500 AED (max limit is 5000 per claim)
              </span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--right">
                <span className="text text--clr-primary text--right">
                  AED 1,500
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">
                Diamond: Cover AED 500K (AED 757.00/Year)
              </span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--right">
                <span className="text text--clr-primary text--right">
                  AED 757
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">
                Home Insurance Contents Cover AED 60K (AED 200)
              </span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--right">
                <span className="text text--clr-primary text--right">
                  AED 200
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">Sub Total</span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--right">
                <span className="text text--right">AED 2,457</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-summary__row clearfix">
          <h2 className="title text--bold  grid--padding-horizontal">
            VAT
            <div className="horizontal-divider"></div>
          </h2>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">Policy Premium</span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--right">
                <span className="text text--clr-primary text--right">
                  AED 1771
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">Admin Fee Vat</span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--clr-accent text--right">
                <span className="text--clr-primary">AED 5</span>
              </div>
            </div>
          </div>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">
                Warranty 1500 AED (max limit is 5000 per claim)
              </span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--right">
                <span className="text text--clr-primary text--right">
                  AED 75
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">
                Diamond: Cover AED 500K (AED 757.00/Year)
              </span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--right">
                <span className="text text--clr-primary text--right">
                  AED 38
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">
                Home Insurance Contents Cover AED 60K (AED 200)
              </span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--right">
                <span className="text text--clr-primary text--right">
                  AED 10
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid--margin grid--padding-horizontal">
            <div className="grid-cell">
              <span className="text text--bold">Sub Total</span>
            </div>
            <div className="grid-cell">
              <div className="text text--bold text--right">
                <span className="text text--right">AED 1,899</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block content-block--margin content-block--padding-horizontal">
          <div className="horizontal-divider"></div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "space-around" }}
          className="text text--bold text--right text--margin text--padding-horizontal"
        >
          Total
          <span className="text text--clr-primary">AED 39,866</span>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
