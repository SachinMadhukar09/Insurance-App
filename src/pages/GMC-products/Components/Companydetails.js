import React, { Component, useState, useEffect } from "react";

const CompanyDetails = () => {
  const [errormsg, seterrormsg] = React.useState("");
  const [companygst, setCompanyGst] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [btnActive, setBtnActive] = React.useState("");

  const onChangeVal = (event) => {
    if (event.target.name == "companygst") {
      setCompanyGst(event.target.value);
    }
    if (event.target.name == "otp") {
      setCompanyGst(event.target.value);
    }
    seterrormsg("");
  };

  return (
    <div className="gmc-container">
      <h3>Company Details</h3>
      <div className="page-gmc-container">
        <div className="compdetails">
          <input
            type="text"
            placeholder="Company GST"
            name="companygst"
            value={companygst}
            onChange={onChangeVal}
          />
          <select>
            <option selected>Select Bussiness Type</option>
            <option>option1</option>
          </select>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            name="companyName"
          />
          <textarea placeholder="Company Address" name="companygst" rows="5" />
          <select>
            <option selected>Select City</option>
            <option>option1</option>
            <option>option1</option>
            <option>option1</option>
            <option>option1</option>
          </select>
          <input type="text" placeholder="Company PAN" name="companygst" />
          <p>Authorised Signatory Details</p>
          <input type="text" placeholder="Full Name" name="companygst" />
          <div className="btn-gmc-container">
            <button className="draftbtn">Save as Draft</button>
          </div>
        </div>
        <div>
          <img />
        </div>
      </div>
    </div>
  );
};
export default CompanyDetails;
