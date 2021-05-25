import React from "react";
import StepZilla from "react-stepzilla";
import TermInsuranceDetails from "../TermInsurance/Details";
import QuickDetails from "../TermInsurance/FormSteps/QuickDetails";
import Documents from "./Forms/Documents";
import HealthDetails from "./Forms/HealthDetails";
import LifeAssuredDetails from "./Forms/LifeAssuredDetails";
import PremiumDetails from "./Forms/PremiumDetails";

const StepForm = () => {
  const steps = [
    { name: "Quick Details", component: <QuickDetails /> },
    { name: "Premium Details", component: <PremiumDetails /> },
    { name: "Life Assured Details", component: <LifeAssuredDetails /> },
    { name: "Health Details", component: <HealthDetails /> },
    { name: "Documents", component: <Documents /> },
  ];
  return (
    <div className="step-progress">
      <StepZilla showSteps={true} showNavigation={true} steps={steps} />
    </div>
  );
};

export default StepForm;
