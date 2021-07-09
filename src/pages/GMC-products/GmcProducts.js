import React from "react";
import { Link } from "react-router-dom";
import StepForm from "./MultiForm";

const Gmcproducts = () => {
  return (
    <div className="termDetails">
      <div className="term_details_form">
        <h2 style={{ textAlign: "center" }} class="css-r1stu2">
          GMC(Group Medical Coverage) 
        </h2>
        <p style={{ textAlign: "center" }}>Medical and financial coverage to the employees and ensure their welfare</p>
        <StepForm />
      </div>
    </div>
  );
};

export default Gmcproducts;
