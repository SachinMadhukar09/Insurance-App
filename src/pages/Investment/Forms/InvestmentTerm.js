import React from "react";
import Select from "react-select";

var years = [
  { value: "18 yrs", label: "18 yrs" },
  { value: "19 yrs", label: "19 yrs" },
  { value: "20 yrs", label: "20 yrs" },
  { value: "21 yrs", label: "21 yrs" },
  { value: "22 yrs", label: "22 yrs" },
  { value: "23 yrs", label: "23 yrs" },
  { value: "24 yrs", label: "24 yrs" },
  { value: "25 yrs", label: "25 yrs" },
  { value: "26 yrs", label: "26 yrs" },
  { value: "27 yrs", label: "27 yrs" },
  { value: "28 yrs", label: "28 yrs" },
  { value: "29 yrs", label: "29 yrs" },
  { value: "30 yrs", label: "30 yrs" },
  { value: "31 yrs", label: "31 yrs" },
  { value: "32 yrs", label: "32 yrs" },
  { value: "33 yrs", label: "33 yrs" },
  { value: "34 yrs", label: "34 yrs" },
  { value: "35 yrs", label: "35 yrs" },
  { value: "36 yrs", label: "36 yrs" },
  { value: "37 yrs", label: "37 yrs" },
  { value: "38 yrs", label: "38 yrs" },
  { value: "39 yrs", label: "39 yrs" },
];

const InvestmentTerm = () => {
  return (
    <div>
      <h1>How long do you plan to invest for ?</h1>
      <div>
        <div className="age_handle">
          <div className="label_show">Invest For</div>
          <Select placeholder="5 Years" className="ageSelect" options={years} />
        </div>
        <div className="age_handle">
          <div className="label_show">Withdraw For</div>
          <Select placeholder="5 Years" className="ageSelect" options={years} />
        </div>
      </div>
    </div>
  );
};

export default InvestmentTerm;
