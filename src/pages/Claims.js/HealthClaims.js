import React, { useState } from "react";
import AtHospital from "./atHospital";
import PreAuth from "./pre-auth";
import SelectCity from "./selectCity";

function HealthClaims() {
  const [atHospital, setAtHospital] = useState(true);
  return (
    <div>
      <div
        style={{
          width: "100%",
          marginTop: "150px",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly",
        }}
        className="payment_container "
      >
        <div className="buttons">
          <div className="buttons">
            <button
              type="submit"
              onClick={(e) => setAtHospital(true)}
              style={{
                width: "400px",
                padding: "40px",
                backgroundColor: "#fa5e4b",
                fontSize: "x-large",
              }}
            >
              <i className="ion-locked"></i> Pre-Auth
            </button>
          </div>
        </div>
        <div className="buttons ">
          <button
            type="submit"
            onClick={(e) => setAtHospital(false)}
            style={{
              width: "400px",
              padding: "40px",
              backgroundColor: "#fa5e4b",
              fontSize: "x-large",
            }}
          >
            <i className="ion-locked"></i> Already At Hospital
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ justifyContent: "space-evenly" }}>
          {" "}
          <div className="col-md-6">
            {atHospital ? <PreAuth /> : <AtHospital />}
          </div>
          <div className="col-md-4">
            <SelectCity />
          </div>
        </div>

        {/* <PreAuth /> */}
        {/* <AtHospital /> */}
      </div>
    </div>
  );
}

export default HealthClaims;
