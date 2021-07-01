import React from "react";
import StepZilla from "react-stepzilla";
import BasicDetails from "./Components/Basicdestails";
import Customizes from "./Components/customize";
import CompanyDetails from "./Components/Companydetails";
import GcmSummary from "./Components/Summary";

const MultiStepForm = () => {
  const steps = [
    { name: "Basic Details", component: <BasicDetails /> },
    { name: "Customize", component: <Customizes /> },
    { name: "Company Details", component: <CompanyDetails /> },
    { name: "Summary", component: <GcmSummary /> },
  ];
  return (
    <div>
      <StepZilla showSteps={true} showNavigation={true} steps={steps} />
    </div>
  );
};

export default MultiStepForm;
